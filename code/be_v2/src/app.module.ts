import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
// import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/schema/user.entity'
import { ReviewsModule } from './reviews/reviews.module'

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.PW_DB,
      database: 'icom',
      entities: [User],
      synchronize: true
    }),
    ReviewsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
