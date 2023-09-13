import { education } from "./credentials";
import Credential from "./Credential";

const Education = () => {
  return (
    <div className="relative">
      <div className="h-full w-0.5 bg-[#837E9F] absolute left-[19px]"></div>
      <ul>
        {education.map(({ id, title, duration, school }) => (
          <Credential
            key={id}
            title={title}
            duration={duration}
            name={school}
          />
        ))}
      </ul>
    </div>
  );
};

export default Education;
