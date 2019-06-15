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
            size: 'med',
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
            type: 'cheese',
            price: '9.99',
            image: 'https://www.averiecooks.com/wp-content/uploads/2018/04/pizza-9.jpg',
            id: uuid.v4(),
            size: 'small',
            toppings: [
              'cheese'
            ]
          },
          {
            type: 'pepperoni',
            price: '11.99',
            image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=450&c=sc&poi=face&q=85',
            id: uuid.v4(),
            size: 'small',
            toppings: [
              'cheese',
              'pepperoni'
            ]
          },
          {
            type: 'sausage',
            price: '12.99',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAeEBOf0ntGsoK2r1W9cMeoQnm8z5gQt7mz6JywM2fq90Xj_k',
            id: uuid.v4(),
            size: 'small',
            toppings: [
              'cheese',
              'sausage'
            ]
          },
          {
            type: 'supreme',
            price: '13.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps25356_TH10603D13.jpg',
            id: uuid.v4(),
            size: 'small',
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
            type: 'meatlovers',
            price: '9.99',
            image: 'https://www.bakedbyrachel.com/wp-content/uploads/2014/08/meatloverspizza1_bakedbyrachel.jpg',
            id: uuid.v4(),
            size: 'small',
            toppings: [
              'cheese',
              'sausage',
              'pepperoni',
              'canadian bacon',
              'bacon'
            ]
          },
          {
            type: 'vegetarian',
            price: '10.99',
            image: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Grilled-Veggie-Pizza_EXPS_LSBZ18_48960_D01_18_6b.jpg',
            id: uuid.v4(),
            size: 'small',
            toppings: [
              'cheese',
              'onions',
              'peppers',
              'olives',
              'spinach'
            ]
          },
          {
            type: 'hawaiian',
            price: '13.99',
            image: 'https://d2gk7xgygi98cy.cloudfront.net/1374-3-large.jpg',
            id: uuid.v4(),
            size: 'small',
            toppings: [
              'cheese',
              'canadian bacon',
              'pineapple'
            ]
          },
          {
            type: 'cheese',
            price: '11.99',
            image: 'https://www.averiecooks.com/wp-content/uploads/2018/04/pizza-9.jpg',
            id: uuid.v4(),
            size: 'medium',
            toppings: [
              'cheese'
            ]
          },
          {
            type: 'pepperoni',
            price: '13.99',
            image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=450&c=sc&poi=face&q=85',
            id: uuid.v4(),
            size: 'medium',
            toppings: [
              'cheese',
              'pepperoni'
            ]
          },
          {
            type: 'sausage',
            price: '14.99',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAeEBOf0ntGsoK2r1W9cMeoQnm8z5gQt7mz6JywM2fq90Xj_k',
            id: uuid.v4(),
            size: 'medium',
            toppings: [
              'cheese',
              'sausage'
            ]
          },
          {
            type: 'supreme',
            price: '15.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps25356_TH10603D13.jpg',
            id: uuid.v4(),
            size: 'medium',
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
            type: 'meatlovers',
            price: '11.99',
            image: 'https://www.bakedbyrachel.com/wp-content/uploads/2014/08/meatloverspizza1_bakedbyrachel.jpg',
            id: uuid.v4(),
            size: 'medium',
            toppings: [
              'cheese',
              'sausage',
              'pepperoni',
              'canadian bacon',
              'bacon'
            ]
          },
          {
            type: 'vegetarian',
            price: '12.99',
            image: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Grilled-Veggie-Pizza_EXPS_LSBZ18_48960_D01_18_6b.jpg',
            id: uuid.v4(),
            size: 'medium',
            toppings: [
              'cheese',
              'onions',
              'peppers',
              'olives',
              'spinach'
            ]
          },
          {
            type: 'hawaiian',
            price: '15.99',
            image: 'https://d2gk7xgygi98cy.cloudfront.net/1374-3-large.jpg',
            id: uuid.v4(),
            size: 'medium',
            toppings: [
              'cheese',
              'canadian bacon',
              'pineapple'
            ]
          },
          {
            type: 'cheese',
            price: '13.99',
            image: 'https://www.averiecooks.com/wp-content/uploads/2018/04/pizza-9.jpg',
            id: uuid.v4(),
            size: 'large',
            toppings: [
              'cheese'
            ]
          },
          {
            type: 'pepperoni',
            price: '15.99',
            image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=450&c=sc&poi=face&q=85',
            id: uuid.v4(),
            size: 'large',
            toppings: [
              'cheese',
              'pepperoni'
            ]
          },
          {
            type: 'sausage',
            price: '16.99',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAeEBOf0ntGsoK2r1W9cMeoQnm8z5gQt7mz6JywM2fq90Xj_k',
            id: uuid.v4(),
            size: 'large',
            toppings: [
              'cheese',
              'sausage'
            ]
          },
          {
            type: 'supreme',
            price: '17.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps25356_TH10603D13.jpg',
            id: uuid.v4(),
            size: 'large',
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
            type: 'meatlovers',
            price: '13.99',
            image: 'https://www.bakedbyrachel.com/wp-content/uploads/2014/08/meatloverspizza1_bakedbyrachel.jpg',
            id: uuid.v4(),
            size: 'large',
            toppings: [
              'cheese',
              'sausage',
              'pepperoni',
              'canadian bacon',
              'bacon'
            ]
          },
          {
            type: 'vegetarian',
            price: '14.99',
            image: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Grilled-Veggie-Pizza_EXPS_LSBZ18_48960_D01_18_6b.jpg',
            id: uuid.v4(),
            size: 'large',
            toppings: [
              'cheese',
              'onions',
              'peppers',
              'olives',
              'spinach'
            ]
          },
          {
            type: 'hawaiian',
            price: '17.99',
            image: 'https://d2gk7xgygi98cy.cloudfront.net/1374-3-large.jpg',
            id: uuid.v4(),
            size: 'large',
            toppings: [
              'cheese',
              'canadian bacon',
              'pineapple'
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
            size: 'small',
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
            size: 'small',
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
            size: 'small',
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
            size: 'small',
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
            size: 'small',
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
            size: 'small',
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
