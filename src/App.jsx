import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { fetchColors } from "@redux/colorActions";

import {
  ColorList,
  AddColorForm,
  ColorPaletteDescription,
} from "@components/ColorPalette";

import { Loader, NavBar, Divider } from "@components/UI";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.colors);

  useEffect(() => {
    dispatch(fetchColors());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="flex flex-col  h-[100dvh]">
      <NavBar />
      <main className="flex items-center gap-2 border-r-2 xl:flex-row flex-col">
        <section className="flex justify-center flex-col p-4">
          <ToastContainer position="top-center" autoClose={3000} />
          <ColorPaletteDescription />
          <AddColorForm />
        </section>
        <Divider />
        <ColorList />
      </main>
    </main>
  );
}

export default App;
