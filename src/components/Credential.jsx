// import credentials from './credentials'

const Credential = ({ title, duration, name }) => {
  return (
    <>
      <li className="m-2 mx-10 list-disc text-xl marker:text-home">
        <h4 className="font-bold text-xs">{title}</h4>
        <p className="font-extralight text-[10px] leading-5">{duration}</p>
        <p className="text-[10px] leading-5">{name}</p>
      </li>
    </>
  );
};

export default Credential;
