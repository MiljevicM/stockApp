import { CompanyModel } from "../company/company.model";
import { MyCompanyModel } from "../my-company/my-company.model";
import { ProductInvoiceModel } from "../product-invoice/product-invoice.model";

export interface InvoiceModel {
    id: number;
    company: CompanyModel;
    date: number;
    productInvoice: ProductInvoiceModel[];
    myCompany: MyCompanyModel;
}