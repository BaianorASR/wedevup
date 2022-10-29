import { Footer as F } from 'flowbite-react';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { IconWeDevUp } from './icons/wedevup';

export function Footer() {
  return (
    <F container={true} className="mt-10">
      <div className="w-full text-center">
        <div className="sm:flex sm:items-center sm:justify-between justify-between w-full">
          <IconWeDevUp />
          <div className="sm:mt-0 sm:justify-center flex mt-4 space-x-6">
            <F.Icon
              href="https://github.com/BaianorASR"
              icon={GithubLogo as any}
              target="_blank"
            >
              About
            </F.Icon>
            <F.Icon
              href="https://www.linkedin.com/in/baianorasr/"
              icon={LinkedinLogo as any}
              target="_blank"
            >
              Privacy Policy
            </F.Icon>
          </div>
        </div>
        <F.Divider />
        <F.Copyright href="https://github.com/BaianorASR" by="Baianor" year={2022} />
      </div>
    </F>
  );
}
