// Simple cn utility for shadcn/ui
export function cn(...args) {
  return args.filter(Boolean).join(' ');
}
