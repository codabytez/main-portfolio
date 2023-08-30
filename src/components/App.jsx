import { useEffect, useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import InfoSection from "./InfoSection";
import Links from "./Links";
import Logo from "./Logo";
import Profile from "./Profile";
import Technologies from "./Technologies";
import Title from "./Title";
import Repo from "./Repo";
import MyProjects from "./MyProjects";
import Footer from "./Footer";
import MyRepo from "./MyRepo";

const githubRepoLink = "https://github.com/codabytez?tab=repositories";
function App() {
  return (
    <div>
      <div className="md:flex relative max-w-[1400px] m-auto">
        <div className=" md:w-[380px]">
          <InfoSection>
            <Logo />
            <Profile />
          </InfoSection>
          <InfoSection>
            <Links />
          </InfoSection>
          <InfoSection>
            <Title>Technologies</Title>
            <Technologies />
          </InfoSection>
          <InfoSection>
            <Title>Experience</Title>
            <Experience />
          </InfoSection>
          <InfoSection>
            <Title>Education</Title>
            <Education />
          </InfoSection>
        </div>

        <div className=" md:w-[calc(100%-380px)]">
          <InfoSection>
            <div className="flex justify-between items-center">
              <Title>GitHub Repositories</Title>
              <a href={githubRepoLink}>See All</a>
            </div>
          </InfoSection>

          <MyRepo />

          <InfoSection>
            <Title>My Projects</Title>
          </InfoSection>
          <MyProjects />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
