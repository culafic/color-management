import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColor, setCurrentColorHex } from "@redux/colorSlice";
import { toast } from "react-toastify";

const AddColorForm = () => {
  const [colorName, setColorName] = useState("");
  const [colorHex, setColorHex] = useState("");

  const { currentColorHex, colors } = useSelector((state) => state.colors);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^#[0-9A-Fa-f]{6}$/i.test(colorHex)) {
      toast("Invalid hex value");
      return;
    }

    const colorExists = colors.some(
      (color) => color.hex.toLowerCase() === colorHex.toLowerCase()
    );

    if (colorExists) {
      toast("Duplicate color! This color is already in your list.");
      return;
    }

    dispatch(
      addColor({ id: Date.now(), name: colorName, hex: currentColorHex })
    );

    setColorName("");
    setColorHex("");
  };

  const handleChangeColor = (value) => {
    setColorHex(value);
    dispatch(setCurrentColorHex(value));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-2/4">
      <label
        htmlFor="hs-color-input"
        className="block text-sm font-medium mb-2"
      >
        Pick color:
      </label>
      <input
        type="color"
        className="p-2  h-12 w-28 block bg-white border border-gray-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none rounded-lg"
        id="hs-color-input"
        onChange={(e) => handleChangeColor(e.target.value)}
        value={colorHex}
        title="Choose your color"
      />
      <input
        type="text"
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
        placeholder="Color Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
        required
      />
      <button
        type="submit"
        className="p-2 text-white rounded cursor-pointer"
        style={{ backgroundColor: currentColorHex }}
      >
        Add Color
      </button>
    </form>
  );
};

export default AddColorForm;
