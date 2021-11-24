import { ProductModel } from "../product/product.model";

export interface ProductHistoryModel {
    id: number;
    product: ProductModel;
    action: number ;
    date: number;
}