import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
        tempore quos veritatis fuga, totam optio facilis et possimus at officiis
        accusamus reprehenderit. At quisquam cum deserunt aut tempora culpa
        praesentium?
      </p>
      <Feed />
    </section>
  );
};

export default Home;
