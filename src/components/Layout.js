export function Layout(props) {
  return (
    <main className="bg-white-300 text-slate-900 dark:bg-slate-900 dark:text-white-100">
      <div className="layout__wrapper mx-auto h-full flex flex-col justify-center gap-4">{props.children}</div>
    </main>
  );
}
