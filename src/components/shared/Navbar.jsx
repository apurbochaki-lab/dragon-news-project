'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    console.log("user", user)

    const router = useRouter()

    return (
        <div className='container mx-auto flex justify-between py-5'>
            <div></div>
            <ul className='flex items-center gap-3 font-semibold'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>

            {isPending ? <span className="loading loading-dots loading-xl"></span>
                : user ?
                    <div className='flex items-center gap-3'>
                        <h2 className='text-lg font-semibold text-green-600'>Hello, {(user.name).split(" ")[0]}</h2>
                        <Image src={user.image || userAvatar} width={45} height={45} alt='User Avatar' className='rounded-full'></Image>
                        <Link href={'/login'}>
                            <button className="btn bg-red-600 text-white font-bold" onClick={async () => await authClient.signOut({
                                fetchOptions: {
                                    onSuccess: () => {
                                        router.push("/login"); // redirect to login page
                                    },
                                },
                            })}>Logout</button>
                        </Link>
                    </div>

                    : <Link href={"/login"}>
                        <button className="btn bg-green-600 text-white font-bold">Login</button>
                    </Link>}
        </div>
    );
};

export default Navbar;