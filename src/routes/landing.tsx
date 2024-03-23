import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons/faSquare";
import { UnauthLayout } from "../components/unauthLayout";

const Landing = () => {
  return (
    <>
      <UnauthLayout>
        <main className="m-6 md:m-10 2xl:m-24">
          <section className="md:min-h-screen flex justify-around md:gap-10 mb-10">
            <div className="text-lg flex flex-col items-start gap-4 lg:text-lg xl:gap-8">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium">
                Craft your career with confidence
              </h1>
              <div>
                <p className="mb-2">
                  Make yourself a{" "}
                  <span className="text-custom-orange">customizable</span> CV!
                </p>
                <p className="max-w-[600px]">
                  Our CV-making service is dedicated to creating well-crafted
                  CVs, providing{" "}
                  <span className="text-custom-orange">high-quality</span> and
                  personalized{" "}
                  <span className="text-custom-orange">solutions</span> to help
                  you advance in your career.
                </p>
              </div>
              <button className="rounded py-3 px-5 mt-4 text-xl text-white bg-custom-blue hover:bg-custom-light-blue transition-all">
                Create Your CV
              </button>
            </div>
            <div>
              <div className="hidden md:block relative w-[22rem] h-[28rem] xl:w-[26rem] xl:h-[32rem]">
                <div className="absolute bg-white ring-8 ring-custom-blue w-48 h-72 xl:w-56 xl:h-80 right-0"></div>
                <div className="absolute bg-white ring-8 ring-custom-orange w-48 h-72 xl:w-56 xl:h-80 top-14 left-0 z-10"></div>
                <div className="absolute bg-white ring-8 ring-custom-blue w-48 h-72 xl:w-56 xl:h-80 right-8 bottom-0"></div>
              </div>
            </div>
          </section>
          <section>
            <ol className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <FontAwesomeIcon icon={faSquare} color="#143C57" />
                <p>
                  Create your professional resume{" "}
                  <span className="text-custom-orange">effortlessly</span> with
                  our CV maker. No more struggling with formatting or layout -
                  our platform automates these tasks so you can focus on what
                  really matters - your content.
                </p>
              </li>
              <li className="flex items-center gap-4">
                <FontAwesomeIcon icon={faSquare} color="#143C57" />
                <p>
                  <span className="text-custom-orange">Easy-to-Use</span>{" "}
                  Interface: Our website features an{" "}
                  <span className="text-custom-orange">intuitive</span>{" "}
                  interface for easy navigation. Just input your information,
                  and our platform will handle the rest.
                </p>
              </li>
              <li className="flex items-center gap-4">
                <FontAwesomeIcon icon={faSquare} color="#143C57" />
                <p>
                  Functional Tools: From{" "}
                  <span className="text-custom-orange">customizable</span>{" "}
                  templates to pre-written suggestions, our CV maker offers a
                  range of functional tools to enhance your resume.{" "}
                  <span className="text-custom-orange">Experiment</span> with
                  different layouts, fonts, and colors to create a CV that
                  reflects your personality and professionalism.
                </p>
              </li>
              <li className="flex items-center gap-4">
                <FontAwesomeIcon icon={faSquare} color="#143C57" />
                <p>
                  Time-Saving: Our CV maker{" "}
                  <span className="text-custom-orange">simplifies</span> the
                  process of creating a resume, saving you valuable time.
                  Instead of spending hours formatting and editing, our platform
                  allows you to create your resume quickly and{" "}
                  <span className="text-custom-orange">efficiently.</span>
                </p>
              </li>
            </ol>
          </section>
        </main>
      </UnauthLayout>
    </>
  );
};

export default Landing;
