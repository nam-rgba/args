import { InputType, Field } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreateCompanyInput {
  // Field required to fill when creating
  @Field()
  @IsNotEmpty()
  name: string

  @Field()
  @IsNotEmpty()
  address: string

  @Field()
  @IsNotEmpty()
  website: string

  @Field()
  @IsNotEmpty()
  email: string

  @Field()
  @IsNotEmpty()
  description: string

  @Field({ nullable: false })
  avatar: string

  @Field()
  @IsNotEmpty()
  rating: number

  @Field({ nullable: false })
  vote_quantity: number

  @Field({ nullable: false })
  createdAt: Date

  // Field not required, can update later
  @Field({ nullable: true })
  image: [string]

  @Field({ nullable: true })
  industry: string

  @Field({ nullable: true })
  updatedAt: Date
}
