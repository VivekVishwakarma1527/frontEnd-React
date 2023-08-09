import React from 'react';
import "./index.css";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPage = (selectPage) => {
    if (
      selectPage > 1 &&
      selectPage <= products.length / 10 &&
      selectPage !== page
    ) {
      setPage(selectPage);
    }
  };

  return (
    <>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span onClick={() => selectPage(page - 1)}>◀</span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span onClick={() => selectPage(i + 1)} key={i}>
                {i + 1}
              </span>
            );
          })}
          <span onClick={() => selectPage(page + 1)}>▶</span>
        </div>
      )}
    </>
  );
}
