import { useDispatch, useSelector } from "react-redux";
import { deleteColor } from "../redux/colorSlice";

const ColorList = () => {
  const dispatch = useDispatch();
  const { colors, filter } = useSelector((state) => state.colors);

  const filteredColors = colors.filter((color) =>
    color.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 mt-12">
      {filteredColors.map((color) => (
        <div
          key={color.id}
          className="card-shadow flex justify-between items-center rounded-xl
            overflow-hidden
            bg-white
            hover:cursor-pointer
            relative
            w-64
            h-64"
          style={{ backgroundColor: color.hex }}
        >
          <div>
            {color.name} - {color.hex}
          </div>
          <button onClick={() => dispatch(deleteColor(color.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ColorList;
