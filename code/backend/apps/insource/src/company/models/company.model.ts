import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Company {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  company_id: string

  @Field()
  @Column({ length: 100 })
  name: string

  @Field()
  @Column({ unique: true })
  email: string

  @Field()
  @Column()
  address: string

  @Field()
  @Column()
  industry: string

  @Field()
  @Column()
  website: string

  @Field()
  description: string

  @Field()
  rating: number

  @Field()
  image: string

  @Field()
  avatar: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
