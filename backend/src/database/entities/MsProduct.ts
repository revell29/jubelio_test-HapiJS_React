import { Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class MsProduct extends BaseEntity {
  @Column()
  sku: string;

  @Column()
  prodName: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column({ type: "text", nullable: true })
  descripttion: string;
}
