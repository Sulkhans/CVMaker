import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};
export const UnauthLayout = ({ children }: Props) => {
  const navItems = ["Home", "CV templates", "CV guide"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="h-24 flex items-center relative md:px-10 px-2 bg-navigation bg-cover bg-center bg-no-repeat">
        <div className="flex w-full flex-wrap items-center justify-between md:justify-end mx-auto gap-6">
          <div className="md:px-0 px-2 relative flex w-full md:w-auto justify-between md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <button
              type="button"
              className="text-white text-base border border-custom-orange bg-custom-orange hover:bg-custom-dark-orange focus:outline-none font-medium px-5 md:px-10 py-2 text-center"
            >
              Log In
            </button>
          </div>
          <div
            className={`md:hidden bg-custom-blue overflow-hidden h-[calc(100vh-96px)] absolute top-full flex items-start justify-left w-full transition duration-200 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full md:hidden"
            }`}
          >
            <ul className="flex flex-col bg-custom-blue font-medium p-4 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="block py-2 w-28 text-white md:text-center md:border-2 md:border-custom-orange md:hover:bg-custom-orange"
                >
                  <Link to="">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`hidden bg-custom-blue items-center justify-left justify-between order-1 md:flex`}
          >
            <ul className="none md:flex bg-custom-blue font-medium p-0 space-x-8 rtl:space-x-reverse flex-row mt-0 border-0">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="block py-2 w-28 text-white md:text-center md:border-2 md:border-custom-orange md:hover:bg-custom-orange"
                >
                  <Link to="">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <footer className="md:px-10 h-36 bg-footer bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className="flex-col md:flex-row w-full flex justify-start gap-6 items-center">
          <button className="text-white text-base border border-custom-orange bg-custom-orange hover:bg-custom-dark-orange focus:outline-none font-medium px-5 md:px-10 py-2 text-center">
            About Us
          </button>
          <div className="flex justify-center py-2 px-5 text-white text-center border-2 border-custom-orange">
            <p>Contact us: examplemail</p>
          </div>
        </div>
      </footer>
    </>
  );
};
