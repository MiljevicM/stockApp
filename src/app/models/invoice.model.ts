import { CompanyModel } from "./company.model";
import { MyCompanyModel } from "./my-company.model";
import { ProductInvoiceModel } from "./product-invoice.model";

export interface InvoiceModel {
    id: number;
    companyModel: CompanyModel;
    date: number;
    productInvModel: ProductInvoiceModel[];
    myCompanyModel: MyCompanyModel;
}