import { Injectable } from '@nestjs/common'
import { Company } from './models/company.model'
import { v4 as uuid } from 'uuid'
import { CreateCompanyInput } from './models/create.input'
import { calcRating } from '../utils/company'
@Injectable()
export class CompanyService {
  private readonly companies: Company[] = []

  findAll(): Company[] {
    return this.companies
  }

  findOne(id: string): Company {
    return this.companies.find((company) => company.company_id === id)
  }

  findOneByName(name: string): Company {
    return this.companies.find((company) => company.name === name)
  }

  create(createCompanyInput: CreateCompanyInput): Company {
    const company: Company = {
      company_id: uuid(),
      ...createCompanyInput
    }

    this.companies.push(company)
    return company
  }

  // Update rate
  updateRating(companyId: string, vote: number) {
    const company = this.findOne(companyId)
    const { newRate, newQuantity } = calcRating(vote, company.rating, company.vote_quantity)
    company.rating = newRate
    company.vote_quantity = newQuantity
    return company.rating
  }
}
