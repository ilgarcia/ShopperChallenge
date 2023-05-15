"use client";

import { useContext, useEffect, useState } from "react";

import axios from "../services/api";

import { PriceTableContext } from "../context/PriceTableProvider";

function BtnAtualizar() {
  const [error, setError] = useState(true);
  const { priceTable, setPriceTable } = useContext(PriceTableContext);

  const initialState = {
    code: "",
    name: "",
    new_price: "",
    sales_price: "",
    errors: [""],
  };

  useEffect(() => {
    var newArray = priceTable.filter((price) => {
      return price.errors.length > 0 && price.errors[0] != "";
    });

    console.log(priceTable);
    console.log(newArray.length);

    if (newArray.length > 0 || priceTable[0].code === "") {
      setError(true);
    } else {
      setError(false);
    }
  }, [priceTable, setPriceTable]);

  function handleFile() {
    priceTable.map(async (price: any) => {
      await axios.post(
        "/update",
        {},
        {
          params: {
            product_code: price.code,
            new_price: price.new_price,
          },
        }
      );
    });
    setPriceTable([{ ...initialState }]);
  }

  return (
    <button
      onClick={handleFile}
      className="bg-theme-green text-white font-bold rounded-md px-10 py-2 hover:bg-theme-greenHover disabled:opacity-50 disabled:hover:bg-theme-green"
      disabled={error}
    >
      Atualizar
    </button>
  );
}

export default BtnAtualizar;
