export type TechStack =
  | "React"
  | "React Native"
  | "NestJS"
  | "Laravel"
  | "PHP"
  | "Xendit"
  | "Agora"
  | "AWS Amplify"
  | "AWS EC2"
  | "AWS RDS"
  | "AWS S3"
  | "AWS Load Balancer"
  | "Elastic Beanstalk"
  | "AWS CodePipeline"
  | "AWS CodeBuild"
  | "AWS CodeDeploy"
  | "Scala"
  | "Spring Boot"
  | "Java"
  | "Node.js"
  | "AWS EKS"
  | "AWS ECR"
  | "Kubernetes"
  | "Jenkins"
  | "Stripe"
  | "Docker"
  | "Strapi CMS"
  | "Django"
  | "Python"
  | "Digital Ocean"
  | "TypeScript"
  | "CodeIgniter"
  | "Linode"
  | "Linux";

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  link: string;
  description: string;
  highlights: string[];
  techStack: TechStack[];
}

export type Experiences = Experience[]; 