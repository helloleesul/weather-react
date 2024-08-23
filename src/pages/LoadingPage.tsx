const LoadingPage = () => {
  return (
    <div className="absolute inset-[50%_auto_auto_50%] flex gap-3 -translate-x-1/2 -translate-y-1/2">
      <div className="h-8 w-8 bg-white rounded-full animate-ping [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-white rounded-full animate-ping [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-white rounded-full animate-ping"></div>
    </div>
  );
};

export default LoadingPage;
