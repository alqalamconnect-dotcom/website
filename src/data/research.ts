export interface ResearchTheme {
  title: string;
  description: string;
  status: "active" | "planned" | "completed";
  collaborators: string;
}

export const researchThemes: ResearchTheme[] = [
  {
    title: "Play-Based Emotion Recognition in Neurodivergent Children",
    description:
      "Investigating how puppet-based play and mirror activities support emotion identification in autistic children and children with language delays. Informing the design of the Emotion Puppet Set and Emotion Identification Mirrors.",
    status: "active",
    collaborators: "Special educators, paediatric psychologists, parent advisory group",
  },
  {
    title: "Sensory Processing and Self-Regulation Through Tactile Play",
    description:
      "Reviewing evidence on sensory integration interventions and co-designing a sensory exploration kit with occupational therapists and families of children with sensory processing differences.",
    status: "active",
    collaborators: "Paediatric occupational therapists, sensory integration specialists",
  },
  {
    title: "Screen-Free Computational Thinking for Early Learners",
    description:
      "Exploring how physical coding tools (command cards, programmable robots) support sequencing, debugging and spatial reasoning in children aged 5–9, including neurodivergent learners.",
    status: "planned",
    collaborators: "Computer science educators, cognitive development researchers",
  },
  {
    title: "Visual Schedules and Transition Anxiety in Autistic Children",
    description:
      "A literature review and user-testing study examining the effectiveness of realistic-image visual schedules versus abstract symbol systems for reducing transition-related anxiety.",
    status: "completed",
    collaborators: "Autism researchers, speech and language therapists, parent co-designers",
  },
];

export const lifecycleSteps = [
  {
    number: 1,
    title: "Identify a Need",
    description:
      "Listen to learners, parents, educators and organisations. Define the problem without assuming the solution.",
  },
  {
    number: 2,
    title: "Review Evidence",
    description:
      "Examine academic literature, existing products, professional guidance and relevant standards.",
  },
  {
    number: 3,
    title: "Consult & Co-Design",
    description:
      "Involve intended users and specialists in defining requirements and exploring concepts.",
  },
  {
    number: 4,
    title: "Design",
    description:
      "Prepare concepts, sketches, materials, dimensions, instructions and technical specifications.",
  },
  {
    number: 5,
    title: "Prototype",
    description:
      "Build an early version using suitable materials and methods.",
  },
  {
    number: 6,
    title: "Test & Evaluate",
    description:
      "Assess usability, accessibility, durability, safety and purpose. Use appropriate consent and safeguarding.",
  },
  {
    number: 7,
    title: "Refine & Document",
    description:
      "Improve the design and record decisions, test results, limitations and manufacturing instructions.",
  },
  {
    number: 8,
    title: "Partner for Production",
    description:
      "Work with artisans, community groups, self-help groups or manufacturers for ethical production.",
  },
  {
    number: 9,
    title: "Manufacture & Quality-Check",
    description:
      "Agree on specifications, quality checks, packaging, pricing and production capacity.",
  },
  {
    number: 10,
    title: "Publish & Distribute",
    description:
      "List approved products with accurate descriptions, safety information and purchasing options.",
  },
  {
    number: 11,
    title: "Gather Feedback",
    description:
      "Collect user and partner feedback and use it to improve future versions.",
  },
];