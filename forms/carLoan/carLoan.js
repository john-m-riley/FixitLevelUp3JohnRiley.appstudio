
btnCarCalc.onclick=function(){
  let carPrin = Number(inptCarPrinciple.value)
  let carInt = Number(inptCarInterest.value)
    carMnthInt = carInt/12/100
  let carMon = Number(inptCarTotalMonths.value)
  
  function carLoanPayment (p, i, m) {
    return (p * (i * ((1 + i)**m)) / (((1 + i)**m)-1))
}

  let carPay = carLoanPayment(carPrin, carMnthInt, carMon);
  let carPayRounded = carPay.toPrecision(5);
  
  lblCarPay.value = `An auto loan for ${carPrin} over ${carMon} months at ${carInt} percent interest would result in a monthly payment of ${carPayRounded}.`
}


btnCarReset.onclick=function(){
  inptCarPrinciple.value = ""
  inptCarInterest.value = ""
  inptCarTotalMonths.value = ""
}

btnCarHome.onclick=function(){
  ChangeForm(Home)
}
