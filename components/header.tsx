'use client';

import Link from 'next/link';
import {FaGithub} from 'react-icons/fa'
import { ModeToggle } from '@/components/theme-toggle';

const Header = () => {
    return (
        <div id="nav" className="py-6 w-full">
            <div className="container mx-auto flex justify-between items-center px-12">
                <Link href='/'>
                    <div className="flex items-center max-w-24 max-h-6">
                        PlaceholderJS
                    </div>
                </Link>

                <ul className="flex gap-6 items-center max-md:hidden">
                    <li>
                        <Link href="/">
                            Docs
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Examples
                        </Link>
                    </li>
                    <span aria-hidden="true" className="bg-[rgba(0,0,0,.25)] dark:bg-[rgba(255,255,255,.25)] mx-2 hidden h-5 w-px sm:!inline-block"></span>
                    <li>
                        <Link href="/">
                            <FaGithub/>
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
