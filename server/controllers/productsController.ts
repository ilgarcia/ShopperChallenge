import { Request, Response } from "express";
// import { Op } from "sequelize";

import models from "../models/index";

export const productsController = {
  getValidate: async (req: Request, res: Response) => {
    let price = req.query;
    let newPrice: number = parseFloat(price.new_price as string);
    let errors: string[] = [];

    // O código do produto esta contido em um pack
    const pack = await models.Packs.findAll({
      where: { pack_id: price.product_code },
    });

    if (pack.length !== 0) {
      console.log("esta contido");
    } else {
      const product = await models.Products.findOne({
        where: { code: price.product_code },
      });
      if (product) {
        if (product.dataValues.cost_price > newPrice) {
          errors.push("Valor menor que preço de compra");
        }
        if (
          product.dataValues.sales_price * 0.9 > newPrice ||
          product.dataValues.sales_price * 1.1 < newPrice
        ) {
          errors.push("Valor tem diferença maior que 10%");
        }

        res.send({
          code: price.product_code,
          name: product.dataValues.name,
          sales_price: product.dataValues.sales_price,
          new_price: newPrice,
          errors,
        });
      } else {
        console.log("Sem produto");
      }
    }

    // Esta contido

    // Verificar se alterar o preço do pack quebra as condições

    // Pegar lista de produtos

    // Verificar se alterar o preço do produto quebra a condições

    // Não esta contido

    // Verificar se alterar o preço do produto quebra a condições
  },
  postUpdate: async (req: Request, res: Response) => {
    let price = req.query;

    try {
      const newProduct = await models.Products.update(
        { sales_price: price.new_price },
        {
          where: {
            code: price.product_code,
          },
        }
      );
      console.log(newProduct);
    } catch (error) {
      console.log("erro");
    }
  },
};
