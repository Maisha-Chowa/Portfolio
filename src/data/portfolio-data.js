import {
  ShieldCheck,
  Bot,
  Plug,
  Gauge,
  GitBranch,
  Code,
} from "lucide-react";
import opencartImg from "@/assets/opencart-allure.png";
import apiTestingImg from "@/assets/api-testing-report.png";

export const profile = {
  name: "Maisha Maliha Chowa",
  role: "SQA Automation Engineer",
  headline: "QA Automation & AI Testing Specialist",
  location: "Dhaka, Bangladesh",
  email: "maisha.chowa@gmail.com",
  phone: "+8801873073300",
  summary:
    "With 2+ years of experience ensuring quality for AI-driven products through Manual testing, UI/API automation, CI/CD pipelines, and performance testing using Playwright (Python), Selenium, Postman and Locust.",
  resumeUrl: "#",
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  stats: [
    { label: "Years experience", value: "2+" },
    { label: "Automation suites", value: "12+" },
    { label: "Platforms tested", value: "6+" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a detail-oriented SQA Automation Engineer focused on building scalable test frameworks and ensuring reliable, high-quality software through manual testing, automation, and continuous integration.",
    "With a strong foundation as a MERN stack engineer, I bring a Dev-to-QA mindset, bridging development and quality by designing tests that integrate seamlessly into CI/CD pipelines and support high-performance, production-ready releases.",
    "I work across manual and automated testing, crafting robust UI, API, and performance test suites that validate complex workflows, catch issues early, and maintain stability in fast-moving product environments.",
    "Driven by a growth mindset, I continuously evolve my skills in modern automation tools, performance testing, and SDLC optimization to deliver quality at scale.",
  ],
};

export const skillGroups = [
  {
    title: "Testing & QA",
    subtitle: "Manual & Automated",
    icon: ShieldCheck,
    items: [
      "Manual Testing",
      "API testing",
      "Regression",
      "E2E",
      "Database (Postgresql, MongoDB)",
      "Cross-browser",
      "Mobile",
    ],
  },
  {
    title: "Automation",
    subtitle: "Frameworks & Tools",
    icon: Bot,
    items: ["Playwright", "Selenium WebDriver", "PyTest"],
  },
  {
    title: "API & Tools",
    subtitle: "Manual & Automated",
    icon: Plug,
    items: ["Postman", "REST Assured", "Swagger", "API mocking"],
  },
  {
    title: "Performance Testing",
    subtitle: "Load & Stress Testing",
    icon: Gauge,
    items: ["Locust", "JMeter"],
  },
  {
    title: "DevOps & Tools",
    subtitle: "DevOps & Management",
    icon: GitBranch,
    items: [
      "Git/Github",
      "CI/CD (GitHub Actions, Jenkins)",
      "Docker",
      "Jira",
      "GitHub Projects",
    ],
  },
  {
    title: "Programming",
    subtitle: "Languages",
    icon: Code,
    items: ["Python", "JavaScript (ES6+)", "TypeScript", "Java"],
  },
];

export const experiences = [
  {
    title: "SQA Automation Engineer",
    company: "Koolio.ai",
    location: "Palo Alto, California, USA | Remote",
    timeline: "April 2024 – Present",
    description:
      "Koolio.ai is an AI-powered audio creation platform that enables podcasters and content creators to record, edit, and enhance audio using intelligent automation.",
    summary:
      "I joined Koolio.ai at an early stage as the only SQA engineer, owning the complete quality assurance process across multiple product versions. I'm responsible for manual testing, bug tracking, database testing (PostgreSQL), and UI & API automation with Playwright.",
    highlights: [
      "Led manual testing and Selenium-based UI automation for early releases, helping stabilize the initial product before scale.",
      "Designed and implemented the entire test strategy and test case suite for the new platform version, achieving 100% core feature coverage.",
      "Transitioned automation from Selenium to Playwright (Python), reducing flaky tests by ~50% and improving execution speed by ~70% via parallel execution.",
      "Responsible for manual testing, bug tracking, database testing (PostgreSQL), and UI & API automation with Playwright.",
      "Performed API testing using Postman and continuous API monitoring to catch backend issues early.",
      "Executed load and stress testing with Locust, identifying performance bottlenecks and improving system reliability under concurrent audio processing.",
      "Integrated automated test suites into CI/CD pipelines using GitHub Actions, contributing to faster and more confident release cycles.",
      "Worked closely with developers and product managers to reduce production defects and ensure high-quality, scalable releases.",
    ],
    takeaway:
      "This role strengthened my ability to own quality end-to-end, work independently in a startup environment, and deliver reliable testing solutions for complex AI-powered systems.",
  },
];

export const education = [
  {
    title: "BSc in Computer Science & Engineering",
    org: "Mawlana Bhashani Science & Technology University",
    timeline: "2019 – 2024",
    detail: "CGPA: 3.59",
  },
];

export const projects = [
  {
    title: "OpenCart E-Commerce Test Automation",
    description:
      "Production-grade QA automation framework for OpenCart 4.0 with 102 tests across 7 suites, achieving 100% pass rate. Features POM architecture, data-driven CSV testing, multi-browser support, and CI/CD with Allure reporting.",
    image: opencartImg,
    tech: [
      "Playwright",
      "Python",
      "Pytest",
      "Allure",
      "Docker",
      "GitHub Actions",
    ],
    github:
      "https://github.com/Maisha-Chowa/opencart-automation-using-playwright",
    isPrivate: false,
  },
  {
    title: "Restful Booker API Testing",
    description:
      "Automated API test suite with 39 requests and 89 assertions covering CRUD operations. Uses CSV-driven data files for positive, negative, and edge-case scenarios with Newman CLI runner and GitHub Actions CI/CD pipeline.",
    image: apiTestingImg,
    tech: ["Postman", "Newman", "JavaScript", "GitHub Actions"],
    github:
      "https://github.com/Maisha-Chowa/API-testing-automation-using-postman",
    isPrivate: false,
  },
  {
    title:
      "Koolio.ai - Audio Editing Platform - Playwright Automation & API Monitoring",
    description:
      "Comprehensive test automation framework for an AI-powered audio editing platform (V2) with 11 test suites covering upload, GenFlow, publishing to 9+ platforms (Spotify, Apple, YouTube, etc.), and workspace features. Built with Playwright (Python) featuring parallel execution with single browser context, persistent SSO sessions, Firebase authentication, and dedicated API testing utilities for monitoring endpoints. Includes comprehensive HTML reporting with screenshots.",
    image: null,
    tech: [
      "Playwright",
      "Python",
      "Pytest",
      "Firebase",
      "Playwright API Monitoring",
      "CI/CD",
    ],
    github: null,
    isPrivate: true,
  },
  {
    title: "Koolio.ai Load & Performance Testing Suite — Locust",
    description:
      "Multi-scenario load testing suite with 8+ test configurations covering signup, signin, concurrent users, and full API flows (login → upload → audio conversion → operations). Features configurable load profiles (basic to stress: 100–2,000 users), Firebase-integrated email verification, batch processing to prevent server overload, and server capacity analysis identifying optimal capacity at 20–25 concurrent users with 90%+ success rate. Includes HTML report generation, test data management scripts, and Pydantic-powered environment configuration.",
    image: null,
    tech: [
      "Locust",
      "Python",
      "Firebase",
      "PostgreSQL",
      "Pydantic",
      "Matplotlib",
    ],
    github: null,
    isPrivate: true,
  },
  {
    title: "Koolio.ai - Audio Editing Platform - Selenium UI Automation (V1)",
    description:
      "End-to-end QA automation suite for V1 of a web-based audio/podcast editing platform with 11 test modules covering the full user journey: signup with email verification, login (credentials + Google OAuth), dashboard file management, in-app tour guide, workspace transcription, multi-platform publishing (Buzzsprout, Spreaker, Castos, Transistor, Podbean, Headliner), GenAI features (image generation + show notes), and export/download. Built with Selenium WebDriver 4 and pytest with HTML reporting.",
    image: null,
    tech: ["Selenium", "Python", "Pytest", "WebDriver Manager", "pytest-html"],
    github: null,
    isPrivate: true,
  },
];
