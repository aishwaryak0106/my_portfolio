import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaCubes, FaChartLine, FaJs, FaHtml5, FaPython, FaBrain, FaFileExcel, FaChartPie, FaCss3Alt, FaPhp, FaChartBar, FaTable, FaGraduationCap, FaCertificate } from 'react-icons/fa';

import me from '../assets/me.jpg';
import aboutMe from '../assets/about.webp';
import oracle_student from '../assets/oracle_student.jpg';
import hate_speech from '../assets/hate_speech.jpg';
import crm_data from '../assets/crm_data.jpg';
import twms from '../assets/twms.jpg';
import nss from '../assets/nss.jpg';
import sales from '../assets/sales.jpg';

export const assets = {
    profileImg:me,
}

export const assetss = {
    aboutMe:aboutMe,
}



export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Mahatma Gandhi University",
    year: "Oct 2022",
    description: "Focused on advanced software development, database systems, and enterprise applications.",
    icon: FaGraduationCap,
    color: "purple"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Kannur University",
    year: "Apr 2020",
    description: "Built foundational skills in programming, software engineering, and data structures.",
    icon: FaGraduationCap,
    color: "purple"
  }
];



export const certificationsData = [
  {
    title: "Oracle APEX Cloud Developer – Certified Professional",
    provider: "Oracle University",
    year: "Aug 2025",
    description: "Validated expertise in building enterprise apps using Oracle APEX & PL/SQL.",
    icon: FaCertificate,
    color: "purple"
  },
  {
    title: "Autosar Diagnostics (DEM, DCM, OBD, UDS)",
    provider: "Udemy",
    year: "Jul 2023",
    description: "Gained practical understanding of vehicle diagnostics architecture & workflows.",
    icon: FaCertificate,
    color: "purple"
  },
  {
    title: "Programming for Everybody (Getting Started With Python)",
    provider: "Coursera",
    year: "May 2021",
    description: "Strengthened Python fundamentals with hands-on coding exercises.",
    icon: FaCertificate,
    color: "purple"
  }
];



export const skills = [
  {
    title: 'Oracle APEX Development',
    icon: FaCubes,
    description: 'Building scalable enterprise applications using Oracle APEX and PL/SQL.',
    tags: ['Oracle APEX', 'PL/SQL', 'SQL', 'Interactive Reports', 'Dashboards']
  },
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Designing responsive and user-friendly web interfaces.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Developing secure and efficient server-side logic.',
    tags: ['Python', 'Django', 'Java', 'PHP']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing relational and NoSQL databases.',
    tags: ['MySQL', 'Oracle SQL', 'SQLite', 'NoSQL']
  },
  {
    title: 'Data Analytics',
    icon: FaChartLine,
    description: 'Transforming data into insights using visualization and BI tools.',
    tags: ['Power BI', 'Tableau', 'Excel']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Technologies that support efficient development and collaboration.',
    tags: ['Git', 'GitHub', 'JIRA', 'Agile', 'Scrum']
  }
];




export const projects = [
  {
    title: "Student Management System – Oracle APEX",
    description: "A complete academic management system built with Oracle APEX featuring dashboards, KPIs, teacher and student modules, attendance tracking, and a leave request workflow with role-based access.",
    image: oracle_student,
    tech: ["Oracle APEX", "PL/SQL", "SQL", "JavaScript", "HTML"],
    icons: [FaCubes, FaDatabase, FaJs, FaHtml5],
    demo: "#",
    code: "https://github.com/aishwaryak0106/STUDENT-MANAGEMENT-SYSTEM",
  },
  {
    title: "Deep Learning Fusion Model for Hate Speech Detection",
    description: "A deep learning-based ensemble model for detecting hate speech in social media, with preprocessing, ML fusion techniques, and a Django-based web interface for testing text inputs.",
    image: hate_speech,
    tech: ["Python", "Django", "Deep Learning", "NLP", "SQLite"],
    icons: [FaPython, FaBrain, FaDatabase],
    demo: "#",
    code: "https://github.com/aishwaryak0106/HATESPEECH",
  },

  {
    title: "CRM Data Analysis Dashboard",
    description: "A Power BI and Excel-based analytics project delivering insights on sales performance, conversion rates, revenue forecasting, agent efficiency, and lost opportunities using interactive visualizations.",
    image: crm_data,
    tech: ["Power BI", "Excel", "Data Analysis", "ETL"],
    icons: [FaChartLine, FaFileExcel, FaChartPie],
    demo: "#",
    code: "https://github.com/aishwaryak0106/CRM-Optimization",
  },

  {
    title: "Tribal Welfare Management System (TWMS)",
    description: "A platform that helps tribal communities directly sell products online, ensuring fair pricing and transparency. Includes product listings, order management, and secure purchase flow.",
    image: twms,
    tech: ["Python", "MySQL", "HTML", "CSS", "JavaScript"],
    icons: [FaPython, FaDatabase, FaHtml5, FaCss3Alt],
    demo: "#",
    code: "https://github.com/aishwaryak0106/Tribal-Welfare-Management-System",
  },

  {
    title: "NSS Evaluation System",
    description: "A PHP-based system for tracking NSS student activities, automating score calculations, and generating evaluation reports with separate student and teacher dashboards.",
    image: nss,
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    icons: [FaPhp, FaDatabase, FaHtml5],
    demo: "#",
    code: "https://github.com/aishwaryak0106/NSS-Evaluation-System",
  },

  {
    title: "Sales Insight – Tableau Dashboard",
    description: "A Tableau dashboard analyzing revenue performance, top customers, best-selling products, and sales trends using MySQL datasets to support business decision-making.",
    image: sales,
    tech: ["Tableau", "MySQL", "Data Visualization"],
    icons: [FaChartBar, FaDatabase, FaTable],
    demo: "#",
    code: "https://github.com/aishwaryak0106/Sales-Insights",
  }
];


export const workData = [
  {
    role: "Oracle APEX & PL/SQL Developer",
    company: "Assenta Systems Pvt. Ltd.",
    duration: "May 2025 - Present",
    description:
      "Developing enterprise-grade applications, implementing backend automation processes, and enhancing data management workflows using Oracle APEX and PL/SQL.",
    color: "purple"
  },
  {
    role: "Data Analyst Intern",
    company: "Rows & Columns",
    duration: "Nov 2024 - Mar 2025",
    description:
      "Analyzed business data, improved reporting accuracy, and optimized data integration processes to support strategic decision-making.",
    color: "purple"
  },
  {
    role: "Software Engineer",
    company: "Tata Elxsi Ltd.",
    duration: "Feb 2023 - May 2024",
    description:
      "Streamlined internal tools to enhance developer productivity and delivered key modules for migration projects within Agile sprints.",
    color: "purple"
  },
  {
    role: "Python Full-Stack Developer Trainee",
    company: "Camerinfolks Pvt. Ltd.",
    duration: "Sep 2022 - Jan 2023",
    description:
      "Developed a text classification system for content moderation and improved model performance through advanced evaluation techniques.",
    color: "purple"
  }
];

