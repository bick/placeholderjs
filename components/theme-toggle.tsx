"use client"

import * as React from "react"
import { FaMoon, FaSun } from "react-icons/fa";
import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const {setTheme} = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="none" size="toggle">
                    <FaSun
                        className="opacity-75 hover:opacity-100 h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <FaMoon
                        className="opacity-75 hover:opacity-100 absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-2">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
