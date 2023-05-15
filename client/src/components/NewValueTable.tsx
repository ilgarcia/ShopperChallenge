"use client";

import { useContext } from "react";

import { PriceTableContext } from "../context/PriceTableProvider";

import BtnAtualizar from "./BtnAtualizar";

function NewValueTable() {
  const { priceTable } = useContext(PriceTableContext);
  return (
    <section className="flex flex-col">
      <table className="table-auto mt-8 border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="py-2 border border-slate-300 bg-theme-green font-semibold text-white">
              Cod
            </th>
            <th className="py-2 border border-slate-300 bg-theme-green font-semibold text-white">
              Nome
            </th>
            <th className="py-2 border border-slate-300 bg-theme-green font-semibold text-white">
              Preço atual
            </th>
            <th className="py-2 border border-slate-300 bg-theme-green font-semibold text-white">
              Novo preço
            </th>
            <th className="py-2 border border-slate-300 bg-theme-green font-semibold text-white">
              Acertar
            </th>
          </tr>
        </thead>
        <tbody>
          {priceTable[0].code != "" &&
            priceTable.map((price, index) => {
              return (
                <tr key={index}>
                  <td className="py-2 border border-slate-300 text-center">
                    {price.code}
                  </td>
                  <td className="py-2 border border-slate-300 text-center">
                    {price.name}
                  </td>
                  <td className="py-2 border border-slate-300 text-center">
                    {price.sales_price}
                  </td>
                  <td className="py-2 border border-slate-300 text-center">
                    {price.new_price}
                  </td>
                  <td className="py-2 border border-slate-300 text-center">
                    <ul>
                      {price.errors.map((error, index) => {
                        return <li key={index}>{error}</li>;
                      })}
                    </ul>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className="text-right mt-8 mb-16">
        <BtnAtualizar />
      </div>
    </section>
  );
}

export default NewValueTable;
