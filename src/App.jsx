import { useState, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";

const App = () => {
  const [selectedStack, setSelectedStack] = useState([]);

  // Add technology
  const handleAdd = (technologyInfo) => {
    const alreadyAdded = selectedStack.some(
      (stackItem) => stackItem.id === technologyInfo.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technologyInfo.name} is already in your stack`
      );
      return;
    }

    setSelectedStack((previousStack) => [
      ...previousStack,
      technologyInfo,
    ]);

    toast.success(
      `${technologyInfo.name} added to your stack`
    );
  };

  // Remove technology
  const handleRemove = (technologyId) => {
    const removedTechnology = selectedStack.find(
      (stackItem) => stackItem.id === technologyId
    );

    setSelectedStack((previousStack) =>
      previousStack.filter(
        (stackItem) => stackItem.id !== technologyId
      )
    );

    toast.info(
      `${removedTechnology.name} removed from your stack`
    );
  };

  // Remove all
  const handleClear = () => {
    setSelectedStack([]);

    toast.info("Your stack has been cleared");
  };

  return (
    <>
      <Navbar />

      <Hero />

      <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Technology Cards */}
        <div className="lg:col-span-2">
          <Suspense fallback={<p>Loading...</p>}>
            <TechnologyList
              selectedStack={selectedStack}
              handleAdd={handleAdd}
            />
          </Suspense>
        </div>

        {/* Your Stack */}
        <StackSidebar
          selectedStack={selectedStack}
          handleRemove={handleRemove}
          handleClear={handleClear}
        />

      </div>

      <Footer />

      <ToastContainer />
    </>
  );
};

export default App;