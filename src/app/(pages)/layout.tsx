export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-stone-200 dark:bg-stone-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900 to-stone-900 bg-fixed text-stone-900 dark:text-stone-200 text-lg font-mono font-semibold min-h-screen">
      {children}
    </div>
  );
}
