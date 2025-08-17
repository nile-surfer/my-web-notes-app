import './globals.css';
import Link from 'next/link';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Kevin Fernandez - Developer & Designer',
  description: 'Personal website of Kevin Fernandez, a developer and designer passionate about building meaningful digital experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <div className="flex min-h-screen">
          {/* Sidebar Navigation - 20% */}
          <aside className="w-1/5 bg-[#F4F4F4] border-r border-gray-200 pl-20 pr-8 py-8">
            <div className="sticky top-8">
              {/* Logo/Name */}
              <div className="mb-12">
                <Link href="/" className="text-2xl font-bold hover:text-gray-600 transition-colors">
                  Kevin Fernandez
                </Link>
                <p className="text-gray-600 mt-2 text-sm">
                  Developer & Designer
                </p>
              </div>

              {/* Navigation Component */}
              <Navigation />
            </div>
          </aside>

          {/* Main Content Area - 80% */}
          <main className="w-4/5 px-8 py-8">
            <div className="w-[500px] mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
