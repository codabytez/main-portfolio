import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Repo from "./Repo";
import axios from "axios";
import { repoName } from "./credentials";
const MyRepo = () => {
  const [repoData, setRepoData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://api.github.com/users/codabytez/repos";

    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        const filteredRepos = response.data
          .filter((repo) => repoName.includes(repo.name))
          .map(async (repo) => {
            const branchResponse = await axios.get(repo.url + "/branches");
            return {
              id: repo.id,
              name: repo.name,
              url: repo.html_url,
              description: repo.description,
              language: repo.language,
              visibility: repo.visibility,
              branches: branchResponse.data.length,
              stars: repo.stargazers_count,
            };
          });

        Promise.all(filteredRepos).then((data) => {
          setRepoData(data);
          setLoading(false);
        });
      })
      .catch((error) => {
        const errorMessage = `Error fetching GitHub data: ${error.message}`;
        setError(errorMessage);
        setLoading(false);
        console.error("Error fetching GitHub data:", error);
      });
  }, []);

  return (
    <div className={`${!loading && !error ? "grid" : ""} lg:grid-cols-2`}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          {repoData.map((repo) => (
            <Repo
              key={repo.id}
              name={repo.name}
              url={repo.url}
              branch={repo.branches}
              stars={repo.stars}
              description={repo.description}
              language={repo.language}
              visibility={repo.visibility}
            />
          ))}
        </>
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
