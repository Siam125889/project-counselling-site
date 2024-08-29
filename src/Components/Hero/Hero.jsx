const Hero = ({ img }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="lg:max-w-[600px]" src={img} alt="" />
        <div className="flex flex-col lg:items-start">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6 text-left">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
