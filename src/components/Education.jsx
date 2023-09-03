import { education } from "./credentials";
import Credential from "./Credential";

const Education = () => {
  return (
    <div className="relative">
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
