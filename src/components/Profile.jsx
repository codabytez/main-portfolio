const Profile = () => {
  const resume = "https://obinnachidi-resume.vercel.app";
  return (
    <div className="py-4">
      <h1 className="text-2xl text-center font-bold">Obinna Chidi</h1>
      <p className="text-center pt-2 text-sm font-light">Software Engineer</p>
      <a className="mt-4 py-2 px-4 text-sm rounded-xl border border-secondary flex w-max justify-center text-center m-auto transition duration-300 hover:bg-secondary hover:text-primary select-none">
        VIEW RESUME
      </a>
    </div>
  );
};

export default Profile;
