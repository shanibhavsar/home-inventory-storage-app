import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedSheetUrl = localStorage.getItem('sheetUrl');

    if (!storedUsername) localStorage.setItem('username', 'damn');
    if (!storedPassword) localStorage.setItem('password', 'damndamn');
    if (!storedSheetUrl) localStorage.setItem('sheetUrl', 'https://docs.google.com/spreadsheets/d/1ENdVi-9QZgYM06_L5BSwJG6OvkaHGIq1FeBBGF2XYF0/edit');

    if (router.pathname !== '/login' && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  return <Component {...pageProps} setIsAuthenticated={setIsAuthenticated} />;
}

export default MyApp;
