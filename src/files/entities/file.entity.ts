import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  originalname: string;

  @Column()
  size: string;

  @Column()
  mimetype: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.files)
  user: UserEntity;
}
