import { useSelector } from "react-redux";
import { ColorBadge } from "@components/ColorPalette";

const ColorList = () => {
  const { colors, filter } = useSelector((state) => state.colors);

  const filteredColors = colors.filter((color) =>
    color.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 md:gap-5">
      {filteredColors.map((color) => (
        <ColorBadge color={color} key={color.id} />
      ))}
    </section>
  );
};

export default ColorList;
