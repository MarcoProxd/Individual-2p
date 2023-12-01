// DDD
import { Request, Response } from 'express';
import { CreatepagoDto, UpdatepagoDto } from '../../domain/dtos';
import { PagoRepository } from '../../domain';


export class PagoController {

  //* DI
  constructor(
    private readonly PagoRepository: PagoRepository,
  ) { }


  public getPago = async ( req: Request, res: Response ) => {
    const pagos = await this.PagoRepository.getAll();
    return res.json( pagos );
  };

  public getPagoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const pagos = await this.PagoRepository.findById( id );
      res.json( pagos );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createPagos = async ( req: Request, res: Response ) => {
    const [ error, createpagoDto ] = CreatepagoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const pagos = await this.PagoRepository.create( createpagoDto! );
    res.json( pagos );

  };

  public updatePagos = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatepagoDto ] = UpdatepagoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedPago = await this.PagoRepository.updateById( updatepagoDto! );
    return res.json( updatedPago );

  };
  public deletePago = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedPago = await this.PagoRepository.deleteById( id );
    res.json( deletedPago );

  };



}