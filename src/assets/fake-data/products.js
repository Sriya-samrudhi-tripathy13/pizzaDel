// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 109.00,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Savor perfection in every bite with our Irresistible Chicken Burger. A succulent, expertly grilled chicken patty rests between soft buns, layered with fresh lettuce, tomato, and a hint of zesty mayo. It's a symphony of flavors that'll leave you craving more. ",
  },

  // {
  //   id: "02",
  //   title: "Vegetarian Pizza",
  //   price: 115.0,
  //   image01: product_02_image_01,
  //   image02: product_02_image_02,
  //   image03: product_02_image_03,
  //   category: "Pizza",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 159.00,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Indulge in the ultimate pizza experience with our Double Cheese Margherita. A crispy, thin crust serves as the canvas for a harmonious blend of two luscious cheeses – velvety mozzarella and sharp Parmesan. Generously adorned with vibrant tomato slices and aromatic basil leaves, every slice is a celebration of simplicity and decadence. It's a symphony of flavors that embodies the essence of classic Italian cuisine.",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 179.00,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Dive into the vibrant flavors of our Mexican Green Wave Salad. Crisp mixed greens form the base, highlighted by a medley of avocado slices, roasted corn, and black beans – all dancing in perfect harmony. Tossed in a zesty lime-cilantro dressing, this salad delivers a refreshing wave of flavors that encapsulate the essence of Mexican cuisine. It's a symphony of fresh ingredients that'll transport you to sun-soaked fiestas with every bite.",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 129.00,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Experience burger bliss with our Ultimate Cheese Burger. A juicy, perfectly grilled beef patty takes center stage, embraced by the oozy allure of melted cheddar and Swiss cheeses. Crisp lettuce, juicy tomato slices, and tangy pickles add layers of freshness, while our secret sauce brings the symphony of flavors together. Encased in a toasted sesame seed bun, this burger is a mouthwatering composition that'll have you craving an encore bite.",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 149.00,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Step into burger royalty with our Royal Cheese Burger. A succulent, flame-grilled beef patty reigns supreme, crowned with the richness of melted aged cheddar and velvety gouda cheeses. Fresh lettuce, ripe tomato, and perfectly caramelized onions add layers of flavor fit for a king. All this decadence is elegantly nestled within a regal brioche bun, creating a harmonious symphony of tastes that will leave you feeling truly majestic.",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 189.00,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Embark on a culinary voyage with our Exquisite Seafood Pizza. A golden, thin crust serves as the foundation for a symphony of oceanic delights. Succulent shrimp, tender pieces of crab, and a melody of perfectly cooked clams and mussels are harmoniously arranged on a bed of rich tomato sauce. A sprinkling of fresh herbs and a hint of garlic complete the masterpiece, resulting in a slice of pizza that captures the essence of the sea in every bite. It's a symphony of flavors that will transport you to coastal shores with each savory mouthful.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 139.00,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Experience pizza perfection with our Classic Thin Cheese Pizza. A delicate, golden crust forms the canvas for a symphony of flavors centered around creamy, melted mozzarella cheese. Each bite is a harmonious blend of simplicity and indulgence, with the thin crust allowing the cheese to shine as the star. It's a timeless composition that captures the essence of pizza in its purest form – a melody of cheese, crust, and satisfaction with every slice.",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 129.00,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Embark on a flavor-packed journey with our Mushroom Delight Pizza. A golden crust lays the foundation for a symphony of earthy flavors as sautéed mushrooms take center stage. From tender button mushrooms to rich portobello slices, each bite is a tantalizing exploration of the forest's bounty. A harmonious layer of melted mozzarella cheese envelops the mushrooms, creating a decadent yet balanced composition that will transport your taste buds to a woodland oasis.",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 119.00,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Indulge in timeless perfection with our Classic Hamburger. A juicy, handcrafted beef patty is expertly seasoned and flame-grilled to your desired level of succulence. Nestled between soft sesame seed buns, it's accompanied by fresh lettuce, ripe tomato slices, and finely chopped onions. A touch of tangy ketchup and mustard complete the symphony of flavors, delivering a mouthwatering experience that captures the essence of the quintessential hamburger.",
  },

  {
    id: "11",
    title: "Crunchy Bread",
    price: 89.00,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Savor the symphony of textures with our Crunchy Artisan Bread. Baked to golden perfection, the crust shatters under your touch, revealing a tender, airy interior. With each bite, you'll experience the harmonious contrast between the satisfying crunch and the delightful softness within. This bread is a testament to the art of baking, a composition of flavor and texture that will elevate any meal to a culinary masterpiece.",
  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 79.00,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Experience the comfort of our Homestyle Loaf Bread. Baked with care, this classic staple boasts a rustic golden crust that encases a tender, fluffy interior. Whether toasted to perfection or enjoyed fresh, each slice is a harmonious blend of simplicity and satisfaction. It's the embodiment of home-baked goodness, a versatile canvas for your favorite spreads or simply enjoyed on its own.",
  },
];

export default products;
