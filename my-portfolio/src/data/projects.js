export const projects = [
  {
    id: 1,
    title: "Event Management Platform",
    shortDescription: "Full-featured platform with automated workflows and real-time analytics",
    description: `Comprehensive event management solution serving enterprise clients with automated workflows, 
                  secure payment integration, and real-time analytics. Successfully migrated legacy system to 
                  Angular, improving performance by 40% and user satisfaction by 35%.`,
    
    technologies: ["Angular 14", "Spring Boot 2.7", "PostgreSQL", "Stripe API", "AWS S3", "Redis", "Docker"],
    category: "web",
    status: "completed",
    featured: true,
    
    images: {
      thumbnail: "/assets/images/projects/event-platform-thumb.jpg",
      screenshots: [
        "/assets/images/projects/event-platform-1.jpg",
        "/assets/images/projects/event-platform-2.jpg"
      ]
    },
    
    links: {
      live: "https://events.company.com",
      github: null,
      case_study: "/case-studies/event-platform"
    },
    
    metrics: {
      users: "10,000+",
      performance: "40% improvement",
      uptime: "99.9%",
      satisfaction: "4.8/5"
    },
    
    features: [
      "Real-time event tracking and analytics",
      "Automated payment processing with Stripe",
      "GDPR compliant data handling",
      "Multi-tenant architecture",
      "Advanced reporting dashboard"
    ],
    
    timeline: {
      start: "2022-03",
      end: "2022-11",
      duration: "8 months"
    },
    
    team_size: 6,
    role: "Lead Full-Stack Developer",
    company: "IMC AG"
  },
  
  {
    id: 2,
    title: "Learning Management System",
    shortDescription: "Enterprise LMS serving 15,000+ users with video streaming",
    description: `Scalable Learning Management System built for enterprise use, featuring adaptive video streaming, 
                  progress tracking, interactive assessments, and comprehensive reporting.`,
    
    technologies: ["Java 11", "Spring Boot 2.6", "Angular 13", "AWS", "Redis", "PostgreSQL"],
    category: "web",
    status: "completed",
    featured: true,
    
    metrics: {
      users: "15,000+",
      completion: "85% course completion",
      satisfaction: "4.8/5 rating",
      uptime: "99.95%"
    },
    
    features: [
      "Adaptive video streaming with CDN",
      "Interactive assessments and quizzes",
      "Progress tracking and analytics",
      "Multi-language support",
      "Certificate generation"
    ],
    
    timeline: {
      start: "2021-06",
      end: "2022-02",
      duration: "8 months"
    },
    
    team_size: 8,
    role: "Senior Full-Stack Developer",
    company: "SAP"
  }
];
