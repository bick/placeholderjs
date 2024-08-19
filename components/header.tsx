import {GetStaticProps} from 'next';
import {FaDiscord, FaGithub} from 'react-icons/fa';
import {SiNpm} from 'react-icons/si';
import {Badge} from '@/components/ui/badge';

interface HeaderProps {
    version: string;
}

const Header: React.FC<HeaderProps> = ({version}) => {
    return (
        <header id="nav" className="header absolute py-6 w-full z-50">
            <div className="container mx-auto flex items-center">
                <a href='/' className="logo text-white">
                    PlaceholderJS
                </a>
                <sup>
                    <Badge variant="outline" className="ml-2">v{version}</Badge>
                </sup>

                <ul className="flex items-center ml-auto">
                    <li className="hidden md:flex">
                        <a href="/#examples" className="text-white">
                            Examples
                        </a>
                    </li>
                    <li className="hidden md:flex">
                        <a href="https://github.com/bick/placeholder/releases" className="text-white">
                            Changelog
                        </a>
                    </li>
                    <span aria-hidden="true"
                          className="bg-[rgba(255,255,255,.25)] mx-2 hidden h-5 w-px sm:!inline-block"></span>
                    <li>
                        <a href="https://github.com/bick/placeholder" className="text-white mx-2" target="_blank">
                            <FaGithub className="text-xl"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://npmjs.com/placeholder" target="_blank" className="text-white">
                            <SiNpm className="text-xl"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/xRZenePBsk" className="text-white mx-2" target="_blank">
                            <FaDiscord className="text-xl"/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    let version = '';

    try {
        const res = await fetch('https://registry.npmjs.org/placeholder');
        const data = await res.json();
        version = data['dist-tags'].latest;
    } catch (error) {
        console.error('Failed to fetch npm version:', error);
    }

    return {
        props: {
            version,
        },
    };
};

export default Header;
