import { education } from "./credentials";
import Credential from "./Credential";

const Education = () => {
  return (
    <ul className="relative">
      <div className="absolute bg-home h-full w-0.5 left-[23px]"></div>
      {education.map(({ id, title, duration, school }) => (
        <Credential key={id} title={title} duration={duration} name={school} />
      ))}
    </ul>
  );
};

export default Education;
