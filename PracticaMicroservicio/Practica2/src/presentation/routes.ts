import { Router } from 'express';

import { PagoRoutes } from './Pago/routes';
import { TipoeventoRoutes } from './Tipoevento/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/pago', PagoRoutes.routes );
    router.use('/api/tipoevento', TipoeventoRoutes.routes );
    
    return router;
  }


}

