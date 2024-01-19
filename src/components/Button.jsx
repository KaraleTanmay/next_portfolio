import Link from 'next/link'
import React from 'react'

export default function Button(props) {
    return (
        <Link href={props.link || "/"} aria-disabled={!props.link} target="_blank" className="px-2 py-1 rounded-lg border-[2px] border-[rgba(255,255,255,0.3)] text-white  md:min-w-[60px] text-center font-semibold"> {props.text}
        </Link>
    )
}
