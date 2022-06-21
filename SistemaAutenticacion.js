//polimorfirmos: se utiliza el mismo metodo para las clases de clientes (que van por una linea) tanto como 
//para empleados (que van por otra linea)
export class SistemaAutenticacion {
    static login(usuario, clave){
        return usuario.clave === clave;
    }
}