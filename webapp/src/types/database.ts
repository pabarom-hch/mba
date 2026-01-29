export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      books: {
        Row: {
          amazon_url: string | null
          author: string
          category: string | null
          cover_url: string | null
          description: string | null
          id: string
          isbn: string | null
          title: string
        }
        Insert: {
          amazon_url?: string | null
          author: string
          category?: string | null
          cover_url?: string | null
          description?: string | null
          id?: string
          isbn?: string | null
          title: string
        }
        Update: {
          amazon_url?: string | null
          author?: string
          category?: string | null
          cover_url?: string | null
          description?: string | null
          id?: string
          isbn?: string | null
          title?: string
        }
        Relationships: []
      }
      curricula: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          slug: string
          total_weeks: number
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          slug: string
          total_weeks: number
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          slug?: string
          total_weeks?: number
        }
        Relationships: []
      }
      lessons: {
        Row: {
          audio_duration_seconds: number | null
          audio_url: string | null
          content: string | null
          created_at: string | null
          curriculum_id: string | null
          difficulty: string | null
          duration_minutes: number | null
          exercises: Json | null
          further_reading: Json | null
          id: string
          key_concepts: Json | null
          learning_objectives: Json | null
          module_id: string | null
          number: number
          reflection_questions: Json | null
          slug: string
          source_file: string | null
          summary: string | null
          title: string
          type: string
          updated_at: string | null
          version: number | null
          week_id: string | null
        }
        Insert: {
          audio_duration_seconds?: number | null
          audio_url?: string | null
          content?: string | null
          created_at?: string | null
          curriculum_id?: string | null
          difficulty?: string | null
          duration_minutes?: number | null
          exercises?: Json | null
          further_reading?: Json | null
          id?: string
          key_concepts?: Json | null
          learning_objectives?: Json | null
          module_id?: string | null
          number: number
          reflection_questions?: Json | null
          slug: string
          source_file?: string | null
          summary?: string | null
          title: string
          type: string
          updated_at?: string | null
          version?: number | null
          week_id?: string | null
        }
        Update: {
          audio_duration_seconds?: number | null
          audio_url?: string | null
          content?: string | null
          created_at?: string | null
          curriculum_id?: string | null
          difficulty?: string | null
          duration_minutes?: number | null
          exercises?: Json | null
          further_reading?: Json | null
          id?: string
          key_concepts?: Json | null
          learning_objectives?: Json | null
          module_id?: string | null
          number?: number
          reflection_questions?: Json | null
          slug?: string
          source_file?: string | null
          summary?: string | null
          title?: string
          type?: string
          updated_at?: string | null
          version?: number | null
          week_id?: string | null
        }
        Relationships: []
      }
      mentors: {
        Row: {
          bio: string | null
          id: string
          image_url: string | null
          key_works: Json | null
          name: string
          philosophy: string | null
          slug: string
          title: string | null
        }
        Insert: {
          bio?: string | null
          id?: string
          image_url?: string | null
          key_works?: Json | null
          name: string
          philosophy?: string | null
          slug: string
          title?: string | null
        }
        Update: {
          bio?: string | null
          id?: string
          image_url?: string | null
          key_works?: Json | null
          name?: string
          philosophy?: string | null
          slug?: string
          title?: string | null
        }
        Relationships: []
      }
      modules: {
        Row: {
          description: string | null
          estimated_hours: number | null
          id: string
          learning_objectives: Json | null
          name: string
          number: number
          phase_id: string | null
          slug: string
          sort_order: number
        }
        Insert: {
          description?: string | null
          estimated_hours?: number | null
          id?: string
          learning_objectives?: Json | null
          name: string
          number: number
          phase_id?: string | null
          slug: string
          sort_order: number
        }
        Update: {
          description?: string | null
          estimated_hours?: number | null
          id?: string
          learning_objectives?: Json | null
          name?: string
          number?: number
          phase_id?: string | null
          slug?: string
          sort_order?: number
        }
        Relationships: []
      }
      phases: {
        Row: {
          curriculum_id: string | null
          description: string | null
          duration_weeks: number
          id: string
          name: string
          number: number
          sort_order: number
        }
        Insert: {
          curriculum_id?: string | null
          description?: string | null
          duration_weeks: number
          id?: string
          name: string
          number: number
          sort_order: number
        }
        Update: {
          curriculum_id?: string | null
          description?: string | null
          duration_weeks?: number
          id?: string
          name?: string
          number?: number
          sort_order?: number
        }
        Relationships: []
      }
      quarters: {
        Row: {
          curriculum_id: string | null
          description: string | null
          id: string
          name: string
          number: number
          theme: string | null
          weeks_end: number
          weeks_start: number
        }
        Insert: {
          curriculum_id?: string | null
          description?: string | null
          id?: string
          name: string
          number: number
          theme?: string | null
          weeks_end: number
          weeks_start: number
        }
        Update: {
          curriculum_id?: string | null
          description?: string | null
          id?: string
          name?: string
          number?: number
          theme?: string | null
          weeks_end?: number
          weeks_start?: number
        }
        Relationships: []
      }
      user_curriculum_enrollments: {
        Row: {
          current_week: number | null
          curriculum_id: string | null
          enrolled_at: string | null
          id: string
          started_at: string | null
          status: string | null
          target_completion_date: string | null
          user_id: string | null
        }
        Insert: {
          current_week?: number | null
          curriculum_id?: string | null
          enrolled_at?: string | null
          id?: string
          started_at?: string | null
          status?: string | null
          target_completion_date?: string | null
          user_id?: string | null
        }
        Update: {
          current_week?: number | null
          curriculum_id?: string | null
          enrolled_at?: string | null
          id?: string
          started_at?: string | null
          status?: string | null
          target_completion_date?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_lesson_progress: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          last_position: Json | null
          lesson_id: string | null
          rating: number | null
          started_at: string | null
          status: string | null
          time_spent_seconds: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          last_position?: Json | null
          lesson_id?: string | null
          rating?: number | null
          started_at?: string | null
          status?: string | null
          time_spent_seconds?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          last_position?: Json | null
          lesson_id?: string | null
          rating?: number | null
          started_at?: string | null
          status?: string | null
          time_spent_seconds?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_notes: {
        Row: {
          content: string
          created_at: string | null
          highlight_text: string | null
          id: string
          lesson_id: string | null
          position: Json | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          highlight_text?: string | null
          id?: string
          lesson_id?: string | null
          position?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          highlight_text?: string | null
          id?: string
          lesson_id?: string | null
          position?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          daily_reminder_time: string | null
          display_name: string | null
          id: string
          preferences: Json | null
          timezone: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          daily_reminder_time?: string | null
          display_name?: string | null
          id: string
          preferences?: Json | null
          timezone?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          daily_reminder_time?: string | null
          display_name?: string | null
          id?: string
          preferences?: Json | null
          timezone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      weeks: {
        Row: {
          application_exercises: Json | null
          id: string
          mentor_id: string | null
          number: number
          overview: string | null
          quarter_id: string | null
          reading_assignments: Json | null
          theme: string | null
          title: string
        }
        Insert: {
          application_exercises?: Json | null
          id?: string
          mentor_id?: string | null
          number: number
          overview?: string | null
          quarter_id?: string | null
          reading_assignments?: Json | null
          theme?: string | null
          title: string
        }
        Update: {
          application_exercises?: Json | null
          id?: string
          mentor_id?: string | null
          number?: number
          overview?: string | null
          quarter_id?: string | null
          reading_assignments?: Json | null
          theme?: string | null
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      user_progress_summary: {
        Row: {
          completion_percentage: number | null
          current_week: number | null
          curriculum_id: string | null
          curriculum_name: string | null
          curriculum_slug: string | null
          lessons_completed: number | null
          status: string | null
          total_lessons: number | null
          total_weeks: number | null
          user_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_user_streak: { Args: { p_user_id: string }; Returns: number }
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Helper types for easier usage
export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"]
export type Insertable<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"]
export type Updatable<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"]

// Convenience type aliases
export type Curriculum = Tables<"curricula">
export type Phase = Tables<"phases">
export type Module = Tables<"modules">
export type Lesson = Tables<"lessons">
export type Quarter = Tables<"quarters">
export type Week = Tables<"weeks">
export type Mentor = Tables<"mentors">
export type Book = Tables<"books">
export type UserProfile = Tables<"user_profiles">
export type UserLessonProgress = Tables<"user_lesson_progress">
export type UserNote = Tables<"user_notes">
export type UserEnrollment = Tables<"user_curriculum_enrollments">
