import { CreatepagoDto, UpdatepagoDto } from '../dtos';
import { PagoEntity } from '../entities/pago.entity';



export abstract class PagoRepository {

  abstract create( createCustomerDto: CreatepagoDto ): Promise<PagoEntity>;

  abstract getAll(): Promise<PagoEntity[]>;

  abstract findById( id: number ): Promise<PagoEntity>;
  abstract updateById( updatepagoDto: UpdatepagoDto ): Promise<PagoEntity>;
  abstract deleteById( id: number ): Promise<PagoEntity>;

}