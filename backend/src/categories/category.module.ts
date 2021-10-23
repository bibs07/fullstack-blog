import { Module } from '@nestjs/common';
import { CategoriesResolver } from './category.resolver';

@Module({
  providers: [CategoriesResolver],
})
export class CategoryModule {}
