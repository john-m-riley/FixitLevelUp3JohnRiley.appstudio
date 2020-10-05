
btnHomeCalc.onclick=function(){
  let homePrin = Number(inptHomePrin.value)
  let homeInt = Number(inptHomeInt.value)
    homeMnthInt = homeInt/12/100
  let homeMon = Number(inptHomeMnth.value*12)

  
  function homeLoanPayment (p, i, m) {
    return (p * (i * ((1 + i)**m)) / (((1 + i)**m)-1))
}

  let homePay = homeLoanPayment(homePrin, homeMnthInt, homeMon);
  let homePayRounded = homePay.toPrecision(6);
  
  lblHomePay.value = `A home loan for ${homePrin} over ${homeMon} months at ${homeInt} percent interest would result in a monthly payment of ${homePayRounded}.`
}


btnHomeReset.onclick=function(){
  inptHomePrin.value = ""
  inptHomeInt.value = ""
  inptHomeMnth.value = ""
}

btnHomeHome.onclick=function(){
  ChangeForm(Home)
}
