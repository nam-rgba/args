import { Args, Float, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CompanyService } from './company.service'
import { Company } from './models/company.model'

@Resolver()
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => Company)
  async companies(@Args({ name: 'companyId', type: () => String }) companyId: string) {
    return this.companyService.findOne(companyId)
  }

  @Mutation(() => Float)
  async updateRating(
    @Args('companyId', { type: () => String }) companyId: string,
    @Args('rate', { type: () => Float }) vote: number
  ) {
    return this.companyService.updateRating(companyId, vote)
  }
}
