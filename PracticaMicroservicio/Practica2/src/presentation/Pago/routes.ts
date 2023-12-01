import { Router } from 'express';
import { CursoController } from './controller';
import { PagoDatasourceImpl } from '../../infraestructure/datasource/Pago.datasource.impl';
import { PagooRepositoryImpl } from '../../infraestructure/repositories/Pago.repository.impl';
import { PagoController } from './controller.aux';


export class PagoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new PagoDatasourceImpl();
    const pagoRepository = new PagooRepositoryImpl( datasource );
    const pagoController = new PagoController(pagoRepository);

    router.get('/', pagoController.getPago );
    router.get('/:id', pagoController.getPagoById );
    
    router.post('/', pagoController.createPagos);
    router.put('/:id', pagoController.updatePagos );
    router.delete('/:id', pagoController.deletePago );


    return router;
  }


}

