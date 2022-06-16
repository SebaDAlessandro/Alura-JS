
import { Cliente } from './Cliente.js'
import { CtaAhorro } from './CtaAhorro.js';
import { CtaCte } from './CtaCte.js';
//import { Cuenta } from './Cuenta.js';

/*Cliente Seba = nombre, dni, rutCliente*/
const cliente = new Cliente('Seba','30303303','123')

/*cuenta = cliente, nroCta, sucursal, saldo*/
const ctaCteSeba = new CtaCte(cliente, 'c0001','001');



/*Cliente Paola = nombre, dni, rutCliente*/
const cliente2 = new Cliente('Pao','20202202','321')

/*cuenta = cliente, nroCta, sucursal, saldo*/
const ctaCtePao = new CtaCte(cliente2, 'c0002', '001');



/*trabajando con cuentas de ahorro*/
/*cuenta = cliente, nroCta, sucursal*/

const ctaAhorroSeba = new CtaAhorro(cliente,'a001','001',0)


//cargando saldo en cuentas
ctaCteSeba.depositoCta(2000)
ctaAhorroSeba.depositoCta(10000)

//ver saldos en cuentas de Seba
console.log(ctaCteSeba)
console.log(`Saldo Seba Cta Cte: ${ctaCteSeba.verSaldo()}`)
console.log(ctaAhorroSeba)
console.log(`Saldo Seba Cta Ahorro: ${ctaAhorroSeba.verSaldo()}`)

//ver saldos en cuentas de Pao
console.log(ctaCtePao)
console.log(`Saldo Pao Cta Cte: ${ctaCtePao.verSaldo()}`)

//cantidad de cuentas  banco privado
console.log('Cantidad de Ctas Ctes: ', CtaCte.cantidadCuentas)