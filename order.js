const menu =[
    {name: "Margherita", price:8},
    {name: "Pepperoni", price:18},
    {name: "Hawaiian", price:8},
    {name: "Veggie", price:9},
]
let cashInregistor =100
/**
 * @type {{ id: number; pizza: { name: string; price: number; } | undefined; status: string; }[]}
 */
let orderQueue =[]

 function addNewPizza(pizzaObj){
    menu.push(pizzaObj);
 }

 let nextOrderId = 1;
 function placeOrder(pizzaName){
    const selectedPizza = menu.find(obj=> obj.name === pizzaName);
    cashInregistor += selectedPizza.price;
    nextOrderId++;
    const newObj =  {id:nextOrderId, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newObj);
    return newObj;
 }
 function completedOrder(orderId){
    const check = orderQueue.find(order => order.id === orderId)
    check.status = "completed";
    return check;
 }
 addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completedOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)