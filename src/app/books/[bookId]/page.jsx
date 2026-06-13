import ReadBookActionableButton from "@/src/components/ReadBookActionableButton/ReadBookActionableButton";
import Image from "next/image";
import Link from "next/link";

const BookDetailPage = async ({ params }) => {
  const { bookId } = await params;

  const books = await fetch(
    "https://book-vibe-practice-mac.vercel.app/data.json",
    { cache: "no-store" },
  ).then((res) => res.json());

  const bookDetail = books.find((book) => book.bookId == bookId);


  if (!bookDetail) {
    return (
      <div className="min-h-[80vh] bg-[#070b12] flex flex-col items-center justify-center text-center p-6 text-slate-200">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-sm shadow-2xl space-y-4">
          <h2 className="text-2xl font-black text-rose-500 uppercase tracking-tight">
            Book Not Found
          </h2>
          <p className="text-sm text-slate-400">
            The book you are looking for might have been removed or does not
            exist.
          </p>
          <Link
            href="/books"
            className="px-5 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-xs tracking-widest rounded-xl transition-all uppercase inline-block"
          >
            Back to All Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#070b12] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-5xl relative z-10 space-y-6">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to Books
        </Link>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 bg-slate-950/40 border border-white/5 rounded-2xl p-8 flex justify-center items-center min-h-[400px] w-full">
            <Image
              src={bookDetail?.image}
              alt={bookDetail?.bookName}
              height={360}
              width={240}
              className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)]"
              priority
            />
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white capitalize leading-tight">
                {bookDetail?.bookName}
              </h1>
              <p className="text-sm font-bold text-purple-400">
                By:{" "}
                <span className="text-slate-300 font-medium">
                  {bookDetail?.author}
                </span>
              </p>
            </div>

            <div className="border-y border-white/5 py-2.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
              {bookDetail?.category}
            </div>

            <div className="text-sm leading-relaxed text-slate-300 space-y-2">
              <span className="font-black text-white block">Review:</span>
              <p className="font-medium text-slate-400 text-justify">
                {bookDetail?.review ||
                  "No review available for this masterpiece yet. Dive into the book to experience its spectacular storytelling, deeply woven subplots, and unforgettable characters that keep readers engaged from start to finish."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-xs font-black text-white uppercase tracking-wider">
                Tags:
              </span>
              <div className="flex flex-wrap gap-2">
                {bookDetail?.tags?.map((tag, index) => (
                  <div
                    key={index}
                    className="px-2.5 py-1 bg-purple-500/10 text-[#8b5cf6] font-bold text-[10px] tracking-wider uppercase rounded-md border border-purple-500/10"
                  >
                    #{tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-5 space-y-3 text-xs sm:text-sm font-medium">
              <div className="grid grid-cols-2 max-w-sm">
                <span className="text-slate-500 font-bold uppercase tracking-wider">
                  Number of Pages:
                </span>
                <span className="text-slate-200 font-semibold">
                  {bookDetail?.totalPages || "N/A"}
                </span>
              </div>
              <div className="grid grid-cols-2 max-w-sm">
                <span className="text-slate-500 font-bold uppercase tracking-wider">
                  Publisher:
                </span>
                <span className="text-slate-200 font-semibold">
                  {bookDetail?.publisher || "N/A"}
                </span>
              </div>
              <div className="grid grid-cols-2 max-w-sm">
                <span className="text-slate-500 font-bold uppercase tracking-wider">
                  Year of Publishing:
                </span>
                <span className="text-slate-200 font-semibold">
                  {bookDetail?.yearOfPublishing || "N/A"}
                </span>
              </div>
              <div className="grid grid-cols-2 max-w-sm">
                <span className="text-slate-500 font-bold uppercase tracking-wider">
                  Rating:
                </span>
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <span>{bookDetail?.rating}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ⚡ অ্যাকশন বাটনস (Wishlist & Read - active scale ইফেক্ট সহ) */}
            <div className="pt-6 flex flex-wrap gap-4">
              <ReadBookActionableButton key={bookDetail?.bookId} bookDetail={bookDetail} />
              <button className="px-5 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-xs tracking-widest rounded-xl shadow-lg shadow-purple-950/50 hover:shadow-purple-500/20 transition-all uppercase active:scale-[0.95]">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
