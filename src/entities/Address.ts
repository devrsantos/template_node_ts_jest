import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity('adresses')
export class Address {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text' })
    street: string

  @Column({ type: 'text' })
    city: string

  @ManyToOne(() => User, user => user.adresses)
  @JoinColumn({ name: 'user_id' })
    user: User
}
