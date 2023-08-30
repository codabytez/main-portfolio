// the component is used for displaying the profile, links, education, and experience section.

const InfoSection = ({ children }) => {
  return (
    <div
      className={`bg-primary text-secondary p-6 m-6 rounded-3xl transition duration-200 transform hover:scale-105`}
    >
      {children}
    </div>
  );
};
export default InfoSection;
