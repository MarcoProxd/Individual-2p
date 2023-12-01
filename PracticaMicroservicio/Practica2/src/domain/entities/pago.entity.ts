import { Public } from "@prisma/client/runtime/library";

export class PagoEntity {

    constructor(
    public id: number,
    public monto  : number,
    public fechaPago  : Date,
    public metodoPagoId  : number,
    public eventoId  : number,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): PagoEntity {
      const { id, monto, fechaPago, metodoPagoId,eventoId } = object;
      if ( !id ) throw 'id is required';
      if ( !monto ) throw 'monto is required';
      if ( !fechaPago) throw 'fechaPago is required';
      if ( !metodoPagoId ) throw 'metodoPagoId is required';
      if ( !eventoId ) throw 'eventoId is required';
  
        return new PagoEntity(id, monto, fechaPago, metodoPagoId, eventoId)
    }
  
  }
  
  
  