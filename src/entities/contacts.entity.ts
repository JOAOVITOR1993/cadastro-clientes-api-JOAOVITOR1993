import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm"
import Client from "./clients.entity"

@Entity("contacts")
class Contact {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 20 })
    name: string 

    @Column({ length:100, unique: true })
    email: string

    @Column({ length:20, unique: true })
    phone: string 

    @CreateDateColumn({ type: "date" })
    created_at: string | Date

    @UpdateDateColumn({ type: "date", nullable: true })
    updatedAt?: string | Date | undefined | null

    @DeleteDateColumn({ type: "date", nullable: true })
    deletedAt?: string | Date | undefined | null

    @ManyToOne(()=> Client)
    @JoinColumn()
    client: Client | number

}

export default Contact


