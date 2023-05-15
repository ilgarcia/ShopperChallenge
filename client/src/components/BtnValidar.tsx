import { useContext } from "react";

import axios from "../services/api";

import { PriceTableContext } from "../context/PriceTableProvider";

function BtnValidar(prices: any) {
  const { priceTable, setPriceTable } = useContext(PriceTableContext);

  const initialState = {
    code: "",
    name: "",
    new_price: "",
    sales_price: "",
    errors: [""],
  };

  async function handleFile() {
    setPriceTable([{ ...initialState }]);

    if (priceTable[0].code === "") {
      prices.values.map(
        async (price: any) =>
          await axios
            .get("/validate", {
              params: {
                product_code: price.product_code,
                new_price: price.new_price,
              },
            })
            .then((response) => {
              console.log(priceTable[0]);
              if (priceTable[0].code === "") {
                setPriceTable([response.data]);
              } else {
                setPriceTable([...priceTable, response.data]);
              }
            })
      );
    }
  }

  return (
    <div className="flex gap-4">
      <button
        onClick={handleFile}
        className="bg-theme-green text-white font-bold rounded-md px-10 py-2 hover:bg-theme-greenHover disabled:opacity-50 disabled:hover:bg-theme-green"
        disabled={prices.values.length === 0 ? true : false}
      >
        {priceTable[0].code != "" ? "Limpar Dados" : "Validar Dados"}
      </button>
    </div>
  );
}

export default BtnValidar;
