// Mock data for Fenrir Security application

export const scans = [
  {
    id: "scan-001",
    name: "Production API Security Scan",
    type: "Web Application",
    status: "running",
    progress: 67,
    vulnerabilities: { critical: 0, high: 2, medium: 5, low: 12 },
    lastScan: "2026-03-03T14:30:00Z",
    target: "https://api.production.company.com",
  },
  {
    id: "scan-002",
    name: "E-commerce Platform Assessment",
    type: "Full Stack",
    status: "completed",
    progress: 100,
    vulnerabilities: { critical: 1, high: 4, medium: 8, low: 15 },
    lastScan: "2026-03-02T09:15:00Z",
    target: "https://shop.example.com",
  },
  {
    id: "scan-003",
    name: "Mobile Banking App Review",
    type: "Mobile Application",
    status: "scheduled",
    progress: 0,
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
    lastScan: null,
    target: "com.bank.app",
  },
  {
    id: "scan-004",
    name: "Internal Network Penetration Test",
    type: "Network",
    status: "completed",
    progress: 100,
    vulnerabilities: { critical: 2, high: 7, medium: 14, low: 23 },
    lastScan: "2026-03-01T16:45:00Z",
    target: "10.0.0.0/24",
  },
  {
    id: "scan-005",
    name: "Customer Portal Security Audit",
    type: "Web Application",
    status: "failed",
    progress: 34,
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
    lastScan: "2026-02-28T11:20:00Z",
    target: "https://portal.company.com",
  },
  {
    id: "scan-006",
    name: "Payment Gateway Assessment",
    type: "API Security",
    status: "completed",
    progress: 100,
    vulnerabilities: { critical: 0, high: 1, medium: 3, low: 7 },
    lastScan: "2026-02-27T08:00:00Z",
    target: "https://payments.gateway.com",
  },
  {
    id: "scan-007",
    name: "Cloud Infrastructure Review",
    type: "Cloud Security",
    status: "running",
    progress: 45,
    vulnerabilities: { critical: 0, high: 0, medium: 2, low: 5 },
    lastScan: "2026-03-03T10:00:00Z",
    target: "AWS Production Account",
  },
  {
    id: "scan-008",
    name: "Third-party Integration Audit",
    type: "API Security",
    status: "scheduled",
    progress: 0,
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
    lastScan: null,
    target: "https://partner-api.external.com",
  },
];

export const scanStats = {
  critical: { count: 3, change: -12 },
  high: { count: 14, change: +5 },
  medium: { count: 32, change: -8 },
  low: { count: 62, change: +15 },
};

export const activeScanDetails = {
  id: "scan-001",
  name: "Production API Security Scan",
  type: "Web Application",
  status: "running",
  progress: 67,
  currentStep: 2, // Testing
  steps: ["Spidering", "Mapping", "Testing", "Validating", "Reporting"],
  metadata: {
    scanType: "Comprehensive Security Assessment",
    targets: [
      "https://api.production.company.com",
      "https://admin.company.com",
    ],
    startedAt: "2026-03-03T14:30:00Z",
    credentials: "Service Account (API Key)",
    files: 3,
    checklists: 142,
  },
  statusBar: {
    subAgents: 8,
    parallelExecutions: 4,
    operations: 1247,
    vulnerabilities: { critical: 0, high: 2, medium: 5, low: 12 },
  },
};

export const consoleLogs = [
  {
    timestamp: "14:32:15",
    level: "info",
    message: "Initializing spider module...",
    type: "system",
  },
  {
    timestamp: "14:32:18",
    level: "info",
    message: "Discovered endpoint: ",
    highlight: "GET /api/v1/users",
    type: "url",
  },
  {
    timestamp: "14:32:22",
    level: "info",
    message: "Discovered endpoint: ",
    highlight: "POST /api/v1/auth/login",
    type: "url",
  },
  {
    timestamp: "14:32:45",
    level: "info",
    message: "Spidering phase completed. 47 endpoints found.",
    type: "system",
  },
  {
    timestamp: "14:32:46",
    level: "info",
    message: "Starting mapping phase...",
    type: "system",
  },
  {
    timestamp: "14:33:12",
    level: "info",
    message: "Mapped authentication flow: ",
    highlight: "OAuth 2.0 / JWT",
    type: "header",
  },
  {
    timestamp: "14:33:45",
    level: "info",
    message: "Identified API framework: ",
    highlight: "Express.js / Node.js",
    type: "header",
  },
  {
    timestamp: "14:34:02",
    level: "success",
    message: "Mapping phase completed.",
    type: "system",
  },
  {
    timestamp: "14:34:03",
    level: "info",
    message: "Starting security testing phase...",
    type: "system",
  },
  {
    timestamp: "14:34:15",
    level: "info",
    message: "Running SQL injection tests on 47 endpoints...",
    type: "system",
  },
  {
    timestamp: "14:35:22",
    level: "warning",
    message: "Potential vulnerability detected: ",
    highlight: "SQL Injection",
    type: "keyword",
  },
  {
    timestamp: "14:35:23",
    level: "info",
    message: "Endpoint: ",
    highlight: "POST /api/v1/search",
    type: "url",
  },
  {
    timestamp: "14:36:45",
    level: "info",
    message: "Running XSS tests on input parameters...",
    type: "system",
  },
  {
    timestamp: "14:38:12",
    level: "info",
    message: "Testing for IDOR vulnerabilities...",
    type: "system",
  },
  {
    timestamp: "14:39:30",
    level: "warning",
    message: "Potential vulnerability detected: ",
    highlight: "IDOR - Insecure Direct Object Reference",
    type: "keyword",
  },
  {
    timestamp: "14:39:31",
    level: "info",
    message: "Endpoint: ",
    highlight: "GET /api/v1/orders/{id}",
    type: "url",
  },
  {
    timestamp: "14:40:15",
    level: "info",
    message: "Running authentication bypass tests...",
    type: "system",
  },
  {
    timestamp: "14:42:08",
    level: "info",
    message: "Testing JWT token validation...",
    type: "system",
  },
  {
    timestamp: "14:43:25",
    level: "info",
    message: "Running rate limiting tests...",
    type: "system",
  },
  {
    timestamp: "14:44:50",
    level: "info",
    message: "Checking for sensitive data exposure...",
    type: "system",
  },
];

export const verificationLoops = [
  {
    timestamp: "14:35:22",
    status: "confirmed",
    finding: "SQL Injection",
    confidence: 98,
  },
  {
    timestamp: "14:35:45",
    status: "verifying",
    finding: "XSS Reflected",
    confidence: 76,
  },
  {
    timestamp: "14:39:30",
    status: "confirmed",
    finding: "IDOR",
    confidence: 94,
  },
  {
    timestamp: "14:41:15",
    status: "false-positive",
    finding: "CSRF",
    confidence: 23,
  },
  {
    timestamp: "14:43:10",
    status: "verifying",
    finding: "JWT Weak Secret",
    confidence: 82,
  },
];

export const findings = [
  {
    id: "VULN-001",
    severity: "high",
    timestamp: "14:35:22",
    title: "SQL Injection in Search Endpoint",
    endpoint: "POST /api/v1/search",
    description:
      "The search endpoint is vulnerable to SQL injection attacks. User input is not properly sanitized before being used in SQL queries.",
    cwe: "CWE-89",
    owasp: "A03:2021 - Injection",
  },
  {
    id: "VULN-002",
    severity: "high",
    timestamp: "14:39:30",
    title: "IDOR in Order Retrieval",
    endpoint: "GET /api/v1/orders/{id}",
    description:
      "The order retrieval endpoint does not properly validate user permissions, allowing access to other users' order data.",
    cwe: "CWE-639",
    owasp: "A01:2021 - Broken Access Control",
  },
  {
    id: "VULN-003",
    severity: "medium",
    timestamp: "14:41:45",
    title: "Missing Rate Limiting on Login",
    endpoint: "POST /api/v1/auth/login",
    description:
      "The login endpoint does not implement rate limiting, making it susceptible to brute force attacks.",
    cwe: "CWE-307",
    owasp: "A07:2021 - Identification and Authentication Failures",
  },
  {
    id: "VULN-004",
    severity: "medium",
    timestamp: "14:42:30",
    title: "Weak JWT Secret Key",
    endpoint: "POST /api/v1/auth/login",
    description:
      "The JWT token is signed with a weak secret key that can be cracked using brute force methods.",
    cwe: "CWE-326",
    owasp: "A02:2021 - Cryptographic Failures",
  },
  {
    id: "VULN-005",
    severity: "medium",
    timestamp: "14:43:15",
    title: "Sensitive Data in Error Messages",
    endpoint: "Multiple Endpoints",
    description:
      "Error messages reveal sensitive information including database schema and internal file paths.",
    cwe: "CWE-209",
    owasp: "A04:2021 - Insecure Design",
  },
  {
    id: "VULN-006",
    severity: "low",
    timestamp: "14:44:00",
    title: "Missing Security Headers",
    endpoint: "Global",
    description:
      "Several security headers are missing including Content-Security-Policy and X-Frame-Options.",
    cwe: "CWE-693",
    owasp: "A05:2021 - Security Misconfiguration",
  },
  {
    id: "VULN-007",
    severity: "low",
    timestamp: "14:44:30",
    title: "Cookie Without Secure Flag",
    endpoint: "POST /api/v1/auth/login",
    description:
      "Authentication cookies are not marked with the Secure flag, allowing transmission over unencrypted connections.",
    cwe: "CWE-614",
    owasp: "A05:2021 - Security Misconfiguration",
  },
];

export const formatDate = (dateString) => {
  if (!dateString) return "Never";
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
};
