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
  description: string

  // Field not required, can update later
}
