function payRateCalculate() {
  let workDays = parseInt((document.getElementById("workDays").value).trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let payPerDay = 0;

  switch (yearOfStudy) {
    case 1:
      payPerDay = 300;
      break;
    case 2:
      payPerDay = 350;
      break;
    case 3:
      payPerDay = 400;
      break;
    case 4:
      payPerDay = 450;
      break;
    default:
      payPerDay = 0;
  }

  let weeklyPay = payPerDay * workDays;
  return weeklyPay;
}
