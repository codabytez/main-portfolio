const Link = ({ src, link, text }) => {
  return (
    <div className="flex justify-start p-2 items-center">
      <img src={src} alt={`${src} 'img'`} />
      <a className="ml-4 text-xs" href={link}>
        {text}
      </a>
    </div>
  );
};

export default Link;
