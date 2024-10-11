import { Pagination, Select, Table } from "antd";
import Option from "antd/es/select";
import Link from "antd/es/typography/Link";
import { useEffect, useState } from "react";
import "./App.css";
import marksData from "./_mockData/marks.json";
import stockData from "./_mockData/test.json";
// import { getAllStocks, getMarks } from "./api/api";
import { columns } from "./constants.ts/tableColumns";
import { MarksType, StockType } from "./types/types";

const StockTable = () => {
  const [marks, setMarks] = useState<MarksType[]>([]);
  const [selectedMark, setSelectedMark] = useState<string | null>(null);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState<StockType[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getData();
    getMarksData();
  }, []);

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // const getData = async () => {
  //   try {
  //     const stockData = await getAllStocks();

  //     setData(stockData.stocks);
  //     setTotal(stockData.total);
  //   } catch (error) {
  //     console.error("Ошибка при получении стоков:", error);
  //   }
  // };

  // const getMarksData = async () => {
  //   try {
  //     const marksData = await getMarks();

  //     console.log(marksData);
  //     setMarks(marksData);
  //   } catch (error) {
  //     console.error("Ошибка при получении брендов:", error);
  //   }
  // };

  const getData = async () => {
    try {
      setData(
        stockData.stocks.map((stock) => ({
          ...stock,
          createdAt: new Date(stock.createdAt),
        }))
      );
      setTotal(stockData.total);
    } catch (error) {
      console.error("Ошибка при получении стоков:", error);
    }
  };

  const getMarksData = async () => {
    try {
      setMarks(marksData);
    } catch (error) {
      console.error("Ошибка при получении брендов:", error);
    }
  };

  const filteredModels = selectedMark
    ? data
        .filter((car) => car.mark === selectedMark)
        .map((car) => car.model)
        .filter((value, index, self) => self.indexOf(value) === index)
    : [];

  const handleModelChange = (value: string[]) => {
    setSelectedModels(value);
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleMarkSelect = (mark: string) => {
    setSelectedMark(mark);
    setSelectedModels([]);
    setCurrentPage(1);
  };

  return (
    <div className="mainSection">
      <h1 className="title">Таблица автомобилей</h1>
      <div className="linksContainer">
        {marks.map((mark) => (
          <div className="linkWrapper" key={mark.name}>
            <Link
              className={`link ${selectedMark === mark.name ? "selected" : ""}`}
              href="#"
              onClick={() => handleMarkSelect(mark.name)}
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
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Выберите модель"
          value={selectedModels}
          onChange={handleModelChange}
        >
          {filteredModels.map((model) => (
            <Option key={model} value={model}>
              {model}
            </Option>
          ))}
        </Select>
      </div>

      <div className="tableContainer">
        <Table
          columns={columns}
          dataSource={paginatedData}
          pagination={false}
          style={{ width: "100%" }}
          rowKey="_id"
        />

        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={handlePageChange}
          showSizeChanger
          pageSizeOptions={[10, 20, 50]}
          align="end"
        />
      </div>
    </div>
  );
};

export default StockTable;
