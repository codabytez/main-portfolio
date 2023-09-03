import { experience } from "./credentials";
import Credential from "./Credential";

const Experience = () => {
  return (
    <div className="relative">
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
