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
  tech: string;
  highlights: string[];
  links?: {
    github?: string;
    live?: string;
  };
};

export const experiences: Experience[] = [
  {
    id: "oracle",
    company: "Oracle",
    role: "Software Engineer - ML/AI Focus",
    location: "Hyderabad, India",
    period: "June 2022 – July 2024",
    highlights: [
      "Developed revenue forecasting ML model using XGBoost and time-series analysis, achieving 87% prediction accuracy for quarterly revenue projections across 40,000+ customers",
      "Built intelligent bin recommendation system using collaborative filtering algorithms, implementing Redis caching for sub-100ms response times and 95% recommendation accuracy",
      "Engineered automated error classification system using NLP and sentiment analysis, reducing manual triage time by 60% and improving customer issue resolution by 40%",
      "Implemented RAG (Retrieval-Augmented Generation) system for customer support, integrating vector embeddings with Elasticsearch to provide contextual responses with 90% relevance score",
      "Created predictive analytics dashboard using Kibana and OpenSearch, implementing anomaly detection algorithms to identify inventory discrepancies with 85% precision",
      "Developed automated testing framework using ML-based test case generation, achieving 92% test coverage and reducing regression testing time by 50%",
      "Optimized database queries using ML-driven query optimization, implementing execution plan analysis and reducing average query latency by 35%",
    ],
  },
  {
    id: "micron",
    company: "Micron Technology",
    role: "SSD Firmware Intern",
    location: "Bengaluru, India",
    period: "May 2021 – July 2021",
    highlights: [
      "Developed ML-powered SSD log parser using pattern recognition algorithms, achieving 40% improvement in debugging efficiency for 15+ firmware failure root causes",
      "Implemented predictive failure detection model using time-series analysis, reducing SSD failure rates by 25% through proactive maintenance scheduling",
    ],
  },
];

export const education: Education[] = [
  {
    id: "nyu",
    institution: "New York University",
    degree: "Master of Computer Science",
    location: "New York, NY",
    period: "Expected May 2026",
    gpa: "3.7/4.0",
  },
  {
    id: "nitk",
    institution: "National Institute of Technology Karnataka, Surathkal",
    degree: "Bachelor of Technology in Electrical and Electronics Engineering",
    location: "Surathkal, India",
    period: "June 2018 – June 2022",
    gpa: "3.8/4.0",
  },
];

export const projects: Project[] = [
  {
    id: "finance-ai",
    title: "Personal Finance AI Assistant",
    tech: "Python, FastAPI, React, OpenAI GPT-4, Pinecone, LangChain",
    highlights: [
      "Built intelligent personal finance tracker using RAG architecture, integrating OpenAI GPT-4 with Pinecone vector database for contextual financial advice and spending pattern analysis",
      "Implemented multi-modal data processing pipeline using OCR for receipt scanning and NLP for transaction categorization, achieving 94% accuracy in expense classification",
      "Developed predictive spending models using LSTM networks and time-series forecasting, providing personalized budget recommendations with 89% prediction accuracy",
      "Created interactive dashboard with real-time financial insights using React and D3.js, enabling users to track spending trends and receive AI-powered financial recommendations",
    ],
  },
  {
    id: "code-review",
    title: "Intelligent Code Review Assistant",
    tech: "Python, Transformers, FastAPI, PostgreSQL, Docker",
    highlights: [
      "Developed AI-powered code review system using fine-tuned CodeBERT model, analyzing code quality, security vulnerabilities, and suggesting improvements with 91% accuracy",
      "Implemented semantic code similarity detection using sentence transformers, identifying duplicate code patterns and suggesting refactoring opportunities",
      "Built automated documentation generator using GPT-3.5 and AST parsing, creating comprehensive API documentation and code comments with 88% relevance",
      "Integrated with GitLab CI/CD pipeline, providing real-time code quality metrics and automated pull request analysis for 15+ development teams",
    ],
  },
  {
    id: "inventory-opt",
    title: "Smart Inventory Optimization System",
    tech: "Python, Scikit-learn, Apache Kafka, Redis, Kubernetes",
    highlights: [
      "Engineered ML-driven inventory optimization system using ensemble methods (Random Forest, XGBoost), reducing stockouts by 45% and excess inventory by 30%",
      "Implemented real-time demand forecasting using ARIMA and Prophet models, processing 1M+ daily transactions with 92% prediction accuracy",
      "Built automated reorder point calculation using reinforcement learning algorithms, optimizing inventory levels across 100+ warehouses with 40% cost reduction",
      "Developed anomaly detection system using Isolation Forest and LOF algorithms, identifying inventory discrepancies and fraud patterns with 95% precision",
    ],
  },
  {
    id: "nyc-taxi",
    title: "NYC Taxi Fare Prediction",
    tech: "Python, Flask, React.js, XGBoost, Scikit-learn",
    highlights: [
      "Engineered ML model to predict NYC taxi fares from 55M trip records using feature engineering and ensemble methods, achieving RMSE: 2.72 and R²: 81.7%",
      "Applied advanced feature engineering using Pandas, NumPy, and Geopy, implementing StandardScaler and OneHotEncoder for optimal model performance",
      "Built interactive web interface with Flask and React.js for real-time fare predictions, serving 1000+ daily requests with sub-second response times",
    ],
  },
];





