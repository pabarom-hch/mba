"use client";

import React from "react";

interface ResponsiveTableProps {
  children: React.ReactNode;
}

interface ElementWithChildren {
  children?: React.ReactNode;
}

/**
 * Extracts header and row data from table children (thead/tbody React elements)
 * so we can render them as stacked cards on mobile.
 */
function extractTableData(children: React.ReactNode): {
  headers: string[];
  rows: string[][];
} | null {
  const headers: string[] = [];
  const rows: string[][] = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement<ElementWithChildren>(child)) return;

    const tag = child.type;

    if (tag === "thead") {
      React.Children.forEach(child.props.children, (tr) => {
        if (!React.isValidElement<ElementWithChildren>(tr)) return;
        React.Children.forEach(tr.props.children, (th) => {
          if (!React.isValidElement<ElementWithChildren>(th)) return;
          headers.push(getTextContent(th.props.children));
        });
      });
    }

    if (tag === "tbody") {
      React.Children.forEach(child.props.children, (tr) => {
        if (!React.isValidElement<ElementWithChildren>(tr)) return;
        const row: string[] = [];
        React.Children.forEach(tr.props.children, (td) => {
          if (!React.isValidElement<ElementWithChildren>(td)) return;
          row.push(getTextContent(td.props.children));
        });
        rows.push(row);
      });
    }
  });

  if (headers.length === 0 && rows.length === 0) return null;
  return { headers, rows };
}

/** Recursively extract text content from React children */
function getTextContent(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join("");
  if (React.isValidElement<ElementWithChildren>(node))
    return getTextContent(node.props.children);
  return "";
}

export function ResponsiveTable({ children }: ResponsiveTableProps) {
  const data = extractTableData(children);

  return (
    <>
      {/* Desktop: standard table */}
      <div className="hidden md:block overflow-x-auto my-4">
        <table className="min-w-full border border-border">{children}</table>
      </div>

      {/* Mobile: stacked cards */}
      {data && data.rows.length > 0 && (
        <div className="md:hidden my-4 space-y-3">
          {data.rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="rounded-lg border border-border bg-card/50 p-4 space-y-2"
            >
              {row.map((cell, colIdx) => (
                <div key={colIdx}>
                  {data.headers[colIdx] && (
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {data.headers[colIdx]}
                    </span>
                  )}
                  <p className="text-sm text-foreground mt-0.5">{cell}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
