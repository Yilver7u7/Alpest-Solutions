import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateProductDTO } from "./dto/product.dto";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {

    constructor(private productService:ProductService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO ){
        console.log(createProductDTO);

        return res.status(HttpStatus.OK).json({
            message: 'The New Person Successfully Created'
        });
    }

    

    

    
}
