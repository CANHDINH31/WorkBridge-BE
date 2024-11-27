import {
  Controller,
  Post,
  Body,
  Req,
  Param,
  Get,
  UseInterceptors,
  UploadedFile,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ListDeleteUserDto } from './dto/list-delete-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Get()
  index(@Req() req) {
    const { pageSize, page, searchText, limit, provider, role } = req.query;
    return this.usersService.list(
      page,
      pageSize,
      searchText,
      limit,
      provider,
      role,
    );
  }

  @Post('change-password')
  changePassword(@Body() payload: { password: string }, @Req() req) {
    return this.usersService.changePassword(payload, req?.user?._id);
  }

  @Post('delete')
  remove(@Body() listDeleteUserDto: ListDeleteUserDto) {
    return this.usersService.remove(listDeleteUserDto);
  }
}