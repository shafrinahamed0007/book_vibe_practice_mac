
const AllBooks = async () => {
  const allBooks = await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json(),
  );
  console.log("All Books: ", allBooks);
  return <div></div>;
};

export default AllBooks;
