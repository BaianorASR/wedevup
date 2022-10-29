import { Taxi } from 'phosphor-react';

export function Header() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4">
      <header className="container flex items-center justify-between mx-auto">
        <p className="dark:text-white flex items-center gap-4 text-2xl font-extrabold text-black">
          <Taxi size={36} weight="duotone" color="#5850EC" />
          WeCarsUp!
        </p>
        <a
          className="dark:text-gray-300 sm:block hidden text-xl text-gray-900"
          href="https://github.com/BaianorASR"
          target="_blank"
          rel="noreferrer"
        >
          baianor.dev
        </a>
      </header>
    </div>
  );
}
