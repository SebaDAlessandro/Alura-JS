import { Cuenta } from './Cuenta.js';

export class CtaAhorro extends Cuenta {

    constructor(cliente, numero, agencia, saldo){
        super(cliente, numero, agencia, saldo);/*super: hereda los atributos del padre.
        cuenta = cliente, nroCta, sucursal, saldo. El saldo en este caso puede precargarse con algo*/
    }

    retirarCta(valor){
        super._retirarCta(valor, 2)
    }
}