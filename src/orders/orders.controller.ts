import {
  Body,
  Controller,
  Delete,
  Get,
  MessageEvent,
  Param,
  Patch,
  Post,
  Sse,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';
import { Observable, fromEvent, map } from 'rxjs';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private eventEmitter: EventEmitter2,
  ) {}

  @Sse('sse/order/new')
  sseNewOrder(): Observable<MessageEvent> {
    return fromEvent(this.eventEmitter, 'new-order').pipe(
      map(() => {
        return new MessageEvent('new-order');
      }),
    );
  }

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const order = await this.ordersService.create(createOrderDto);
    if (order) {
      this.eventEmitter.emit('new-order');
    }
    return order;
  }

  @Get()
  async findAll() {
    return await this.ordersService.findAll();
  }

  @Get()
  async findAllInProgress() {
    return await this.ordersService.findAllInProgress();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ordersService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return await this.ordersService.update(+id, updateOrderDto);
  }

  @Sse('sse/order/finished')
  sseFinishedOrder(): Observable<MessageEvent> {
    return fromEvent(this.eventEmitter, 'finished-order').pipe(
      map((data: any) => {
        return new MessageEvent('finished-order', { data: data.id });
      }),
    );
  }
  @Patch('status/:id')
  async updateStatus(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    const order = await this.ordersService.update(+id, updateOrderDto);
    if (order.affected == 1) {
      this.eventEmitter.emit('finished-order', { id: id });
    }
    return order;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ordersService.remove(+id);
  }
}
