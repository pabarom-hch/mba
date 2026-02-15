"use client";

import { useMemo } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { InteractiveTable } from "./InteractiveTable";
import { ResponsiveTable } from "@/components/ui/responsive-table";

interface ExerciseContentProps {
  content: string;
  lessonId: string;
  exerciseData: Record<number, Record<string, string>>;
  basePath?: string; // e.g., "/mentor/1/1" for constructing internal links
}

// Transform markdown links to webapp routes
function transformLessonLink(href: string, basePath?: string): { href: string; isInternal: boolean } {
  if (!href) return { href: "", isInternal: false };

  // Check if it's an external URL
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return { href, isInternal: false };
  }

  // Check if it's already an internal link (starts with /)
  if (href.startsWith("/")) {
    return { href, isInternal: true };
  }

  // Check if it's a relative link to a lesson file (old format)
  // Patterns: "lessons/filename.md", "./lessons/filename.md", "../lessons/filename.md"
  const lessonFileMatch = href.match(/(?:\.\.?\/)?lessons\/([^/]+)\.md$/i);
  if (lessonFileMatch && basePath) {
    const filename = lessonFileMatch[1];
    const slug = filename
      .replace(/day-0+(\d+)/i, "day-$1")
      .toLowerCase();
    return { href: `${basePath}/${slug}`, isInternal: true };
  }

  // Check if it's a relative slug (like "day-1-the-danger-of-single-models")
  // These are lesson slugs that should be appended to basePath
  if (basePath && href.match(/^day-\d+-/i)) {
    return { href: `${basePath}/${href}`, isInternal: true };
  }

  // Mentor profile links: ../../mentors/charlie-munger.md -> /mentor/profile/charlie-munger
  const mentorMatch = href.match(/(?:\.\.?\/)*mentors\/([^/]+)\.md$/i);
  if (mentorMatch) {
    return { href: `/mentor/profile/${mentorMatch[1]}`, isInternal: true };
  }

  // Week overview links: ../week-01.md -> handled by going up to basePath
  const weekMatch = href.match(/(?:\.\.?\/)*week-(\d+)\.md$/i);
  if (weekMatch && basePath) {
    const quarterMatch = basePath.match(/\/mentor\/(\d+)/);
    if (quarterMatch) {
      return { href: `/mentor/${quarterMatch[1]}/${parseInt(weekMatch[1])}`, isInternal: true };
    }
  }

  // Other .md file links we can't resolve
  if (href.endsWith(".md")) {
    return { href: "#", isInternal: true };
  }

  // Default to external link behavior for unknown patterns
  return { href, isInternal: false };
}

function parseMarkdownTable(tableMarkdown: string): {
  headers: string[];
  rows: { cells: string[]; isEditable: boolean[] }[];
} | null {
  const lines = tableMarkdown.trim().split("\n").filter(line => line.trim());

  if (lines.length < 2) return null;

  const headerLine = lines[0];
  const headers = headerLine
    .split("|")
    .slice(1, -1)
    .map(h => h.trim());

  const dataLines = lines.slice(2);

  const rows = dataLines.map(line => {
    const cleanCells = line.split("|").slice(1, -1).map(c => c.trim());

    const isEditable = cleanCells.map(cell => {
      const trimmed = cell.trim();
      return !trimmed || /^\d+\.?$/.test(trimmed);
    });

    return { cells: cleanCells, isEditable };
  });

  return { headers, rows };
}

function extractTablesFromMarkdown(markdown: string): {
  segments: { type: "text" | "table"; content: string; tableIndex?: number }[];
} {
  const tableRegex = /(\|[^\n]+\|\n\|[-:\s|]+\|\n(?:\|[^\n]+\|\n?)+)/g;

  const segments: { type: "text" | "table"; content: string; tableIndex?: number }[] = [];
  let lastIndex = 0;
  let tableIndex = 0;
  let match;

  while ((match = tableRegex.exec(markdown)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: "text",
        content: markdown.slice(lastIndex, match.index),
      });
    }

    segments.push({
      type: "table",
      content: match[1],
      tableIndex: tableIndex++,
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < markdown.length) {
    segments.push({
      type: "text",
      content: markdown.slice(lastIndex),
    });
  }

  return { segments };
}

// Split markdown into sections by h2 headings for mobile card layout
function splitIntoSections(markdown: string): { intro: string; sections: { heading: string; content: string }[] } {
  const h2Regex = /^## (.+)$/gm;
  const sections: { heading: string; content: string }[] = [];
  const matches: { heading: string; index: number }[] = [];

  let match;
  while ((match = h2Regex.exec(markdown)) !== null) {
    matches.push({ heading: match[1], index: match.index });
  }

  if (matches.length === 0) {
    return { intro: markdown, sections: [] };
  }

  // Content before first h2 is the intro
  const intro = markdown.slice(0, matches[0].index).trim();

  // Extract each section
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = i < matches.length - 1 ? matches[i + 1].index : markdown.length;
    const sectionContent = markdown.slice(start, end).trim();

    sections.push({
      heading: matches[i].heading,
      content: sectionContent,
    });
  }

  return { intro, sections };
}

// Renders a section of markdown content (handles tables separately)
function MarkdownSection({
  content,
  lessonId,
  exerciseData,
  basePath,
  markdownComponents,
}: {
  content: string;
  lessonId: string;
  exerciseData: Record<number, Record<string, string>>;
  basePath?: string;
  markdownComponents: Record<string, React.ComponentType<{ children?: React.ReactNode; className?: string; href?: string }>>;
}) {
  const { segments } = useMemo(() => extractTablesFromMarkdown(content), [content]);

  return (
    <>
      {segments.map((segment, idx) => {
        if (segment.type === "text") {
          return (
            <ReactMarkdown
              key={idx}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={markdownComponents}
            >
              {segment.content}
            </ReactMarkdown>
          );
        }

        const parsed = parseMarkdownTable(segment.content);

        if (!parsed) {
          return (
            <ReactMarkdown
              key={idx}
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {segment.content}
            </ReactMarkdown>
          );
        }

        const hasEditableCells = parsed.rows.some(row => row.isEditable.some(e => e));

        if (hasEditableCells) {
          return (
            <InteractiveTable
              key={idx}
              lessonId={lessonId}
              tableIndex={segment.tableIndex!}
              headers={parsed.headers}
              rows={parsed.rows}
              initialData={exerciseData[segment.tableIndex!] || {}}
            />
          );
        }

        return (
          <ReactMarkdown
            key={idx}
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {segment.content}
          </ReactMarkdown>
        );
      })}
    </>
  );
}

export function ExerciseContent({ content, lessonId, exerciseData, basePath }: ExerciseContentProps) {
  const { intro, sections } = useMemo(() => splitIntoSections(content), [content]);

  const markdownComponents = {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-2xl font-bold mt-8 mb-4 text-zinc-100">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-xl font-semibold mt-6 mb-3 text-zinc-100">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-lg font-semibold mt-4 mb-2 text-zinc-200">{children}</h3>
    ),
    p: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-zinc-300 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-4">{children}</ul>
    ),
    ol: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 text-zinc-300 mb-4">{children}</ol>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-zinc-300">{children}</li>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-orange-500 pl-4 italic text-zinc-400 my-4">
        {children}
      </blockquote>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-zinc-100">{children}</strong>
    ),
    code: ({ className, children, ...props }: { className?: string; children?: React.ReactNode }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-orange-400 text-sm" {...props}>
            {children}
          </code>
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children }: { children?: React.ReactNode }) => (
      <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto my-4">
        {children}
      </pre>
    ),
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
      const { href: transformedHref, isInternal } = transformLessonLink(href || "", basePath);

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
    hr: () => <hr className="border-zinc-700 my-6" />,
    table: ({ children }: { children?: React.ReactNode }) => (
      <ResponsiveTable>{children}</ResponsiveTable>
    ),
    th: ({ children }: { children?: React.ReactNode }) => (
      <th className="bg-zinc-800 px-4 py-2 text-left text-zinc-100 font-semibold border-b border-zinc-700">
        {children}
      </th>
    ),
    td: ({ children }: { children?: React.ReactNode }) => (
      <td className="px-4 py-2 text-zinc-300 border-b border-zinc-800">{children}</td>
    ),
  };

  return (
    <article className="prose prose-invert prose-zinc max-w-none">
      {/* Intro content (before first h2) - no card */}
      {intro && (
        <MarkdownSection
          content={intro}
          lessonId={lessonId}
          exerciseData={exerciseData}
          basePath={basePath}
          markdownComponents={markdownComponents}
        />
      )}

      {/* Sections with visual separators */}
      {sections.map((section, idx) => (
        <div key={idx}>
          {idx > 0 && <hr className="border-zinc-800 my-6" />}
          <MarkdownSection
            content={section.content}
            lessonId={lessonId}
            exerciseData={exerciseData}
            basePath={basePath}
            markdownComponents={markdownComponents}
          />
        </div>
      ))}
    </article>
  );
}
