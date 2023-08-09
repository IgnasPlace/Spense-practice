import heroImgMobile from "/assets/Hero(Mobile).png";
import heroImgTablet from "/assets/Hero(Tablet).png";
import heroImgDesktop from "/assets/Hero(Desktop).png";
import checkMark from "/assets/Checkmark.svg";
import useWindowSize from "../hooks/useWindowSize.js";

const checkItems = [
  "Receive 99% off the earnings.",
  "Get paid via Debit Card, ACH, or PayPal.",
  "Withdraw your earnings anytime.",
];

const MainSection = () => {
  const deviceWidth = useWindowSize().width;

  let img;
  if (deviceWidth < 600) {
    img = heroImgMobile;
  } else if (deviceWidth < 1024) {
    img = heroImgTablet;
  } else {
    img = heroImgDesktop;
  }

  return (
    <section className="flex justify-center bg-my-light-grey max-w-screen">
      <div className="bg-my-light-grey px-5  max-w-6xl lg:flex lg:flex-row-reverse lg:gap-10 lg:pb-12">
        <img
          src={img}
          alt="Woman working with a laptop in a coffee shop"
          className="mb-12 lg:w-2/5 lg:object-contain lg:mb-0"
        />
        <div className="flex flex-col lg:place-content-center">
          <h1 className="text-5xl font-cabin font-semibold leading-[4rem]">
            Share your unfiltered
            <br /> thoughts. Get paid.
          </h1>
          <p className="my-4 text-2xl font-light text-gray-600">
            Spense is an open platform for individuals to share their thoughts.
            Discuss the topics you love, and get paid for doing{" "}
            <span className="italic">just</span> that.
          </p>
          <ul className="flex flex-col gap-2">
            {checkItems.map((item, i) => {
              return (
                <li key={i} className="text-gray-600 font-bold flex">
                  <img src={checkMark} alt="checkmark" />
                  <p className="pl-4">{item}</p>
                </li>
              );
            })}
          </ul>
          <form className="flex flex-col mt-10 pb-10 gap-4 lg:pb-0 xs:flex-row">
            <input
              type="email"
              placeholder="john@example.com"
              className="input input-bordered input-lg max-w-xs"
            />
            <button className=" bg-black rounded-md text-white font-bold px-6 py-5 hover:bg-gray-700 duration-300 xs:py-auto">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
