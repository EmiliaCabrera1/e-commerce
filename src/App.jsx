function App() {
  return (
    <div className="flex flex-col h-screen">
      <main className="h-auto">
        <div
          id="contenedor"
          className="hidden grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10"
        ></div>
      </main>
    </div>
  );
}

export default App;
