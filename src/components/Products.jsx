import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productsSlice";
import { Table } from "antd";
import "./Product/Products.css";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const { products } = useSelector((state) => state.products);
  const dataSource = products;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <Table dataSource={dataSource} className="small-table">
        <Table.Column title="Title" dataIndex="title" key="title" />
        <Table.Column title="Category" dataIndex="category" key="category" />
        <Table.Column title="Description" dataIndex="description" key="description" />
        <Table.Column
          title="Price"
          dataIndex="price"
          key="price"
          render={(price) => `${price} $`}
        />
        <Table.Column
          title="Image"
          key="image"
          render={(text, record) => (
            <img src={record.image} alt={record.title} className="small-image" />
          )}
        />
      </Table>
    </div>
  );
};
export default Products;
