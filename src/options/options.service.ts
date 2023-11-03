import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { Option } from './entities/option.entity';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
  ) {}

  async create(createOptionDto: CreateOptionDto) {
    return await this.optionRepository.save(createOptionDto);
  }

  async findAll() {
    return await this.optionRepository.find();
  }

  async findOne(id: number) {
    return await this.optionRepository.findOneBy({ id: id });
  }

  async update(id: number, updateOptionDto: UpdateOptionDto) {
    return await this.optionRepository.update(id, updateOptionDto);
  }

  async remove(id: number) {
    await this.optionRepository.delete(id);
  }
}
