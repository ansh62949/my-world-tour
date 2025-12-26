import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl fade-in-up">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph fade-in-up delay-1">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <NavLink to="/country">
            <button className="btn btn-darken btn-inline bg-white-box fade-in-up delay-2">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
        <div className="hero-image fade-in-right delay-1">
          <img
            src="\images\world copy.png"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
