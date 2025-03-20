import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { beforeEach, describe, expect, it, vi } from "vitest";
import configureStore from "redux-mock-store";
import { ToastContainer } from "react-toastify";
import { AddColorForm } from "@components/ColorPalette";
import { addColor } from "@redux/colorSlice";

const mockStore = configureStore([]);

describe("AddColorForm", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      colors: { currentColorHex: "#ff0000", colors: [] },
    });
    store.dispatch = vi.fn();
  });

  it("adds a new color when valid input is provided", () => {
    render(
      <Provider store={store}>
        <ToastContainer />
        <AddColorForm />
      </Provider>
    );

    const colorInput = screen.getByLabelText(/pick color/i);
    const nameInput = screen.getByPlaceholderText(/color name/i);
    const submitButton = screen.getByText(/add color/i);

    fireEvent.change(colorInput, { target: { value: "#00ff00" } });
    fireEvent.change(nameInput, { target: { value: "Green" } });
    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledWith(
      addColor({ id: expect.any(Number), name: "Green", hex: "#ff0000" })
    );
  });
});
