import { getRounds, hashSync } from "bcryptjs"
import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeInsert,
    BeforeUpdate,
    OneToMany,
} from "typeorm"
import Contact from "./contacts.entity"

@Entity("clients")
class Client {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 20 })
    name: string 

    @Column({ length:100, unique: true })
    email: string

    @Column({ length:120 })
    password: string

    @Column({ length:20, unique: true })
    phone: string 

    @CreateDateColumn({ type: "date" })
    created_at: string

    @UpdateDateColumn({ type: "date", nullable: true })
    updatedAt?: string | Date | undefined | null

    @DeleteDateColumn({ type: "date", nullable: true })
    deletedAt?: string | Date | undefined | null

    @OneToMany(() => Contact, contact => contact.client)
    contacts: Contact[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)

        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }
}

export default Client




