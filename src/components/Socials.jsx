import SocialHandle from "./SocialHandle";
import MapPin from "../assets/map-pin.svg";
import Briefcase from "../assets/briefcase.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Mail from "../assets/mail.svg";

const Links = () => {
  return (
    <div>
      <SocialHandle src={MapPin} link="" text="Nigeria" />
      <SocialHandle
        src={Briefcase}
        link="https://www.hausba.com"
        text="Hausba"
      />
      <SocialHandle
        src={Github}
        link="https://www.github.com/codabytez"
        text="codabytez"
      />
      <SocialHandle
        src={Linkedin}
        link="https://www.likedin.com/in/codabytez/"
        text="codabytez"
      />
      <SocialHandle
        src={Twitter}
        link="https://www.x.com/codabytez"
        text="codabytez"
      />
      <SocialHandle
        src={Mail}
        link="mailto:chidiobinna20@gmail.com"
        text="chidiobinna20@gmail.com"
      />
    </div>
  );
};

export default Links;
