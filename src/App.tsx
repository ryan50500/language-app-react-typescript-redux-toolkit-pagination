import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store"; // Import the RootState type
import FilterLogic from "./components/FilterLogic";
import Filters from "./components/Filters";
import Modal from "./components/Modal";
import BackgroundOverlay from "./components/BackgroundOverlay";

function App() {
  const modal = useSelector((state: RootState) => state.modal.showModal);
  return (
    <>
      {modal && <BackgroundOverlay />}
      {modal && <Modal />}
      <Filters />
      <FilterLogic />
    </>
  );
}

export default App;
