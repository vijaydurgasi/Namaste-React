import User from "./User";

const About = () => {
  return (
    <div className="max-w-[900px] mx-auto my-10 p-5 font-sans">

      <h1 className="text-4xl mb-5 text-[#ff5200] font-bold">
        About Us
      </h1>

      <p className="text-base leading-relaxed text-gray-700">
        Welcome to <strong>Order At Me</strong> 🍽️
      </p>

      <p className="text-base leading-relaxed text-gray-700 mt-3">
        This is a simple and user-friendly food delivery application inspired by
        platforms like Swiggy and Zomato. The main purpose of this project is to
        understand how real-world food delivery apps work using React.
      </p>

      <h2 className="text-xl mt-6 mb-2 font-semibold">
        What This App Does
      </h2>

      <ul className="ml-5 leading-loose list-disc">
        <li>Shows nearby restaurants using live API data</li>
        <li>Allows users to search restaurants by name</li>
        <li>Filters top-rated restaurants</li>
        <li>Provides a clean and responsive UI</li>
      </ul>

      <h2 className="text-xl mt-6 mb-2 font-semibold">
        Why This Project?
      </h2>

      <p className="text-base leading-relaxed text-gray-700">
        This project is built as part of my learning journey in React. It helped
        me understand core concepts like components, props, state, hooks,
        routing, and API calls.
      </p>

      <h2 className="text-xl mt-6 mb-2 font-semibold">
        Technologies Used
      </h2>

      <ul className="ml-5 leading-loose list-disc">
        <li>React</li>
        <li>JavaScript (ES6)</li>
        <li>CSS</li>
        <li>Parcel Bundler</li>
      </ul>

      <h2 className="text-xl mt-6 mb-2 font-semibold">
        About the Developer
      </h2>

      <p className="text-base leading-relaxed text-gray-700">
        Hi 👋 I’m <strong>Vijay Durgasi</strong>, a passionate learner building
        real-world projects to strengthen my frontend development skills. This
        app is part of my <strong>Namaste React</strong> journey.
      </p>

      <User />
    </div>
  );
};

export default About;
