import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  subtext?: string;
}

export function StatsCard({ icon: Icon, label, value, subtext }: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-chess-brand/10 text-chess-brand">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      {subtext ? <p className="mt-3 text-sm text-slate-400">{subtext}</p> : null}
    </div>
  );
}
