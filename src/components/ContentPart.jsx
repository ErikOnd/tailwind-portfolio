import React from "react";
import HeaderComponent from "./HeaderComponent";
import AboutMeComponent from "./AboutMeComponent";
import ProjectsComponent from "./ProjectsComponent";
import ContactForm from "./ContactForm";

const ContentPart = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <AboutMeComponent></AboutMeComponent>
      <ProjectsComponent></ProjectsComponent>
      <ContactForm></ContactForm>
    </>
  );
};

export default ContentPart;
