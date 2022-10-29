import { useState } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
    console.log('dark', dark);
  };

  return {
    dark,
    toggle,
  };
}
