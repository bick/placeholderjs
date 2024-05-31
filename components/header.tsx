'use client';

import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import {FaGithub} from 'react-icons/fa';
import {SiNpm} from 'react-icons/si';
import {ModeToggle} from '@/components/theme-toggle';
import {Badge} from '@/components/ui/badge';

const Header = () => {
    const [version, setVersion] = useState('');
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const checkVersion = () => {
            const savedVersion = localStorage.getItem('npmVersion');
            const timestamp = localStorage.getItem('timestamp');

            if (savedVersion && timestamp && (new Date().getTime() - Number(timestamp) < 3600000)) {
                setVersion(savedVersion);
            } else {
                fetch('https://registry.npmjs.org/placeholder')
                    .then(response => response.json())
                    .then(data => {
                        const latestVersion = data['dist-tags'].latest;
                        setVersion(latestVersion);
                        localStorage.setItem('npmVersion', latestVersion);
                        localStorage.setItem('timestamp', new Date().getTime().toString());
                    })
                    .catch(console.error);
            }
        };

        checkVersion();

        const intervalId = setInterval(checkVersion, 3600000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <header id="nav" className={`header py-6 w-full z-50 ${isHomePage ? 'absolute' : ''}`}>
            <div className="container mx-auto flex items-center">
                <a href='/' className="logo text-black dark:text-white">
                    PlaceholderJS
                </a>
                <sup>
                    <Badge variant="outline" className="ml-2">v{version}</Badge>
                </sup>

                <ul className="flex items-center max-md:hidden ml-auto">
                    <li>
                        <a href="/docs" className="text-black dark:text-white">
                            Docs
                        </a>
                    </li>
                    <li>
                        <a href="/#usage" className="text-black dark:text-white">
                            Usage
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/bick/placeholder/releases" className="text-black dark:text-white">
                            Changelog
                        </a>
                    </li>
                    <span aria-hidden="true"
                          className="bg-[rgba(0,0,0,.25)] dark:bg-[rgba(255,255,255,.25)] mx-2 hidden h-5 w-px sm:!inline-block"></span>
                    <li>
                        <a href="https://github.com/bick/placeholderjs" className="text-black dark:text-white mx-2"
                           target="_blank">
                            <FaGithub className="text-xl"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://npmjs.com/placeholder" target="_blank" className="text-black dark:text-white">
                            <SiNpm className="text-xl"/>
                        </a>
                    </li>
                    <li>
                        <ModeToggle/>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
