import {PagoEntity } from '../../entities/pago.entity';
import { PagoRepository } from '../../repositories/Pago.repository';


export interface GetPagoUseCase {
  execute( id: number ): Promise<PagoEntity>
}


export class GetPago implements GetPagoUseCase {
  
  constructor(
    private readonly repository: PagoRepository,
  ) {}
  
  execute( id: number ): Promise<PagoEntity> {
    return this.repository.findById(id);
  }

}

