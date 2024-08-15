'use client';

import {usePathname} from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <footer className="flex py-24 mt-24 border-t w-full">
            <div className="container flex text-center w-full justify-center">
                Copyright &copy; 2024 PlaceholderJS. All Rights Reserved. Made with ❤️ and ☕ by&nbsp;
                <a href="https://owenbick.com" target="_blank">Owen Bick</a>&nbsp;under MIT license.
            </div>
        </footer>
    );
};

export default Footer;
