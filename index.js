
import { Cliente } from './Cliente.js'
// import { CtaCte } from './CtaCte.js'
// import { CtaAhorro } from './CtaAhorro.js';
import { Cuenta } from './Cuenta.js';

/*Cliente Seba = nombre, dni, rutCliente*/
const cliente = new Cliente('Seba','30303303','123')

/*cuenta = cliente, nroCta, sucursal, saldo*/
const ctaCteSeba = new Cuenta(cliente, '00001','001',0);



/*Cliente Paola = nombre, dni, rutCliente*/
const cliente2 = new Cliente('Pao','20202202','321')

/*cuenta = cliente, nroCta, sucursal, saldo*/
const ctaCtePao = new Cuenta(cliente2, '00002', '001',0);



/*trabajando con cuentas de ahorro*/
/*cuenta = cliente, nroCta, sucursal*/

const ctaAhorroSeba = new Cuenta(cliente,'a001','001',0)


//cargando saldo en cuentas
ctaAhorroSeba.depositoCta(10000)
ctaCteSeba.depositoCta(2000)

//ver saldos en cuentas
console.log(`Saldo Seba Cta Ahorro: ${ctaAhorroSeba.verSaldo()}`)
console.log(`Saldo Seba Cta Cte: ${ctaCteSeba.verSaldo()}`)

//cantidad de cuentas banco privado
console.log('Cantidad de Cuentas: ', Cuenta.cantidadCuentas)