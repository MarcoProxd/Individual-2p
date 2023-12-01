import { UpdatepagoDto } from '../../dtos';
import { PagoEntity } from '../../entities/pago.entity';
import { PagoRepository } from '../../repositories/Pago.repository';


export interface UpdatepagoUseCase {
  execute( dto: UpdatepagoDto ): Promise<PagoEntity>
}


export class Updatepago implements UpdatepagoUseCase {
  
  constructor(
    private readonly repository: PagoRepository,
  ) {}
  
  execute( dto: UpdatepagoDto ): Promise<PagoEntity> {
    return this.repository.updateById(dto);
  }

}

