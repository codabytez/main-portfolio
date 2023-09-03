import Folder from "../assets/folder.svg";
import Star from "../assets/star.svg";
import Branch from "../assets/git-branch.svg";

const Repo = ({
  name,
  description,
  stars,
  language,
  visibility,
  url,
  branch,
}) => {
  return (
    <>
      <div className="text-sm transition duration-300 p-6 bg-primary text-secondary  m-6 rounded-3xl transform hover:scale-105">
        <div className="flex pb-2 ">
          <img src={Folder} alt="Folder Img" />
          <div className="flex">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <h3 className="pl-5 text-base font-bold">{name} </h3>
            </a>
            <span className="text-xs ml-3 border px-2 py-1 rounded-3xl border-secondary">
              {visibility}
            </span>
          </div>
        </div>
        <p className="py-4 h-[50%]">{description}</p>

        <div className="flex justify-between pt-2 ">
          <div className="flex py-1">
            <div className="flex items-center pr-5">
              <img src={Star} alt="Star Img" />
              <span className="pl-3">{stars}</span>
            </div>
            <div className="flex items-center">
              <img src={Branch} alt="Branch Img" />
              <span className="pl-3">{branch}</span>
            </div>
          </div>
          <div className="flex">
            <span
              className={`w-4 h-4 rounded-full ${
                language && language.toLowerCase()
              }`}
            ></span>
            <span className="pl-2">{language}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repo;
