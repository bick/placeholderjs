'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {FaGithub} from 'react-icons/fa';
import {SiNpm} from 'react-icons/si';
import {ModeToggle} from '@/components/theme-toggle';

const Header = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <div id="nav" className={`header py-6 w-full ${isHomePage ? 'absolute' : ''}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link href='/' className="logo">
                    PlaceholderJS
                </Link>

                <ul className="flex items-center max-md:hidden">
                    <li>
                        <Link href="/docs">
                            Docs
                        </Link>
                    </li>
                    <li>
                        <Link href="/examples">
                            Examples
                        </Link>
                    </li>
                    <span aria-hidden="true"
                          className="bg-[rgba(0,0,0,.25)] dark:bg-[rgba(255,255,255,.25)] mx-2 hidden h-5 w-px sm:!inline-block"></span>
                    <li>
                        <Link href="https://github.com/bick/placeholder" className="mx-2" target="_blank">
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
        </div>
    );
};

export default Header;
