"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ResponsiveTable } from "@/components/ui/responsive-table";

interface MarkdownContentProps {
  content: string;
  className?: string;
  basePath?: string; // e.g., "/mentor/1/1" for constructing internal links
}

// Transform markdown links to webapp routes
function transformLink(href: string, basePath?: string): { href: string; isInternal: boolean } {
  if (!href) return { href: "", isInternal: false };

  // External URLs
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return { href, isInternal: false };
  }

  // Already absolute internal link
  if (href.startsWith("/")) {
    return { href, isInternal: true };
  }

  // Relative lesson slug (like "day-1-the-danger-of-single-models")
  if (basePath && href.match(/^day-\d+-/i)) {
    return { href: `${basePath}/${href}`, isInternal: true };
  }

  // Old file format: lessons/filename.md
  const lessonFileMatch = href.match(/(?:\.\.?\/)?lessons\/([^/]+)\.md$/i);
  if (lessonFileMatch && basePath) {
    const filename = lessonFileMatch[1];
    const slug = filename.replace(/day-0+(\d+)/i, "day-$1").toLowerCase();
    return { href: `${basePath}/${slug}`, isInternal: true };
  }

  // Mentor profile links: ../../mentors/charlie-munger.md -> /mentor/profile/charlie-munger
  const mentorMatch = href.match(/(?:\.\.?\/)*mentors\/([^/]+)\.md$/i);
  if (mentorMatch) {
    return { href: `/mentor/profile/${mentorMatch[1]}`, isInternal: true };
  }

  // Week overview links: ../week-01.md -> handled by going up to basePath
  const weekMatch = href.match(/(?:\.\.?\/)*week-(\d+)\.md$/i);
  if (weekMatch && basePath) {
    // Extract quarter from basePath and construct week URL
    const quarterMatch = basePath.match(/\/mentor\/(\d+)/);
    if (quarterMatch) {
      return { href: `/mentor/${quarterMatch[1]}/${parseInt(weekMatch[1])}`, isInternal: true };
    }
  }

  // Other .md file links we can't resolve
  if (href.endsWith(".md")) {
    return { href: "#", isInternal: true };
  }

  // Default to external
  return { href, isInternal: false };
}

export function MarkdownContent({ content, className = "", basePath }: MarkdownContentProps) {
  return (
    <div className={`prose prose-invert prose-zinc max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold mt-6 mb-4 text-foreground">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold mt-5 mb-3 text-foreground">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-semibold mt-3 mb-2 text-foreground">{children}</h4>
          ),
          p: ({ children }) => (
            <p className="text-foreground leading-relaxed mb-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside ml-4 space-y-2 text-foreground mb-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside ml-4 space-y-2 text-foreground mb-4">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-foreground">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-orange-500 pl-4 italic text-muted-foreground my-4">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-foreground">{children}</em>
          ),
          code: ({ children }) => (
            <code className="bg-muted px-1.5 py-0.5 rounded text-orange-400 text-sm">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto my-4">
              {children}
            </pre>
          ),
          a: ({ href, children }) => {
            const { href: transformedHref, isInternal } = transformLink(href || "", basePath);

            if (isInternal) {
              return (
                <Link
                  href={transformedHref}
                  className="text-orange-400 hover:text-orange-300 underline"
                >
                  {children}
                </Link>
              );
            }

            return (
              <a
                href={transformedHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                {children}
              </a>
            );
          },
          hr: () => <hr className="border-border my-6" />,
          table: ({ children }) => (
            <ResponsiveTable>{children}</ResponsiveTable>
          ),
          th: ({ children }) => (
            <th className="bg-muted px-4 py-2 text-left text-foreground font-semibold border-b border-border">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-foreground border-b border-border">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
