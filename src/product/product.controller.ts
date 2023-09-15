import { Controller, Get, Post, Put, Delete, Res, HttpStatus } from '@nestjs/common';

@Controller('product')
export class ProductController {
    @Post('/create')
    createPost(@Res() res){
        return res.status(HttpStatus.OK).json({
            message: 'Todo fine'
        });
    }

}
