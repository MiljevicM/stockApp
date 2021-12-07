import { ProductModel } from "../product/product.model";

export interface ProductHistoryModel {
    id: number;
    product: ProductModel;
    action: number ;
    date: number;
}


export interface StockModel {
    id: number;
    productName: string;
    inStock: number;
}

export interface SalesModel {
    id: number;
    productName: string;
    date: Date;
    produced: number;
    sold: number;
}
