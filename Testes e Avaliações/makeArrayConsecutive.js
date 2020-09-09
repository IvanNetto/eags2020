var statues = [6,2,3,8]
function makeArrayConsecutive2(statues) {
  var maiorV=0
  var tam = statues.length
  for (var inc=0;inc<tam;inc++){
    if(maiorV < statues[inc]){
      maiorV = statues[inc]
    }}  
  var menorV = maiorV
  for (inc=0;inc<tam;inc++){
    if(menorV > statues[inc]){
    menorV = statues[inc]
    }
  }
  var intervalo = maiorV - menorV - tam +1
  console.log(intervalo)
}

makeArrayConsecutive2(statues)