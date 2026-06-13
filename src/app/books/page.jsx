import Image from "next/image";
import Link from "next/link";

const BooksPage = async () => {
  const allBooks = await fetch(
    "https://book-vibe-practice-mac.vercel.app/data.json",
  ).then((res) => res.json());
  return (
    <div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 mb-5  gap-2">
        {allBooks.map((book) => (
          <div key={book.bookId}>
            <Link href={`/books/${book?.bookId}`}>
              <div className="card bg-base-100 shadow-sm">
                <figure className="mt-10">
                  <Image
                    src={book?.image}
                    alt={book?.bookName}
                    height={150}
                    width={180}
                  />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title font-bold text-2xl">
                    {book?.bookName}
                  </h2>

                  <div className="flex gap-2">
                    {book?.tags.map((tag) => (
                      <div
                        key={tag?.name}
                        className="gap-2  badge badge-success"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <p className="font-semibold">{book?.author}</p>

                  <p>
                    ---------------------------------------------------------
                  </p>
                  <div className="flex  place-content-between">
                    <div className="font-semibold">{book?.category}</div>
                    <div>{book?.rating} *</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
