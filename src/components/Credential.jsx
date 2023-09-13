const Credential = ({ title, duration, name }) => {
  return (
    <>
      <li className="relative p-1 ml-10 flex flex-col gap-1 list-disc text-lg marker:text-home">
        <span className="w-2 h-2 bg-[#837E9F] absolute -left-6 top-3 rounded-full"></span>
        <h4 className="font-bold text-xs">{title}</h4>
        <p className="font-extralight text-[10px] leading-4">{duration}</p>
        <p className="text-[10px] leading-4">{name}</p>
      </li>
    </>
  );
};

export default Credential;
