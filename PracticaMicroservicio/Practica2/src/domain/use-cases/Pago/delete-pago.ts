import { PagoEntity } from '../../entities/pago.entity';
import { PagoRepository } from '../../repositories/Pago.repository';


export interface DeletePagoUseCase {
  execute( id: number ): Promise<PagoEntity>
}

export class DeletePago implements DeletePagoUseCase {
  
  constructor(
    private readonly repository: PagoRepository,
  ) {}
  
  execute( id: number ): Promise<PagoEntity> {
    return this.repository.deleteById(id);
  }

}

