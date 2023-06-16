const SecureMoneySection = () => {
  return (
    <section className="flex justify-center ">
      <div className="px-5 max-w-6xl">
        <div className=" bg-my-light-grey rounded-xl lg:flex ">
          <div className="p-10 pb-0 lg:w-1/2">
            <h1 className="text-4xl font-cabin font-semibold">
              Secure your money with Escrow.
            </h1>
            <p className="my-4 text-xl font-light text-gray-600">
              Spense uses Escrow to secure all payments. We believe Escrow
              offers the highest level of security for your payments, so you
              never need to worry about scams.
            </p>
            <a className=" underline underline-offset-2" href="#">
              Learn more about Escrow &#8594;
            </a>
          </div>
          <div className="flex justify-center lg:w-1/2">
            <img className="" src="/src/assets/Phone (Mobile).png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureMoneySection;
