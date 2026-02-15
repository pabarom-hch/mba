"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Loader2, Save } from "lucide-react";
import debounce from "lodash.debounce";

interface InteractiveTableProps {
  lessonId: string;
  tableIndex: number;
  headers: string[];
  rows: { cells: string[]; isEditable: boolean[] }[];
  initialData?: Record<string, string>;
}

export function InteractiveTable({
  lessonId,
  tableIndex,
  headers,
  rows,
  initialData = {},
}: InteractiveTableProps) {
  const [values, setValues] = useState<Record<string, string>>(initialData);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Debounced save function
  const saveToDatabase = useCallback(
    debounce(async (data: Record<string, string>) => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) return;

      setIsSaving(true);

      const { error } = await supabase
        .from("user_exercise_responses")
        .upsert({
          user_id: user.id,
          lesson_id: lessonId,
          table_index: tableIndex,
          responses: data,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: "user_id,lesson_id,table_index",
        });

      setIsSaving(false);
      if (!error) {
        setLastSaved(new Date());
      }
    }, 1000),
    [lessonId, tableIndex]
  );

  const handleChange = (rowIdx: number, colIdx: number, value: string) => {
    const key = `${rowIdx}-${colIdx}`;
    const newValues = { ...values, [key]: value };
    setValues(newValues);
    saveToDatabase(newValues);
  };

  const getValue = (rowIdx: number, colIdx: number) => {
    const key = `${rowIdx}-${colIdx}`;
    return values[key] || "";
  };

  return (
    <div className="my-6 space-y-2">
      {/* Desktop: traditional table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-zinc-700">
        <table className="min-w-full">
          <thead>
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="bg-zinc-800 px-4 py-3 text-left text-sm font-semibold text-zinc-100 border-b border-zinc-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-zinc-800 last:border-b-0">
                {row.cells.map((cell, colIdx) => (
                  <td key={colIdx} className="px-1 py-1">
                    {row.isEditable[colIdx] ? (
                      <input
                        type="text"
                        value={getValue(rowIdx, colIdx)}
                        onChange={(e) => handleChange(rowIdx, colIdx, e.target.value)}
                        placeholder="Enter your response..."
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-colors"
                      />
                    ) : (
                      <span className="px-3 py-2 text-sm text-zinc-300 block">
                        {cell}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-3">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="rounded-lg border border-zinc-700 bg-zinc-900/50 p-4 space-y-3"
          >
            {row.cells.map((cell, colIdx) => (
              <div key={colIdx}>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  {headers[colIdx]}
                </label>
                {row.isEditable[colIdx] ? (
                  <input
                    type="text"
                    value={getValue(rowIdx, colIdx)}
                    onChange={(e) => handleChange(rowIdx, colIdx, e.target.value)}
                    placeholder="Enter your response..."
                    className="mt-1 w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-colors"
                  />
                ) : (
                  <p className="mt-1 text-sm text-zinc-300">{cell}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Save indicator */}
      <div className="flex items-center justify-end gap-2 text-xs text-zinc-500">
        {isSaving ? (
          <>
            <Loader2 className="h-3 w-3 animate-spin" />
            <span>Saving...</span>
          </>
        ) : lastSaved ? (
          <>
            <Save className="h-3 w-3 text-green-500" />
            <span className="text-green-500">Auto-saved</span>
          </>
        ) : (
          <span>Your responses will auto-save</span>
        )}
      </div>
    </div>
  );
}
