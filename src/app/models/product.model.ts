import { BoxModel } from "./box.model";
import { CoverModel } from "./cover.model";
import { LabelModel } from "./label.model";
import { OtherModel } from "./other.model";
import { PackagingModel } from "./packaging.model";

export interface ProductModel {
    id: number;
    name: number;
    packaging: PackagingModel;
    cover: CoverModel;
    label: LabelModel;
    box: BoxModel;
    other: OtherModel;
    unitOfMeasure: number;
    pricePerUnitOfMeasure: number;
    counter: number;
}