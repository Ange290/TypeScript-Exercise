
interface Pizza {
  name: string;
  price: number;
}

interface Order {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
}

const menu: Pizza[] = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister: number = 100;
let orderQueue: Order[] = [];

function addNewPizza(pizza: Pizza): void {
  menu.push(pizza);
}

let nextOrderId: number = 1;

function placeOrder(pizzaName: string): Order | void {
  const selectedPizza = menu.find(p => p.name === pizzaName);

  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }

  cashInRegister += selectedPizza.price;

  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };

  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order | void {
  const order = orderQueue.find(o => o.id === orderId);

  if (!order) {
    console.error(`Order ${orderId} does not exist`);
    return;
  }

  order.status = "completed";
  return order;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
