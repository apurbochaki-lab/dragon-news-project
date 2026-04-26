import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between py-5'>
            <div></div>
            <ul className='flex items-center gap-3 font-semibold'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>

            <div className='flex items-center gap-3'>
                <Image src={userAvatar} width={40} height={40} alt='User Avatar'></Image>
                <Link href={'/login'}><button className="btn bg-[#403F3F] text-white font-bold">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;