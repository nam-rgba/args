import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

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
  @Column({ type: 'text' })
  description: string

  @Field()
  @Column()
  rating: number

  @Field()
  @Column()
  vote_quantity: number

  @Field()
  @Column({ nullable: true })
  image: [string]

  @Field()
  @Column({ nullable: false })
  avatar: string

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date
}
