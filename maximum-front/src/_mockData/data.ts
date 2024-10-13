// import { StockType } from "../types/types";

// const formatDate = (date: string) => {
//   const dateObj = new Date(date);
//   const formattedDate = dateObj.toLocaleDateString("ru-RU", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//   });
//   const formattedTime = dateObj.toLocaleTimeString("ru-RU", {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
//   return `${formattedDate} ${formattedTime}`;
// };

// export const marks = [
//   { name: "Audi", count: 2 },
//   { name: "BMW", count: 2 },
//   { name: "Mercedes", count: 1 },
//   { name: "Toyota", count: 1 },
//   { name: "Volkswagen", count: 1 },
//   { name: "Honda", count: 1 },
//   { name: "Ford", count: 1 },
//   { name: "Skoda", count: 1 },
//   { name: "Lexus", count: 1 },
//   { name: "Renault", count: 1 },
//   { name: "Chery", count: 1 },
//   { name: "Fiat", count: 1 },
//   { name: "Exeed", count: 1 },
// ];

// export const models = [
//   "A4",
//   "Q7",
//   "X5",
//   "3 Series",
//   "C-Class",
//   "Camry",
//   "Tiguan",
//   "CR-V",
//   "Mustang",
//   "Octavia",
//   "RX 350",
//   "Duster",
//   "Tiggo",
//   "500",
//   "TXL",
// ];

// export const columns = [
//   { title: "_id", dataIndex: "_id", key: "_id" },
//   {
//     title: "Марка/Модель",
//     key: "markModel",
//     render: (text: string, record: StockType) =>
//       `${record.mark} ${record.model}`,
//   },
//   { title: "Модификация", dataIndex: "drive", key: "drive" },
//   { title: "Комплектация", dataIndex: "equipmentName", key: "equipmentName" },
//   { title: "Стоимость", dataIndex: "price", key: "price" },
//   {
//     title: "Дата создания",
//     dataIndex: "createdAt",
//     key: "createdAt",
//     render: (text: string) => formatDate(text),
//   },
// ];

// export const data = [
//   {
//     _id: "1",
//     mark: "Audi",
//     model: "A4",
//     engine: {
//       power: 190,
//       volume: 2.0,
//       transmission: "automatic",
//       fuel: "petrol",
//     },
//     drive: "AWD",
//     equipmentName: "4x4, ABS, ESP, ESP+",
//     price: 1000000,
//     createdAt: new Date("2022-01-01T10:30:00.000Z"),
//   },
//   {
//     _id: "2",
//     mark: "BMW",
//     model: "X5",
//     engine: {
//       power: 265,
//       volume: 3.0,
//       transmission: "automatic",
//       fuel: "diesel",
//     },
//     drive: "AWD",
//     equipmentName: "4x4, ABS, ESP, Camera",
//     price: 1200000,
//     createdAt: new Date("2022-01-01T10:30:00.000Z"),
//   },
//   {
//     _id: "3",
//     mark: "Mercedes",
//     model: "C-Class",
//     engine: {
//       power: 184,
//       volume: 2.0,
//       transmission: "automatic",
//       fuel: "petrol",
//     },
//     drive: "RWD",
//     equipmentName: "ABS, ESP, Leather seats",
//     price: 1500000,
//     createdAt: new Date("2022-06-15"),
//   },
//   {
//     _id: "4",
//     mark: "Toyota",
//     model: "Camry",
//     engine: {
//       power: 181,
//       volume: 2.5,
//       transmission: "automatic",
//       fuel: "petrol",
//     },
//     drive: "FWD",
//     equipmentName: "ABS, ESP, Heated seats",
//     price: 1300000,
//     createdAt: new Date("2022-08-20"),
//   },
//   {
//     _id: "5",
//     mark: "Volkswagen",
//     model: "Tiguan",
//     engine: {
//       power: 150,
//       volume: 2.0,
//       transmission: "automatic",
//       fuel: "diesel",
//     },
//     drive: "AWD",
//     equipmentName: "4x4, ABS, ESP",
//     price: 1100000,
//     createdAt: new Date("2022-09-12"),
//   },
//   {
//     _id: "6",
//     mark: "Honda",
//     model: "CR-V",
//     engine: {
//       power: 185,
//       volume: 2.4,
//       transmission: "automatic",
//       fuel: "petrol",
//     },
//     drive: "AWD",
//     equipmentName: "4x4, ABS, ESP, Sunroof",
//     price: 1050000,
//     createdAt: new Date("2022-10-10"),
//   },
//   {
//     _id: "7",
//     mark: "Audi",
//     model: "Q7",
//     engine: {
//       power: 286,
//       volume: 3.0,
//       transmission: "automatic",
//       fuel: "diesel",
//     },
//     drive: "AWD",
//     equipmentName: "4x4, ABS, ESP, Leather seats",
//     price: 2000000,
//     createdAt: new Date("2022-11-01"),
//   },
//   {
//     _id: "8",
//     mark: "Ford",
//     model: "Mustang",
//     engine: {
//       power: 450,
//       volume: 5.0,
//       transmission: "manual",
//       fuel: "petrol",
//     },
//     drive: "RWD",
//     equipmentName: "RWD, ABS, ESP",
//     price: 2500000,
//     createdAt: new Date("2022-12-12"),
//   },
//   {
//     _id: "9",
//     mark: "Skoda",
//     model: "Octavia",
//     engine: {
//       power: 180,
//       volume: 1.8,
//       transmission: "automatic",
//       fuel: "petrol",
//     },
//     drive: "FWD",
//     equipmentName: "ABS, ESP, Heated seats",
//     price: 950000,
//     createdAt: new Date("2023-01-15"),
//   },
//   {
//     _id: "10",
//     mark: "Lexus",
//     model: "RX 350",
//     engine: {
//       power: 295,
//       volume: 3.5,
//       transmission: "automatic",
//       fuel: "petrol",
//     },
//     drive: "AWD",
//     equipmentName: "4x4, ABS, ESP, Leather seats",
//     price: 2200000,
//     createdAt: new Date("2023-02-25"),
//   },
//   {
//     _id: "11",
//     mark: "Renault",
//     model: "Duster",
//     engine: {
//       power: 110,
//       volume: 1.5,
//       transmission: "manual",
//       fuel: "diesel",
//     },
//     drive: "AWD",
//     equipmentName: "4x4, ABS, ESP",
//     price: 800000,
//     createdAt: new Date("2023-03-18"),
//   },
//   {
//     _id: "12",
//     mark: "Chery",
//     model: "Tiggo",
//     engine: {
//       power: 122,
//       volume: 2.0,
//       transmission: "CVT",
//       fuel: "petrol",
//     },
//     drive: "FWD",
//     equipmentName: "ABS, ESP, Sunroof",
//     price: 900000,
//     createdAt: new Date("2023-04-20"),
//   },
//   {
//     _id: "13",
//     mark: "Fiat",
//     model: "500",
//     engine: {
//       power: 105,
//       volume: 1.4,
//       transmission: "automatic",
//       fuel: "petrol",
//     },
//     drive: "FWD",
//     equipmentName: "ABS, ESP, Compact",
//     price: 600000,
//     createdAt: new Date("2023-05-10"),
//   },
//   {
//     _id: "14",
//     mark: "Exeed",
//     model: "TXL",
//     engine: {
//       power: 197,
//       volume: 2.0,
//       transmission: "automatic",
//       fuel: "petrol",
//     },
//     drive: "AWD",
//     equipmentName: "4x4, ABS, ESP, Panoramic roof",
//     price: 1500000,
//     createdAt: new Date("2023-06-18"),
//   },
//   {
//     _id: "15",
//     mark: "BMW",
//     model: "3 Series",
//     engine: {
//       power: 184,
//       volume: 2.0,
//       transmission: "automatic",
//       fuel: "petrol",
//     },
//     drive: "RWD",
//     equipmentName: "ABS, ESP, Leather seats",
//     price: 1400000,
//     createdAt: new Date("2023-07-05"),
//   },
// ];
