const Footer = () => {
  return (
    <div className="flex lg:justify-end">
      <div className="w-full lg:w-[calc(100%-380px)] text-center">
        <p className="text-sm text-secondary p-2 italic font-semibold">
          &copy; <a href="#">Chizzi</a> <span> {new Date().getFullYear()}</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
