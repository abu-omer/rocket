import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-teal-700 text-white sticky top-0 z-10 ">
      <section className=" max-w-4xl mx-auto p-4 flex justify-between items-center ">
        <a href="#hero">
          <h1 className="text-3xl font-medium ">🚀Acme Rockets</h1>
        </a>
        <div>
          <button
            id="mobile-open-button"
            className="text-3xl md:hidden cursor-pointer"
            //    ${
            //   isOpen ? "hidden" : "block"
            // }`}
            onClick={toggleMenu}
          >
            {isOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90  ">
              Testimonials
            </a>
            <a href="#contacts" className="hover:opacity-90  ">
              Contacts
            </a>
          </nav>
        </div>

        <section
          id="mobile-menu"
          className={`absolute top-16 left-0 flex-col w-full text-5xl bg-black origin-top animate-open-menu ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {/* <button
            className=" text-6xl self-end px-6 cursor-pointer"
            onClick={toggleMenu}
          >
            <IoCloseOutline />
          </button> */}

          <nav
            className="flex-col min-h-screen items-center py-8 flex "
            aria-label="mobile"
            onClick={closeMenu}
          >
            <a
              href="#hero"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={closeMenu}
            >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={closeMenu}
            >
              Testimonials
            </a>
            <a
              href="#contacts"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={closeMenu}
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={closeMenu}
            >
              Legal
            </a>
          </nav>
        </section>
      </section>
    </div>
  );
};

export default Nav;
