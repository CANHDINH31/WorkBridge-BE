import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthMiddleware } from './auth/middleware/auth.middleware';
import { MailerModule } from '@nest-modules/mailer';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_DATABASE_URL'),
      }),
    }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('MAIL_HOST'),
          secure: false,
          auth: {
            user: configService.get('MAIL_USER'),
            pass: configService.get('MAIL_PASSWORD'),
          },
          tls: {
            rejectUnAuthorized: false,
          },
        },
        defaults: {
          from: `"WorkBridge" <${configService.get('MAIL_FROM')}>`,
        },
      }),
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
        },
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [JwtService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'rate', method: RequestMethod.POST },
        { path: 'rate/find-one-by-id/(*)', method: RequestMethod.GET },
        { path: 'comments', method: RequestMethod.POST },
        { path: 'comments/(*)', method: RequestMethod.PUT },
        { path: 'comments/(*)', method: RequestMethod.DELETE },
        { path: 'users/favourite/(*)', method: RequestMethod.GET },
        { path: 'users/add-to-cart', method: RequestMethod.POST },
        { path: 'users/update-cart', method: RequestMethod.POST },
        { path: 'auth/me', method: RequestMethod.GET },
        { path: 'users/change-password', method: RequestMethod.POST },
      );
  }
}
