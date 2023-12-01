import { CreatepagoDto, PagoDatasource, PagoEntity, PagoRepository, UpdatepagoDto } from '../../domain';


export class PagooRepositoryImpl implements PagoRepository {

  constructor(
    private readonly datasource: PagoDatasource,
  ) { }


  create( createpagoDto: CreatepagoDto ): Promise<PagoEntity> {
    return this.datasource.create( createpagoDto );
  }

  getAll(): Promise<PagoEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<PagoEntity> {
    return this.datasource.findById( id );
  }

  updateById( updatepagoDto: UpdatepagoDto ): Promise<PagoEntity> {
    return this.datasource.updateById( updatepagoDto );
  }

  deleteById( id: number ): Promise<PagoEntity> {
    return this.datasource.deleteById( id );
  }

}


