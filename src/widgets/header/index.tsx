import { Button } from '@shared/ui';

import OzonLogo from './assets/ozon-logo.svg?react';

export const Header = () => {
  return (
    <header className="fixed w-full h-30 top-0 left-0 z-20 bg-linear-180 from-10% from-black/25 to-80% to-transparent backdrop-blur-md grid place-items-center">
      <div className="container m-auto flex items-center justify-between">
        <a href="/" className="h-22.5">
          <img src="/amolex.svg" alt="" />
        </a>

        {/* TODO rewrite as in figma */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск"
              className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button className="absolute right-3 top-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
          </div>
        </div>

        <Button className="bg-linear-270 py-0">
          <OzonLogo className="mx-11" />
        </Button>
      </div>
    </header>
  );
};
