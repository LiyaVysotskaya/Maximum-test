import { Pagination, Select, Table } from "antd";
import Option from "antd/es/select";
import Link from "antd/es/typography/Link";
import { useEffect, useState } from "react";
import "./App.css";
import { getAllStocks, getBrands, getModels } from "./api/api";
import { columns } from "./constants.ts/tableColumns";

const StockTable = () => {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const getData = async () => {
    try {
      const stockData = await getAllStocks();
      // selectedBrand ?? "",
      // selectedModels,
      // currentPage,
      // pageSize
      setData(stockData.stocks);
      setTotal(stockData.total);
    } catch (error) {
      console.error("Ошибка при получении стоков:", error);
    }
  };

  const getBrandsData = async () => {
    try {
      const brandsData = await getBrands();
      setBrands(brandsData);
    } catch (error) {
      console.error("Ошибка при получении брендов:", error);
    }
  };

  const getModelsData = async (brand: string) => {
    try {
      const modelsData = await getModels(brand);
      setModels(modelsData);
    } catch (error) {
      console.error("Ошибка при получении моделей:", error);
    }
  };

  const handleBrandClick = (brand: string) => {
    setSelectedBrand(brand);
    getModels(brand);
    setSelectedModels([]);
  };

  const handleModelChange = (value: string[]) => {
    setSelectedModels(value);
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  useEffect(() => {
    getData();
  }, [selectedBrand, selectedModels, currentPage, pageSize]);

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className="mainSection">
      <h1 className="title">Таблица автомобилей</h1>

      <div className="linksContainer">
        {brands.map((brand: { name: string; count: number }) => (
          <div className="linkWrapper" key={brand.name}>
            <Link className="link" onClick={() => handleBrandClick(brand.name)}>
              {brand.name}
            </Link>
            <span className="count">({brand.count})</span>
          </div>
        ))}
      </div>

      {selectedBrand && (
        <div className="searchContainer">
          <p className="modelText">Модель:</p>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Выберите модель"
            onChange={handleModelChange}
            value={selectedModels}
          >
            {models.map((model) => (
              <Option key={model} value={model}>
                {model}
              </Option>
            ))}
          </Select>
        </div>
      )}

      <div className="tableContainer">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
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
