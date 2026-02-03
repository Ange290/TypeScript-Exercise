const menu =[
    {name: "Margherita", price:8},
    {name: "Pepperoni", price:18},
    {name: "Hawaiian", price:8},
    {name: "Veggie", price:9},
]
const cashInregistor =100
const orderQueue =[]

 function addNewPizza(pizzaObj){
    menu.push(pizzaObj);
 }

 let nextOrderId =0;
 function placeOrder(pizzaName){
    const selectedPizza = menu.find(obj=> obj.name === pizzaName);
    cashInregistor += selectedPizza.price;
    nextOrderId++;
    const newObj =  {id:nextOrderId, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newObj);
    return newObj;
 }