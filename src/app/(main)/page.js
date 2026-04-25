import LeftSidebar from "@/components/homepage/news-section/LeftSidebar";
import RightSidebar from "@/components/homepage/news-section/RightSidebar";

const getCatagories = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const catagories = await getCatagories()
  // console.log(catagories.news_category)

  return (
    <div className="container mx-auto py-10 grid grid-cols-12 gap-5">
      <div className=" col-span-3 ">
        <LeftSidebar catagories={catagories} activeId={"03"}></LeftSidebar>
      </div>

      <div className="bg-red-100 col-span-6">
        News Content
      </div>

      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
