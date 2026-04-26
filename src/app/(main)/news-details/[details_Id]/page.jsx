import RightSidebar from '@/components/homepage/news-section/RightSidebar';
import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export const generateMetadata = async ({ params }) => {
    const { details_Id } = await params;
    // console.log(details_Id)
    const { title, details } = await getNewsDetailsById(details_Id)
    // console.log(title)

    return {
        title: title,
        description: details,
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { details_Id } = await params;
    const { category_id, image_url, title, details } = await getNewsDetailsById(details_Id);
    // console.log(title)

    return (
        <section className='container mx-auto'>
            <h2 className='text-lg font-bold mb-5'>Dragon News</h2>

            <div className='grid grid-cols-12 gap-5'>
                {/* left Side */}
                <div className='col-span-9'>
                    <div className="card bg-base-100 border border-gray-300 shadow-sm">
                        <figure className='m-5'>
                            <Image src={image_url} width={1200} height={500} alt={title}></Image>
                        </figure>
                        <div className="card-body space-y-3">
                            <h2 className="card-title text-3xl">{title}</h2>
                            <p className='text-lg text-gray-500'>{details}</p>
                            <div className="card-actions justify-start">
                                <Link href={`/category/${category_id}`}>
                                    <button className="btn bg-[#D72050] text-white p-6 font-bold"><FaArrowLeft /> All news in this category</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className=' col-span-3'>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </section>
    );
};

export default NewsDetailsPage;