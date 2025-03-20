import { setColors, setLoading } from "@redux/colorSlice";
import { toast } from "react-toastify";

const fetchColorsFromAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Pale Gold", hex: "#E9C698" },
        { id: 2, name: "Coral", hex: "#FE8856" },
        { id: 3, name: "Alizarin", hex: "#E0404B" },
        { id: 4, name: "Purple", hex: "#6C3F77" },
        { id: 5, name: "Rich Lilac", hex: "#AA64D6" },
        { id: 6, name: "Pale Chestnut", hex: "#D9B5B9" },
      ]);
    }, 1000);
  });
};

export const fetchColors = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const colors = await fetchColorsFromAPI();
    dispatch(setColors(colors));
  } catch (error) {
    console.error("Failed to fetch colors:", error);
    toast("Failed to fetch colors");
  } finally {
    dispatch(setLoading(false));
  }
};
