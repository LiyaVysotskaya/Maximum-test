import { Button, Select } from "antd";
import Option from "antd/es/select";
import Link from "antd/es/typography/Link";
import { FC, useEffect, useState } from "react";
import { getMarks } from "../../api/api";
import { EMPTY_MODEL } from "../../constants/constants";
import { Mark } from "../../types/types";

interface IProps {
  selectedMark: string | undefined;
  selectedModels: string[] | undefined;
  onChange: (mark?: string, models?: string[]) => void;
}

export const Filter: FC<IProps> = (props) => {
  const [marks, setMarks] = useState<Mark[]>([]);
  const [filteredModels, setFilteredModels] = useState<string[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const marksData = await getMarks();

      setMarks(marksData);
    } catch (error) {
      console.error("Ошибка при получении брендов:", error);
    }
  };

  const handleModelChange = (models: string[]) => {
    props.onChange(props.selectedMark, models);
  };

  const handleMarkSelect = (mark: Mark) => {
    setFilteredModels(mark.models);

    props.onChange(mark.name);
  };

  const resetFilters = () => {
    props.onChange();
  };

  return (
    <>
      <div className="linksContainer">
        {marks.map((mark) => (
          <div className="linkWrapper" key={mark.name}>
            <Link
              className={`link ${
                props.selectedMark === mark.name ? "selected" : ""
              }`}
              href="#"
              onClick={() => handleMarkSelect(mark)}
            >
              {mark.name}
            </Link>
            <span className="count">{mark.count}</span>
          </div>
        ))}
      </div>

      <div className="searchContainer">
        <p className="modelText">Модель:</p>
        <Select
          className="select"
          mode="multiple"
          allowClear
          placeholder="Выберите модель"
          value={props.selectedModels}
          onChange={handleModelChange}
          disabled={!props.selectedMark}
        >
          {filteredModels.map((model) => (
            <Option key={model} value={model}>
              {model || EMPTY_MODEL}
            </Option>
          ))}
        </Select>
        <Button className="resetButton" onClick={resetFilters} type="default">
          Сбросить фильтры
        </Button>
      </div>
    </>
  );
};
