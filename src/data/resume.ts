export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string;
  highlights: string[];
  links?: {
    github?: string;
    live?: string;
  };
};

export const experiences: Experience[] = [
  {
    id: "nyu",
    company: "New York University",
    role: "Software Engineer",
    location: "New York, NY",
    period: "May 2025 – Present",
    highlights: [
      "Redesigned the student web portal using React and FastAPI, adding secure authentication and role-based access control to improve usability and data privacy for 200+ active users.",
      "Implemented a backend metrics module that logs API usage and page-load performance, providing real-time analytics to identify bottlenecks and cut average load time by 30%.",
    ],
  },
  {
    id: "oracle",
    company: "Oracle",
    role: "Software Engineer",
    location: "",
    period: "June 2022 – July 2024",
    highlights: [
      "Spearheaded full-stack ERP features and REST APIs using Java, JavaScript, and SQL processing 100M+ monthly transactions, driving 32% YoY growth.",
      "Architected event-driven microservices in Spring Boot using async execution, thread-pooling, and non-blocking I/O, increasing parallel throughput by 50% for 60K+ concurrent users.",
      "Deployed cloud-native applications on Oracle Cloud Infrastructure (OCI) using Docker containers orchestrated with Kubernetes, enabling horizontal scaling ensuring 99.97% uptime.",
      "Optimized database interactions by refactoring complex SQL queries and integrating a Redis caching layer, resulting in a 35% reduction in API response latency and lowering P99 latency to 120ms.",
      "Developed unit and full-stack automation tests in JUnit, Mockito, and Spruce with 95% code coverage, and programmed Jenkins CI/CD pipelines for regression testing and reducing release defects by 40%.",
      "Collaborated in Agile sprints to resolve 60+ production issues across the SDLC, ensuring timely hot-fix delivery, and enhanced the UI with a React based alert system that boosted customer retention, saving $150K annually.",
    ],
  },
  {
    id: "micron",
    company: "Micron Technology",
    role: "SSD Firmware Engineering Intern",
    location: "",
    period: "May 2021 – July 2021",
    highlights: [
      "Developed high-performance system software in C++ for SSD firmware, implementing I/O operation simulations for storage optimization and performance analysis across distributed storage systems.",
      "Designed and administered Zoned Namespace Model simulation according to Microsoft specifications, creating scalable data flow architectures that improved memory utilization by 25% in production storage systems.",
      "Established automated debugging tools and log parsing systems in Python, enabling rapid identification and resolution of system failures across multiple environments and reducing incident response time by 50%.",
    ],
  },
];

export const education: Education[] = [
  {
    id: "nyu",
    institution: "New York University",
    degree: "Master of Science in Computer Science",
    location: "New York, NY, US",
    period: "September 2024 – May 2026",
    gpa: "3.8/4.0",
  },
  {
    id: "nitk",
    institution: "National Institute of Technology Karnataka, Surathkal",
    degree: "Bachelor of Technology in Electrical and Electronics Engineering",
    location: "Mangalore, India",
    period: "June 2018 – June 2022",
    gpa: "3.8/4.0",
  },
];

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Smart Expense Categorizer with ML",
    description: "An intelligent expense categorization system that uses Machine Learning and NLP to automatically categorize financial transactions, predict spending patterns, and detect anomalies.",
    tech: "FastAPI, Streamlit, Scikit-learn, Prophet, Plotly, PostgreSQL",
    highlights: [
      "Built end-to-end ML pipeline from data ingestion to predictions, implementing NLP-based text classification using TF-IDF vectorization and Random Forest achieving 85%+ accuracy for automatic expense categorization.",
      "Developed real-time anomaly detection system using Isolation Forest to identify unusual spending patterns and integrated Prophet time series forecasting for future expense predictions.",
      "Created interactive analytics dashboard with Plotly visualizations and implemented automatic CSV format detection supporting multiple bank statement formats with multi-currency support (USD, INR, EUR, GBP).",
    ],
    links: {
      live: "https://fintracker-production-7af6.up.railway.app/",
    },
  },
  {
    id: "task-management",
    title: "Task Management System (Jira/Trello-like)",
    description: "A full-featured task management system similar to Jira/Trello with project management, task tracking, comments, attachments, and real-time updates.",
    tech: "FastAPI, Streamlit, PostgreSQL, SQLAlchemy, JWT, bcrypt",
    highlights: [
      "Engineered full-featured task management system with project management, task tracking, status workflows (To Do, In Progress, Done), comments, attachments, priority levels, due dates, and user assignments with real-time updates.",
      "Implemented secure JWT authentication with bcrypt password hashing and developed RESTful APIs with SQLAlchemy ORM supporting complex queries, filtering, and search functionality.",
      "Built analytics dashboard with real-time metrics and charts, deployed on Railway with separate backend and frontend services supporting horizontal scaling and PostgreSQL database integration.",
    ],
    links: {
      live: "https://task-manager-fe.up.railway.app/",
    },
  },
  {
    id: "rag-chatbot",
    title: "Chatbot with RAG (Retrieval Augmented Generation)",
    description: "An intelligent chatbot that uses RAG to answer questions based on uploaded documents. Supports OpenAI, HuggingFace (free), and Ollama for LLM inference.",
    tech: "FastAPI, Streamlit, OpenAI, HuggingFace, ChromaDB, LangChain",
    highlights: [
      "Implemented RAG architecture using ChromaDB for vector storage and semantic search, enabling document-based question answering with conversational memory and context retention.",
      "Integrated multiple LLM providers (OpenAI GPT-3.5/GPT-4, HuggingFace free models, Ollama local) with flexible configuration, supporting PDF, DOCX, and TXT document processing via LangChain document loaders.",
      "Built document embedding pipeline using OpenAI and HuggingFace embeddings, creating vector database with persistent storage enabling efficient similarity search and retrieval-augmented generation.",
    ],
  },
  {
    id: "realtime-analytics",
    title: "Real-Time Analytics Dashboard with Kafka & Spark",
    description: "A real-time analytics dashboard that processes streaming data using Apache Kafka and Apache Spark. Includes simplified in-memory version for easy deployment.",
    tech: "FastAPI, Streamlit, Apache Spark, Apache Kafka, PostgreSQL, Plotly",
    highlights: [
      "Built real-time streaming pipeline using Apache Kafka for message queuing and Apache Spark Structured Streaming for event processing, aggregating data from multiple sources (user events, transactions, logs) with sub-second latency.",
      "Developed interactive analytics dashboard with real-time visualizations using Plotly and Recharts, processing streaming events with windowing and aggregation operations for live metrics and insights.",
      "Architected scalable system with simplified in-memory version for easy deployment, supporting both full Kafka/Spark infrastructure and lightweight in-memory data generator for development and testing environments.",
    ],
    links: {
      live: "https://realtime-analytics-dashboard-production.up.railway.app/",
    },
  },
  {
    id: "distributed-task-queue",
    title: "Distributed Task Queue System",
    description: "A production-ready distributed task queue system similar to Celery, built with FastAPI, Redis, and PostgreSQL. Supports asynchronous background job processing with horizontal scaling.",
    tech: "FastAPI, Redis, PostgreSQL, Python Multiprocessing, APScheduler",
    highlights: [
      "Designed production-ready distributed task queue system with Redis message broker, supporting priority queues (high, medium, low), task scheduling with cron-like jobs, and automatic retry with exponential backoff for failed tasks.",
      "Implemented worker pool management with horizontal scaling capabilities, dead letter queue for persistent failures, and real-time task monitoring dashboard with task dependencies and chaining support.",
      "Built rate limiting per task type and integrated APScheduler for scheduled task execution, enabling asynchronous background job processing with fault tolerance and distributed architecture across multiple worker nodes.",
    ],
  },
  {
    id: "nyc-taxi",
    title: "NYC Taxi Fare Prediction (Big Data Processing System)",
    description: "A machine learning model for predicting NYC taxi fares using geospatial features and regression algorithms with large-scale data processing capabilities.",
    tech: "Flask, NumPy, Pandas, Scikit-learn, Geopy, Python",
    highlights: [
      "Developed machine learning model for taxi fare prediction using geospatial features (pickup/dropoff coordinates) processed with Geopy for distance calculations, implementing feature engineering with NumPy and Pandas for data preprocessing.",
      "Trained regression models using Scikit-learn with cross-validation, achieving improved prediction accuracy through feature selection and hyperparameter tuning, processing large-scale NYC taxi dataset with efficient data pipelines.",
    ],
  },
];





