import { Query, Resolver } from '@nestjs/graphql';
import { Category } from './models/category.model';

@Resolver(() => Category)
export class CategoriesResolver {
  @Query(() => Category)
  category() {
    console.log('Hello');
    const a = new Category();
    a.id = 100;
    a.category = 'Hello';
    return a;
  }
}
