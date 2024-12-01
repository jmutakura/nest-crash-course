import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {EpisodesService} from "./episodes.service";
import {CreateEpisodeDto} from "./dto/create-episode.dto";
import {ConfigService} from "../config/config.service";

@Controller('episodes')
export class EpisodesController {
    constructor(private episodeService: EpisodesService, private readonly configService: ConfigService,) {}
    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        return this.episodeService.findAll(sort);
    }

    @Post()
    create(@Body() input: CreateEpisodeDto) {
        console.log(input);
        return this.episodeService.create(input);
    }

    @Get('featured')
    findFeatured(){
        return this.episodeService.findFeatured();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.episodeService.findOne(id);
    }




}
