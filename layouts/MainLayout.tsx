type MainLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function MainLayout({ children }: MainLayoutProps) {
  return <div className="mx-auto container min-h-screen sm:px-none">{children}</div>;
}
