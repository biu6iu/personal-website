export interface LinkRef {
  href: string;
  text: string;
}

export type TimelineLine = { text: string } | { prefix: string; links: LinkRef[] };

export interface TimelineEntry {
  date: string;
  title: string;
  lines: TimelineLine[];
}

export const EDUCATION: TimelineEntry[] = [
  {
    date: '2024 — Present',
    title: 'The University of Melbourne',
    lines: [
      { text: 'BSci majoring in Computing and Software Systems | Concurrent Diploma in Mathematics' },
      {
        prefix: 'CS courses:',
        links: [
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/comp30026', text: 'Models of Computation' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/comp30022', text: 'IT Project' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/swen30006', text: 'Software Modelling and Design' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/comp30027', text: 'Machine Learning' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/swen20003', text: 'Object Oriented Software Development' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/info20003', text: 'Database Systems' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/comp10002', text: 'Foundations of Algorithms' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/comp10001', text: 'Foundations of Computing' },
        ],
      },
      {
        prefix: 'Maths courses:',
        links: [
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/mast20005', text: 'Statistics' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/mast20026', text: 'Real Analysis' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/mast20006', text: 'Probability for Statistics' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/mast10006', text: 'Calculus 2' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/mast10007', text: 'Linear Algebra' },
        ],
      },
    ],
  },
  {
    date: '2025',
    title: 'Shanghai Jiaotong University',
    lines: [
      { text: 'Exchange semester' },
      {
        prefix: 'Courses:',
        links: [
          { href: 'https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=73561', text: 'Data Structures and Algorithms' },
          { href: 'https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=241', text: 'Discrete Mathematics' },
          { href: 'https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=75316', text: 'Data Science and Analytics using Python' },
        ],
      },
    ],
  },
  {
    date: '2018 — 2023',
    title: 'Kristin School',
    lines: [{ text: 'Completed the IB Diploma' }],
  },
];

export const EXPERIENCE: TimelineEntry[] = [
  {
    date: '2026',
    title: 'Research Intern at Chinese University of Hong Kong, Shenzhen',
    lines: [{ text: 'Building machine learning models to predict MOF structures' }],
  },
  {
    date: '2025 - 2026',
    title: 'Backend Developer at Circula',
    lines: [{ text: 'Building, maintaining and testing APIs for Circula' }],
  },
  {
    date: '2025',
    title: 'Web Developer at HackMelbourne',
    lines: [{ prefix: 'Worked on', links: [{ href: 'https://hack.melbourne', text: 'hack.melbourne' }] }],
  },
];
