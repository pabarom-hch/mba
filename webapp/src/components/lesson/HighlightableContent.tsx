"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { HighlightPopover, HighlightColor } from "./HighlightPopover";

interface Highlight {
  id: string;
  text: string;
  color: string;
  note: string | null;
  start_offset: number;
  end_offset: number;
}

interface HighlightableContentProps {
  lessonId: string;
  highlights: Highlight[];
  children: React.ReactNode;
}

export function HighlightableContent({
  lessonId,
  highlights: initialHighlights,
  children,
}: HighlightableContentProps) {
  const router = useRouter();
  const supabase = createClient();
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlights, setHighlights] = useState(initialHighlights);
  const [selection, setSelection] = useState<{
    text: string;
    position: { x: number; y: number };
    range: Range;
  } | null>(null);

  // Handle text selection
  const handleMouseUp = useCallback(() => {
    const windowSelection = window.getSelection();

    if (!windowSelection || windowSelection.isCollapsed) {
      return;
    }

    const selectedText = windowSelection.toString().trim();

    if (selectedText.length < 3) {
      return;
    }

    // Check if selection is within our container
    const range = windowSelection.getRangeAt(0);
    if (!containerRef.current?.contains(range.commonAncestorContainer)) {
      return;
    }

    // Get position for popover
    const rect = range.getBoundingClientRect();
    const position = {
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    };

    setSelection({
      text: selectedText,
      position,
      range: range.cloneRange(),
    });
  }, []);

  // Handle highlight creation
  const handleHighlight = async (color: HighlightColor, note?: string) => {
    if (!selection) return;

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Calculate text offsets (simplified - using text content position)
    const containerText = containerRef.current?.textContent || "";
    const startOffset = containerText.indexOf(selection.text);
    const endOffset = startOffset + selection.text.length;

    // Save to database
    const { data, error } = await supabase
      .from("user_highlights")
      .insert({
        user_id: user.id,
        lesson_id: lessonId,
        text: selection.text,
        color,
        note: note || null,
        start_offset: startOffset,
        end_offset: endOffset,
      })
      .select()
      .single();

    if (!error && data) {
      setHighlights((prev) => [...prev, data]);
      router.refresh();
    }

    // Clear selection
    window.getSelection()?.removeAllRanges();
    setSelection(null);
  };

  // Close popover
  const handleClosePopover = useCallback(() => {
    window.getSelection()?.removeAllRanges();
    setSelection(null);
  }, []);

  // Listen for mouseup events
  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  // Close popover on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (selection) {
        handleClosePopover();
      }
    };
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [selection, handleClosePopover]);

  // Close popover on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selection) {
        handleClosePopover();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selection, handleClosePopover]);

  return (
    <>
      <div ref={containerRef} className="highlightable-content">
        {children}
      </div>

      {selection && (
        <HighlightPopover
          position={selection.position}
          selectedText={selection.text}
          onHighlight={handleHighlight}
          onClose={handleClosePopover}
        />
      )}

      {/* Inject highlight styles */}
      <style jsx global>{`
        .highlightable-content ::selection {
          background-color: rgba(249, 115, 22, 0.3);
        }

        .highlight-yellow {
          background-color: rgba(250, 204, 21, 0.3);
          border-bottom: 2px solid rgb(250, 204, 21);
          padding: 0 2px;
          margin: 0 -2px;
          border-radius: 2px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .highlight-yellow:hover {
          background-color: rgba(250, 204, 21, 0.5);
        }

        .highlight-green {
          background-color: rgba(34, 197, 94, 0.3);
          border-bottom: 2px solid rgb(34, 197, 94);
          padding: 0 2px;
          margin: 0 -2px;
          border-radius: 2px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .highlight-green:hover {
          background-color: rgba(34, 197, 94, 0.5);
        }

        .highlight-blue {
          background-color: rgba(59, 130, 246, 0.3);
          border-bottom: 2px solid rgb(59, 130, 246);
          padding: 0 2px;
          margin: 0 -2px;
          border-radius: 2px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .highlight-blue:hover {
          background-color: rgba(59, 130, 246, 0.5);
        }

        .highlight-pink {
          background-color: rgba(236, 72, 153, 0.3);
          border-bottom: 2px solid rgb(236, 72, 153);
          padding: 0 2px;
          margin: 0 -2px;
          border-radius: 2px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .highlight-pink:hover {
          background-color: rgba(236, 72, 153, 0.5);
        }
      `}</style>
    </>
  );
}
