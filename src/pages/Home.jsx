import Nav from "../components/Nav";
import rocketbad from "../img/rocketdab.png";
import Testomanial from "../components/Testomanial";
import Contacts from "../components/Contacts";
import Rockets from "../components/Rockets";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen dark:bg-black dark:text-white">
      <Nav />
      <main className="max-w-4xl mx-auto ">
        <section
          id="hero"
          className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
        >
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-   4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
              We Blody Go{" "}
              <span className="text-indigo-700 dark:text-indigo-300">
                Where No Rocket{" "}
              </span>
              Has Gone Before ...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-00">
              we're building a rocket for the next century today from the moon
              to mars,jubiter and beund
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-00">
              Think Acme Rockets.
            </p>
          </article>
          <img src={rocketbad} alt=" rocket dab" className="w-1/2 " />
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <Rockets />
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <Testomanial />

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
