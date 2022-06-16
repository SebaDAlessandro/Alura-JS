
import { Cliente } from './Cliente.js'
import { CtaAhorro } from './CtaAhorro.js';
import { CtaCte } from './CtaCte.js';
//import { Cuenta } from './Cuenta.js';

/*Cliente Seba = nombre, dni, rutCliente*/
const cliente = new Cliente('Seba','30303303','123')

/*cuenta = cliente, nroCta, sucursal*/
const ctaCteSeba = new CtaCte(cliente, 'c0001','001');



/*Cliente Paola = nombre, dni, rutCliente*/
const cliente2 = new Cliente('Pao','20202202','321')

/*cuenta = cliente, nroCta, sucursal*/
const ctaCtePao = new CtaCte(cliente2, 'c0002', '001');



/*trabajando con cuentas de ahorro*/
/*cuenta = cliente, nroCta, sucursal, saldo
importante: el cliente se puede cargar gracias al metod set (metodo de la clase cuenta)*/
const ctaAhorroSeba = new CtaAhorro(cliente,'a001','001',0)


//cargando saldo en cuentas
ctaCteSeba.depositoCta(900)
ctaAhorroSeba.depositoCta(10000)

//ver saldos en cuentas de Seba
console.log('')
console.log(ctaCteSeba)
console.log(`Saldo Seba Cta Cte: ${ctaCteSeba.verSaldo()}`)
console.log(ctaAhorroSeba)
console.log(`Saldo Seba Cta Ahorro: ${ctaAhorroSeba.verSaldo()}`)
console.log('')

//ver saldos en cuentas de Pao
console.log(ctaCtePao)
console.log(`Saldo Pao Cta Cte: ${ctaCtePao.verSaldo()}`)
ctaCtePao.depositoCta(100000)
console.log(`Saldo Pao Cta Cte: ${ctaCtePao.verSaldo()}`)
console.log('')

//Transferencia entre cuentas
ctaCtePao.transferirParaCta(100,ctaCteSeba)
console.log(`Saldo Pao Cta Cte: ${ctaCtePao.verSaldo()}`)
console.log(`Saldo Seba Cta Ahorro: ${ctaCteSeba.verSaldo()}`)
console.log('')

//cantidad de cuentas banco privado
console.log('Cantidad de Ctas Ctes: ', CtaCte.cantidadCuentas)
console.log('Cantidad de Ctas Ctes: ', ctaCteSeba.cliente)//accedo por el metodo get (metodo de la clase cuenta)
console.log('')

//ctaCteSeba.prueba() //probando el comportamiento de los metodos entre las diferentes clases

//retiro de cuenta cte Seba con comision del 5%
ctaCteSeba.retirarCta(100)
console.log(`Saldo Seba Cta Cte luego del retiro: ${ctaCteSeba.verSaldo()}`)
console.log('')

//retiro de cuenta Ahorro Seba con comision del 2%
ctaAhorroSeba.retirarCta(100)
console.log(`Saldo Seba Cta Cte luego del retiro: ${ctaAhorroSeba.verSaldo()}`)
console.log('')