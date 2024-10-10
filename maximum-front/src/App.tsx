import { Pagination, Select, Table } from "antd";
import Option from "antd/es/select";
import Link from "antd/es/typography/Link";
import { useState } from "react";
import "./App.css";
import { brands, columns, data, models } from "./_mockData/data";

const StockTable = () => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleModelChange = (value: string[]) => {
    setSelectedModels(value);
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <div className="mainSection">
      <h1 className="title">Таблица автомобилей</h1>
      <div className="linksContainer">
        {brands.map((brand) => (
          <div className="linkWrapper" key={brand.name}>
            <Link className="link" href="#">
              {brand.name}
            </Link>
            <span className="count">{brand.count}</span>
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
          onChange={handleModelChange}
        >
          {models.map((model) => (
            <Option key={model} value={model}>
              {model}
            </Option>
          ))}
        </Select>
      </div>

      <div className="tableContainer">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          style={{ width: "100%" }}
          rowKey="id"
        />

        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.length}
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
