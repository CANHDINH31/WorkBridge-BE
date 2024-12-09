import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from 'src/schemas/transaction.schema';
import { Model } from 'mongoose';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name) private transactionModal: Model<Transaction>,
  ) {}
  async create(createTransactionDto: CreateTransactionDto, userId: string) {
    try {
      const data = await this.transactionModal.create({
        ...createTransactionDto,
        user_id: userId,
      });
      return {
        status: HttpStatus.CREATED,
        data,
        message: 'Create successfully',
      };
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
