import { PackageOpen } from 'lucide-react';

import { Card } from '@/components/ui/Card';

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Card className="grid place-items-center py-12 text-center">
      <PackageOpen className="mb-4 size-10 text-slate-400" />
      <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">{description}</p>
    </Card>
  );
}
