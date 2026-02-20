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

// Fund Operating System types (added for PE Fund Builder & LP Pipeline)
// Note: These reference tables that may not be in the local type definitions yet
// Run `npx supabase gen types typescript` to regenerate full types

export interface Fund {
  id: string
  user_id: string | null
  name: string
  description: string | null
  target_size: number
  hard_cap: number | null
  minimum_commitment: number | null
  status: 'building' | 'raising' | 'first_close' | 'final_close' | 'investing' | 'harvesting' | null
  management_fee_rate: number | null
  management_fee_basis: string | null
  carried_interest_rate: number | null
  preferred_return: number | null
  gp_commitment_percent: number | null
  waterfall_type: string | null
  catch_up_rate: number | null
  vintage_year: number | null
  first_close_date: string | null
  final_close_date: string | null
  investment_period_years: number | null
  fund_term_years: number | null
  is_sample_data: boolean | null
  created_at: string | null
  updated_at: string | null
}

export interface FundBuilderPhase {
  id: string
  phase_number: number
  name: string
  description: string | null
  lesson_slug: string | null
  sort_order: number
}

export interface FundBuilderSection {
  id: string
  phase_id: string | null
  name: string
  description: string | null
  sort_order: number
}

export interface FundBuilderQuestion {
  id: string
  section_id: string | null
  question_text: string
  question_type: 'text' | 'textarea' | 'select' | 'multiselect' | 'number' | 'date' | null
  options: string[] | null
  placeholder: string | null
  help_text: string | null
  is_required: boolean | null
  sort_order: number
}

export interface LpOrganization {
  id: string
  user_id: string | null
  fund_id: string | null
  name: string
  type: 'pension_public' | 'pension_corporate' | 'endowment' | 'foundation' | 'fund_of_funds' | 'fund_of_funds_em' | 'family_office' | 'hnw_individual' | 'insurance' | 'sovereign_wealth' | 'ria_wealth_mgmt' | 'other'
  website: string | null
  aum: number | null
  typical_commitment_min: number | null
  typical_commitment_max: number | null
  emerging_manager_appetite: 'high' | 'moderate' | 'low' | 'none' | null
  city: string | null
  state: string | null
  country: string | null
  notes: string | null
  is_sample_data: boolean | null
  created_at: string | null
  updated_at: string | null
}

export interface LpContact {
  id: string
  user_id: string | null
  fund_id: string | null
  organization_id: string | null
  first_name: string
  last_name: string
  email: string | null
  phone: string | null
  linkedin_url: string | null
  title: string | null
  is_decision_maker: boolean | null
  relationship_strength: 'cold' | 'warm' | 'hot' | 'existing' | null
  referral_source: string | null
  notes: string | null
  is_sample_data: boolean | null
  created_at: string | null
  updated_at: string | null
}

export interface LpPipelineStage {
  id: string
  fund_id: string | null
  name: string
  description: string | null
  sort_order: number
  color: string | null
  is_won_stage: boolean | null
  is_lost_stage: boolean | null
  created_at: string | null
}

export interface LpStageChecklistTemplate {
  id: string
  stage_id: string | null
  item_text: string
  sort_order: number
  is_required: boolean | null
}

export interface LpOpportunity {
  id: string
  user_id: string | null
  fund_id: string | null
  contact_id: string | null
  organization_id: string | null
  stage_id: string | null
  name: string
  potential_commitment: number | null
  probability: number | null
  expected_close_date: string | null
  status: 'active' | 'won' | 'lost' | 'on_hold' | null
  lost_reason: string | null
  won_date: string | null
  actual_commitment: number | null
  last_activity_date: string | null
  next_follow_up_date: string | null
  notes: string | null
  is_sample_data: boolean | null
  created_at: string | null
  updated_at: string | null
}

export interface LpOpportunityChecklistItem {
  id: string
  opportunity_id: string | null
  template_id: string | null
  stage_id: string | null
  item_text: string
  is_completed: boolean | null
  completed_at: string | null
  sort_order: number
}

export interface LpActivity {
  id: string
  user_id: string | null
  opportunity_id: string | null
  contact_id: string | null
  type: 'call' | 'email' | 'meeting' | 'presentation' | 'dd_request' | 'docs_sent' | 'docs_received' | 'site_visit' | 'note' | 'other'
  subject: string | null
  description: string | null
  activity_date: string | null
  outcome: string | null
  next_steps: string | null
  created_at: string | null
}

// LP Type display names
export const LP_TYPE_LABELS: Record<LpOrganization['type'], string> = {
  pension_public: 'Public Pension',
  pension_corporate: 'Corporate Pension',
  endowment: 'Endowment',
  foundation: 'Foundation',
  fund_of_funds: 'Fund of Funds',
  fund_of_funds_em: 'Fund of Funds (EM)',
  family_office: 'Family Office',
  hnw_individual: 'HNW Individual',
  insurance: 'Insurance',
  sovereign_wealth: 'Sovereign Wealth',
  ria_wealth_mgmt: 'RIA/Wealth Mgmt',
  other: 'Other',
}
