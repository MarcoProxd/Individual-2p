export class CreatepagoDto {

  private constructor(
    public readonly id: number,
    public readonly monto  : number,
    public readonly fechaPago  : Date,
    public readonly metodoPagoId  : number,
    public readonly eventoId  : number,
    public readonly clienteId: number,
  ){}

  static create( props: {[key:string]: any} ): [string?, CreatepagoDto?]  {

    const { id, monto, fechaPago, metodoPagoId, eventoId, clienteId} = props;

    if ( !id ) return ['id  property is required', undefined];
    if ( !monto  ) return ['monto  property is required', undefined];
    if ( !fechaPago  ) return ['fechaPago  property is required', undefined];
    if ( !metodoPagoId  ) return ['metodoPagoId   property is required', undefined];
    if ( !eventoId  ) return ['eventoId  property is required', undefined];
    if (!clienteId) return ['clienteId property is required', undefined];

    return [undefined, new CreatepagoDto(id, monto, fechaPago, metodoPagoId, eventoId, clienteId)];
  }


}