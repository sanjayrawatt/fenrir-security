import Badge from "../ui/Badge";

const statusConfig = {
  completed: { variant: "success", label: "Completed" },
  scheduled: { variant: "default", label: "Scheduled" },
  failed: { variant: "error", label: "Failed" },
  running: { variant: "primary", label: "In Progress" },
  pending: { variant: "warning", label: "Pending" },
};

const StatusChip = ({ status, size = "md", className = "" }) => {
  const config = statusConfig[status?.toLowerCase()] || statusConfig.pending;

  return (
    <Badge variant={config.variant} size={size} className={className}>
      {config.label}
    </Badge>
  );
};

export default StatusChip;
