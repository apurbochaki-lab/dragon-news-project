'use client'

import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import swimming from '@/assets/swimming.png'
import classImg from '@/assets/class.png'
import playGround from '@/assets/playground.png'
import bg from '@/assets/bg.png'
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

const RightSidebar = () => {

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google"
        })
    }

    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
    }

    return (
        <section>
            <div>
                <h2 className='text-lg font-bold mb-4'>Login With</h2>
                <div className='flex flex-col gap-3'>
                    <button
                        className="btn border-2 border-blue-500 rounded-lg text-blue-500"
                        onClick={handleGoogleSignIn}
                    ><FaGoogle /> Login with Google
                    </button>

                    <button
                        className="btn border-2 border-green-500 rounded-lg text-green-600"
                        onClick={handleGithubSignIn}
                    ><FaGithub />Login with Github
                    </button>
                </div>
            </div>

            <div>
                <h2 className='mt-10 text-lg font-bold mb-4'>Find Us On</h2>
                <div className='flex items-center gap-4 p-4 border border-gray-300 rounded-sm text-lg font-bold'>
                    <span className='text-2xl'><FaFacebook /></span>
                    Facebook
                </div>
                <div className='flex items-center gap-4 p-4 border border-gray-300 rounded-sm text-lg font-bold'>
                    <span className='text-2xl'><AiFillTwitterCircle /></span>
                    Twitter
                </div>
                <div className='flex items-center gap-4 p-4 border border-gray-300 rounded-sm text-lg font-bold'>
                    <span className='text-2xl'><BsInstagram /></span>
                    Instagram
                </div>
            </div>

            <div className='mt-10 bg-base-300/80 p-5'>
                <h2 className='text-2xl font-bold mb-5'>Q-Zone</h2>

                <div className='space-y-5'>
                    <Image src={swimming} width={400} alt='Swimming photo'></Image>
                    <Image src={classImg} width={400} alt='Classroom photo'></Image>
                    <Image src={playGround} width={400} alt='Playground photo'></Image>
                </div>
            </div>

            <div className='mt-10'>
                <Image src={bg} width={400} alt='Bg photo'></Image>
            </div>
        </section>
    );
};

export default RightSidebar;