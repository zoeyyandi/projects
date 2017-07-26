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

function calculateSalesTax(salesData, taxRates) { // this taxRates is the same as salesTaxRates
  var output = {}
  var companiesChecked = []
 for (var company of salesData) { // i am looping through the array
    var totalSales = 0
    var totalTaxes = 0
    var companyName = company.name
    if(companiesChecked.includes(companyName)) {
      totalSales = output[companyName].totalSales
      totalTaxes = output[companyName].totalTaxes
    }
    for(var sale of company.sales){  // company is the object in the array and company.sales is the array
        totalSales += sale;
        totalTaxes= totalTaxes + sale * taxRates[company.province]
    }
    output[companyName] = {
      totalSales: totalSales,
      totalTaxes: totalTaxes
    }
    companiesChecked.push(companyName)
  }
  return JSON.stringify(output, null, 2)
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)

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
