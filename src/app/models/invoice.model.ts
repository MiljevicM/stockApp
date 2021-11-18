import { CompanyModel } from "./company.model";
import { MyCompanyModel } from "./my-company.model";
import { ProductInvoiceModel } from "./product-invoice.model";

export interface InvoiceModel {
    id: number;
    company: CompanyModel;
    date: number;
    productInvoice: ProductInvoiceModel[];
    myCompany: MyCompanyModel;
}