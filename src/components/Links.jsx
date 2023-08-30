import Link from "./link";
import MapPin from "../assets/map-pin.svg";
import Briefcase from "../assets/briefcase.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Globe from "../assets/globe.svg";
import Mail from "../assets/mail.svg";

const Links = () => {
  return (
    <div>
      <Link src={MapPin} link="" text="Nigeria" />
      <Link src={Briefcase} link="https://www.hausba.com" text="Hausba" />
      <Link
        src={Github}
        link="https://www.github.com/codabytez"
        text="codabytez"
      />
      <Link
        src={Linkedin}
        link="https://www.likedin.com/in/codabytez/"
        text="codabytez"
      />
      <Link src={Twitter} link="https://www.x.com/codabytez" text="codabytez" />
      <Link
        src={Mail}
        link="mailto:chidiobinna20@gmail.com"
        text="chidiobinna20@gmail.com"
      />
    </div>
  );
};

export default Links;
