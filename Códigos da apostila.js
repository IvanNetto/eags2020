var saldo = 500.00;

function permitirSaque(quantia) {

const chequeEspecial = 100;

if (quantia <= (chequeEspecial + saldo)){                   
                
             console.log('Saque da quantia de ' + quantia + ' autorizado!') // Não sabe ainda o novo saldo
             descontarSaqueDoSaldo(quantia)
    
    }else{
             console.log('Saque não autorizado!')
    } 
}

function descontarSaqueDoSaldo(quantia) {
        
    var novoSaldo = saldo - quantia // O novo saldo deve ser descoberto aqui
    var saldoFinal = descontarImpostoDoSaldo(novoSaldo, quantia)
    console.log('Novo saldo: R$ ' + saldoFinal)
        
}

#### código a ser refatorado 
function descontarImpostoDoSaldo(quantia, saldo){
    const imposto = 0.010;  
    if (quantia > (saldo / 2)){         
        
        var saldoDescontadoOImposto = novoSaldo - (saldo * imposto)
        return saldoDescontadoOImposto
    }else{
		return novoSaldo	
	}         
}

#### código refatorado
var saldo = 500.00;
function descontarImpostoDoSaldo(novoSaldo, quantia){
    const imposto = 0.010;  
	  var novoSaldoDescontadoOImposto = novoSaldo - (saldo * imposto)
    if (!quantia > (saldo / 2)){                
        return novoSaldo
    }
		return novoSaldoDescontadoOImposto	       
}
 
 
 ################################################
 
 function permitirSaque(quantia) {
    
    var saldo = 500.00;
    const imposto = 0.010;  
    const chequeEspecial = 100.00
    
    // permite sacar sempre que o saque for menor ou igual ao saldo  + chequeEspecial E saque menor que a metade do saldo
    if ((quantia <= (chequeEspecial + saldo)) && (quantia <= (saldo / 2))){     
        saldo = saldo - quantia     
        console.log('Saque da quantia de ' + quantia + ' autorizado! Novo saldo: R$ ' + saldo)
    
    // permite sacar sempre que o saque for menor ou igual ao saldo  + chequeEspecial E saque maior que a metade do saldo com imposto
    } else if ((quantia <= (chequeEspecial + saldo)) && (quantia > (saldo / 2)))  {             
            var novoSaldo = saldo - quantia     
            var saldoDescontadoOImposto = novoSaldo - saldo * imposto
console.log (saldoDescontadoOImposto)
            
            console.log('Saque da quantia de ' + quantia + ' autorizado! Novo saldo: R$ ' + saldoDescontadoOImposto)             
    }else if ((quantia > (chequeEspecial + saldo))) {
                console.log('Saque não autorizado!')
    }
          
}

#################################################
var saldo = 500.00;

function permitirSaque(quantia) {
            
    if (quantia <= saldo){
               var statusDaSolicitacao = true;     
           console.log('Saque da quantia de R$ ' + quantia + ' autorizado!')        
    }else{
                     var statusDaSolicitacao = false;
           console.log('Saque da quantia de R$ ' + quantia + ' negado! Apenas o saldo de R$ ' + saldo + ' será sacado.')           
    
    }   
    executarOSaque (quantia, statusDaSolicitacao)
}


function executarOSaque(quantia, statusDaSolicitacao) {

    if (statusDaSolicitacao == true){
            saldo = saldo - quantia
    }else{
          saldo = 0
    }   
  
  console.log ('Novo saldo:' + saldo)

}

################################################

function permitirSaque(quantia) {
	
    var saldo = 500.00;
	        
    if (quantia <= saldo){
		
           saldo = saldo - quantia	
           console.log('Saque da quantia de R$ ' + quantia + ' autorizado! Novo saldo: R$ ' + saldo)		
    }else{
           console.log('Saque da quantia de R$ ' + quantia + ' negado! Apenas o saldo de R$ ' + saldo + ' será sacado.')
           saldo = 0
           console.log ('Novo saldo:' + saldo)		
    }	 
}

################################################

var capacidadeDeArmazenamentoDoBau = 50;

while (capacidadeDeArmazenamentoDoBau > 0) {
  capacidadeDeArmazenamentoDoBau--
  // Executa a quantidade de vezes necessárias para esvaziar o baú
  console.log('Retire uma bolinha');
}


################################################

var capacidadeDeArmazenamentoDoBau = 10;

do{
  capacidadeDeArmazenamentoDoBau --
  // Executa a quantidade de vezes necessárias para esvaziar o baú
  console.log('Retire uma bolinha');
}while (capacidadeDeArmazenamentoDoBau > 0)

################################################

var passo = 0;
var quantidadeDeBolinhasDeGude = 10;

if (passo < quantidadeDeBolinhasDeGude) { 
   passo = passo + 1 // Ou então, passo++
   console.log('Retire uma bolinha');
}


###############################################

var quantidadeDeBolinhasDeGude = 10;
for (passo = 0; passo < quantidadeDeBolinhasDeGude; passo++) {
  // Executa a quantidade de vezes necessárias para esvaziar a caixa de bolinhas de gude
  console.log('Retire uma bolinha');
}


###############################################

function cobrarTarifaDaTranferencia(tipoDeConta) {
	
	var valorDaTransferencia = 500.00
	switch (tipoDeConta) {
	  case 'digital':
	          console.log('Conta livre de tarifas. Foi transferido o votal de: ' + valorDaTransferencia);    
	          break;
	  case 'normal':
	         console.log('Tarifa de R$ 10.00 por transferência. Foi transferido o total de: ' + (valorDaTransferencia - 10.00));
	         break;
	  case 'poupanca':
	         console.log('Tarifa de R$ 5.00 por transferência. Foi transferido o total de: ' + (valorDaTransferencia - 5.00));       
	         break;
	  default:
	         console.log('Favor informar o tipo de conta corrente');
	}
}
cobrarTarifaDaTranferencia('digital');
###############################################

var valorDaTransferencia = 500.00
if (tipoDeConta == 'digital') {
    console.log('Conta livre de tarifas. Foi transferido o votal de: ' + valorDaTransferencia);
}
else if (tipoDeConta == 'normal') {
    console.log('Tarifa de R$ 10.00 por transferência. Foi transferido o total de: ' + (valorDaTransferencia - 10.00));
}
else if (tipoDeConta == 'poupanca') {
    console.log('Tarifa de R$ 5.00 por transferência. Foi transferido o total de: ' + (valorDaTransferencia - 5.00));
}
else {
    console.log('Favor informar o tipo de conta corrente');
}


#############################################

if (saque <= saldo) {
          var valorPermitidoParaSaque = saque
          console.log ('Saque de: ' + valorPermitidoParaSaque  + 'autorizado como valor solicitado' )	
} else if ((saque > saldo) && (saque > limiteDiarioParaSaque)){
          console.log ('Valor superior ao saldo e limite diário para saque atingido.')	
}


#############################################

if (saque < saldo) {
      var valorPermitidoParaSaque = saque  // o valor desejado será permitido para saque
      console.log (‘Saque de’ + valorPermitidoParaSaque  + ‘autorizado como valor solicitado’ )	
}else{
      var valorPermitidoParaSaque = saldo // o valor do saldo será permitido para saque
      console.log (‘Saque de’ + valorPermitidoParaSaque  + ‘autorizado como valor solicitado’ )	
}

#############################################

var valorPermitidoParaSaque = saque
console.log (‘Saque de’ + valorPermitidoParaSaque  + autorizado como valor solicitado’ )

#############################################

if (saque < saldo) {
      var valorPermitidoParaSaque = saque
      console.log ('Saque de' + valorPermitidoParaSaque  + 'autorizado como valor solicitado' )	
}


#############################################

function realizarExpressaoAritmetica (a, b, c) {
	
	console.log (((a * b ) - c) /2)	
	
}

realizarExpressaoAritmetica(8, 5, 10)


##############################################

function alterarCodigoDoBancoDoCaixaEletronico(novoCod){
const codigoDoBancoDoCaixaEletronico = 001
codigoDoBancoDoCaixaEletronico = novoCod
	console.log(codigoDoBancoDoCaixaEletronico)

}

alterarCodigoDoBancoDoCaixaEletronico(002) // Chamada da função que resultará em erro



##############################################

function permitirSaque(quantia) {
	
    var saldo = 500.00;
        
    if (quantia < saldo){	
    	console.log('Saque da quantia solicitada autorizado!')
		executarSaque(quantia)
    }else{
	   	console.log('Saque da quantia solicitada negado! Apenas o saldo será sacado.')
		executarSaque(saldo)
    }
}

##############################################

function validarSenhaDigitada () {
    var senhaCadastrada = 'borboleta123'
    var senhaDigitada = 'borboleta123'
	console.log (senhaCadastrada == senhaDigitada)
}

validarSenhaDigitada () // Chamada da função validarSenhaDigitada()

###############################################


function descobreParOuImpar(numero) { 
    if (numero % 2 == 0){
        console.log('Esse é um número par')
    }else{
        console.log('Esse é um número ímpar')
    }
}

descobreParOuImpar(100);

###############################################

var saldo, quantia;

function permitirSaque() {
    if (quantia < saldo){
    	console.log ('sacar quantia desejada');
    }else{
    	console.log('sacar o valor do saldo');
    }	 
}


################################################

INICIO: procedimento
    VARIÁVEIS saldo, quantia 
    quantia <- entrada de dados: TECLADO
    se (quantia > saldo) então
        imprimir dado:MONITOR -> 'Sacar quantia desejada'
    caso contrário
        imprimir dado:MONITOR -> 'Sacar o valor do saldo'
FIM: procedimento

################################################
