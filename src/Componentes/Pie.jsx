import React from "react";

const Pie = () => {
  return (
    <footer className="flex items-center bg-beige py-12 px-8 h-[5vh] w-full fixed bottom-0">
      <div className="w-full flex justify-center gap-15">
        <button>
          <img src="./assets/wapp.svg" alt="Whatsapp" />
        </button>
        <button>
          <img src="./assets/instagram.svg" alt="Instagram" />
        </button>
        <button>
          <img src="./assets/gmail.svg" alt="Gmail" />
        </button>
      </div>
    </footer>
  );
};

export default Pie;
