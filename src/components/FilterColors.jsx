import { useDispatch } from "react-redux";
import { setFilter } from "../redux/colorSlice";

const FilterColors = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="Filter by name"
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default FilterColors;
