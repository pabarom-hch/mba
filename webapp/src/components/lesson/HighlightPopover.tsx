"use client";

import { useState } from "react";
import { Highlighter, MessageSquare, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export type HighlightColor = "yellow" | "green" | "blue" | "pink";

interface HighlightPopoverProps {
  position: { x: number; y: number };
  selectedText: string;
  onHighlight: (color: HighlightColor, note?: string) => Promise<void>;
  onClose: () => void;
}

const colorOptions: { color: HighlightColor; bg: string; label: string }[] = [
  { color: "yellow", bg: "bg-yellow-400", label: "Yellow" },
  { color: "green", bg: "bg-green-400", label: "Green" },
  { color: "blue", bg: "bg-blue-400", label: "Blue" },
  { color: "pink", bg: "bg-pink-400", label: "Pink" },
];

export function HighlightPopover({
  position,
  selectedText,
  onHighlight,
  onClose,
}: HighlightPopoverProps) {
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [note, setNote] = useState("");
  const [selectedColor, setSelectedColor] = useState<HighlightColor>("yellow");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleColorClick = async (color: HighlightColor) => {
    if (showNoteInput) {
      setSelectedColor(color);
    } else {
      setIsSubmitting(true);
      await onHighlight(color);
      setIsSubmitting(false);
      onClose();
    }
  };

  const handleSubmitWithNote = async () => {
    setIsSubmitting(true);
    await onHighlight(selectedColor, note);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div
      className="fixed z-50 animate-in fade-in-0 zoom-in-95"
      style={{
        left: position.x,
        top: position.y,
        transform: "translateX(-50%)",
      }}
    >
      <div className="bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-2">
        {!showNoteInput ? (
          <div className="flex items-center gap-1">
            {/* Color options */}
            {colorOptions.map(({ color, bg, label }) => (
              <button
                key={color}
                onClick={() => handleColorClick(color)}
                disabled={isSubmitting}
                className={`w-7 h-7 rounded-full ${bg} hover:ring-2 hover:ring-white/50 transition-all disabled:opacity-50`}
                title={`Highlight ${label}`}
              />
            ))}

            <div className="w-px h-6 bg-zinc-700 mx-1" />

            {/* Add note button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowNoteInput(true)}
              disabled={isSubmitting}
              className="h-7 px-2 text-zinc-400 hover:text-zinc-100"
            >
              <MessageSquare className="h-4 w-4" />
            </Button>

            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              disabled={isSubmitting}
              className="h-7 px-2 text-zinc-400 hover:text-zinc-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="w-64 space-y-3">
            {/* Selected text preview */}
            <div className="text-xs text-zinc-400 line-clamp-2 italic">
              &quot;{selectedText}&quot;
            </div>

            {/* Color selection */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-zinc-500 mr-2">Color:</span>
              {colorOptions.map(({ color, bg }) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full ${bg} transition-all ${
                    selectedColor === color
                      ? "ring-2 ring-white ring-offset-2 ring-offset-zinc-900"
                      : "hover:ring-2 hover:ring-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Note input */}
            <Textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a note (optional)..."
              className="min-h-[80px] bg-zinc-800 border-zinc-700 text-sm resize-none"
              autoFocus
            />

            {/* Actions */}
            <div className="flex justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowNoteInput(false);
                  setNote("");
                }}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleSubmitWithNote}
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Highlighter className="h-4 w-4 mr-1" />
                    Save
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
