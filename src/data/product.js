import i1 from "../data/i1.jpg";
import i2 from "../data/i2.jpg";
import i3 from "../data/i3.jpg";
import i4 from "../data/i4.jpg";
import i5 from "../data/i5.jpg";
import i6 from "../data/i6.jpg";
import i7 from "../data/i7.jpg";
import i8 from "../data/i8.jpg";
import i9 from "../data/i9.jpg";
import i10 from "../data/i10.jpg";
import i11 from "../data/i11.jpg";
import i12 from "../data/i12.jpg";
import i13 from "../data/i13.jpg";
import i14 from "../data/i14.jpg";
import i15 from "../data/i15.jpg";
import i16 from "../data/i16.jpg";
import i17 from "../data/i17.jpg";
import i18 from "../data/i18.jpg";
import i19 from "../data/i19.jpg";
import i20 from "../data/i20.jpg";

const products = [
  {
    "id": 1,
    "name": "Chocolate Cake",
    "shortDescription": "Rich and moist chocolate sponge",
    "image": i1,
    "detailedDescription": "Delicious chocolate sponge cake layered with creamy chocolate frosting. Perfect for birthdays and special occasions.",
    "actualRate": 600,
    "offerRate": 500,
    "discountPercentage": 17,
    "deliveryDay": "2 days",
    "qty":2
  },
  {
    "id": 2,
    "name": "Vanilla Cake",
    "shortDescription": "Classic soft vanilla sponge",
    "image": i2,
    "detailedDescription": "Soft and fluffy vanilla cake with smooth buttercream frosting. A timeless favorite for every celebration.",
    "actualRate": 500,
    "offerRate": 450,
    "discountPercentage": 10,
    "deliveryDay": "2 days",
    "qty":1
  },
  {
    "id": 3,
    "name": "Red Velvet Cake",
    "shortDescription": "Soft red velvet with cream cheese",
    "image": i3,
    "detailedDescription": "Red velvet sponge cake with creamy cheese frosting. A luxurious choice for weddings or parties.",
    "actualRate": 700,
    "offerRate": 600,
    "discountPercentage": 14,
    "deliveryDay": "3 days",
    "qty":1
  },
  {
    "id": 4,
    "name": "Black Forest Cake",
    "shortDescription": "Chocolate with cherries and cream",
    "image": i4,
    "detailedDescription": "Traditional German chocolate cake with layers of whipped cream and cherries. Perfect for chocolate lovers.",
    "actualRate": 750,
    "offerRate": 650,
    "discountPercentage": 13,
    "deliveryDay": "3 days",
    "qty":1
  },
  {
    "id": 5,
    "name": "Fruit Cake",
    "shortDescription": "Dried fruits and nuts",
    "image": i5,
    "detailedDescription": "Rich cake with dried fruits, nuts, and a hint of brandy. Ideal for festive occasions.",
    "actualRate": 800,
    "offerRate": 700,
    "discountPercentage": 12,
    "deliveryDay": "4 days",
    "qty":1
  },
  {
    "id": 6,
    "name": "Cheesecake",
    "shortDescription": "Creamy baked cheesecake",
    "image": i6,
    "detailedDescription": "Smooth and creamy cheesecake with a buttery biscuit base. Available in classic or fruit flavors.",
    "actualRate": 650,
    "offerRate": 550,
    "discountPercentage": 15,
    "deliveryDay": "2 days",
    "qty":1
  },
  {
    "id": 7,
    "name": "Carrot Cake",
    "shortDescription": "Moist cake with grated carrots",
    "image": i7,
    "detailedDescription": "Healthy and moist carrot cake topped with cream cheese frosting. Perfect for tea time or birthdays.",
    "actualRate": 600,
    "offerRate": 500,
    "discountPercentage": 17,
    "deliveryDay": "2 days",
    "qty":1
  },
  {
    "id": 8,
    "name": "Pineapple Cake",
    "shortDescription": "Tropical pineapple flavor",
    "image": i8,
    "detailedDescription": "Soft sponge cake layered with fresh pineapple slices or pineapple jam. Refreshing and sweet.",
    "actualRate": 550,
    "offerRate": 480,
    "discountPercentage": 13,
    "deliveryDay": "2 days",
    "qty":1
  },
  {
    "id": 9,
    "name": "Coffee Cake",
    "shortDescription": "Light sponge with coffee flavor",
    "image": i9,
    "detailedDescription": "Perfect blend of coffee and soft sponge cake. Great for breakfast or evening tea.",
    "actualRate": 500,
    "offerRate": 450,
    "discountPercentage": 10,
    "deliveryDay": "2 days",
    "qty":1
  },
  {
    "id": 10,
    "name": "Butterscotch Cake",
    "shortDescription": "Rich caramel flavor",
    "image": i10,
    "detailedDescription": "Soft sponge cake topped with rich butterscotch frosting. Loved by kids and adults alike.",
    "actualRate": 600,
    "offerRate": 520,
    "discountPercentage": 13,
    "deliveryDay": "2 days",
    "qty":1
  },
  {
    "id": 11,
    "name": "Mango Cake",
    "shortDescription": "Fresh mango flavor",
    "image": i11,
    "detailedDescription": "Light sponge cake layered with fresh mango slices and mango cream. Perfect for summer.",
    "actualRate": 650,
    "offerRate": 570,
    "discountPercentage": 12,
    "deliveryDay": "3 days",
    "qty":1
  },
  {
    "id": 12,
    "name": "Pistachio Cake",
    "shortDescription": "Nutty pistachio flavor",
    "image":i12,
    "detailedDescription": "Soft sponge cake with pistachio cream and nuts on top. Rich and nutty taste.",
    "actualRate": 700,
    "offerRate": 600,
    "discountPercentage": 14,
    "deliveryDay": "3 days",
"qty":1
  },
  {
    "id": 13,
    "name": "Strawberry Cake",
    "shortDescription": "Fresh strawberries & cream",
    "image": i13,
    "detailedDescription": "Soft sponge cake layered with fresh strawberries and cream. Sweet and fruity.",
    "actualRate": 650,
    "offerRate": 580,
    "discountPercentage": 11,
    "deliveryDay": "2 days",
"qty":1
  },
  {
    "id": 14,
    "name": "Banana Cake",
    "shortDescription": "Moist banana sponge",
    "image": i14,
    "detailedDescription": "Soft banana sponge cake with a light caramel or cream frosting. Perfect for all ages.",
    "actualRate": 500,
    "offerRate": 450,
    "discountPercentage": 10,
    "deliveryDay": "2 days",
"qty":1
  },
  {
    "id": 15,
    "name": "Oreo Cake",
    "shortDescription": "Chocolate & Oreo cookies",
    "image": i15,
    "detailedDescription": "Chocolate cake layered with Oreo cream frosting and crushed Oreo toppings. A hit with kids.",
    "actualRate": 650,
    "offerRate": 580,
    "discountPercentage": 11,
    "deliveryDay": "2 days",
"qty":1
  },
  {
    "id": 16,
    "name": "Blueberry Cheese",
    "shortDescription": "Creamy cheesecake with blueberries",
    "image": i16,
    "detailedDescription": "Rich cheesecake topped with fresh blueberries. Sweet and tangy taste.",
    "actualRate": 700,
    "offerRate": 620,
    "discountPercentage": 11,
    "deliveryDay": "3 days",
"qty":1
  },
  {
    "id": 17,
    "name": "Lemon Cake",
    "shortDescription": "Tangy lemon sponge",
    "image": i17,
    "detailedDescription": "Light and fluffy sponge cake with fresh lemon flavor. Refreshing and zesty.",
    "actualRate": 500,
    "offerRate": 450,
    "discountPercentage": 10,
    "deliveryDay": "2 days",
"qty":1
  },
  {
    "id": 18,
    "name": "Coffee Walnut",
    "shortDescription": "Coffee sponge with walnuts",
    "image": i18,
    "detailedDescription": "Coffee-flavored sponge cake layered with cream and walnuts. Great for coffee lovers.",
    "actualRate": 650,
    "offerRate": 580,
    "discountPercentage": 11,
    "deliveryDay": "2 days",
"qty":1
  },
  {
    "id": 19,
    "name": "Pecan Pie Cake",
    "shortDescription": "Nutty pecan flavor",
    "image": i19,
    "detailedDescription": "Rich cake layered with pecans and caramel. Perfect dessert for nut lovers.",
    "actualRate": 750,
    "offerRate": 670,
    "discountPercentage": 11,
    "deliveryDay": "3 days",
"qty":1
  },
  {
    "id": 20,
    "name": "Vanilla Almond",
    "shortDescription": "Vanilla sponge with almond toppings",
    "image": i20,
    "detailedDescription": "Classic vanilla sponge with almond flakes and light cream frosting. Elegant and tasty.",
    "actualRate": 600,
    "offerRate": 540,
    "discountPercentage": 10,
    "deliveryDay": "2 days",
"qty":1
  }
];

export default products;
