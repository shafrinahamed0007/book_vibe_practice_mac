import Image from "next/image";

const AllBooks = async () => {
  const promiseBooks = await fetch(
    "https://book-vibe-practice-mac.vercel.app/data.json",
  ).then((res) => res.json());

  return (
    <div>
      <h2 className="text-2xl font-bold flex justify-center my-5">All Books</h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 mb-5  gap-2">
        {promiseBooks.map((book) => (
          <div key={book.bookId}>
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
                    <div key={tag?.name} className="gap-2  badge badge-success">
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="font-semibold">{book?.author}</p>

                <p>---------------------------------------------------------</p>
                <div className="flex  place-content-between">
                  <div className="font-semibold">
                    {book?.category}
                  </div>
                  <div>
                    {book?.rating} *
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
