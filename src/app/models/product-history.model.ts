import { ProductModel } from "./product.model";

export interface ProductHistoryModel {
    id: number;
    productModel: ProductModel;
    //action: ;
    date: number;
}