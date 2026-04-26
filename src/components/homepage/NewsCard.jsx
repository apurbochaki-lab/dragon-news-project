import Image from "next/image";
import { GoBookmark } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import '../../app/globals.css'
import { FaEye } from "react-icons/fa";
import Link from "next/link";

const NewsCard = ({ n }) => {
    return (
        <div className="mb-10 shadow-sm">

            <div className="bg-base-300 p-4 flex justify-between">
                {/* Left */}
                <div className="flex items-center gap-4">
                    <Image src={n.author.img} width={50} height={50} alt="Profile avatar" className="rounded-full"></Image>
                    <span>
                        <h2>{n.author.name === "" ? "User" : n.author.name}</h2>
                        <p>{n?.author?.published_date ? (n?.author?.published_date).split(" ")[0] : ""}</p>
                    </span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4 text-3xl">
                    <GoBookmark />
                    <IoShareSocialOutline />
                </div>
            </div>

            <div className="p-5 bg-white border border-gray-300 rounded-md space-y-7">
                <h2 className="text-3xl font-bold pt-5">{n.title}</h2>

                <Image src={n.image_url} width={700} height={300} alt="Image" className="mx-auto"></Image>

                <div>
                    <p className="text-[25px] text-gray-500 line-clamp-3">{n.details}</p>
                    <Link href={`/news-details/${n._id}`}>
                        <button className="btn mt-2 text-orange-500 font-bold text-lg">Read More</button>
                    </Link>
                </div>
                <div className="border-b border-b-gray-300 pt-5"></div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">⭐</span>
                        <h2 className="text-lg font-semibold text-gray-500/90">{n.rating.number}</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-xl"><FaEye /></span>
                        <h2 className="font-semibold text-gray-500/90">{n.total_view}k</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;