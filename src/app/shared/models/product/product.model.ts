import { BoxModel } from "../box/box.model";
import { CoverModel } from "../cover/cover.model";
import { LabelModel } from "../label/label.model";
import { OtherModel } from "../other-packaging/other.model";
import { PackagingModel } from "../packaging/packaging.model";

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