import { ProductModel } from "./product.model";

export interface ProductInvoiceModel {
    productModel: ProductModel;
    pricePerPcNoTax: number;
    pieces: number;
    discount: number;
    tax: number;
}