import { Request, Response } from 'express';
import { CreatepagoDto, UpdatepagoDto  } from '../../domain/dtos';
import { Createpago, DeletePago, GetPago, GetPagos , PagoRepository, Updatepago } from '../../domain';


export class CursoController {

  //* DI
  constructor(
    private readonly PagoRepository: PagoRepository,
  ) { }


  public getPago = ( req: Request, res: Response ) => {

    new GetPagos( this.PagoRepository )
      .execute()
      .then( curso => res.json( curso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getPagoById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetPago( this.PagoRepository )
      .execute( id )
      .then( pago => res.json( pago ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createPago = ( req: Request, res: Response ) => {
    const [ error, createpagoDto ] = CreatepagoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new Createpago( this.PagoRepository )
      .execute( createpagoDto! )
      .then( pago => res.json( pago ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updatePago = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatepagoDto ] = UpdatepagoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new Updatepago( this.PagoRepository )
      .execute( updatepagoDto! )
      .then( pago => res.json( pago ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deletePago = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeletePago( this.PagoRepository )
      .execute( id )
      .then( pago => res.json( pago ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 