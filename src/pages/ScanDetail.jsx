import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Play,
  Square,
  Download,
  FileText,
  Target,
  Clock,
  Key,
  FileCode,
  CheckSquare,
  Activity,
  Users,
  Zap,
  Cpu,
  ShieldAlert,
} from "lucide-react";
import AppLayout from "../components/layout/AppLayout";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import ProgressRing from "../components/scan/ProgressRing";
import StepTracker from "../components/scan/StepTracker";
import SeverityBadge from "../components/scan/SeverityBadge";
import {
  activeScanDetails,
  consoleLogs,
  verificationLoops,
  findings,
  formatDate,
} from "../data/mockData";

const ConsoleTab = ({ logs }) => {
  const getHighlightClass = (type) => {
    switch (type) {
      case "url":
        return "text-primary";
      case "header":
        return "text-purple-500 dark:text-purple-400";
      case "keyword":
        return "text-yellow-600 dark:text-yellow-400 font-semibold";
      default:
        return "";
    }
  };

  const getLevelClass = (level) => {
    switch (level) {
      case "success":
        return "text-green-500";
      case "warning":
        return "text-yellow-500";
      case "error":
        return "text-red-500";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="font-mono text-xs space-y-1 max-h-[400px] overflow-y-auto terminal-text">
      {logs.map((log, index) => (
        <div key={index} className="flex gap-3">
          <span className="text-gray-500 whitespace-nowrap">
            [{log.timestamp}]
          </span>
          <span className={getLevelClass(log.level)}>
            {log.level.toUpperCase()}
          </span>
          <span className="text-gray-300 dark:text-gray-400">
            {log.message}
            {log.highlight && (
              <span className={getHighlightClass(log.type)}>
                {log.highlight}
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

const VerificationTab = ({ loops }) => {
  return (
    <div className="space-y-3 max-h-[400px] overflow-y-auto">
      {loops.map((loop, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 rounded-lg bg-dark-hover/50 dark:bg-dark-hover/50"
        >
          <div className="flex items-center gap-3">
            <div
              className={`
              w-2 h-2 rounded-full
              ${
                loop.status === "confirmed"
                  ? "bg-green-500"
                  : loop.status === "false-positive"
                  ? "bg-red-500"
                  : "bg-yellow-500 animate-pulse"
              }
            `}
            />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {loop.finding}
              </p>
              <p className="text-xs text-gray-500">{loop.timestamp}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Confidence:</span>
            <span
              className={`
              text-sm font-semibold
              ${
                loop.confidence >= 90
                  ? "text-green-500"
                  : loop.confidence >= 70
                  ? "text-yellow-500"
                  : "text-red-500"
              }
            `}
            >
              {loop.confidence}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const FindingCard = ({ finding }) => {
  return (
    <Card
      className="border-l-4"
      style={{
        borderLeftColor:
          finding.severity === "critical"
            ? "#EF4444"
            : finding.severity === "high"
            ? "#F97316"
            : finding.severity === "medium"
            ? "#EAB308"
            : "#22C55E",
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <SeverityBadge level={finding.severity} />
          <span className="text-xs text-gray-500">{finding.timestamp}</span>
        </div>
        <span className="text-xs font-mono text-gray-400">{finding.id}</span>
      </div>

      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
        {finding.title}
      </h4>

      <p className="text-sm text-primary font-mono mb-2">{finding.endpoint}</p>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {finding.description}
      </p>

      <div className="flex items-center gap-2">
        <Badge variant="default" size="sm">
          {finding.cwe}
        </Badge>
        <Badge variant="default" size="sm">
          {finding.owasp}
        </Badge>
      </div>
    </Card>
  );
};

const ScanDetail = () => {
  const { scanId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("activity");
  const [isScanning, setIsScanning] = useState(
    activeScanDetails.status === "running"
  );

  const scan = activeScanDetails;

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleStopScan = () => {
    setIsScanning(false);
    alert("Scan stopped");
  };

  const handleExport = () => {
    alert("Export report functionality");
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={handleBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {scan.name}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {scan.type}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isScanning ? (
              <Button variant="danger" onClick={handleStopScan}>
                <Square className="w-4 h-4 mr-2" />
                Stop Scan
              </Button>
            ) : (
              <Button variant="primary">
                <Play className="w-4 h-4 mr-2" />
                Resume Scan
              </Button>
            )}
            <Button variant="secondary" onClick={handleExport}>
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Progress Section */}
        <Card>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <ProgressRing
              progress={scan.progress}
              size={120}
              strokeWidth={8}
              label={scan.progress < 100 ? "In Progress" : "Completed"}
            />

            <div className="flex-1 w-full">
              <StepTracker
                steps={scan.steps}
                currentStep={scan.currentStep}
                className="justify-center lg:justify-start"
              />
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-8 pt-6 border-t border-light-border dark:border-dark-border">
            <div className="flex items-center gap-3 min-w-0">
              <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">Scan Type</p>
                <p
                  className="text-sm font-medium text-gray-900 dark:text-white truncate"
                  title={scan.metadata.scanType}
                >
                  {scan.metadata.scanType}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 min-w-0">
              <Target className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">Targets</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {scan.metadata.targets.length} URLs
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 min-w-0">
              <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">Started At</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatDate(scan.metadata.startedAt)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 min-w-0">
              <Key className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">Credentials</p>
                <p
                  className="text-sm font-medium text-gray-900 dark:text-white truncate"
                  title={scan.metadata.credentials}
                >
                  {scan.metadata.credentials}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 min-w-0">
              <FileCode className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">Files</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {scan.metadata.files}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 min-w-0">
              <CheckSquare className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">Checklists</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {scan.metadata.checklists}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Two Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Live Console */}
          <Card className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Live Scan Console
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-500">Live</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mb-4 p-1 bg-light-surface dark:bg-dark-hover rounded-lg">
              <button
                onClick={() => setActiveTab("activity")}
                className={`
                  flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors
                  ${
                    activeTab === "activity"
                      ? "bg-white dark:bg-dark-surface text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }
                `}
              >
                Activity Log
              </button>
              <button
                onClick={() => setActiveTab("verification")}
                className={`
                  flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors
                  ${
                    activeTab === "verification"
                      ? "bg-white dark:bg-dark-surface text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }
                `}
              >
                Verification Loops
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 bg-gray-950 rounded-lg p-4 overflow-hidden">
              {activeTab === "activity" ? (
                <ConsoleTab logs={consoleLogs} />
              ) : (
                <VerificationTab loops={verificationLoops} />
              )}
            </div>
          </Card>

          {/* Finding Log */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Finding Log
                </h3>
              </div>
              <Badge variant="primary">{findings.length} Findings</Badge>
            </div>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {findings.map((finding) => (
                <FindingCard key={finding.id} finding={finding} />
              ))}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex flex-wrap items-center gap-6 p-4 bg-light-surface dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Sub-agents:
            </span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {scan.statusBar.subAgents}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Parallel Executions:
            </span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {scan.statusBar.parallelExecutions}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Operations:
            </span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {scan.statusBar.operations.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {scan.statusBar.vulnerabilities.critical}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {scan.statusBar.vulnerabilities.high}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {scan.statusBar.vulnerabilities.medium}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {scan.statusBar.vulnerabilities.low}
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ScanDetail;
