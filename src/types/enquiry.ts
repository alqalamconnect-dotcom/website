export type EnquiryType =
  | "general"
  | "parent"
  | "teacher"
  | "institution"
  | "researcher"
  | "partner"
  | "feedback";

export const enquiryTypeLabels: Record<EnquiryType, string> = {
  general: "General Enquiry",
  parent: "Parent / Caregiver",
  teacher: "Teacher / Educator",
  institution: "School / Institution",
  researcher: "Researcher / Specialist",
  partner: "Partnership / Manufacturing",
  feedback: "Product Feedback",
};

export interface EnquiryFormData {
  enquiryType: EnquiryType;
  name: string;
  email: string;
  phone: string;
  organisation: string;
  message: string;
  consent: boolean;
}