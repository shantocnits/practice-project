import Card from "@/components/card";
import CardMap from "@/components/cardMap";
import Data from "../components/data.json";

const Blog = () => {
  // CardMap page - Mapping data to components.....................................
  // Loop System .....
  // const items = Data.map((item, index) => (
  //   <CardMap
  //     key={index}
  //     title={item.title}
  //     desc={item.desc}
  //     dateYear={item.dateYear}
  //   />
  // ));

  // Map System..........
  let items = [];
  items = Data.map((item, index) => (
    <CardMap
      key={index}
      title={item.title}
      desc={item.desc}
      dateYear={item.dateYear}
    />
  ));
  // CardMap page - Mapping data to components.....................................

  return (
    <>
      {/* Page Hero Start */}
      <div className="hero">
        <div className="page-hero py-[50px] bg-[#E1DBF6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              <h2 className="text-2xl text-center sm:text-3xl font-semibold text-black leading-tight">
                Blog
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page Hero End */}

      {/* Props & Destructuring Start */}
      <div className="props py-[60px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className=" text-black text-3xl md:text-4xl font-bold pb-5">
            Props & Destructuring
          </h2>

          <div className="card-box grid md:grid-cols-3 gap-4 items-center">
            <Card
              titleText="My name Shanto"
              descText="I am web designer"
              dateYear="06/10/2025"
            />
            <Card
              titleText="My name Arafat"
              descText="I am web UI/UX designer"
              dateYear="06/10/2025"
            />
            <Card
              titleText="My name Fahim"
              descText="I am app developer"
              dateYear="06/10/2025"
            />
          </div>
        </div>
      </div>
      {/* Props & Destructuring End */}

      {/* Mapping data to components Start */}
      <div className="mapping py-[60px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className=" text-black text-3xl md:text-4xl font-bold pb-5">
            Mapping data to components
          </h2>

          <div className="card-box grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            {/* <CardMap title={Data[0].title} desc={Data[0].desc} /> */}
            {items}
          </div>
        </div>
      </div>

      {/* Mapping data to components End */}
    </>
  );
};

export default Blog;
