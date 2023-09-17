import { Document } from "mongoose";


export interface Product extends Document {
    readonly name: string;
    readonly country: string;
    readonly salary: number;
    readonly email: string;
    readonly imageURL: string;
    readonly createdAt: Date;

}