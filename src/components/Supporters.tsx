const logos = [
  "Facebook",
  "Dribbble",
  "Youtube",
  "Pinterest",
  "Twitter",
  "Reddit",
  "Google",
  "Slack",
];

const Supporters = () => {
  return (
    <section className="flex justify-center">
      <div className="flex px-5 py-10 gap-4 overflow-x-scroll max-w-6xl ">
        {logos.map((logo, i) => {
          return (
            <img
              key={logo + i}
              src={`/assets/${logo} Logo.png`}
              alt={`${logo} logo`}
              className=" max-h-[1.9rem]"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Supporters;
