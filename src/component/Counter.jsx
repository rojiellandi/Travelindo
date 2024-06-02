import React, { useEffect } from "react";
import { useCounter } from "@uidotdev/usehooks";

const Counter = (props) => {
  const { id, setProducts } = props;
  const [count, { increment, decrement, set, reset }] = useCounter(1, {
    min: 0,
    max: 100,
  });

  useEffect(() => {
    if (count == 0) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    }
    if (count>1) {
        setProducts((prevProducts) =>
        prevProducts.map((product) => {
          if (product.id == id) {
            return {
              ...product,
              qty: product.qty + 1, // Menambah 1 pada kuantitas produk yang sesuai
            };
          }
          return product;
        })
      );
    }
  }, [count]);

  return (
    <div className="row">
      <div className="col-lg-3 col-12 ">
        <div className={`flex flex-wrap gap-8 `}>
          <button disabled={count == 0} className="link" onClick={decrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <div className="w-5">
            <span className="font-bold mb-5">{count}</span>
          </div>

          <button
            // disabled={count >= 10}
            className="link"
            onClick={increment}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
