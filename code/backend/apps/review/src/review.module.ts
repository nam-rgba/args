import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [ReviewModule],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
