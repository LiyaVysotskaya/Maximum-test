import { useState } from "react";
import "./App.css";
import { Filter } from "./components/Filter/Filter";
import { StockTable } from "./components/StockTable/StockTable";

const App = () => {
  const [selectedMark, setSelectedMark] = useState<string | undefined>(
    undefined
  );
  const [selectedModels, setSelectedModels] = useState<string[] | undefined>(
    undefined
  );

  const setFilters = (mark?: string, models?: string[]) => {
    setSelectedMark(mark);
    setSelectedModels(models);
  };

  return (
    <div className="mainSection">
      <h1 className="title">Таблица автомобилей</h1>

      <Filter
        selectedMark={selectedMark}
        selectedModels={selectedModels}
        onChange={setFilters}
      />
      <StockTable selectedMark={selectedMark} selectedModels={selectedModels} />
    </div>
  );
};

export default App;
