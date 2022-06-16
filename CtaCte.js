import { Cliente } from './Cliente.js'

export class CtaCte {
    #cliente;
    numero;
    agencia;
    #saldo;/*encapsulamos el valor saldo para que solo sea modificado dentro de esta clase 
             mediante metodos internos*/
    static cantidadCuentas = 0; /*valor estatico linkeado a la clase general. Cuenta la cantidad de cuentas
                                existentes*/

    set cliente(valor){
        if(valor instanceof Cliente){//controla si el valor es una instacia del tipo cliente
            this.#cliente = valor;
        }
    }

    get cliente(){
        return this.#cliente
    }
    
    constructor(cliente, numero, agencia){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CtaCte.cantidadCuentas++;
    }

    depositoCta(valor){
        if(valor>0){
            this.#saldo += valor;
            return this.#saldo;
        }else{
            console.log('ingrese un numero mayor a cero')
            return this.#saldo;
        }
    }

    retirarCta(valor){
        if (valor>0){
            if(valor <= this.#saldo){
                this.#saldo -= valor;
                return this.#saldo;
            }else{
                console.log('saldo insuficiente');
                return this.#saldo;
            }
        }else{
            console.log('ingrese un numero mayor a cero')
            return this.#saldo;
        }
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCta(valor,ctaDestino){
        if(valor <= this.#saldo){
            if(valor>0){
                this.retirarCta(valor);
                ctaDestino.depositoCta(valor)
                return this.#saldo;
            }else{
                console.log('No se puede realizar la operacion')
                return this.#saldo;
            }
        }else{
            console.log('saldo insuficiente');
            return this.#saldo;
        }
    }

}