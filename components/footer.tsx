'use client';

import {usePathname} from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <footer className="flex py-24 mt-24 border-t w-full">
            <div className="container flex text-center w-full justify-center">
                <p className="flex flex-col">
                    Copyright &copy; 2024 PlaceholderJS. All Rights Reserved. Made with ❤️ and ☕ by&nbsp;
                    <a href="https://owenbick.com" target="_blank" className="mx-auto">Owen Bick</a>&nbsp;under the MIT license.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
