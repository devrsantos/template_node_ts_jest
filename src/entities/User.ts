import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Address } from './Address'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text' })
    name: string

  @Column({ type: 'text' })
    age: string

  @OneToMany(() => Address, address => address.user)
    adresses: Address[]
}
