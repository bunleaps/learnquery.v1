"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [filterAge, setFilterAge] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [ageLessThan, setAgeLessThan] = useState("");

  const [data, setData] = useState([]);
  const [positions, setPositions] = useState([]);

  // fetching data from API
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/api/data");
      const json = await response.json();

      // put data to JSON
      setData(json);
      // fetch unique position to new Set
      setPositions([...new Set(json.map((item) => item.position))]);
    }
    fetchData();
  }, []);

  // handle name changes on input
  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };

  // handle age changes on input
  const handleFilterAgeChange = (event) => {
    setFilterAge(event.target.value);
  };

  // handle position changes on select
  const handleFilterPositionChange = (event) => {
    setFilterPosition(event.target.value);
  };

  // handle age less than changes on input
  const handleAgeLessThanChange = (event) => {
    setAgeLessThan(event.target.value);
  };

  const filteredData = data.filter((item) => {
    // If nothing is filter
    if (
      filterName === "" &&
      filterAge === "" &&
      filterPosition === "" &&
      ageLessThan === ""
    ) {
      return true;
    }

    // if name is filtered
    if (filterName !== "") {
      const nameWithoutSpaces = item.name.replace(/\s+/g, "").toLowerCase();
      const filterNameWithoutSpaces = filterName
        .replace(/\s+/g, "")
        .toLowerCase();
      if (!nameWithoutSpaces.includes(filterNameWithoutSpaces)) {
        return false;
      }
    }

    // if age is filtered
    if (filterAge !== "" && item.age.toString() !== filterAge) {
      return false;
    }

    // if position is filtered
    if (filterPosition !== "" && item.position !== filterPosition) {
      return false;
    }

    // for filter age less than
    if (ageLessThan !== "" && item.age > Number(ageLessThan)) {
      return false;
    }

    // default
    return true;
  });

  const twInput = "p-3 m-2 border border-blue-400 rounded";
  const thead =
    "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left";
  const tbody =
    "border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4";

  return (
    <div className="p-5">
      <div className="flex">
        <input
          className={twInput}
          placeholder="Name"
          type="text"
          value={filterName}
          onChange={handleFilterNameChange}
        />
        <input
          className={twInput}
          placeholder="Age"
          type="number"
          value={filterAge}
          onChange={handleFilterAgeChange}
        />
        <input
          className={twInput}
          placeholder="Age less than"
          type="number"
          value={ageLessThan}
          onChange={handleAgeLessThanChange}
        />
        <div>
          <select
            className={twInput}
            id="position"
            value={filterPosition}
            onChange={handleFilterPositionChange}
          >
            <option value="">All Positions</option>
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className="items-center bg-transparent w-full border-collapse">
        <thead>
          <tr>
            <th className={thead}>ID</th>
            <th className={thead}>Name</th>
            <th className={thead}>Email</th>
            <th className={thead}>Age</th>
            <th className={thead}>Position</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className={tbody}>{item.id}</td>
              <td className={tbody}>{item.name}</td>
              <td className={tbody}>{item.email}</td>
              <td className={tbody}>{item.age}</td>
              <td className={tbody}>{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
