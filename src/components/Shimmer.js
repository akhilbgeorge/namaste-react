const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="w-3xs h-80 m-4 p-4 bg-gray-200 animate-pulse rounded-sm"
        >
          <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
