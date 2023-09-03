import SocialHandle from "./SocialHandle";
import { socials } from "./credentials";

const Links = () => {
  return (
    <div>
      {socials.map((social) => (
        <SocialHandle
          key={social.id}
          src={social.src}
          link={social.link}
          text={social.text}
          test={social.test}
        />
      ))}
    </div>
  );
};

export default Links;
