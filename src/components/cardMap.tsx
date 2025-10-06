const CardMap = (props) => {
  // Props Start..
  const { title, desc, dateYear } = props;

  return (
    <>
      {/* Mapping data to components Start */}
      <div className="card border border-black p-3 text-center rounded-md">
        <h3 className="title text-black text-[20px] font-semibold">{title}</h3>
        <p className="desc text-blue-500">{desc}</p>
        <span className="date text-red-500">{dateYear}</span>
      </div>
      {/* Mapping data to components End */}
    </>
  );
};

export default CardMap;
