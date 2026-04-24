'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathName = usePathname()
    const isActive = pathName === href;

    return (
        <Link href={href} className={`${isActive && "text-blue-500 bg-gray-200 p-2 rounded-lg"}`}>
            {children}
        </Link>
    );
};

export default NavLink;