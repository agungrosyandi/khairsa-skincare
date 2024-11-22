import { useEffect } from "react";
import MainHome from "../pages/MainHome";

export default function Children() {
  const smoothScroolSnap = () => {
    const container = document.querySelector("main");
    const items = document.querySelectorAll("section");

    container.addEventListener("wheel", (event) => {
      event.preventDefault();
      const delta = event.deltaY;

      container.scrollBy({
        top: delta,
        behavior: "smooth",
      });
    });
  };

  useEffect(() => {
    console.log("smooth scrool is working");
    smoothScroolSnap();
  }, []);

  return <MainHome />;
}
