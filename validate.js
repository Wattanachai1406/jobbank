function checkNID() {
  let nid = document.getElementById("nid").value.trim();
  if (isNaN(nid) || nid.length !== 13) {
    return false;
  }
  return true;
}

function checkWorkDays() {
  let num = parseInt(document.getElementById("workDays").value.trim());
  if (isNaN(num) || num < 1 || num > 6) {
    return false;
  }
  return true;
}

function validateForm() {
  let genderChecked = document.querySelector('input[name="genderRad"]:checked');
  if (!genderChecked) {
    alert("Please select your gender!");
    return false;
  }

  if (!checkNID()) {
    alert("Invalid value for National ID!");
    document.getElementById("nid").focus();
    return false;
  } else {
    if (!checkWorkDays()) {
      alert("Invalid value for days of work!");
      document.getElementById("workDays").focus();
      return false;
    } else {
      total = payRateCalculate();
      alert("Your weekly pay rate is " + total + " THB");
      return false;
    }
  }
}
