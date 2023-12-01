import { PagoEntity } from '../../entities/pago.entity';
import { PagoRepository } from '../../repositories/Pago.repository';


export interface GetVehiclesUseCase {
  execute(): Promise<PagoEntity[]>
}


export class GetPagos implements GetVehiclesUseCase {
  
  constructor(
    private readonly repository: PagoRepository,
  ) {}
  
  execute(): Promise<PagoEntity[]> {
    return this.repository.getAll();
  }

}

