import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { OptionsService } from './options.service';

@ApiTags('Options')
@Controller('options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}

  @Post()
  async create(@Body() createOptionDto: CreateOptionDto) {
    return await this.optionsService.create(createOptionDto);
  }

  @Get()
  async findAll() {
    return await this.optionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.optionsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOptionDto: UpdateOptionDto,
  ) {
    return await this.optionsService.update(+id, updateOptionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.optionsService.remove(+id);
  }
}
