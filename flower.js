// Declare variables for roses
let singlerose = 8;
let roses = 70;

// Declare variables for lilies
let singlelily= 10;
let lilies = 50;

// Declare variables for tulips
let singletulip = 2;
let tulips = 120;

// Calculate total price for each type of flower
let totalsinglerose = singlerose * roses;
let totalsinglelily = singlelily * lilies;
let totalsingletulip = singletulip * tulips;

// Calculate total price for all flowers
let totalPrice = totalsinglerose + totalsinglelily + totalsingletulip;

// Display inventory information in the console
console.log("Inventory Information:");
console.log("Roses - Unit Price: 8", ",Quantity: " + roses ,",Value:"+totalsinglerose);
console.log("Lilies - Unit Price: 10",",Quantity: " + lilies,",Value:"+totalsinglelily);
console.log("Tulips - Unit Price: 2" ,",Quantity: " + tulips,",Value:"+totalsingletulip);
console.log("Total Price of All Flowers:" + totalPrice);