function App() {
  return (
    <>
      <body className="h-dvh">
        {/* Encabezado */}

        <header className="flex items-center justify-between align-items bg-beige py-15 px-8 h-20 w-auto">
          <div className="pr-10 w-full flex justify-end">
            <button className="">
              <img src="./assets/logo.svg" alt="Logo" />
            </button>
          </div>
          <div className="pr-10 w-full flex justify-end">
            <button className="px-5">
              <img src="./assets/lupa.svg" alt="Lupa" />
            </button>
            <button className="px-5">
              <img src="./assets/mg.svg" alt="Favoritos" />
            </button>
            <button className="px-5">
              <img src="./assets/carrito.svg" alt="Carrito" />
            </button>
          </div>
          <div className="pr-10 pl-auto w-full flex justify-end">
            <button>
              <img src="./assets/menu.svg" alt="Menu" />
            </button>
          </div>
        </header>

        {/* cuerpo */}

        <main className="w-fulll mx-10 overflow-auto">
          {/* Titulo */}

          <div className="flex my-10 justify-between">
            <img src="./assets/linea.svg" alt="Linea" className="w-1/3" />
            <h1 className="text-[#797979] text-5xl  ">Vestidos</h1>
            <img src="./assets/linea.svg" alt="Linea" className="w-1/3" />
          </div>

          {/* Contentedor Principal */}

          <div
            id="contenedor"
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10"
          >
            {/* Card */}
            <div className="bg-beige/30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div>
                <img
                  src="./assets/ejemploVestido.svg"
                  alt="Foto del vestido"
                  className="w-full object-cover"
                />
                <img
                  src="./assets/mg.svg"
                  alt="Corazon"
                  className="-mt-12 z-20 mr-4 ml-auto h-8 w-auto"
                />
              </div>
              <h4 className="mx-2 mt-8 mb-1">Nombre del vestido</h4>
              <h6 className="mx-2 mb-5 font-thin ">$0.00</h6>
            </div>
          </div>

          {/* Detalle vestido */}

          <div className="bg-beige/30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex">
            <img src="./assets/flecha.svg" alt="flecha" />
            <div>
              <img src="./assets/ejemploVestido.svg" alt="Foto del vestido" />
              <img src="./assets/ejemploVestido.svg" alt="Foto del vestido" />
              <img src="./assets/ejemploVestido.svg" alt="Foto del vestido" />
            </div>
            <div>
              <img src="./assets/ejemploVestido.svg" alt="Foto del vestido" />
            </div>
            <div>
              <h2>Nombre del Vestido</h2>
              <h3>$0.00</h3>
              <h6>Selecciona tu talle</h6>
            </div>
          </div>
        </main>

        {/* Pie */}

        <footer className="flex items-center bg-beige py-12 px-8 h-20 w-auto">
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
      </body>
    </>
  );
}

export default App;
