import { CreatepagoDto } from '../../dtos';
import { PagoEntity } from '../../entities/pago.entity';
import { PagoRepository } from '../../repositories/Pago.repository';


export interface CreatePagoUseCase {
  execute( dto: CreatepagoDto ): Promise<PagoEntity>
}

// ctrl+ shift + l
export class Createpago implements CreatePagoUseCase {
  
  constructor(
    private readonly repository: PagoRepository,
  ) {}
  
  execute( dto: CreatepagoDto ): Promise<PagoEntity> {
    return this.repository.create(dto);
  }

}

