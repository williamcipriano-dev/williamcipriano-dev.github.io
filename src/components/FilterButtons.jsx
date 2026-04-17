function FilterButtons({ setFilter }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setFilter("all")}>Todos</button>
      <button onClick={() => setFilter("HTML")}>HTML</button>
      <button onClick={() => setFilter("JavaScript")}>
        JavaScript
      </button>
      <button onClick={() => setFilter("Python")}>
        Python
      </button>
    </div>
  );
}

export default FilterButtons;