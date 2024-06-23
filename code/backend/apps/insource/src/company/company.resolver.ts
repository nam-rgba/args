import { Query, Resolver } from '@nestjs/graphql'
import { CompanyService } from './company.service'
import { Company } from './models/company.model'

@Resolver()
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => [Company])
  async companies() {
    return this.companyService.findAll()
  }
}
