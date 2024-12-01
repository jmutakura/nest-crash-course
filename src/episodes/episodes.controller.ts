import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        return 'all episodes';
    }

    @Post()
    create(@Body() input: any){
        console.log(input);
        return 'new episode';
    }

    @Get('featured')
    findFeatured(){
        return 'featured episodes';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `episodes/${id}`;
    }




}
