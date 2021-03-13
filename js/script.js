function totalProduction() {
      //Array to store the values entered.
      var amounts = [];

      amounts.push(document.getElementById("shed_A").value);
      amounts.push(document.getElementById("shed_B").value);
      amounts.push(document.getElementById("shed_C").value);
      amounts.push(document.getElementById("shed_D").value);

      var [a, b, c, d] = amounts;

      //Convert to numbers.
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);
      d = parseFloat(c);
      var totalDailyAmount =  a + b + c + d;

      console.log("Production in shed A is " + a + " litres per day.");
      console.log("Production in shed B is " + b + " litres per day.");
      console.log("Production in shed C is " + c + " litres per day.");
      console.log("Production in shed D is " + d + " litres per day.");
      console.log("The total production is " + totalDailyAmount + " litres per day.");
      return totalDailyAmount;
}

function rate() {
      var rate = document.getElementById("rate").value;
      rate = parseFloat(rate);
      return rate;
}

function time() {
      if (document.getElementById("period").value == "Weekly") {
            period = 7;
      } else if (document.getElementById("period").value == "Monthly") {
            var period = 30;
      } else if (document.getElementById("period").value == "Annual") {
            var period = 365;
      } else {
            var period = document.getElementById("period").value;
            period = parseInt(period);
      }
      return period;
}

function incomeOverTime(sellingPrice, time) {
      var income = sellingPrice * totalProduction() * time;
      console.log("Estimated income for the selected period is " + income);

}