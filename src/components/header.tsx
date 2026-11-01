import {FaDiscord, FaGithub} from 'react-icons/fa';
import {SiNpm} from 'react-icons/si';
import {Badge} from '@/components/ui/badge';

interface HeaderProps {
    version: string;
}

const Header: React.FC<HeaderProps> = ({version}) => {
    return (
        <header id="nav" className="absolute py-6 w-full z-50">
            <div className="relative w-full mx-auto px-8 min-[1200px]:max-w-[1200px] flex items-center">
                <a href="/" className="text-white font-semibold text-[1.25rem] m-0" aria-label="PlaceholderJS Home">
                    <span>PlaceholderJS</span>
                </a>
                <sup>
                    <Badge variant="outline" className="ml-2">v{version}</Badge>
                </sup>

                <nav aria-label="Main Navigation" className="ml-auto">
                    <ul className="flex items-center">
                        <li className="hidden items-center md:flex">
                            <a href="/#examples" className="text-white mx-4 font-medium opacity-75 hover:opacity-100 transition-opacity duration-200 ease-ease text-[15px]">
                                <span>Examples</span>
                            </a>
                        </li>
                        <li className="hidden items-center md:flex">
                            <a href="https://github.com/bick/placeholder/releases" target="_blank"
                               rel="noopener noreferrer" className="text-white mx-4 font-medium opacity-75 hover:opacity-100 transition-opacity duration-200 ease-ease text-[15px]">
                                <span>Changelog</span>
                            </a>
                        </li>
                        <span aria-hidden="true"
                              className="bg-[rgba(255,255,255,.25)] mx-2 hidden h-5 w-px sm:!inline-block"></span>
                        <li className="flex items-center">
                            <a href="https://github.com/bick/placeholder" target="_blank" rel="noopener noreferrer"
                               className="text-white mx-2 font-medium opacity-75 hover:opacity-100 transition-opacity duration-200 ease-ease text-[15px] after:hidden" aria-label="PlaceholderJS GitHub">
                                <FaGithub className="text-xl"/>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a href="https://npmjs.com/placeholder" target="_blank" rel="noopener noreferrer"
                               className="text-white mx-4 font-medium opacity-75 hover:opacity-100 transition-opacity duration-200 ease-ease text-[15px] after:hidden" aria-label="PlaceholderJS on npm">
                                <SiNpm className="text-xl"/>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a href="https://discord.gg/xRZenePBsk" target="_blank" rel="noopener noreferrer"
                               className="text-white mx-2 font-medium opacity-75 hover:opacity-100 transition-opacity duration-200 ease-ease text-[15px] after:hidden" aria-label="PlaceholderJS Discord">
                                <FaDiscord className="text-xl"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
