import Folder from "../assets/folder.svg";

const Repo = ({
  name,
  description,
  repoLicense,
  language,
  visibility,
  url,
}) => {
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="text-sm transition duration-300 p-6">
          <div className="flex pb-2">
            <img src={Folder} alt="Folder Img" />
            <h3 className="pl-5 text-base font-bold">
              {name}{" "}
              <span className="text-xs ml-3 border px-2 py-1 rounded-3xl border-secondary">
                {visibility}
              </span>
            </h3>
          </div>
          <p className="py-2">{description}</p>

          <div className="flex justify-between pt-2">
            <div className="flex">
              <svg
                aria-hidden="true"
                height="20"
                viewBox="0 0 16 16"
                version="1.1"
                width="20"
                data-view-component="true"
                className="fill-secondary"
              >
                <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>
              </svg>
              <span className="pl-5">{repoLicense}</span>
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
      </a>
    </>
  );
};

export default Repo;
