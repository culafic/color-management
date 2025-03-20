import { useSelector } from "react-redux";
import { FilterColors } from "@components/ColorPalette";

const NavBar = () => {
  const { currentColorHex } = useSelector((state) => state.colors);

  return (
    <nav
      className="border-gray-200"
      style={{ backgroundColor: currentColorHex }}
    >
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-2 justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <FilterColors />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
