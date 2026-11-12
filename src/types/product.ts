export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  intendedUsers: string;
  ageRange: string;
  skillsSupported: string[];
  materials: string;
  contents: string;
  safetyNotes: string;
  accessibilityNotes: string;
  designRationale: string;
  limitations: string;
  price: string;
  stockStatus: "available" | "coming-soon" | "prototype";
  isDemo: boolean;
}

export type ProductCategory =
  | "social-emotional"
  | "cognitive-language"
  | "sensory"
  | "gross-motor"
  | "fine-motor"
  | "communication"
  | "stem-creative";

export const categoryLabels: Record<ProductCategory, string> = {
  "social-emotional": "Social-Emotional Learning",
  "cognitive-language": "Cognitive, Language & Storytelling",
  sensory: "Sensory Exploration",
  "gross-motor": "Gross-Motor & Movement",
  "fine-motor": "Fine-Motor & Functional Skills",
  communication: "Communication & Visual Supports",
  "stem-creative": "STEM, Robotics & Creative Learning",
};