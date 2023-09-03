import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Repo from "./Repo";
const MyRepo = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    fetch("https://api.github.com/users/codabytez/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok. Check your internet connection."
          );
        }
        return response.json();
      })
      .then((data) => {
        setUser((prevUser) => [...prevUser, ...data]);
        localStorage.setItem("fetchedData", JSON.stringify([...user, ...data]));
        setDone(true);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError("Failed to fetch data. Check your internet connection.");
      });
  }, []);

  const userFil = user.filter(
    (user) =>
      user.id === 586013344 ||
      user.id === 683332194 ||
      user.id === 684163947 ||
      user.id === 583286106
  );

  return (
    <div
      className={`${done && userFil.length > 0 ? "grid" : ""} lg:grid-cols-2`}
    >
      {!done ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : userFil.length > 0 ? (
        userFil.map(
          ({
            id,
            name,
            language = "none",
            description = "No Description",
            license,
            visibility,
            html_url,
          }) => {
            const licenseName = license?.name || "No License";
            const descriptionName = description || "No Description";

            return (
              <div
                className="bg-primary text-secondary  m-6 rounded-3xl transition duration-200 transform hover:scale-105"
                key={id}
              >
                <Repo
                  name={name}
                  visibility={visibility}
                  description={descriptionName}
                  repoLicense={licenseName}
                  language={language}
                  url={html_url}
                />
              </div>
            );
          }
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MyRepo;

const Loading = () => {
  return (
    <div className=" bg-primary rounded-2xl m-20 flex p-10 justify-center items-center select-none">
      {" "}
      <span className="font-bold text-2xl pr-4 text-secondary">Loading</span>
      <ReactLoading type={"spinningBubbles"} color={"#CB92B1"} />
    </div>
  );
};

const Error = ({ error }) => {
  return (
    <>
      <p className="bg-primary rounded-2xl m-20 flex p-10 justify-center items-center text-tertiary select-none">
        <span className="text-4xl pr-4">🥱</span>
        {error}
      </p>
    </>
  );
};
