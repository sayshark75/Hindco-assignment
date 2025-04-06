// components/StatsSection.tsx
import { Briefcase, CheckCircle, Building, Users, LucideIcon } from "lucide-react";

const stats: StatType[] = [
  { title: "Jobs Posted", value: "38193", icon: Briefcase },
  { title: "Jobs Filled", value: "15153", icon: CheckCircle },
  { title: "Employers", value: "24058", icon: Building },
  { title: "Active Users", value: "1473384", icon: Users },
];

export default function StatsSection() {
  return (
    <div className="bg-blue-50 py-8">
      <div className="main-container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map(({ title, value, icon }, idx) => {
          const Icon: LucideIcon = icon;
          return (
            <div key={idx} className="flex flex-col items-center">
              <Icon className="w-8 h-8 text-blue mb-2" />
              <p className="text-3xl font-bold text-blue">{value}</p>
              <p className="text-sm font-medium">{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
