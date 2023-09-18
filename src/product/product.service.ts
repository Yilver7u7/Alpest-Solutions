import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./interfaces/product.interface";
import { CreateProductDTO } from "./dto/product.dto";

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    
    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }
    
    
    async getProduct(productID: string): Promise<Product> {
        const product = await this.productModel.findById(productID); 
        return product;
    }

    
    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const newProduct = new this.productModel(createProductDTO);
        return newProduct.save();
    }

    /*Aca toco cambiar el metodo deleteOndeAndDelete al parecer ese metodo exigia pasar un objeto y no un string
    se intento también con el método deleteOne, pero al final el que me funciono con el postman fue este fue este*/
    async deleteProduct(productID: string): Promise<any> {
        const deletedProduct = await this.productModel.findByIdAndDelete(productID);
        return deletedProduct;
    }
    
    async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product> {
        console.log('Aqui deberia estar el objeto, si tuviera uno! '+createProductDTO.name);
        const updatedProduct = await this.productModel.findByIdAndUpdate(productID, { $set:createProductDTO }, {new: true});
        if (!updatedProduct) {
            throw new NotFoundException(`Product with ID ${productID} not found`);
        }
        return updatedProduct;
    }
    

}