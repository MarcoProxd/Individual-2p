import { CreatepagoDto, UpdatepagoDto } from '../dtos';
import { PagoEntity } from '../entities/pago.entity';



export abstract class PagoDatasource {

  abstract create( CreatepagoDto: CreatepagoDto ): Promise<PagoEntity>;

  abstract getAll(): Promise<PagoEntity[]>;

  abstract findById( id: number ): Promise<PagoEntity>;
  abstract updateById( updatepagooDto: UpdatepagoDto ): Promise<PagoEntity>;
  abstract deleteById( id: number ): Promise<PagoEntity>;

}