function Card(props) {
    const {titleText, descText, dateYear} = props;

  return (
    <>
      {/* Props & Destructuring Start */}
      <div className="card border border-black p-3 text-center rounded-md">
        <h3 className="title text-black text-[20px] font-semibold">
          {titleText}
        </h3>
        <p className="desc text-blue-500">{descText}</p>
        <span className="date text-red-500">{dateYear}</span>
      </div>
      {/* Props & Destructuring End */}
    </>
  );
}

export default Card;
