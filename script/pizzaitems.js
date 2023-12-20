const pizzaItems = [
  {
      productId: 1,
      productName: "Margherita",
      productPrice: 799.99,
      productRatings: 4.5,
      productDescription: "Classic pizza with tomato, mozzarella, and basil toppings.",
      image:"images/margherita.jpg"
  },
  {
      productId: 2,
      productName: "Pepperoni",
      productPrice: 899.99,
      productRatings: 4.8,
      productDescription: "Pizza topped with pepperoni slices and melted cheese.",
      image:"images/pepperonipizza.jpg"
  },
  {
      productId: 3,
      productName: "Vegetarian",
      productPrice: 849.99,
      productRatings: 4.3,
      productDescription: "Loaded with a variety of fresh vegetables and cheese.",
      image:"images/vegeterianpizza.jpg"
  },
  {
      productId: 4,
      productName: "BBQ Chicken",
      productPrice: 929.99,
      productRatings: 4.6,
      productDescription: "Delicious barbecue chicken pizza with red onions and cilantro.",
      image:"images/bbqchicken.jpg"
  },
  {
      productId: 5,
      productName: "Supreme",
      productPrice: 999.99,
      productRatings: 4.7,
      productDescription: "The ultimate pizza with a mix of meats, veggies, and extra cheese.",
      image:"images/supremepizza.jpg"
  },
  {
      productId: 6,
      productName: "Mushroom Lovers",
      productPrice: 849.99,
      productRatings: 4.2,
      productDescription: "For those who can't get enough of savory mushrooms on their pizza.",
      image:"images/mushroompizza.jpg"
  },
  {
      productId: 7,
      productName: "Buffalo Chicken",
      productPrice: 899.99,
      productRatings: 4.4,
      productDescription: "Spicy buffalo chicken pizza with blue cheese crumbles.",
      image:"images/buffalochicken.jpg"
  },
  {
      productId: 8,
      productName: "Pesto Delight",
      productPrice: 849.99,
      productRatings: 4.1,
      productDescription: "Pesto sauce, cherry tomatoes, and fresh basil make this pizza a delight.",
      image:"images/pestodelight.jpg"
  },
  {
      productId: 9,
      productName: "Four Cheese",
      productPrice: 949.99,
      productRatings: 4.5,
      productDescription: "A cheesy masterpiece with a blend of four delicious cheeses.",
      image:"images/fourcheese.jpg"
  },
  {
      productId: 10,
      productName: "Meat Lovers",
      productPrice: 999.99,
      productRatings: 4.8,
      productDescription: "Packed with a variety of savory meats for the ultimate carnivore's delight.",
      image:"images/meatlovers.jpg"
  }
]

let cartQuantity=JSON.parse(localStorage.getItem('cartQuantity')) || [];

let cartQuantityObjects = [];