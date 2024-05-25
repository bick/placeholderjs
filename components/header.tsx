'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {FaGithub} from 'react-icons/fa';
import {SiNpm} from 'react-icons/si';
import {ModeToggle} from '@/components/theme-toggle';
import {Badge} from "@/components/ui/badge"

const Header = () => {
    const [version, setVersion] = useState('');
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        fetch('https://registry.npmjs.org/placeholder')
            .then(response => response.json())
            .then(data => setVersion(data['dist-tags'].latest))
            .catch(console.error);
    }, []);

    return (
        <header id="nav" className={`header py-6 w-full ${isHomePage ? 'absolute' : ''}`}>
            <div className="container mx-auto flex items-center">
                <Link href='/' className="logo">
                    PlaceholderJS
                </Link>
                <sup>
                    <Badge variant="outline" className="ml-2">v{version}</Badge>
                </sup>

                <ul className="flex items-center max-md:hidden ml-auto">
                    <li>
                        <Link href="/docs">
                            Docs
                        </Link>
                    </li>
                    <li>
                        <Link href="/#usage">
                            Usage
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/bick/placeholder/releases">
                            Changelog
                        </Link>
                    </li>
                    <span aria-hidden="true"
                          className="bg-[rgba(0,0,0,.25)] dark:bg-[rgba(255,255,255,.25)] mx-2 hidden h-5 w-px sm:!inline-block"></span>
                    <li>
                        <Link href="https://github.com/bick/placeholderjs" className="mx-2" target="_blank">
                            <FaGithub className="text-xl"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://npmjs.com/placeholder" target="_blank">
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
