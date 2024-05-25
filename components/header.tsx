'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
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
            // Check if there's a version and timestamp stored in localStorage
            const savedVersion = localStorage.getItem('npmVersion');
            const timestamp = localStorage.getItem('timestamp');

            // If data exists and it's been less than an hour since last fetch, use cached version
            if (savedVersion && timestamp && (new Date().getTime() - Number(timestamp) < 3600000)) {
                setVersion(savedVersion);
            } else {
                // Fetch new version and update local storage
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

        // Set up an interval to refetch every hour
        const intervalId = setInterval(checkVersion, 3600000);

        // Cleanup interval and timeout on unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <header id="nav" className={`header py-6 w-full z-50 ${isHomePage ? 'absolute' : ''}`}>
            <div className="container mx-auto flex items-center">
                <Link href='/' className="logo text-black dark:text-white">
                    PlaceholderJS
                </Link>
                <sup>
                    <Badge variant="outline" className="ml-2">v{version}</Badge>
                </sup>

                <ul className="flex items-center max-md:hidden ml-auto">
                    <li>
                        <Link href="/docs" className="text-black dark:text-white">
                            Docs
                        </Link>
                    </li>
                    <li>
                        <Link href="/#usage" className="text-black dark:text-white">
                            Usage
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/bick/placeholder/releases" className="text-black dark:text-white">
                            Changelog
                        </Link>
                    </li>
                    <span aria-hidden="true"
                          className="bg-[rgba(0,0,0,.25)] dark:bg-[rgba(255,255,255,.25)] mx-2 hidden h-5 w-px sm:!inline-block"></span>
                    <li>
                        <Link href="https://github.com/bick/placeholderjs"  className="text-black dark:text-white mx-2" target="_blank" >
                            <FaGithub className="text-xl"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://npmjs.com/placeholder" target="_blank" className="text-black dark:text-white">
                            <SiNpm className="text-xl"/>
                        </Link>
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
