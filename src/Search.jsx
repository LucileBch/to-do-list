const Search = ({ list, setList, search, setSearch }) => {
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    const newList = [];

    if (list.includes(search)) {
      newList.push(search);
      setList(newList);
    } else {
      return list;
    }
  };

  return (
    <div>
      <input
        value={search}
        type="text"
        placeholder="search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
