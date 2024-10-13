import { Table } from "antd";
import { FC, useEffect, useRef, useState } from "react";
import { getStocks } from "../../api/api";
import { DEFAULT_PAGE_SIZE } from "../../constants/constants";
import { columns } from "../../constants/tableColumns";
import { StockType } from "../../types/types";

interface IProps {
  selectedMark: string | undefined;
  selectedModels: string[] | undefined;
}

export const StockTable: FC<IProps> = (props) => {
  const [data, setData] = useState<StockType[]>([]);
  const [total, setTotal] = useState(0);
  const [stockLoaded, setStockLoaded] = useState(false);
  const selectedPage = useRef(1);
  const selectedPageSize = useRef(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    selectedPage.current = 1;
    loadData();
  }, [props.selectedMark, props.selectedModels]);

  const loadData = async () => {
    setStockLoaded(false);
    try {
      const stockData = await getStocks(
        selectedPage.current,
        selectedPageSize.current,
        props.selectedMark,
        props.selectedModels
      );
      setData(stockData.stocks);
      setTotal(stockData.total);
    } catch (error) {
      console.error("Ошибка при получении стоков:", error);
    } finally {
      setStockLoaded(true);
    }
  };

  return (
    <div className="tableContainer">
      <Table
        className="table"
        columns={columns}
        dataSource={data}
        loading={!stockLoaded}
        pagination={{
          position: ["bottomRight"],
          showSizeChanger: true,
          defaultPageSize: DEFAULT_PAGE_SIZE,
          total: total,
          current: selectedPage.current,
          onChange: (page: number, pageSize: number) => {
            selectedPage.current = page;
            selectedPageSize.current = pageSize;
            loadData();
          },
        }}
        rowKey="_id"
      />
    </div>
  );
};
