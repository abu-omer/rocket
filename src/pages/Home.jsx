import Nav from "../components/Nav";
import rocketbad from "../img/rocketdab.png";
import rocketman from "../img/rocketman.png";
import rocketlaunch from "../img/rocketlaunch.png";
import rocketride from "../img/rocketride.png";

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
        <section
          id="rockets"
          className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our rockets
          </h2>
          <ul className="list-non mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="flex flex-col w-2/3 sm:w-5/6 items-center border border-solid border-slate-900 border-grey-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black">
              <img src={rocketman} alt="" className="mb-6 w-1/2" />
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <img src={rocketlaunch} alt="" className="mb-6 w-1/2" />
            </li>
            <li className="flex flex-col w-2/3 sm:w-5/6 items-center border border-solid border-slate-900 dark:border-grey-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
              <img src={rocketride} alt="" className="mb-6 w-1/2" />
            </li>
          </ul>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section
          id="testimonials"
          className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Testimonials
          </h2>
          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                Acme has always been there for me. Their Explorer rocket arrived
                in a wooden crate as expected. Life-long customer! A++ shopping
                experience.
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212;Wile E. Coyote, Genius
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                The Acme Adventurer Rocket has thwarted my Illudium Q-36
                Explosive Space Modulator on several occassions.
                <span className="italic">This makes me very, very angry!</span>
                Nevertheless, K-9 and I have awarded Acme the Martian contract
                for space exploration rockets based on Acme's quality and sturdy
                designs.
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212;Marvin The Martian &amp; K-9
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                I knew I not only wanted &#8212;
                <span className="italic">I needed</span> &#8212; Acme's Infinity
                Rocket for my mission in space. Acme delivered in one day!
                Nothing says <q className="italic">Take me to your leader</q>{" "}
                like Acme's Infinity Rocket! 💯
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212;Buzz Lightyear
            </figcaption>
          </figure>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section
          id="contacts"
          className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Contacts
          </h2>
          <form
            action=""
            className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col item-left gap-4 "
          >
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Your subject"
              minLength="3"
              maxLength="60"
              className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid broder-slaate-900 dark:border-none"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              placeholder="Your message"
              className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid broder-slaate-900 dark:border-none"
            ></textarea>
            <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">
              Submit
            </button>
          </form>
        </section>
      </main>
      <footer
        id="footer"
        className="bg-teal-700 text-black dark:text-white text-xl"
      >
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
          <address>
            <h2>Acme Rocket-Powered Products, Inc.</h2>
            555 Astro Way
            <br />
            Fairfield, New Jersey 12345-5555
            <br />
            Email:
            <a href="mailto:inquiries@acmerockets.com">
              Inquires@AcmeRockets.com
            </a>
            <br />
            Phone: <a href="tel:+15555555555">(555) 555-5555</a>
          </address>
          <nav className="hidden md:flex flex-col gap-2 ">
            <a href="#rockets" className="hover:opacity-90 ">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90 ">
              Testimonials
            </a>
            <a href="#contacts" className="hover:opacity-90 ">
              Contacuts Us
            </a>
          </nav>
          <div className=" flex flex-col sm:gap-2 ">
            <p className="text-right">
              Copyright &copy; <span id="year">2024</span>
            </p>
            <p className="text-right">All Rights reserved</p>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Home;
