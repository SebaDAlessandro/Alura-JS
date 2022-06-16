import {Cliente} from './Cliente.js'

export class Cuenta{
    #cliente;
    #saldo;
    static cantidadCuentas = 0;/*valor estatico linkeado a la clase general. Cuenta la cantidad de cuentas
    existentes*/

    constructor(cliente, numero, agencia){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        Cuenta.cantidadCuentas++;
    }

    /*metodo set = palabra reservada. Es un metodo que permite gestionar los valores de un atributo.
    Cliente es un atributo que solo puede gestionarse dentro de la clase en la cual fue creada (por eso 
    tiene el simbolo #). Para poder acceder al mismo desde otro entornose debe hacer uso del metodo set*/
    set cliente(valor){
        if(valor instanceof Cliente){/*controla si el valor es una instacia del tipo cliente. O sea, si 
        el valor ingresado cumple con las 3 condiciones pre cargadas en la clase Cliente, Si es así,
        entonces a this.#cliente se le asigna el valor*/
            this.#cliente = valor;
        }
    }

    /*el metodo get (otra palabra reservada) se utiliza para acceder al valor*/
    get cliente(){
        return this.#cliente
    }
    
    /*---------------------------------------------------------------------------------------*/

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
        _retirarCta(valor, 0)
    }

    /*para retirar saldos sin comision usamos el de arriba... por el contrario usamos el metodo privado*/

    /*hacemos un metodo privado. Con la definicion de arriba podemos invocarlo y pasarlo al resto de 
    las modulos. IMPORTANTE: NO ES UNA RESTRICCION IMPLICITA... solo advierte a otros programadores
    que no debe de pasarse ese metodo... hay otra funcion para eso y es justo la que esta escrita arriba...
    pero no es privada... solo los atributos con # son privados... es solo sintactico y etico*/
    _retirarCta(valor, comision){
        valor = valor * (1+comision/100);
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

    //prueba(){
    //    console.log('metodo del padre')
    //}
}