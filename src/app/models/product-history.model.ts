import { ProductModel } from "./product.model";

export interface ProductHistoryModel {
    id: number;
    product: ProductModel;
    action: number ;
    date: number;
}