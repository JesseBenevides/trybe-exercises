const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701'
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25
      },
      pepperoni: {
        amount: 1,
        price: 20
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5
    }
  },
  payment: {
    total: 60
  }
}

// Questão 1
const customerInfo = order => {
  const deliveryPerson = order.order.delivery.deliveryPerson
  const name = order.name
  const phoneNumber = order.phoneNumber
  const street = order.address.street
  const number = order.address.number
  const ap = order.address.apartment

  console.log(
    `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${ap}`
  )
}

customerInfo(order)

// Questão 2
const printOder = order => {
  const name = order.name
  const pizzas = Object.keys(order.order.pizza)
  const drink = order.order.drinks.coke.type
  const payment = order.payment.total

  return `Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${payment}.`
}

const orderModifier = order => {
  const newOrder = {
    name: 'Luiz Silva',
    payment: {
      total: 50
    }
  }

  const orderFinal = Object.assign({}, order, newOrder)

  console.log(printOder(orderFinal))
}

orderModifier(order)
