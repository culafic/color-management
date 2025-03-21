import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { darkenColor, getContrastColor } from "@helpers/color.helper";
import { deleteColor } from "@redux/colorSlice";
import DeleteModal from "@components/Modal/DeleteModal";

const ColorBadge = ({ color }) => {
  const dispatch = useDispatch();
  const [animationClass, setAnimationClass] = useState("color-card-in");
  const deleteDialogRef = useRef(null);

  const borderColor = darkenColor(color.hex);
  const fontColor = getContrastColor(color.hex);

  const openDeleteModal = () => deleteDialogRef.current?.showModal();
  const closeDeleteModal = () => deleteDialogRef.current?.close();

  const handleDelete = () => {
    setAnimationClass("color-card-out");
    setTimeout(() => {
      dispatch(deleteColor(color.id));
    }, 300);
  };

  return (
    <main
      className={`${animationClass} p-5 rounded-2xl shadow-2xl flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105`}
      style={{
        background: `linear-gradient(45deg, ${color.hex}, ${borderColor})`,
      }}
    >
      <dialog className="" ref={deleteDialogRef}>
        <DeleteModal
          closeDialog={closeDeleteModal}
          handleDelete={handleDelete}
        />
      </dialog>
      <section
        key={color.id}
        className="rounded-[50%] h-20 w-44 shadow-lg flex items-center justify-center"
        style={{
          backgroundColor: color.hex,
          border: `3px solid ${borderColor}`,
        }}
      >
        <div className="flex items-center justify-center flex-col">
          <label
            className="uppercase font-bold text-2xl opacity-30"
            style={{ color: fontColor }}
          >
            {color.hex}
          </label>
        </div>
      </section>
      <label
        className="uppercase font-bold text-normal opacity-30 my-2"
        style={{ color: fontColor }}
      >
        {color.name}
      </label>
      <button
        className="shadow-lg py-2 px-6 cursor-pointer"
        style={{ color: fontColor }}
        onClick={() => openDeleteModal()}
      >
        Delete
      </button>
    </main>
  );
};

export default ColorBadge;
