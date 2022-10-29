import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type MainLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <div className="sm:px-none container mx-auto">{children}</div>
      <Footer />
    </>
  );
}
