import { Router } from 'express'
import  path from 'path'
import walkToPayController from '../controller/walk-to-pay.controller'
 
 
//import {  } from './templates'
 
class WalkToPay{
    router:Router = Router();
 
    constructor(){
         this.config();
    }
    config():void{
         this.router.get('/getTransaction',walkToPayController.getTransaction)
         this.router.post('/createTransaction',walkToPayController.createTransactionBack)
         this.router.get('/getBackPSEWompi',walkToPayController.getBackPSEWompi)
         this.router.post('/createTransactionNequi',walkToPayController.createTransactionNequi)
         this.router.post('/createTransactionPSE',walkToPayController.createTransactionPSE)
    }
}
 
export default new WalkToPay().router;
//export default walkToPay_Routes.router;
