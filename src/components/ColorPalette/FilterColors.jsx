import { useDispatch } from "react-redux";
import { setFilter } from "@redux/colorSlice";

const FilterColors = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <input
        onChange={handleFilterChange}
        type="text"
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
        placeholder="Search color by name"
      />
    </div>
  );
};

export default FilterColors;
