import { Cuenta } from "./Cuenta.js";

export class CtaNomina extends Cuenta{
    constructor(cliente, numero, agencia, saldo){
        super(cliente, numero, agencia, saldo);
    }

    retirarCta(valor){
        super._retirarCta(valor, 1)
    }
}