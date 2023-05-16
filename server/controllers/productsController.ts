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
      let prods = [{ qty: 1, code: price.product_code, type: "pack" }];

      pack.map((product) => {
        prods.push({
          qty: product.dataValues.qty,
          code: product.dataValues.product_id,
          type: "prod",
        });
      });

      const productPack = await models.Products.findOne({
        where: { code: prods[0].code },
      });

      if (productPack?.dataValues.cost_price > newPrice) {
        errors.push("Valor menor que preço de compra");
      }
      if (
        productPack?.dataValues.sales_price * 0.9 > newPrice ||
        productPack?.dataValues.sales_price * 1.1 < newPrice
      ) {
        errors.push("Valor tem diferença maior que 10%");
      }

      const newData = 
        {
          code: productPack?.dataValues.code,
          name: productPack?.dataValues.name,
          sales_price: productPack?.dataValues.sales_price,
          new_price: newPrice,
          errors,
        }
      ;

      res.send(newData);

      // let teste = prods.slice(1).map(async (prod) => {
      //   // let errors: string[] = [];
      //   const product = await models.Products.findOne({
      //     where: { code: prod.code },
      //   });

      //   // if (product?.dataValues.cost_price > newPrice) {
      //   //   errors.push("Valor menor que preço de compra");
      //   // }
      //   // if (
      //   //   product?.dataValues.sales_price * 0.9 > newPrice ||
      //   //   product?.dataValues.sales_price * 1.1 < newPrice
      //   // ) {
      //   //   errors.push("Valor tem diferença maior que 10%");
      //   // }

      //   // newData.push({
      //   //   code: productPack?.dataValues.code,
      //   //   name: productPack?.dataValues.name,
      //   //   sales_price: productPack?.dataValues.sales_price,
      //   //   new_price: newPrice,
      //   //   errors,
      //   // });

      //   return product;
      // });

      // console.log(teste);

      // Verificar se alterar o preço do pack quebra as condições

      // Pegar lista de produtos

      // Verificar se alterar o preço do produto quebra a condições
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
