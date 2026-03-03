import Badge from "../ui/Badge";

const severityConfig = {
  critical: { variant: "critical", label: "Critical" },
  high: { variant: "high", label: "High" },
  medium: { variant: "medium", label: "Medium" },
  low: { variant: "low", label: "Low" },
};

const SeverityBadge = ({
  level,
  showLabel = true,
  size = "md",
  className = "",
}) => {
  const config = severityConfig[level?.toLowerCase()] || severityConfig.low;

  return (
    <Badge variant={config.variant} size={size} className={className}>
      {showLabel ? config.label : level?.charAt(0).toUpperCase()}
    </Badge>
  );
};

export default SeverityBadge;
