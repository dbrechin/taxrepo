var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  //supposed to implement code that calculates the total sales and
  //total tax for each company in the object.
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
// function salesTotal() {
//   for (t of )
// }

function sum (array) {
  var a = array.reduce(function(a, b) { return a + b; }, 0);
  return a;
}

function taxConversion (companies, tax){
  var output = {}

  for (company of companies){
    var salesSum = sum(company.sales);
    company.sales = salesSum;
    company.taxes = salesSum * salesTaxRates[company.province];
  }

  for (company of companies) {
    if(output[company.name] === undefined) {
       output[company.name] = {totalSales: company.sales,
                               totalTaxes: company.taxes};
    } else {
                               // output[company.sales + company.sales];
       output[company.name] = {totalSales: company.sales + output[company.name].totalSales,
                               totalTaxes: company.taxes + output[company.name].totalTaxes};


    }
  }

  return output;

}

      //add to existing value;

console.log(taxConversion(companySalesData, salesTaxRates));
// function totalWithTax() {
//   var total = (companySalesData["province"] * companySalesData["sales"])

//     return total
//   }

//   console.log(totalWithTax());
  //console.log('Tax Rate: ', salesTaxRates[x.province])
 // if (companySalesData["province"[x]])
//console.log(companySalesData)
//for loop that changes the province to the equivelent tax rate.

    //console.log('this is it: ', companySalesData[province]);



//console.log(companySalesData);


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/