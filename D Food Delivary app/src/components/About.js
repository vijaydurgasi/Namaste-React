import User from "./User";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <p className="about-text">
        Welcome to <strong>Order At Me</strong> 🍽️
      </p>

      <p className="about-text">
        This is a simple and user-friendly food delivery application inspired by
        platforms like Swiggy and Zomato. The main purpose of this project is to
        understand how real-world food delivery apps work using React.
      </p>

      <h2 className="about-subtitle">What This App Does</h2>
      <ul className="about-list">
        <li>Shows nearby restaurants using live API data</li>
        <li>Allows users to search restaurants by name</li>
        <li>Filters top-rated restaurants</li>
        <li>Provides a clean and responsive UI</li>
      </ul>

      <h2 className="about-subtitle">Why This Project?</h2>
      <p className="about-text">
        This project is built as part of my learning journey in React. It helped
        me understand core concepts like components, props, state, hooks,
        routing, and API calls.
      </p>

      <h2 className="about-subtitle">Technologies Used</h2>
      <ul className="about-list">
        <li>React</li>
        <li>JavaScript (ES6)</li>
        <li>CSS</li>
        <li>Parcel Bundler</li>
      </ul>

      <h2 className="about-subtitle">About the Developer</h2>
      <p className="about-text">
        Hi 👋 I’m <strong>Vijay Durgasi</strong>, a passionate learner building
        real-world projects to strengthen my frontend development skills. This
        app is part of my <strong>Namaste React</strong> journey.
      </p>

      <User />
    </div>
  );
};

export default About;