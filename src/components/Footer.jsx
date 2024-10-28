import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
