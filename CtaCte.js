import { Cuenta } from './Cuenta.js';

export class CtaCte extends Cuenta {
    static cantidadCuentas = 0; 

    constructor(cliente, numero, agencia){
        super(cliente, numero, agencia,0);
        CtaCte.cantidadCuentas++;
    }
}