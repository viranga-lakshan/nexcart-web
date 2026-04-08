export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="container-page flex flex-col justify-between gap-4 text-sm text-slate-500 dark:text-slate-400 md:flex-row">
        <p>? {new Date().getFullYear()} NexCart. Portfolio-grade e-commerce frontend.</p>
        <p>Built with React, TypeScript, RTK Query, Tailwind CSS, and Vite.</p>
      </div>
    </footer>
  );
}
