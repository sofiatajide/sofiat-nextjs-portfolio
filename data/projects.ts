export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "NYT: System Vulnerabilities Impact Assessment",
    blurb: "Designed a quantification framework and dashboard to prioritize remediation across complex systems.",
    tags: ["Analytics", "Risk", "Framework"],
    link: "#"
  },
  {
    title: "Hack for LA: Time-Tracking Dashboard",
    blurb: "Built a volunteer time-tracking dashboard with clear funnels and exportable metrics.",
    tags: ["Product", "DataViz", "Civic Tech"],
    link: "#"
  },
  {
    title: "Supplier Pylon (Concept)",
    blurb: "AI-first supplier diversity & ESG platform; wrote PRD, GTM outline, and data schema.",
    tags: ["Product", "ESG", "AI"],
    link: "#"
  }
];
