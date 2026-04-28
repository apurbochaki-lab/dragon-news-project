import LeftSidebar from "@/components/homepage/news-section/LeftSidebar";
import RightSidebar from "@/components/homepage/news-section/RightSidebar";
import NewsCard from "@/components/homepage/NewsCard";
import { getCategories, getNewsCategoryById } from "@/lib/data";


const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id)

    const catagories = await getCategories()
    const news = await getNewsCategoryById(id)

    return (
        <div className="container mx-auto py-10 grid grid-cols-12 gap-5">
            <div className=" col-span-3 ">
                <LeftSidebar catagories={catagories} activeId={id}></LeftSidebar>
            </div>

            <div className=" col-span-6">
                <h2 className="text-xl font-bold mb-5">Dragon News Home</h2>
                {
                    news.length === 0
                        ? <h2 className="text-3xl font-bold text-center py-10">No News Found!</h2>
                        : news.map(n => <NewsCard key={n._id} n={n}></NewsCard>)
                }
            </div>

            <div className="col-span-3">
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default NewsCategoryPage;