import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm'
import { v4 as uuid } from 'uuid'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: string

  @Column()
  fullname: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column()
  dateCreated: Date

  @Column()
  isverified: boolean

  @Column({ default: 0 })
  yoe: number

  @Column({ default: 'dev' })
  roletag: string

  @BeforeInsert()
  beforeInsert() {
    if (!this.user_id) {
      this.user_id = uuid()
      console.log('Generated UUID User ID:', this.user_id)
    }
    this.dateCreated = new Date()
    this.isverified = false
  }
  constructor(partial: Partial<User>) {
    Object.assign(this, partial)
  }
}
