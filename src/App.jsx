import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";
import FilterColors from "./components/FilterColors";
import { fetchColors } from "@redux/colorActions";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.colors);

  useEffect(() => {
    dispatch(fetchColors());
  }, [dispatch]);

  return (
    <div className="max-w-[1440px] flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-4">Color Manager</h1>
      {loading ? (
        <p>Loading colors...</p>
      ) : (
        <>
          <AddColorForm />
          <FilterColors />
          <ColorList />
        </>
      )}
    </div>
  );
}

export default App;
