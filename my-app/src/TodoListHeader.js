const TodoListHeader = ({
  undoneCount,
  filterDone,
  setFilterDone,
  currentLanguage,
}) => {
  const toggleFilter = () => {
    const newFilter = !filterDone;
    setFilterDone(newFilter);
    const newURL = new URL(window.location);
    if (newFilter) {
      newURL.searchParams.delete("withDone");
    } else {
      newURL.searchParams.set("withDone", "1");
    }
    window.history.pushState({}, "", newURL);
  };

  return (
    <div className="header">
      <h2>
        {currentLanguage === "en"
          ? `You have ${undoneCount} tasks left!`
          : `Bạn còn ${undoneCount} nhiệm vụ!`}
      </h2>
      <label>
        <input type="checkbox" checked={filterDone} onChange={toggleFilter} />
        {currentLanguage === "en" ? "Not finished only" : "Chỉ chưa hoàn thành"}
      </label>
    </div>
  );
};

export default TodoListHeader;
