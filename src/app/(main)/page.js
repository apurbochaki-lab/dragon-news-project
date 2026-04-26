import { redirect } from "next/navigation";

const active_category_id = "01";

const Home = () => {
  redirect(`/category/${active_category_id}`)
}

export default Home;