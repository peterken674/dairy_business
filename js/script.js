
function collectData() {
      //Array to store the values entered.
      var amounts = [];

      amounts.push(document.getElementById("shed_A").value);
      amounts.push(document.getElementById("shed_B").value);
      amounts.push(document.getElementById("shed_C").value);
      amounts.push(document.getElementById("shed_D").value);

      return amounts;
}

function totalProduction(){
      var [a, b, c, d] = collectData();

      //Convert to numbers.
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);
      d = parseFloat(d);
      var totalDailyAmount =  a + b + c + d;

      // document.getElementById("a").innerHTML = "Hello";
      return totalDailyAmount;
}

function display(){
      var [a, b, c, d] = collectData();

      console.log("Production in shed A is " + a + " litres per day.");
      console.log("Production in shed B is " + b + " litres per day.");
      console.log("Production in shed C is " + c + " litres per day.");
      console.log("Production in shed D is " + d + " litres per day.");
      console.log("The total production is " + totalProduction() + " litres per day.");
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

function leapYear(){
      var days = {
            January: 31,
            February: 29,
            March: 31,
            April: 30,
            May: 31,
            June: 30,
            July: 31,
            August: 31,
            September: 30,
            October: 31,
            November: 30,
            December: 31
      };
      var totalDailyAmount = totalProduction();
      for (var [key, value] of Object.entries(days)){
            var earnings = `${value}` * totalDailyAmount;
            console.log("Your income for " + `${key}` + " is " + earnings);
      }
}