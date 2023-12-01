import { prisma } from '../../data/postgres';
import { CreatepagoDto, PagoDatasource, PagoEntity, UpdatepagoDto } from '../../domain';




export class PagoDatasourceImpl implements PagoDatasource {

  async create( createpagoDto: CreatepagoDto ): Promise<PagoEntity> {
    const pagos = await prisma.pago.create({
      data: createpagoDto!
    });

    return PagoEntity.fromObject( pagos );
  }

  async getAll(): Promise<PagoEntity[]> {
    const pagos = await prisma.pago.findMany();
    return pagos.map( pagos => PagoEntity.fromObject(pagos) );
  }

  async findById( id: number ): Promise<PagoEntity> {
    const pago = await prisma.pago.findFirst({
      where: { id }
    });

    if ( !pago ) throw `Pago with id ${ id } not found`;
    return PagoEntity.fromObject(pago);
  }

  async updateById( updatepagoDto: UpdatepagoDto ): Promise<PagoEntity> {
    await this.findById( updatepagoDto.id );
    
    const updatedpago = await prisma.pago.update({
      where: { id: updatepagoDto.id },
      data: updatepagoDto!.values
    });

    return PagoEntity.fromObject(updatedpago);
  }

  async deleteById( id: number ): Promise<PagoEntity> {
    await this.findById( id );
    const deleted = await prisma.pago.delete({
      where: { id }
    });

    return PagoEntity.fromObject( deleted );
  }

}