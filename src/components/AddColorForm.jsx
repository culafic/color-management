import { useState } from "react";
import { useDispatch } from "react-redux";
import { addColor } from "@redux/colorSlice";

const AddColorForm = () => {
  const [colorName, setColorName] = useState("");
  const [colorHex, setColorHex] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey ", e.target.value);
    if (/^#[0-9A-Fa-f]{6}$/i.test(colorHex)) {
      dispatch(addColor({ id: Date.now(), name: colorName, hex: colorHex }));
      setColorName("");
      setColorHex("");
    } else {
      alert("Invalid hex value");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
        placeholder="Color Name"
        className="p-2 border rounded w-full"
        required
      />
      <input
        type="text"
        value={colorHex}
        onChange={(e) => setColorHex(e.target.value)}
        placeholder="Hex Value (#FFFFFF)"
        className="p-2 border rounded w-full"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Color
      </button>
    </form>
  );
};

export default AddColorForm;
