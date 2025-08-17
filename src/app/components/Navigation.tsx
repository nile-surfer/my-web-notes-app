'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="space-y-6">
      <div>
        <h3 className="text-[8pt] font-medium text-gray-400 uppercase tracking-wider mb-3">
          Navigation
        </h3>
        <div className="space-y-2">
          <Link 
            href="/" 
            className={`flex items-center py-2 px-3 rounded-lg transition-colors group text-[12pt] ${
              isActive('/') 
                ? 'bg-black text-white' 
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <svg className={`w-4 h-4 mr-3 ${
              isActive('/') ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'
            }`} fill="none" stroke="currentColor" viewBox="0 0 16 16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M2 4.67v6.67a1.33 1.33 0 001.33 1.33h9.33a1.33 1.33 0 001.33-1.33V6a1.33 1.33 0 00-1.33-1.33H3.33a1.33 1.33 0 00-1.33 1.33z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M5.33 3.33a1.33 1.33 0 011.33-1.33h2.67a1.33 1.33 0 011.33 1.33v4H5.33v-4z" />
            </svg>
            Home
          </Link>
          <Link 
            href="/writing" 
            className={`flex items-center py-2 px-3 rounded-lg transition-colors group text-[12pt] ${
              isActive('/writing') 
                ? 'bg-black text-white' 
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <svg className={`w-4 h-4 mr-3 ${
              isActive('/writing') ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'
            }`} fill="none" stroke="currentColor" viewBox="0 0 16 16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M7.33 3.33H4a1.33 1.33 0 00-1.33 1.33v7.33a1.33 1.33 0 001.33 1.33h7.33a1.33 1.33 0 001.33-1.33v-3.33m-0.94-0.94a1.33 1.33 0 111.89 1.89L10.67 10H8v-2.67l5.72-5.72z" />
            </svg>
            Writing
          </Link>
          <Link 
            href="/projects" 
            className={`flex items-center py-2 px-3 rounded-lg transition-colors group text-[12pt] ${
              isActive('/projects') 
                ? 'bg-black text-white' 
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <svg className={`w-4 h-4 mr-3 ${
              isActive('/projects') ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'
            }`} fill="none" stroke="currentColor" viewBox="0 0 16 16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M12.67 7.33H2.67m10 0a1.33 1.33 0 011.33 1.33v4a1.33 1.33 0 01-1.33 1.33H3.33a1.33 1.33 0 01-1.33-1.33v-4a1.33 1.33 0 011.33-1.33m10 0V6a1.33 1.33 0 00-1.33-1.33M2.67 7.33V6a1.33 1.33 0 011.33-1.33m0 0V3.33a1.33 1.33 0 011.33-1.33h4a1.33 1.33 0 011.33 1.33v1.33M4.67 4.67h6.67" />
            </svg>
            Projects
          </Link>
        </div>
      </div>

      <div>
        <h3 className="text-[8pt] font-medium text-gray-400 uppercase tracking-wider mb-3">
          Online
        </h3>
        <div className="space-y-2">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors group text-[12pt]"
          >
            <svg className="w-4 h-4 mr-3 text-gray-500 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.42.07.55-.18.55-.4v-1.49c-2.33.51-2.83-1.1-2.83-1.1-.38-.97-.93-1.23-.93-1.23-.76-.52.06-.51.06-.51.84.06 1.28.86 1.28.86.75 1.28 1.96.91 2.44.7.07-.54.29-.91.53-1.12-1.85-.21-3.79-.92-3.79-4.05 0-.89.32-1.62.85-2.19-.08-.21-.37-1.05.08-2.19 0 0 .69-.22 2.26.84.66-.18 1.36-.27 2.06-.27s1.4.09 2.06.27c1.57-1.06 2.26-.84 2.26-.84.45 1.14.16 1.98.08 2.19.53.57.85 1.3.85 2.19 0 3.13-1.94 3.84-3.79 4.05.3.26.56.77.56 1.55v2.3c0 .22.13.47.55.4C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors group text-[12pt]"
          >
            <svg className="w-4 h-4 mr-3 text-gray-500 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.62 13.62h-2.37v-3.71c0-.89-.02-2.02-1.23-2.02-1.23 0-1.42.96-1.42 1.96v3.77H6.23V6.67h2.28v1.04h.03c.32-.6 1.09-1.23 2.25-1.23 2.4 0 2.85 1.58 2.85 3.64v3.5zM3.56 4.95c-.76 0-1.37-.62-1.37-1.37 0-.76.62-1.37 1.37-1.37.76 0 1.37.62 1.37 1.37 0 .76-.62 1.37-1.37 1.37zm1.19 8.67H2.37V6.67h2.38v7.95zM14.82 0H1.18C.53 0 0 .53 0 1.18v13.64C0 15.47.53 16 1.18 16h13.64c.65 0 1.18-.53 1.18-1.18V1.18C16 .53 15.47 0 14.82 0z"/>
            </svg>
            LinkedIn
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors group text-[12pt]"
          >
            <svg className="w-4 h-4 mr-3 text-gray-500 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.97 3.05a6.67 6.67 0 01-1.88.52 3.31 3.31 0 001.44-1.82c-.64.38-1.34.65-2.08.8a3.31 3.31 0 00-5.59 2.99 9.38 9.38 0 01-6.8-3.45 3.31 3.31 0 001.04 4.41 3.29 3.29 0 01-1.49-.4v.04a3.31 3.31 0 002.66 3.25 3.31 3.31 0 01-1.49.06 3.31 3.31 0 003.07 2.3 6.58 6.58 0 01-4.07 1.4c-.26 0-.52-.02-.78-.05a9.29 9.29 0 005.03 1.47c6.04 0 9.33-5 9.33-9.33 0-.14 0-.28-.01-.42a6.62 6.62 0 001.62-1.69z"/>
            </svg>
            Twitter
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-[8pt] font-medium text-gray-400 uppercase tracking-wider mb-3">
          Contact
        </h3>
        <a 
          href="mailto:hello@example.com" 
          className="flex items-center py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors group text-[12pt]"
        >
          <svg className="w-4 h-4 mr-3 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 16 16">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M2 5.33l5.26 2.84a1.33 1.33 0 001.48 0L14 5.33M3.33 12.67h9.33a1.33 1.33 0 001.33-1.33V4.67a1.33 1.33 0 00-1.33-1.33H3.33a1.33 1.33 0 00-1.33 1.33v6.67a1.33 1.33 0 001.33 1.33z" />
          </svg>
          hello@example.com
        </a>
      </div>
    </nav>
  );
}
