const Link = ({ src, link, text, test }) => {
  return (
    <div className="flex justify-start p-2 items-center">
      <img src={src} alt={`${src} 'img'`} />
      <a className="ml-4 text-xs hover:underline" href={link}>
        {text}
      </a>
      <p className="text-xs hover:underline">{test}</p>
    </div>
  );
};

export default Link;
