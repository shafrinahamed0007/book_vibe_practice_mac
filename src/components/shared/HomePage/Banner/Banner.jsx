import Image from "next/image";
import bookImg from "@/public/assets/banner_book.png";

const Banner = () => {
  return (
    <div className="hero  lg:w-10/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={bookImg} alt="book banner image" height={360} width={360} />

        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br />
            your bookshelf
          </h1>

          <button className="btn btn-success mt-5">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
