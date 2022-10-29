import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type MainLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="sm:px-none grow container mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
