//polimorfirmos: se utiliza el mismo metodo para las clases de clientes (que van por una linea) tanto como 
//para empleados (que van por otra linea)
export class SistemaAutenticacion {
    static login(usuario, clave){//         <==== funcion estatica
        // return usuario.clave === clave;
        if('autenticable' in usuario && usuario.autenticable instanceof Function)
        /*1ro: verificamos si dentro del listado de 'usuario' existe un atributo o metodo con nombre autenticable
          2do: verificamos si justamente es del tipo funcion*/
            return usuario.autenticable(clave);
        else
            return false;
    }
}

/*el atributo llamado "clave", que existe tanto en empleado, tanto en cliente, es nuestra interfaz común para
 poder acceder al funcionamiento de autenticación, entonces eso es lo que se denomina interfaz, es el punto 
 donde existe la comunicación. Tenemos la interfaz como atributo, la interfaz como método*/