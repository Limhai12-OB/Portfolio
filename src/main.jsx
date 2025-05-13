import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Me from "./component/me";
import AboutMe from "./Component/MySelf";
import ProjectCard from "./Component/ProjectCard";
import ContactMe from "./Component/ContactMe";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
    <Me />
    <AboutMe />
    <ProjectCard/>
    <ContactMe/>

    </div>
  </StrictMode>
);
