import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="mt-56 flex flex-col items-center justify-center text-center gap-14 max-md:mt-14 mb-14">
      <h1 className="text-4xl text-[white]">PROYECTO CLIMATOLOGICO</h1>
      <div className="w-auto flex flex-wrap items-center justify-center gap-10">
        <div className="w-72 h-96 flex flex-col items-start justify-center text-start gap-5">
          <form className="flex flex-col" action="">
            <label className="text-[white] text-lg">Pais:</label>
            <select className="rounded-lg" name="pais" id="pais">
              <option value="Argentina"></option>
              <option value="Argentina">Argentina</option>
              <option value="Argentina">Peru</option>
              <option value="Argentina">ntina</option>
            </select>
          </form>
          <form className="flex flex-col" action="">
            <label className="text-[white] text-lg">Departamento:</label>
            <select
              className="rounded-lg"
              name="departamento"
              id="departamento"
            >
              <option value="Arequipa">Arequipa</option>
              <option value="Cuzco">Cuzco</option>
              <option value="La_Rioja">La Rioja</option>
            </select>
          </form>
          <form className="flex flex-col" action="">
            <label className="text-[white] text-lg">Distrito:</label>
            <select className="rounded-lg" name="distrito" id="distrito">
              <option value="Ventanillla">Ventanilla</option>
              <option value="Puente Piedra">Puente Piedra</option>
            </select>
          </form>
          <input
            className="w-full mt-3 p-2 text-[white] bg-[#145277] rounded-lg cursor-pointer  hover:text-[black]"
            type="submit"
            value="Consultar"
          />
        </div>
        <div className="w-80 h-96 bg-gradient-to-t from-[#4b749f] to-[#243748] rounded-lg flex flex-col items-center justify-evenly gap-6">
          <h2 className="text-2xl text-[white]">Temperatura en Lima</h2>
          <h2 className="text-7xl text-[white]">6°C</h2>
          <p className="text-[white]">Sabado, 17:35 p.m.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
