import { Cuenta } from './Cuenta.js';

export class CtaCte extends Cuenta {
    static cantidadCuentas = 0; 

    constructor(cliente, numero, agencia){
        super(cliente, numero, agencia,0);/*super: hereda los atributos del padre.
        cuenta = cliente, nroCta, sucursal, saldo => saldo por ser ctacte se inicia en cero*/
        CtaCte.cantidadCuentas++;
    }

    /*este ejemplo toma el metod del padre y le agrega otras funciones. De por si el metodo prueba ya se 
    esta copiado dentro del extends*/
    //algo(){
    //    super.prueba()
    //    console.log('metodo dle hijo')
    //}

    /*tambien se puede sobreescribir un metodo. En este caso le di el mismo nombre que un metodo de la clase
    cuenta*/
    //prueba(){
    //    console.log('metodo dle hijo') 
    //}

    retirarCta(valor){
        super._retirarCta(valor, 5)
    }
}