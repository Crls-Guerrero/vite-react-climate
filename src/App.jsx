import "tailwindcss/tailwind.css";
import { useState } from "react";
import { handleSubmit } from "./components/api.js";
import IM from "./assets/root.png";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [departments, setDepartments] = useState([]);

  const handleCountryChange = (event) => {
    const countryInfo = event.target.value;

    setSelectedCountry(countryInfo);

    const departmentsByCountry = {
      AR: ["Buenos Aires", "Cuzco"],
      PE: ["Arequipa", "Cuzco"],
      CO: ["La Rioja"],
    };

    const selectedDepartments = departmentsByCountry[countryInfo] || [];
    setDepartments(selectedDepartments);
  };

  return (
    <div className="mt-56 flex flex-col items-center justify-center text-center gap-14 max-md:mt-14 mb-14">
      <h1 className="text-4xl text-[white]">PROYECTO CLIMATOLOGICO</h1>
      <div className="w-auto flex flex-wrap items-center justify-center gap-10">
        <div className="w-72 h-96 flex flex-col items-start justify-center text-start gap-5">
          <form
            onSubmit={handleSubmit}
            method="POST"
            id="form"
            className="w-full flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label className="text-[white] text-lg">País:</label>
              <select
                className="rounded-lg"
                name="pais"
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value=""></option>
                <option value="AR">Argentina</option>
                <option value="PE">Peru</option>
                <option value="CO">Colombia</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[white] text-lg">Departamento:</label>
              <select
                className="rounded-lg"
                name="departamento"
                id="department"
              >
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
            <input
              className="w-full mt-3 p-2 text-[white] bg-[#145277] rounded-lg cursor-pointer  hover:text-[black]"
              type="submit"
              value="Consultar"
            />
          </form>
        </div>
        <div
          className="w-80 h-96 bg-gradient-to-t from-[#4b749f] to-[#243748] rounded-lg flex flex-col items-center justify-center gap-5"
          id="result-climate"
        >
          <h2 className="text-2xl text-[white]">Temperatura en *</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-32 h-24">
                <img
                  className="w-full h-auto object-cover"
                  src={IM}
                  alt="icon-climate"
                />
              </div>
              <h2 className="text-5xl text-[white]">*°C</h2>
            </div>
            <div className="flex gap-8">
              <span className="text-[#87CEEB]">Min: *°C</span>
              <span className="text-[tomato]">Max: *°C</span>
            </div>
          </div>
          <p className="text-[white]">*, **:** p.m.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
