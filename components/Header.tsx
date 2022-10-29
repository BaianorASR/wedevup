import { Button, Tooltip } from 'flowbite-react';
import { Moon, Sun, Taxi } from 'phosphor-react';
import { useTheme } from '../hooks/useTheme';

export function Header() {
  const { dark, toggle } = useTheme();

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4">
      <header className="container flex items-center justify-between mx-auto">
        <p className="dark:text-white flex items-center gap-4 text-2xl font-extrabold text-black">
          <Taxi size={36} weight="duotone" color="#5850EC" />
          WeCarsUp!
        </p>
        <div className="flex items-center justify-between gap-4 transition-all">
          <a
            className="dark:text-gray-300 sm:block hidden text-xl text-gray-900"
            href="https://github.com/BaianorASR"
            target="_blank"
            rel="noreferrer"
          >
            baianor.dev
          </a>
          <Tooltip content="Alterar tema!">
            <div
              className="hover:border-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:border-gray-500 flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer"
              onClick={toggle}
            >
              {dark ? (
                <Moon size={24} weight="fill" color="#1F2937" />
              ) : (
                <Sun size={24} weight="fill" color="#D1D5DB" />
              )}
            </div>
          </Tooltip>
        </div>
      </header>
    </div>
  );
}
