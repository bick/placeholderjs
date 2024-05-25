'use client'

import {AppProgressBar as ProgressBar} from "next-nprogress-bar";


export default function Home() {
    return (
        <ProgressBar
            height="2px"
            color="#ff6433"
            options={{showSpinner: false}}
            shallowRouting
        />
    )
}