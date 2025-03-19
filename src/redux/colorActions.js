import { setColors, setLoading } from "./colorSlice";

const fetchColorsFromAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Red", hex: "#FF0000" },
        { id: 2, name: "Green", hex: "#00FF00" },
        { id: 3, name: "Blue", hex: "#0000FF" },
        { id: 4, name: "Yellow", hex: "#FFFF00" },
        { id: 5, name: "Purple", hex: "#800080" },
        { id: 6, name: "Cyan", hex: "#00FFFF" },
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
  } finally {
    dispatch(setLoading(false));
  }
};
