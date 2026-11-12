export interface Resource {
  slug: string;
  title: string;
  category: ResourceCategory;
  format: ResourceFormat;
  audience: "parents" | "teachers" | "learners" | "all";
  description: string;
  ageRange: string;
  fileSize: string;
  isDemo: boolean;
}

export type ResourceCategory =
  | "worksheets"
  | "visual-supports"
  | "lesson-plans"
  | "parent-guides"
  | "activity-packs"
  | "self-learning";

export type ResourceFormat = "PDF" | "Printable" | "Interactive" | "Guide";

export const resourceCategoryLabels: Record<ResourceCategory, string> = {
  worksheets: "Worksheets",
  "visual-supports": "Visual Supports",
  "lesson-plans": "Lesson Plans",
  "parent-guides": "Parent & Educator Guides",
  "activity-packs": "Activity Packs",
  "self-learning": "Self-Learning Modules",
};

export const audienceLabels: Record<string, string> = {
  parents: "Parents",
  teachers: "Teachers",
  learners: "Learners",
  all: "Everyone",
};