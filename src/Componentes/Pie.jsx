import React from "react";

const Pie = () => {
  return (
    <footer className="flex items-center bg-beige py-8 px-8 h-[5%] w-full fixed bottom-0">
      <div className="w-full flex justify-center gap-15">
        <button className="h-6 w-6">
          <img
            src="./assets/wapp.svg"
            alt="Whatsapp"
            className="h-full w-full object-contain"
          />
        </button>
        <button className="h-6 w-6">
          <img
            src="./assets/instagram.svg"
            alt="Instagram"
            className="h-full w-full object-contain"
          />
        </button>
        <button className="h-6 w-6">
          <img
            src="./assets/gmail.svg"
            alt="Gmail"
            className="h-full w-full object-contain"
          />
        </button>
      </div>
    </footer>
  );
};

export default Pie;
