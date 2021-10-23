import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({ description: 'category' })
@Entity()
export class Category {
  @Field((_) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  category: string;
}
