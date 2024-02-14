'use client';

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";

interface PropsActive {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text}: PropsActive) => {

    const pathName = usePathname();

    return (
        <Link 
            className={ `${ ( pathName=== path) && style.link } ${ style['active-link'] }` } 
            href={path}
        >
            {text}
        </Link>
    )
}
