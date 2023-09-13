import { experience } from "./credentials";
import Credential from "./Credential";

const Experience = () => {
  return (
    <div className="relative">
      <div className="h-full w-0.5 bg-[#837E9F] absolute left-[19px]"></div>

      <ul>
        {experience.map(({ id, position, duration, company }) => (
          <Credential
            key={id}
            title={position}
            duration={duration}
            name={company}
          />
        ))}
      </ul>
    </div>
  );
};

export default Experience;
