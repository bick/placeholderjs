'use client';

import React, {useState} from 'react';
import {useToast} from "@/components/ui/use-toast";

const Code = () => {
    const {toast} = useToast();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('npm install placeholder').then(() => {
            toast({
                description: 'Copied to clipboard!',
                duration: 2000
            });
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }, (err) => {
            toast({
                description: 'Failed to copy!',
                duration: 2000
            });
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <div className="relative group mt-6">
            <code
                className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-[#F5F8FA] dark:bg-[#111] dark:border-[rgba(255,255,255,.15)] dark:text-white border border-[#d8dee4] dark:bg-gray-50 dark:text-gray-900 rounded-lg p-4 pl-6">
                <span className="flex gap-4">
                    <span className="shrink-0 text-gray-500">
                        $
                    </span>
                    <span className="flex-1">
                        <span>
                            npm install&nbsp;
                        </span>
                        <span className="text-yellow-500">
                            placeholder
                        </span>
                    </span>
                </span>

                <button onClick={handleCopy}>
                    {copied ? (
                        <svg className="shrink-0 h-5 w-5 transition opacity-75 text-green-500 group-hover:opacity-100"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    ) : (
                        <svg className="shrink-0 h-5 w-5 transition opacity-75 text-gray-500 group-hover:opacity-100"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                            <path
                                d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"></path>
                        </svg>
                    )}
                </button>
            </code>
        </div>
    );
};

export default Code;
