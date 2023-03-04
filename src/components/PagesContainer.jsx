import React, { useState } from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

export default function PagesContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Gallery") {
      return <Gallery />;
    }
    if (currentPage === "Home") {
      return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
