const TextEditor = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-5 mt-10 lg:flex lg:flex-row-reverse max-w-6xl">
        <div className="mb-10 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
          <h1 className="text-4xl font-cabin font-semibold">
            A text editor like no other.
          </h1>
          <p className="my-4 text-xl font-light text-gray-600">
            Out text editor pulls you into focus mode with it's simplistic
            design and usability so you can put out your best writings.
          </p>
          <a className=" underline underline-offset-2" href="#">
            Text Editor Live Demo &#8594;
          </a>
        </div>
        <div className="flex justify-center items-center lg:w-1/2">
          <img className="" src="/src/assets/Text Editor.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
