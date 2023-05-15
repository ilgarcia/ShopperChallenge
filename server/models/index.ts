import { Packs } from "./packs";
import { Products } from "./products";

const models = {
  Packs,
  Products,
};

// Associations

models.Packs.belongsTo(models.Products, {
  foreignKey: "pack_id",
});

models.Packs.belongsTo(models.Products, {
  foreignKey: "product_id",
});

export default models;
