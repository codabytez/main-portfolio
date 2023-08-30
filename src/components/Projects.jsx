const Projects = ({ link, name, src, description }) => {
  return (
    <div className="text-center">
      {/* <a href={link}> */}
      <h3 className="text-center text-lg font-bold pb-2">{name}</h3>
      <div className="flex justify-center m-auto p-2">
        <img
          className="w-[200px] aspect-square border rounded-[100px]"
          src={src}
          alt={`${src} Project Img`}
        />
      </div>
      <p className="text-sm pt-2">{description}</p>
      {/* </a> */}
    </div>
  );
};

export default Projects;
