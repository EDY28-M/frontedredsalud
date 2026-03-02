import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  activePage?: string;
}

export default function Layout({ children, activePage }: LayoutProps) {
  return (
    <div className="font-body bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 antialiased min-h-screen flex flex-col overflow-x-hidden">
      <TopBar />
      <Header activePage={activePage} />
      <main className="flex-grow w-full min-w-0">{children}</main>
      <Footer />
    </div>
  );
}
