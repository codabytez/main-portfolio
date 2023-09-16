import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import Education from "./Education";
import Experience from "./Experience";
import InfoSection from "./InfoSection";
import Socials from "./Socials";
import Logo from "./Logo";
import Profile from "./Profile";
import Technologies from "./Technologies";
import Title from "./Title";
import MyProjects from "./MyProjects";
import Footer from "./Footer";
import MyRepo from "./MyRepo";

const githubRepoLink = "https://github.com/codabytez?tab=repositories";
function App() {
  const [scrollingToTop, setScrollingToTop] = useState(false);

  const handleScroll = () => {
    if (scrollingToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }

    setScrollingToTop(!scrollingToTop);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollingToTop(true);
      } else {
        setScrollingToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="md:flex relative max-w-[1400px] m-auto">
        <button
          onClick={handleScroll}
          className="fixed bottom-4 z-10 right-4 opacity-60 hover:opacity-90 duration-300 ease-in-out p-4 bg-[#837E9F] hover:bg-[#474455] text-white font-semibold shadow-md hover:shadow-2xl transition-all rounded-full"
        >
          {scrollingToTop ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        <div className="md:w-[380px]">
          <InfoSection>
            <Logo />
            <Profile />
          </InfoSection>
          <InfoSection>
            <Socials />
          </InfoSection>
          <InfoSection>
            <Title>Technologies</Title>
            <Technologies />
          </InfoSection>
          <InfoSection>
            <Title>Education</Title>
            <Education />
          </InfoSection>
          <InfoSection>
            <Title>Experience</Title>
            <Experience />
          </InfoSection>
        </div>

        <div className=" md:w-[calc(100%-380px)]">
          <InfoSection>
            <div className="flex justify-between items-center">
              <Title>GitHub Repositories</Title>
              <a
                href={githubRepoLink}
                className="transition-all hover:underline hover:text-[#837E9F]"
              >
                See All
              </a>
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
