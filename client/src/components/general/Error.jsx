function Error({ error }) {
  return (
    <div className="sectionBottomMargin sectionTopMargin text-center flex flex-col gap-10 text-xl">
      <p className="text-red-500 font-semibold">
        Error: {error.status || " Something went wrong 💥💥"}
      </p>
      <p>Details: {error.message}</p>
    </div>
  );
}

export default Error;
