function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {
        "crustType": crustType,
        "sauceType": sauceType,
        "cheeses": cheeses,
        "toppings": toppings
    }
    return pizza
}

let pizza1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage'])
// console.log('pizza1', pizza1)


let pizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions'])
// console.log('pizza2', pizza2)

let pizza3 = pizzaOven('thin', 'pesto', ['mozzarella', 'smoked gouda', 'ricotta'], ['pepperoni', 'jalapeno', 'pineapple', 'roasted garlic'])
// console.log('pizza3', pizza3)

let memePizza = pizzaOven('regular', 'none', 'none', 'left beef')
// console.log('memePizza', memePizza)

function randomPizza() {

    // Establish arrays
    let crusts = ['hand tossed', 'thin', 'deep dish']
    let sauces = ['marinara', 'alfredo', 'barbecue', 'pesto', 'arrabbiata']
    let cheeses = ['mozzarella', 'cheddar', 'ricotta', 'havarti', 'colby', 'smoked gouda', 'pepper jack', 'parmesean', 'meunster', 'sheep', 'goat', 'camembert', 'reblochon']
    let meats = ['pepperoni', 'beef', 'bacon', 'ham', 'sausage', 'chicken', 'spicy chicken', 'salami', 'chorizo', 'pork belly', 'veal', 'bison', 'gabagool', 'mortadella', 'turkey', 'alligator']
    let otherToppings = ['jalapeno', 'pineapple', 'roasted garlic', 'basil', 'olive', 'bell pepper', 'onion', 'mushroom', 'sun-dried tomato', 'fig', 'artichoke heart', 'Hot Cheetos™️']
    
    // Get random index of array
    function randIndex(arr) {
        return Math.floor(Math.random() * arr.length)
    }

    // Establish ingredients
    let crust = crusts[randIndex(crusts)]
    let sauce = sauces[randIndex(sauces)]
    let cheese = cheeses[randIndex(cheeses)]
    let meat = meats[randIndex(meats)]
    let other = otherToppings[randIndex(otherToppings)]

    return {
        'crust': crust,
        'sauce': sauce,
        'cheese': cheese,
        'meat': meat,
        'other': other
    }
}

console.log(randomPizza())
console.log(randomPizza())
console.log(randomPizza())