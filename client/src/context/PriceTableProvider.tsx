"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface providerProps {
  children: ReactNode;
}

interface Prices {
  code: string;
  name: string;
  new_price: string;
  sales_price: string;
  errors: string[];
}

interface contextDataProps {
  priceTable: Prices[];
  setPriceTable: Dispatch<SetStateAction<Prices[]>>;
}

export const PriceTableContext = createContext<contextDataProps>(
  {} as contextDataProps
);

export const PriceTableProvider = ({ children }: providerProps) => {
  const [priceTable, setPriceTable] = useState([
    {
      code: "",
      name: "",
      new_price: "",
      sales_price: "",
      errors: [""],
    },
  ]);

  return (
    <PriceTableContext.Provider value={{ priceTable, setPriceTable }}>
      {children}
    </PriceTableContext.Provider>
  );
};
