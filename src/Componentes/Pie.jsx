import React from "react";

const Pie = () => {
  return (
    <footer className="flex items-center bg-beige py-8 px-8 h-[5%] w-full fixed bottom-0 z-20 shadow-[inset_0px_4px_3px_0px_rgba(0,0,0,0.15)]">
      <div className="w-full flex justify-center gap-15">
        <a
          href="https://wa.me/543876836037"
          target="_blank"
          className="h-6 w-6"
        >
          <img
            src="./assets/wapp.svg"
            alt="Whatsapp"
            className="h-full w-full object-contain"
          />
        </a>
        <a
          href="https://www.instagram.com/de_las_alba/"
          target="_blank"
          className="h-6 w-6"
        >
          <img
            src="./assets/instagram.svg"
            alt="Instagram"
            className="h-full w-full object-contain"
          />
        </a>
        <a
          href="mailto:emi.22692@gmail.com"
          target="_blank"
          className="h-6 w-6"
        >
          <img
            src="./assets/gmail.svg"
            alt="Gmail"
            className="h-full w-full object-contain"
          />
        </a>
      </div>
    </footer>
  );
};

export default Pie;
