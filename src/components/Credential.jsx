// import credentials from './credentials'

const Credential = ({ title, duration, name }) => {
  return (
    <>
      <li className="p-1 ml-10 list-disc text-lg marker:text-home">
        <h4 className="font-bold text-xs">{title}</h4>
        <p className="font-extralight text-[10px] leading-4">{duration}</p>
        <p className="text-[10px] leading-4">{name}</p>
      </li>
    </>
  );
};

export default Credential;
