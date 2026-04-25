import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ catagories, activeId }) => {

    return (
        <div>
            <h2 className="text-xl font-bold">All Categories</h2>
            <ul className="mt-5 flex flex-col gap-4 text-center">
                {
                    catagories.news_category.map(catagory => <li
                        key={catagory.category_id}
                        className={`
                            ${activeId === catagory.category_id && "bg-gray-300 rounded-lg shadow-sm"}
                              font-semibold text-lg cursor-pointer`}
                    >
                        <Link className='block p-2' href={`/catagory/${catagory.category_id}`}>{catagory.category_name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;