import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateProductDTO } from "./dto/product.dto";

@Controller('product')
export class ProductController {
    @Post('/create')
    createPost(@Res() res, @Body() createProductDTO: CreateProductDTO ){
        console.log(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Todo fine'
        });
    }

}
