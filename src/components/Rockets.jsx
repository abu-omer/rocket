import rocketman from "../img/rocketman.png";
import rocketlaunch from "../img/rocketlaunch.png";
import rocketride from "../img/rocketride.png";
const Rockets = () => {
  return (
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
  );
};

export default Rockets;
