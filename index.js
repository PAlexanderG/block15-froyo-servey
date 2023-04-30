// Solution for After an initial meeting, the management team has decided they want to
// collect the following information. As a test case, you have your friend Jake complete the survey.
// Using what we know about JavaScript objects, create an object labeled customer and add the following
//* Key:value format pairs
// (const custumer)=

const customer = {
  // use const to declare objects if we want to modofy its property later
  // property: string
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};
// Jake made some mistakes when filling out the survey.
// I talked to Jake and gathered the correct information.
// Modify the following properties in the customer object using bracket notation:
// update key costumer value object:

// adding ([""] = property;) to modify them

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

// As I review the survey draft with the management team, they have decided to
// remove a couple of items from the survey. Delete the following properties in the
// customer object using the delete keyword.
// delete key value pairs: (delete custumer.keyword;)

delete customer.zipCode;
delete customer.favoriteStore;

// Management team wants to add the following items to the survey: toppings, future flavors, and today's purchase cost.
// You check with Jake, and he provides the other bits of information you need to add these keys.
// Add the following key:values to the customer object using dot notation:
// add new key value pairs

// adding ([""] = property;) to modify them
customer["toppings"] = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

//*Last Step
//check your survey one last time. In an array,
// print the keys in your survey. You should have the following:

// var console:costumer to print all information
console.log(customer);
// (method.key) returns the names of all possible strings properties and methods of and object
console.log(Object.keys(customer));
