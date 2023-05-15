"use client";

import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Papa from "papaparse";

import BtnValidar from "./BtnValidar";

const fileTypes = ["csv"];

function DragDrop() {
  const [price, setPrice] = useState<unknown[]>([]);

  const handleChange = (file: any) => {
    // Criar validação de tipo e qtd de arquivos

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setPrice(results.data);
      },
    });
  };

  return (
    <section className="max-w-3xl w-full py-6 px-4 lg:px-16 mx-auto border-2 border-slate-300 rounded">
      <h2 className="mb-4 text-xl font-medium">Validar dados</h2>
      <div className="flex items-center justify-between">
        <FileUploader
          multiple={false}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <BtnValidar values={price} />
      </div>
    </section>
  );
}

export default DragDrop;
