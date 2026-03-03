import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Search,
  Filter,
  Columns,
  Plus,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import AppLayout from "../components/layout/AppLayout";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import SeverityBadge from "../components/scan/SeverityBadge";
import StatusChip from "../components/scan/StatusChip";
import { scans, scanStats, formatDate } from "../data/mockData";

const StatCard = ({ title, count, change, icon: Icon, color }) => {
  const isPositive = change > 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <Card className="flex items-center gap-4">
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-xl ${color}`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {count}
          </span>
          <div
            className={`flex items-center gap-0.5 text-xs ${
              isPositive ? "text-red-500" : "text-green-500"
            }`}
          >
            <TrendIcon className="w-3 h-3" />
            <span>{Math.abs(change)}%</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredScans, setFilteredScans] = useState(scans);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredScans(
      scans.filter(
        (scan) =>
          scan.name.toLowerCase().includes(query) ||
          scan.type.toLowerCase().includes(query) ||
          scan.target.toLowerCase().includes(query)
      )
    );
  };

  const handleRowClick = (scanId) => {
    console.log("Navigating to scan:", scanId);
    navigate(`/scans/${scanId}`);
  };

  const handleNewScan = () => {
    // Show toast or modal
    alert("New Scan functionality would open a modal here");
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Overview of your security posture and active scans
            </p>
          </div>
          <Button variant="primary" onClick={handleNewScan}>
            <Plus className="w-4 h-4 mr-2" />
            New Scan
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Critical"
            count={scanStats.critical.count}
            change={scanStats.critical.change}
            icon={AlertCircle}
            color="bg-red-500"
          />
          <StatCard
            title="High"
            count={scanStats.high.count}
            change={scanStats.high.change}
            icon={AlertTriangle}
            color="bg-orange-500"
          />
          <StatCard
            title="Medium"
            count={scanStats.medium.count}
            change={scanStats.medium.change}
            icon={ShieldAlert}
            color="bg-yellow-500"
          />
          <StatCard
            title="Low"
            count={scanStats.low.count}
            change={scanStats.low.change}
            icon={ShieldCheck}
            color="bg-green-500"
          />
        </div>

        {/* Scan Table */}
        <Card>
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search scans..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="secondary" size="sm">
                <Columns className="w-4 h-4 mr-2" />
                Columns
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto -mx-6">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-light-border dark:border-dark-border">
                  <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Scan Name
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Vulnerabilities
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Last Scan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light-border dark:divide-dark-border">
                {filteredScans.map((scan) => (
                  <tr
                    key={scan.id}
                    className="hover:bg-light-surface dark:hover:bg-dark-hover transition-colors"
                  >
                    <td className="py-4 px-6" colSpan="6">
                      <Link
                        to={`/scans/${scan.id}`}
                        className="flex items-center"
                      >
                        <div className="w-[30%]">
                          <p className="font-medium text-gray-900 dark:text-white">
                            {scan.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {scan.target}
                          </p>
                        </div>
                        <div className="w-[15%]">
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {scan.type}
                          </span>
                        </div>
                        <div className="w-[12%]">
                          <StatusChip status={scan.status} />
                        </div>
                        <div className="w-[18%]">
                          <div className="flex items-center gap-3">
                            <div className="flex-1 max-w-[100px] h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  scan.status === "completed"
                                    ? "bg-green-500"
                                    : scan.status === "failed"
                                    ? "bg-red-500"
                                    : "bg-primary"
                                }`}
                                style={{ width: `${scan.progress}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400 w-10">
                              {scan.progress}%
                            </span>
                          </div>
                        </div>
                        <div className="w-[15%]">
                          <div className="flex items-center gap-2">
                            {scan.vulnerabilities.critical > 0 && (
                              <SeverityBadge
                                level="critical"
                                showLabel={false}
                                size="sm"
                              />
                            )}
                            {scan.vulnerabilities.high > 0 && (
                              <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                                {scan.vulnerabilities.high}
                              </span>
                            )}
                            {scan.vulnerabilities.medium > 0 && (
                              <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                                {scan.vulnerabilities.medium}
                              </span>
                            )}
                            {scan.vulnerabilities.low > 0 && (
                              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                                {scan.vulnerabilities.low}
                              </span>
                            )}
                            {Object.values(scan.vulnerabilities).every(
                              (v) => v === 0
                            ) && (
                              <span className="text-sm text-gray-400">-</span>
                            )}
                          </div>
                        </div>
                        <div className="w-[10%]">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {formatDate(scan.lastScan)}
                          </span>
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredScans.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No scans found matching your search.
              </p>
            </div>
          )}
        </Card>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
