import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field((_) => Int)
  id: number;

  @Field()
  category: string;
}
