import { ProductModel } from "./product.model";

export interface ProductInvoiceModel {
    product: ProductModel;
    pricePerPcNoTax: number;
    pieces: number;
    discount: number;
    tax: number;
}