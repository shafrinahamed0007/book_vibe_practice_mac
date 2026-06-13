"use client";

import { useState } from "react";

const ReadBookActionableButton = (currentBook) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const hanleMarkAsRead = (currentBook) => {
    // step-1: Store Book id or store book oject
    // step-2: where to store: array or collection
    // step 3: if the book is already exist then show aallBooks alert or toast
    // step 4: if not then add the book in the array or collection
    console.log("Current Book: ", currentBook);
    const isExistBook = storedBooks.find((book) => book.bookId == currentBook.bookId);

    if (isExistBook) {
      alert("The book is already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
    }
  };
  return (
    <div>
      <button
        onClick={() => hanleMarkAsRead(currentBook)}
        className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-extrabold text-xs tracking-widest rounded-xl transition-all uppercase active:scale-[0.95]"
      >
        Mark As Read
      </button>
    </div>
  );
};

export default ReadBookActionableButton;
