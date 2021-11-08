import { BoxModel } from "./box.model";
import { CoverModel } from "./cover.model";
import { LabelModel } from "./label.model";
import { OtherModel } from "./other.model";
import { PackagingModel } from "./packaging.model";

export interface ProductModel {
    id: number;
    name: number;
    packagingModel: PackagingModel;
    coverModel: CoverModel;
    labelModel: LabelModel;
    boxModel: BoxModel;
    otherModel: OtherModel;
    unitOfMeasure: number;
    pricePerUnitOfMeasure: number;
    counter: number;
}