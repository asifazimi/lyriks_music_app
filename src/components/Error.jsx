const Error = ({ title }) => (
  <div className="w-full flex flex-col justify-center items-center">
    <h1 className="font-bold text-2xl text-white mt-2">{title}</h1>
    {!title && (
      <h1 className="font-bold text-2xl text-white mt-2">
        Something went wrong. Please try again.
      </h1>
    )}
  </div>
);

export default Error;
