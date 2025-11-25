import mongoose, { Schema, Document } from "mongoose";

interface IIngredient {
  name: string;
  quantity: number;
  unitCost: number;
}

export interface IProduct extends Document {
  userId: string;
  name: string;
  salePrice: number;
  ingredients: IIngredient[];
  createdAt: Date;
  productionCost: number;
  profit: number;
  profitMargin: number;
}

const IngredientSchema = new Schema<IIngredient>({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitCost: { type: Number, required: true },
});

const ProductSchema = new Schema<IProduct>(
  {
    userId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    salePrice: { type: Number, default: 0 },
    ingredients: [IngredientSchema],
    createdAt: { type: Date, default: Date.now },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ProductSchema.virtual("productionCost").get(function (this: IProduct) {
  if (!this.ingredients || this.ingredients.length === 0) return 0;
  return this.ingredients.reduce((total, item) => {
    return total + item.quantity * item.unitCost;
  }, 0);
});

ProductSchema.virtual("profit").get(function (this: IProduct) {
  return this.salePrice - (this.productionCost || 0);
});

ProductSchema.virtual("profitMargin").get(function (this: IProduct) {
  if (!this.salePrice || this.salePrice === 0) return 0;
  const cost = this.productionCost || 0;
  return ((this.salePrice - cost) / this.salePrice) * 100;
});

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
