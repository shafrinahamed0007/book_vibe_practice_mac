import AllBooks from "../components/shared/HomePage/AllBooks/AllBooks";
import Banner from "../components/shared/HomePage/Banner/Banner";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner />
      <AllBooks />
    </div>
  );
}
