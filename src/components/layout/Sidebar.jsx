import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  ScanLine,
  Calendar,
  Bell,
  Settings,
  HelpCircle,
  Menu,
  X,
  Shield,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";

const navItems = [
  { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/projects", icon: FolderKanban, label: "Projects" },
  { path: "/scans", icon: ScanLine, label: "Scans" },
  { path: "/schedule", icon: Calendar, label: "Schedule" },
  { path: "/notifications", icon: Bell, label: "Notifications" },
  { path: "/settings", icon: Settings, label: "Settings" },
  { path: "/support", icon: HelpCircle, label: "Support" },
];

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white dark:bg-dark-surface border-b border-light-border dark:border-dark-border md:hidden">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-semibold text-gray-900 dark:text-white">
            Fenrir
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 z-50 h-full w-64 
        bg-white dark:bg-dark-surface 
        border-r border-light-border dark:border-dark-border
        transform transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:h-screen
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-5 border-b border-light-border dark:border-dark-border">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Fenrir
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 rounded-lg
                    transition-all duration-200
                    ${
                      active
                        ? "bg-primary/10 text-primary dark:bg-primary/20"
                        : "text-gray-600 dark:text-gray-400 hover:bg-light-hover dark:hover:bg-dark-hover hover:text-gray-900 dark:hover:text-gray-200"
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${active ? "text-primary" : ""}`} />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-light-border dark:border-dark-border space-y-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
            >
              <div className="flex items-center gap-3">
                {theme === "dark" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
                <span className="font-medium">
                  {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </span>
              </div>
              <div
                className={`
                w-10 h-5 rounded-full relative transition-colors
                ${
                  theme === "dark"
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600"
                }
              `}
              >
                <div
                  className={`
                  absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform
                  ${theme === "dark" ? "translate-x-5" : "translate-x-0.5"}
                `}
                />
              </div>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-light-surface dark:bg-dark-hover">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-medium text-sm">
                JS
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  John Smith
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  john@company.com
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
