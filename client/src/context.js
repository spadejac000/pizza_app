import React, { Component } from 'react';
import uuid from 'uuid';

const Context = React.createContext();

export class Provider extends Component {

  state = {
    savedFoodType: 'default',
    foodImagesMain: {
      pizzas: 'https://cache.dominos.com/olo/5_62_2/assets/build/market/US/_en/images/img/entree-page/build.png',
      chicken: 'https://cache.dominos.com/olo/5_62_2/assets/build/market/US/_en/images/img/entree-page/chicken.png',
      sandwiches: 'https://cache.dominos.com/olo/5_62_2/assets/build/market/US/_en/images/img/entree-page/sandwiches.png'
    },
    restaurants: [
      {
        id: uuid.v4(),
        path: "/Pizza_Hut",
        title: "Pizza Hut",
        pizzas: [
          {
            type: 'cheese pizza',
            price: '28.88',
            image: 'https://www.averiecooks.com/wp-content/uploads/2018/04/pizza-9.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese'
            ]
          }
        ]
      },
      {
        id: uuid.v4(),
        path: "/Dominos",
        title: 'Dominos',
        pizzas: [
          {
            type: 'ExtravaganZZa',
            price: '9.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_ZZ.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese'
            ]
          },
          {
            type: 'MeatZZa',
            price: '11.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_MX.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese',
              'pepperoni'
            ]
          },
          {
            type: 'Philly Cheese Steak',
            price: '12.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_PIZPH.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese',
              'sausage'
            ]
          },
          {
            type: 'Pacific Veggie',
            price: '13.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_PIZPV.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese',
              'pepperoni',
              'sausage',
              'peppers',
              'onions',
              'olives'
            ]
          },
          {
            type: 'Honolulu Hawaiian',
            price: '9.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_PIZUH.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese',
              'sausage',
              'pepperoni',
              'canadian bacon',
              'bacon'
            ]
          },
          {
            type: 'Deluxe',
            price: '10.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_DX.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese',
              'onions',
              'peppers',
              'olives',
              'spinach'
            ]
          },
          {
            type: 'Cali Chicken Bacon Ranch',
            price: '13.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_PIZCR.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese',
              'canadian bacon',
              'pineapple'
            ]
          },
          {
            type: 'Buffalo Chicken',
            price: '11.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_PIZBP.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese'
            ]
          },
          {
            type: 'Ultimate Pepperoni',
            price: '13.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_PIZPX.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese',
              'pepperoni'
            ]
          },
          {
            type: 'Memphis BBQ Chicken',
            price: '14.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_PIZCK.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese',
              'sausage'
            ]
          },
          {
            type: 'Wisconsin 6 Cheese',
            price: '15.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_PIZCZ.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese',
              'pepperoni',
              'sausage',
              'peppers',
              'onions',
              'olives'
            ]
          },
          {
            type: 'Spinach & Feta',
            price: '11.99',
            image: 'https://cache.dominos.com/olo/5_63_1/assets/build/market/US/_en/images/img/products/larges/S_PISPF.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese',
              'sausage',
              'pepperoni',
              'canadian bacon',
              'bacon'
            ]
          }
        ],
        wings: [
          {
            type: 'garlic parmasan',
            price: '13.99',
            image: 'https://www.spendwithpennies.com/wp-content/uploads/2019/02/Garlic-Parmesan-Wings-SpendWithPennies-24.jpg',
            id: uuid.v4(),
            amount: 10
          },
          {
            type: 'bbq',
            price: '13.99',
            image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/4c41b09cf41644a7b7ca1780edbeb960/BFV8354_Honey_BBQ_Chicken_Wings-FB1080.jpg',
            id: uuid.v4(),
            amount: 10
          },
          {
            type: 'buffalo',
            price: '13.99',
            image: 'https://dinnerthendessert.com/wp-content/uploads/2018/08/Buffalo-Wings-4.jpg',
            id: uuid.v4(),
            amount: 10
          },
          {
            type: 'salt and pepper',
            price: '13.99',
            image: 'https://lh3.googleusercontent.com/-eeXIDn_-oj8/Usuf3xPErLI/AAAAAAAEW9E/AfgOqbnvJMI/s800/salt-and-pepper-wings-13.jpg',
            id: uuid.v4(),
            amount: 10
          }
        ],
        sandwiches: [
          {
            type: 'buffalo chicken',
            price: '11.99',
            image: 'https://cache.dominos.com/olo/5_60_3/assets/build/market/US/_en/images/img/products/larges/S_BUFC.jpg',
            id: uuid.v4(),
            condiments: [
              'buffalo chicken',
              'cheese',
              'red peppers'
            ]
          }
        ]
      },
      {
        id: uuid.v4(),
        path: "/Little_Ceasars",
        title: "Little Ceasars",
        pizzas: [
          {
            type: 'cheese',
            price: '9.99',
            image: 'https://www.averiecooks.com/wp-content/uploads/2018/04/pizza-9.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese'
            ]
          }
        ]
      },
      {
        id: uuid.v4(),
        path: "/Papa_Johns",
        title: "Papa Johns",
        pizzas: [
          {
            type: 'cheese',
            price: '9.99',
            image: 'https://www.averiecooks.com/wp-content/uploads/2018/04/pizza-9.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese'
            ]
          }
        ]
      },
      {
        id: uuid.v4(),
        path: "/Papa_Murphys",
        title: "Papa Murphys",
        pizzas: [
          {
            type: 'cheese',
            price: '9.99',
            image: 'https://www.averiecooks.com/wp-content/uploads/2018/04/pizza-9.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese'
            ]
          }
        ]
      },
      {
        id: uuid.v4(),
        path: "/California_Pizza_Kitchen",
        title: "California Pizza Kitchen",
        pizzas: [
          {
            type: 'cheese',
            price: '9.99',
            image: 'https://www.averiecooks.com/wp-content/uploads/2018/04/pizza-9.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese'
            ]
          }
        ]
      },
      {
        id: uuid.v4(),
        path: "/Marcos_pizza",
        title: "Marcos Pizza",
        pizzas: [
          {
            type: 'cheese',
            price: '9.99',
            image: 'https://www.averiecooks.com/wp-content/uploads/2018/04/pizza-9.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese'
            ]
          }
        ]
      },
      {
        id: uuid.v4(),
        path: "/Round_Table_Pizza",
        title: "Round Table Pizza",
        pizzas: [
          {
            type: 'cheese',
            price: '9.99',
            image: 'https://www.averiecooks.com/wp-content/uploads/2018/04/pizza-9.jpg',
            id: uuid.v4(),
            toppings: [
              'cheese'
            ]
          }
        ]
      }
    ]
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
