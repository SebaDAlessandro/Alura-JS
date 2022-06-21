export class Cliente {
    nomCliente;
    dni;
    rutCliente;
    #clave;

    constructor(nomCliente,dni,rutCliente){
        this.nomCliente = nomCliente;
        this.dni = dni;
        this.rutCliente = rutCliente;
        this.#clave='';
    }
    
    asignarClave(clave){
        this.#clave = clave;
    }

    get clave(){
        return this.#clave;
    }

}