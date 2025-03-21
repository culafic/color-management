import { useSelector } from "react-redux";
import { ColorBadge } from "@components/ColorPalette";
import { PaginationControls } from "@components/UI";

import { useState } from "react";

const ColorList = () => {
  const { colors, filter } = useSelector((state) => state.colors);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredColors = colors.filter((color) =>
    color.name.toLowerCase().includes(filter.toLowerCase())
  );

  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentColors = filteredColors.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="flex-1 flex-col justify-center items-center">
      {currentColors.length ? (
        <>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 md:gap-5">
            {currentColors.map((color) => (
              <ColorBadge color={color} key={color.id} />
            ))}
          </div>
          <PaginationControls
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={filteredColors.length}
            itemsPerPage={itemsPerPage}
          />
        </>
      ) : (
        <div className="uppercase text-5xl tracking-widest text-center">
          Create your own palette!
        </div>
      )}
    </section>
  );
};

export default ColorList;
