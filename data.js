// Mock database. For now the data will be stored here
// Later, it would be stored in sqlite and used from there
//
//
// Mock database
const FeaturedItems = [

    {
        id:   1,
        name: "Cabbage Green Pattagobi Seed",
        description: "Fresh and crunchy, our Cabbage is perfect for salads, stir-fries, and coleslaw. Packed with vitamins and minerals, it’s a versatile and nutritious addition to your meals. Enjoy its mild flavor and crisp texture in a variety of dishes.",
        brand: "Green Garden",
        price: "7.99",
        referenceID: "demo_7",
        color: ["green"],
        dimensions: ["20x25cm", "25x30cm"],
        sizes: ["small", "medium", "large"], 
        remaining: 80,
        images: {
            "detail": [
                {
                    imgSrc: "static/img/display/jpg/whole-cabbage.jpg",
                    main: true,
                    alt: "The main image of the cabbage",
                },
                {
                    imgSrc: "static/img/display/jpg/cabbage.jpg",
                    main: false,
                    alt: "A small image of the cabbage",
                },
                {
                    imgSrc: "static/img/display/jpg/cabbage.png",
                    main: false,
                    alt: "A small image of the cabbage",
                },

            ]
        }
    },

     {
         id:   2,
         name: "Organic Bananas",
         description: "Delicious and nutritious, our premium bananas are rich in essential nutrients like potassium and energy. Perfect for snacks, smoothies, and desserts, enjoy their sweet and creamy taste anytime",
         brand: "Tropical",
         price: "12.99",
         referenceID: "demo_2",
         color: ["yellow", "green"],
         dimensions: ["20x30cm", "30x40cm"],
         sizes: ["small", "medium", "large"], 
         remaining: 75,
         images: {

            detail: [
                {
                    imgSrc: "static/img/display/jpg/banana.jpg",
                    main: true,
                    alt: "The main image of a banana",
                },
                {
                    imgSrc: "static/img/display/jpg/half-banana.jpg",
                    main: false,
                    alt: "The main image of a banana",
                },
                {
                    imgSrc: "static/img/display/jpg/banana.jpg",
                    main: false,
                    alt: "The main image of a banana",
                },


            ]
        }
     },
     {
        id:   3,
         name: "Bell Pepper",
         description: "Vibrant and crisp, our Bell Peppers are packed with vitamins and add color and flavor to any dish. Perfect for salads, stir-fries, and grilling, enjoy them raw or cooked for a delightful crunch and sweetness..",
         brand: "Fresh Harvest",
         price: "5.49",
         referenceID: "demo_3",
         color: ["red", "yellow", "green"],
         dimensions: ["10x15cm", "15x20cm"],
         sizes: ["small", "medium", "large"], 
         remaining: 100,
         images: {  
            detail: [
              
                {
                    imgSrc: "static/img/display/jpg/yellow-bell-pepper.jpg",
                    main: true,
                    alt: "The image of a bell pepper",
        
                },
                {
                    imgSrc: "static/img/display/jpg/green-bell-pepper.jpg",
                    main: false,
                    alt: "The image of a bell pepper",
                },
                {
                    imgSrc: "static/img/display/jpg/red-pepper.webp",
                    main: false,
                    alt: "The image of a bell pepper",
                },


            ]
            
         }
     },
     {
         id:   4,
         name: "Cauliflower",
         description: "Fresh and crunchy, our Cauliflower is perfect for various dishes. Whether roasted, steamed, or in a stir-fry, it adds a healthy, tasty touch to meals. Rich in vitamins and fiber, it's a nutritious choice.",
         brand: "Green Valley",
         price: "8.49",
         referenceID: "demo_4",
         color: ["white", "green"],
         dimensions: ["25x30cm", "30x35cm"],
         sizes: ["small", "medium", "large"], 
         remaining: 60,
         images: {
              detail: [
              
                {
                    imgSrc: "static/img/display/jpg/cauliflower.jpg",
                    main: true,
                    alt: "The main image of a cauliflow",
        
                },
                {
                    imgSrc: "static/img/display/jpg/cauliflower.jpg",
                    main: false,
                    alt: "The main image of a cauliflow",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-cauliflower.jpg",
                    main: false,
                    alt: "The main image of a cauliflow",
                },


            ]
             
         }
     },
     {
         id:   5,
         name: "Red Onions",
         description: "Our flavorful Red Onions enhance any dish with their vibrant color and robust taste. Ideal for salads, grilling, or as a savory addition to cooked meals, they're a kitchen essential rich in antioxidants for both flavor and health",
         brand: "Organic Farm",
         price: "5.99",
         referenceID: "demo_5",
         color: ["red", "purple"],
         dimensions: ["10x15cm", "15x20cm"],
         sizes: ["small", "medium", "large"], 
         remaining: 120,
         images: {
            detail: [
              
                {
                    imgSrc: "static/img/display/jpg/purple-onions.jpg",
                    main: true,
                    alt: "An image of red onion",
        
                },
                {
                    imgSrc: "static/img/display/jpg/onions-set.jpg",
                    main: false,
                    alt: "An image of red onion",
                },
                {
                    imgSrc: "static/img/display/jpg/sliced-red-onion.jpg",
                    main: false,
                    alt: "An image of red onion",
                },


            ]
           
         }
     },
     {
        id:   6,
         name: "Avocado",
         description: "Creamy and delicious, our Avocados are perfect for making guacamole, adding to salads, or spreading on toast. Packed with healthy fats, vitamins, and minerals, avocados are a nutritious and tasty choice for any meal.",
         brand: "Exotic Fruits",
         price: "18.99",
         referenceID: "demo_6",
         color: ["green"],
         dimensions: ["12x18cm", "15x20cm"],
         sizes: ["small", "medium", "large"], 
         remaining: 90,
         images: {

            detail: [
              
                {
                    imgSrc: "static/img/display/jpg/avacodo-slice.jpg",
                    main: true,
                    alt: "An image of avocado",
        
                },
                {
                    imgSrc: "static/img/display/jpg/avacodo.jpg",
                    main: false,
                    alt: "An image of avocado",
                },
                {
                    imgSrc: "static/img/display/jpg/green-avocados.jpg",
                    main: false,
                    alt: "An image of avocado",
                },

            ]
           
         }
     }
 ];


//  New products
const NewItems = [

    {
        id:   7,
        name: "Pomegrante",
        description: "Juicy and vibrant, our Pomegranate is perfect for snacking, salads, and desserts. Rich in antioxidants and vitamins, it’s a delicious and healthy addition to your diet. Enjoy its sweet-tart flavor and burst of juiciness in every bite.",

        brand: "Vintage",
        price: "27.99",
        referenceID: "demo_8",
        color: ["white", "red", "brown"],
        dimensions: ["20x25cm", "25x30cm"],
        sizes: ["small", "medium", "large"], 
        remaining: 30,
        images: {
            "detail": [
                {
                    imgSrc: "static/img/display/jpg/Pomegranate.jpg",
                    main: true,
                    alt: "The main image of the pomegranate",
                },
                {
                    imgSrc: "static/img/display/jpg/Pomegranate_slice.jpg",
                    main: false,
                    alt: "An image of the pomegranate",
                },
                {
                    imgSrc: "static/img/display/jpg/Pomegranate3.jpg",
                    main: false,
                    alt: "An image of the pomegranate",
                },

            ]
        }
    },

     {
         id:   8,
         name: "Pineapple",
         description: "Sweet and tangy, our Pineapple is perfect for snacking, smoothies, and desserts. Rich in vitamins and enzymes, it’s a tropical and healthy addition to your diet. Enjoy its refreshing flavor and juicy texture in a variety of dishes.",
         brand: "Tropical",
         price: "9.99",
         referenceID: "demo_9",
         color: ["Camel", "Orange", "Yellow"],
         dimensions: ["60x90cm"],
         sizes: ["small", "large"], 
         remaining: 25,
         images: {

            detail: [
                {
                    imgSrc: "static/img/display/jpg/pineapple.jpg",
                    main: true,
                    alt: "The main image of a pineapple",
                },
                {
                    imgSrc: "static/img/display/jpg/pineapple_slice.jpg",
                    main: false,
                    alt: "An image of a pineapple",
                },
                {
                    imgSrc: "static/img/display/jpg/pineapple_slice-3.jpg",
                    main: false,
                    alt: "An image of a pineapple",
                },


            ]
        }
     },
     {
        id:   9,
         name: "Cashew, Almonds and mint seeds",
         description: "Crunchy and nutritious, our Cashew, Almond, and Pistachio Nuts are perfect for snacking, baking, and salads. Packed with protein and healthy fats, they’re a wholesome and delicious addition to your diet.",
         brand: "Fresh Harvest",
         price: "10.49",
         referenceID: "demo_10",
         color: ["brown", "orange", "green", "brown"],
         dimensions: ["60x90cm"],
         sizes: ["small", "medium", "large"], 
         remaining: 100,
         images: {  
            detail: [
              
                {
                    imgSrc: "static/img/display/jpg/cashew.jpg",
                    main: false,
                    alt: "Chocolate mint roast seeds",
        
                },
                {
                    imgSrc: "static/img/display/jpg/cashew2.jpg",
                    main: false,
                    alt: "Chocolate mint roast seeds",
                },
                {
                    imgSrc: "static/img/display/jpg/cashew3.jpg",
                    main: true,
                    alt: "Chocolate mint roast seed",
                },


            ]
            
         }
     },
     {
         id:   10,
         name: "Protein Milkshake",
         description: "Creamy and delicious, our Protein Milkshake is perfect for post-workout recovery, breakfast, or a snack. Packed with protein and essential nutrients, it’s a nutritious and satisfying drink.",
         brand: "Green Valley",
         price: "9.99",
         referenceID: "demo_12",
         color: ["Taupe", "Beige", "Yellow"],
         dimensions: ["40x60cm", "80x120cm"],
         sizes: ["small", "medium"], 
         remaining: 80,
         images: {
              detail: [
              
                {
                    imgSrc: "static/img/display/jpg/protein.jpg",
                    main: true,
                    alt: "The main image of a protein shake",
        
                },
                {
                    imgSrc: "static/img/display/jpg/protein2.jpg",
                    main: false,
                    alt: "An image of a protein shake",
                },
                {
                    imgSrc: "static/img/display/jpg/protein3.jpg",
                    main: false,
                    alt: "An image of a protein shake",
                },


            ]
             
         }
     },
     {
         id:   11,
         name: "Bulk Organic Sicilian Orange",
         description: "Grab our Deal of the Week: a bulk box of organic Sicilian Gippumala oranges. Perfect for families or orange lovers, these sun-ripened fruits are handpicked for ultimate freshness and sweetness.",
         brand: "Organic Farm",
         price: "15.99",
         referenceID: "demo_11",
         color: ["orange"],
         dimensions: ["60x90cm"],
         sizes: ["large"], 
         remaining: 80,
         images: {
            detail: [
              
                {
                    imgSrc: "static/img/display/jpg/oranges.jpeg",
                    main: true,
                    alt: "A bulk orange image pack",
        
                },
                {
                    imgSrc: "static/img/display/jpg/box-of-oranges.jpeg",
                    main: false,
                    alt: "An orange image",
                },
                {
                    imgSrc: "static/img/display/jpg/half-an-orange.jpeg",
                    main: false,
                    alt: "A potato image",
                },


            ]
           
         }
     },
     {
        id:   12,
         name: "Natural Kashmiri Turkish Walnuts",
         description: "Nutty and nutritious, our Natural Kashmiri Turkish Walnuts are perfect for snacking, baking, and salads. Packed with omega-3 fatty acids and antioxidants, they’re a wholesome and delicious addition to your diet.",
         brand: "Exotic Fruits",
         price: "20.99",
         referenceID: "demo_6",
         color: ["Beige", "White", "Pink"],
         dimensions: ["40x60cm", "80x120cm"],
         sizes: ["small", "medium", "large"], 
         remaining: 90,
         images: {

            detail: [
              
                {
                    imgSrc: "static/img/display/jpg/turkish-mullberries.jpg",
                    main: true,
                    alt: "An image of avocado",
        
                },
                {
                    imgSrc: "static/img/display/jpg/turkish-mullberries2.jpg",
                    main: false,
                    alt: "An image of avocado",
                },
                {
                    imgSrc: "static/img/display/jpg/turkish-mullberries3.jpg",
                    main: false,
                    alt: "An image of avocado",
                },

            ]
           
         }
     }
 ];


//  drinks selection
const DrinksMenu = [

    {
        id: 13,
        name: "Azure Bliss Cooler",
        description: "Dive into the Azure Bliss Cooler, a tropical blend of pineappl, curacao, coconut water, and lemon. Perfect over ice, this vibrant sun kiss drink brings a refreshing escape with each sip.",
        brand: "Blissful Brews",
        price: "9.59",
        referenceID: "drink_1",
        color: ["yellow"],
        dimensions: ["15x20cm", "20x25cm"],
        sizes: ["medium"], 
        remaining: 35,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/drink2.jpeg",
                    main: false,
                    alt: "The main image of the Green Delight Elixir",
                },
                {
                    imgSrc: "static/img/display/jpg/drink2-2.jpeg",
                    main: false,
                    alt: "A secondary image of the Green Delight Elixir",
                },
                {
                    imgSrc: "static/img/display/jpg/drink1.jpeg",
                    main: true,
                    alt: "Another image of the Green Delight Elixir",
                }
            ]
        }
    },

    {
        id: 14,
        name: "Green Delight Elixir",
        description: "Refresh with our Green Delight Elixir—a mix of cucumber juice, lime, and mint. This vibrant, zesty drink is perfect for a hot day or as a lively start to your evening",
        brand: "Blissful Brews",
        price: "8.00",
        referenceID: "drink_2",
        color: ["green", "dark green"],
        dimensions: ["12x18cm", "18x24cm"],
        sizes: ["medium"], 
        remaining: 40,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/drink3.jpeg",
                    main: true,
                    alt: "The main image of the Azure Bliss Cooler",
                },
                {
                    imgSrc: "static/img/display/jpg/drink3-3.jpeg",
                    main: false,
                    alt: "A secondary image of the Azure Bliss Cooler",
                },
                {
                    imgSrc: "static/img/display/jpg/drink3-3b.jpeg",
                    main: false,
                    alt: "Another image of the Azure Bliss Cooler",
                }
            ]
        }
    },

    {
        id: 15,
        name: "Blue Bliss Heaven",
        description: "Dive into the Blue Bliss Heaven, a tropical blend of blue curacao, coconut water, and lime juice. Perfect over ice, this vibrant blue drink brings a refreshing escape with each sip. Its sweet, citrusy notes make it ideal for lounging and unwinding.",
        brand: "Blissful Brews",
        price: "7.00",
        referenceID: "drink_3",
        color: ["blue", "light blue"],
        dimensions: ["12x18cm", "18x24cm"],
        sizes: ["medium"], 
        remaining: 65,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/drink4.jpeg",
                    main: false,
                    alt: "The main image of the Blue Bliss Heaven",
                },
                {
                    imgSrc: "static/img/display/jpg/drink4-4b.jpeg",
                    main: true,
                    alt: "A secondary image of the Blue Bliss Heaven",
                },
                {
                    imgSrc: "static/img/display/jpg/drink4-4.jpeg",
                    main: false,
                    alt: "Another image of the Blue Bliss Heaven",
                }
            ]
        }
    },

    {
        id: 16,
        name: "Crimson Breeze Refresher",
        description: "Savor the Crimson Breeze Refresher, blending raspberry, lime, and mint. This fizzy, vibrant red drink is ideal for a quick pick-me-up or any celebration. Enjoy the balanced sweet and tart flavors, and feel refreshed with each delightful sip.",
        brand: "Blissful Brews",
        price: "7.25",
        referenceID: "drink_4",
        color: ["red", "crimson"],
        dimensions: ["10x15cm", "15x20cm"],
        sizes: ["medium"], 
        remaining: 50,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/drink5.jpeg",
                    main: true,
                    alt: "The main image of the Crimson Breeze Refresher",
                },
                {
                    imgSrc: "static/img/display/jpg/drink5-5.jpeg",
                    main: false,
                    alt: "A secondary image of the Crimson Breeze Refresher",
                },
                {
                    imgSrc: "static/img/display/jpg/drink5-5b.jpeg",
                    main: false,
                    alt: "Another image of the Crimson Breeze Refresher",
                }
            ]
        }
    },

    {
        id: 17,
        name: "Blush Nectar Cooler",
        description: "Experience the Blush Nectar Cooler, a charming blend of rosewater, honey, and lemon. This pink drink, bottled for elegance, is perfect for a serene afternoon. Its subtle floral and citrus notes offer a refreshing and soothing escape.",
        brand: "Blissful Brews",
        price: "8.50",
        referenceID: "drink_5",
        color: ["pink", "light pink"],
        dimensions: ["8x12cm", "12x16cm"],
        sizes: ["medium"], 
        remaining: 45,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/drink6.jpeg",
                    main: true,
                    alt: "The main image of the Blush Nectar Cooler",
                },
                {
                    imgSrc: "static/img/display/jpg/drink6-6.jpeg",
                    main: false,
                    alt: "A secondary image of the Blush Nectar Cooler",
                },
                {
                    imgSrc: "static/img/display/jpg/drink6-6b.jpeg",
                    main: false,
                    alt: "Another image of the Blush Nectar Cooler",
                }
            ]
        }
    }
];



// ice creams
const IceCreams = [
    {
        id: 18,
        name: "Tropical Sunshine Delight",
        description: "Brighten your day with the Tropical Sunshine Delight, a refreshing blend of mango and pineapple. This creamy, vibrant treat is perfect for a summer escape, with each spoonful delivering a burst of tropical flavor.",
        brand: "Sunny Scoops",
        price: "6.99",
        referenceID: "icecream_1",
        color: ["yellow", "golden"],
        dimensions: ["12x15cm", "15x20cm"],
        sizes: ["medium"], 
        remaining: 30,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/organic-icecream1.jpeg",
                    main: true,
                    alt: "The main image of the Tropical Sunshine Delight",
                },
                {
                    imgSrc: "static/img/display/jpg/organic-icecream1-2.jpeg",
                    main: false,
                    alt: "A secondary image of the Tropical Sunshine Delight",
                },
                {
                    imgSrc: "static/img/display/jpg/organic-icecream1-3.jpeg",
                    main: false,
                    alt: "Another image of the Tropical Sunshine Delight",
                }
            ]
        }
    },

    {
        id: 19,
        name: "Strawberry Cloud Elixir",
        description: "Indulge in the Strawberry Cloud Elixir, a heavenly mix of creamy strawberry and vanilla. This velvety dessert offers a delightful balance of sweetness and smooth texture, making it a perfect choice for any occasion.",
        brand: "Dreamy Desserts",
        price: "7.50",
        referenceID: "icecream_2",
        color: ["pink", "light pink"],
        dimensions: ["10x14cm", "14x18cm"],
        sizes: ["medium"], 
        remaining: 45,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/organic-icecream2.jpeg",
                    main: true,
                    alt: "The main image of the Strawberry Cloud Elixir",
                },
                {
                    imgSrc: "static/img/display/jpg/organic-icecream2-2.jpeg",
                    main: false,
                    alt: "A secondary image of the Strawberry Cloud Elixir",
                },
                {
                    imgSrc: "static/img/display/jpg/organic-icecream2-3.jpeg",
                    main: false,
                    alt: "Another image of the Strawberry Cloud Elixir",
                }
            ]
        }
    },

    {
        id: 20,
        name: "Citrus Sunrise Float",
        description: "Savour the Citrus Sunrise Float, a zesty blend of orange and creamy vanilla. This layered treat combines the tang of fresh oranges with a smooth, creamy base, offering a refreshing and delightful experience.",
        brand: "Morning Bliss",
        price: "6.75",
        referenceID: "icecream_3",
        color: ["orange", "white"],
        dimensions: ["12x16cm", "16x20cm"],
        sizes: ["medium"], 
        remaining: 40,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/organic-icecream3.jpeg",
                    main: true,
                    alt: "The main image of the Citrus Sunrise Float",
                },
                {
                    imgSrc: "static/img/display/jpg/organic-icecream3-2.jpeg",
                    main: false,
                    alt: "A secondary image of the Citrus Sunrise Float",
                },
                {
                    imgSrc: "static/img/display/jpg/organic-icecream3-3.jpeg",
                    main: false,
                    alt: "Another image of the Citrus Sunrise Float",
                }
            ]
        }
    },

    {
        id: 21,
        name: "Minty Green Delight",
        description: "Experience the Minty Green Delight, a refreshing burst of mint and creamy vanilla. This vibrant green treat is both cool and sweet, making it an invigorating choice for mint lovers and dessert enthusiasts alike.",
        brand: "Fresh Flavors",
        price: "6.25",
        referenceID: "icecream_4",
        color: ["green", "light green"],
        dimensions: ["12x15cm", "15x18cm"],
        sizes: ["medium"], 
        remaining: 35,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/organic-icecream4.jpeg",
                    main: true,
                    alt: "The main image of the Minty Green Delight",
                },
                {
                    imgSrc: "static/img/display/jpg/organic-icecream4-2.jpeg",
                    main: false,
                    alt: "A secondary image of the Minty Green Delight",
                },
                {
                    imgSrc: "static/img/display/jpg/organic-icecream4-3.jpeg",
                    main: false,
                    alt: "Another image of the Minty Green Delight",
                }
            ]
        }
    },

    {
        id: 22,
        name: "Berry Bliss Float",
        description: "Delight in the Berry Bliss Float, a luscious blend of mixed berries and creamy vanilla. This vibrant red treat offers a sweet and tart flavor combination, perfect for those seeking a refreshing and indulgent experience.",
        brand: "Berrylicious Treats",
        price: "7.00",
        referenceID: "icecream_5",
        color: ["red", "pink"],
        dimensions: ["12x15cm", "15x20cm"],
        sizes: ["medium"], 
        remaining: 50,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/organic-icecream5.jpeg",
                    main: true,
                    alt: "The main image of the Berry Bliss Float",
                },
                {
                    imgSrc: "static/img/display/jpg/organic-icecream5-2.jpeg",
                    main: false,
                    alt: "A secondary image of the Berry Bliss Float",
                },
                {
                    imgSrc: "static/img/display/jpg/organic-icecream5-3.jpeg",
                    main: false,
                    alt: "Another image of the Berry Bliss Float",
                }
            ]
        }
    }
];


const Snacks = [
    {
        id: 23,
        name: "Golden Oat Bites",
        description: "Enjoy the wholesome taste of Golden Oat Bites, a delightful blend of crunchy oats and honey. These bite-sized treats are perfect for snacking anytime, offering a satisfying crunch and a hint of natural sweetness.",
        brand: "Nature's Nibbles",
        price: "4.99",
        referenceID: "snack_1",
        color: ["brown"],
        dimensions: ["5x5cm", "10x10cm"],
        sizes: ["small", "medium"], 
        remaining: 100,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/snacks1.jpeg",
                    main: true,
                    alt: "The main image of the Golden Oat Bites",
                },
                {
                    imgSrc: "static/img/display/jpg/snacks1-2.jpeg",
                    main: false,
                    alt: "A secondary image of the Golden Oat Bites",
                },
                {
                    imgSrc: "static/img/display/jpg/snacks1-3.jpeg",
                    main: false,
                    alt: "Another image of the Golden Oat Bites",
                }
            ]
        }
    },

    {
        id: 24,
        name: "Lime Zest Crisps",
        description: "Brighten your day with Lime Zest Crisps, a zesty and crunchy snack bursting with citrus flavor. These crisps offer a refreshing taste and a light, crispy texture, making them an ideal choice for any time of the day.",
        brand: "Crispy Delights",
        price: "3.75",
        referenceID: "snack_2",
        color: ["light yellow"],
        dimensions: ["4x4cm", "8x8cm"],
        sizes: ["small", "medium"], 
        remaining: 75,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/snacks2.jpeg",
                    main: true,
                    alt: "The main image of the Lime Zest Crisps",
                },
                {
                    imgSrc: "static/img/display/jpg/snacks2-2.jpeg",
                    main: false,
                    alt: "A secondary image of the Lime Zest Crisps",
                },
                {
                    imgSrc: "static/img/display/jpg/snacks2-3.jpeg",
                    main: false,
                    alt: "Another image of the Lime Zest Crisps",
                }
            ]
        }
    },

    {
        id: 25,
        name: "Choco Layered Delight",
        description: "Indulge in the Choco Layered Delight, a rich and decadent treat featuring layers of creamy chocolate and crisp wafer. Each bite offers a perfect harmony of smooth and crunchy textures, making it a luxurious snack for chocolate lovers.",
        brand: "Sweet Treats Co.",
        price: "5.25",
        referenceID: "snack_3",
        color: ["dark brown", "chocolate"],
        dimensions: ["3x5cm", "6x10cm"],
        sizes: ["small", "medium"], 
        remaining: 60,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/snack3.jpeg",
                    main: true,
                    alt: "The main image of the Choco Layered Delight",
                },
                {
                    imgSrc: "static/img/display/jpg/snack3-2.jpeg",
                    main: false,
                    alt: "A secondary image of the Choco Layered Delight",
                },
                {
                    imgSrc: "static/img/display/jpg/snack3-3.jpeg",
                    main: false,
                    alt: "Another image of the Choco Layered Delight",
                }
            ]
        }
    },
    
    {
        id: 26,
        name: "Double Chocolate Cake",
        description: "Savor the rich and velvety taste of our Double Chocolate Cake, a luscious treat for chocolate enthusiasts. With layers of moist chocolate cake and creamy chocolate frosting, it's a decadent dessert that promises pure indulgence.",
        brand: "Gourmet Delights",
        price: "15.99",
        referenceID: "snack_4",
        color: ["dark brown", "black"],
        dimensions: ["10x10cm", "20x20cm"],
        sizes: ["small", "large"], 
        remaining: 45,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/snack4.jpeg",
                    main: true,
                    alt: "The main image of the Double Chocolate Cake",
                },
                {
                    imgSrc: "static/img/display/jpg/snack4-2.jpeg",
                    main: false,
                    alt: "A secondary image of the Double Chocolate Cake",
                },
                {
                    imgSrc: "static/img/display/jpg/snack4-3.jpeg",
                    main: false,
                    alt: "Another image of the Double Chocolate Cake",
                }
            ]
        }
    },

    {
        id: 27,
        name: "Chocolate Fudge Cake",
        description: "Experience the ultimate chocolate delight with our Chocolate Fudge Cake. This cake features rich, fudgy layers and a smooth, glossy chocolate ganache, creating an irresistible treat for any chocolate lover.",
        brand: "Decadent Bakes",
        price: "18.50",
        referenceID: "snack_5",
        color: ["dark brown", "chocolate"],
        dimensions: ["12x12cm", "24x24cm"],
        sizes: ["small", "large"], 
        remaining: 30,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/snack5.jpeg",
                    main: true,
                    alt: "The main image of the Chocolate Fudge Cake",
                },
                {
                    imgSrc: "static/img/display/jpg/snack5-2.jpeg",
                    main: false,
                    alt: "A secondary image of the Chocolate Fudge Cake",
                },
                {
                    imgSrc: "static/img/display/jpg/snack5-3.jpeg",
                    main: false,
                    alt: "Another image of the Chocolate Fudge Cake",
                }
            ]
        }
    }
];




const BakedItems = [
    {
        id: 28,
        name: "Artisan Marble Bread",
        description: "Spotlight: This Artisan Marble Bread is a visual and culinary delight, featuring a harmonious blend of light and dark doughs. Perfect for a gourmet breakfast or an elegant sandwich, this bread offers a unique twist to your daily bread experience.",
        brand: "Healthy Sip",
        price: "6.50",
        referenceID: "snack_6",
        color: ["brown"],
        dimensions: ["10x10cm"],
        sizes: ["medium"],
        remaining: 50,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/baked1.jpeg",
                    main: true,
                    alt: "The main image of a loaf of bread",
                },{
                    imgSrc: "static/img/display/jpg/baked1-2.jpeg",
                    main: false,
                    alt: "The image of a loaf of bread",
                },
                {
                    imgSrc: "static/img/display/jpg/baked1-3.jpeg",
                    main: false,
                    alt: "The image of a loaf of bread",
                }
            ]
        }
    },
    {
        id: 29,
        name: "Blue Bliss Heaven",
        description: "Prime Choice: Blue Bliss Heaven is a delectable treat with layers of blue frosting and chocolate cake. It's a delightful dessert perfect for any occasion.",
        brand: "Heavenly Bakes",
        price: "12.00",
        referenceID: "snack_7",
        color: ["blue", "chocolate"],
        dimensions: ["10x10cm"],
        sizes: ["medium"],
        remaining: 40,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/baked2.jpeg",
                    main: true,
                    alt: "The main image of the Blue Bliss Heaven",
                }, {
                    imgSrc: "static/img/display/jpg/baked2-2.jpeg",
                    main: false,
                    alt: "The main image of the Blue Bliss Heaven",
                }, {
                    imgSrc: "static/img/display/jpg/baked2-3.jpeg",
                    main: false,
                    alt: "The main image of the Blue Bliss Heaven",
                }
            ]
        }
    },
    {
        id: 30,
        name: "Chocolate Wedges",
        description: "Editor's Choice: Chocolate Wedges are a perfect blend of rich chocolate and crispy edges. These wedges are an ideal snack for chocolate lovers looking for a crunchy treat.",
        brand: "Crunchy Bites",
        price: "8.75",
        referenceID: "snack_8",
        color: ["dark brown"],
        dimensions: ["10x10cm"],
        sizes: ["medium"],
        remaining: 35,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/baked3.jpeg",
                    main: true,
                    alt: "The main image of the Chocolate Wedges",
                }, {
                    imgSrc: "static/img/display/jpg/baked3-2.jpeg",
                    main: false,
                    alt: "The main image of the Chocolate Wedges",
                }, {
                    imgSrc: "static/img/display/jpg/baked3-3.jpeg",
                    main: false,
                    alt: "The main image of the Chocolate Wedges",
                }
            ]
        }
    },
    {
        id: 31,
        name: "Choco Shavings",
        description: "Signature bake: Choco Shavings offer a rich, smooth taste of pure chocolate. These shavings are perfect for adding a luxurious touch to any dessert.",
        brand: "Decadent Finishes",
        price: "10.50",
        referenceID: "snack_9",
        color: ["dark brown"],
        dimensions: ["10x10cm"],
        sizes: ["medium"],
        remaining: 25,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/baked4.jpeg",
                    main: true,
                    alt: "The main image of the Choco Shavings",
                }, {
                    imgSrc: "static/img/display/jpg/baked4-2.jpeg",
                    main: false,
                    alt: "The main image of the Choco Shavings",
                }, {
                    imgSrc: "static/img/display/jpg/baked4-3.jpeg",
                    main: false,
                    alt: "The main image of the Choco Shavings",
                }
            ]
        }
    },
    {
        id: 32,
        name: "Dark Chocolate Crisp",
        description: "Editor's Choice: Dark Chocolate Crisp offers a rich, intense flavor with a satisfying crunch. This snack is perfect for those who love dark chocolate with a crispy twist.",
        brand: "Chocolate Crunch",
        price: "9.25",
        referenceID: "snack_10",
        color: ["dark brown"],
        dimensions: ["10x10cm"],
        sizes: ["medium"],
        remaining: 20,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/baked5.jpeg",
                    main: true,
                    alt: "The main image of the Dark Chocolate Crisp",
                },{
                    imgSrc: "static/img/display/jpg/baked5-2.jpeg",
                    main: false,
                    alt: "The main image of the Dark Chocolate Crisp",
                },
                {
                    imgSrc: "static/img/display/jpg/baked5-3.jpeg",
                    main: false,
                    alt: "The main image of the Dark Chocolate Crisp",
                }

            ]
        }
    }
];


const Sauces = [
    {
        id: 33,
        name: "Tomato Herb Fusion",
        description: "Signature: Tomato Herb Fusion is a rich tomato sauce with a hint of rosemary, perfect for enhancing your dishes with a touch of freshness and depth.",
        brand: "Gourmet Creations",
        price: "5.50",
        referenceID: "sauce_1",
        color: ["red"],
        dimensions: ["10x10cm"],
        sizes: ["medium"],
        remaining: 60,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/sauce1.jpeg",
                    main: true,
                    alt: "The main image of the Tomato Herb Fusion",
                }, {
                    imgSrc: "static/img/display/jpg/sauce1-2.jpeg",
                    main: false,
                    alt: "The main image of the Tomato Herb Fusion",
                }, {
                    imgSrc: "static/img/display/jpg/sauce1-3.jpeg",
                    main: false,
                    alt: "The main image of the Tomato Herb Fusion",
                }
            ]
        }
    },
    {
        id: 34,
        name: "Gourmet Sauce Trio",
        description: "Spotlight: Gourmet Sauce Trio offers a collection of vibrant and flavorful sauces in pink, yellow, and red. Perfect for adding a gourmet touch to your meals.",
        brand: "Healthy Sip",
        price: "6.50",
        referenceID: "sauce_2",
        color: ["green", "yellow", "red"],
        dimensions: ["10x10cm"],
        sizes: ["medium"],
        remaining: 50,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/sauce2.jpeg",
                    main: true,
                    alt: "The main image of the Gourmet Sauce Trio",
                },{
                    imgSrc: "static/img/display/jpg/sauce2-2.jpeg",
                    main: false,
                    alt: "The main image of the Gourmet Sauce Trio",
                },{
                    imgSrc: "static/img/display/jpg/sauce2-3.jpeg",
                    main: false,
                    alt: "The main image of the Gourmet Sauce Trio",
                }
            ]
        }
    },
    {
        id: 35,
        name: "Caramel Citrus Bliss",
        description: "Prime Choice: Caramel Citrus Bliss is a luscious caramel sauce with a hint of citrus. Perfect for drizzling over desserts or enjoying by the spoonful.",
        brand: "Sweet Delights",
        price: "8.00",
        referenceID: "sauce_3",
        color: ["brown"],
        dimensions: ["10x10cm"],
        sizes: ["medium"],
        remaining: 45,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/sauce3.jpeg",
                    main: true,
                    alt: "The main image of the Caramel Citrus Bliss",
                },
                {
                    imgSrc: "static/img/display/jpg/sauce3-2.jpeg",
                    main: false,
                    alt: "The main image of the Caramel Citrus Bliss",
                },
                {
                    imgSrc: "static/img/display/jpg/sauce3-3.jpeg",
                    main: false,
                    alt: "The main image of the Caramel Citrus Bliss",
                }
            ]
        }
    },
    {
        id: 36,
        name: "Spicy Citrus Harmony",
        description: "Editor's Choice: Spicy Citrus Harmony is a tangy and spicy sauce that combines the zest of citrus with a hint of chili. Great for adding a kick to your dishes.",
        brand: "Zesty Flavors",
        price: "7.25",
        referenceID: "sauce_4",
        color: ["orange"],
        dimensions: ["10x10cm"],
        sizes: ["medium"],
        remaining: 30,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/sauce4.jpeg",
                    main: true,
                    alt: "The main image of the Spicy Citrus Harmony",
                },
                {
                    imgSrc: "static/img/display/jpg/sauce4-2.jpeg",
                    main: false,
                    alt: "The main image of the Spicy Citrus Harmony",
                },
                {
                    imgSrc: "static/img/display/jpg/sauce4-3.jpeg",
                    main: false,
                    alt: "The main image of the Spicy Citrus Harmony",
                }
            ]
        }
    },
    {
        id: 37,
        name: "Zesty Orange Fusion",
        description: "Editor's Choice: Zesty Orange Fusion is a vibrant sauce that combines the freshness of oranges with a hint of spice. Perfect for adding a burst of flavor to any dish.",
        brand: "Citrus Magic",
        price: "8.25",
        referenceID: "sauce_5",
        color: ["orange"],
        dimensions: ["10x10cm"],
        sizes: ["medium"],
        remaining: 40,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/sauce5.jpeg",
                    main: true,
                    alt: "The main image of the Zesty Orange Fusion",
                },
                {
                    imgSrc: "static/img/display/jpg/sauce5-2.jpeg",
                    main: false,
                    alt: "The main image of the Zesty Orange Fusion",
                },
                {
                    imgSrc: "static/img/display/jpg/sauce5-3.jpeg",
                    main: false,
                    alt: "The main image of the Zesty Orange Fusion",
                }
            ]
        }
    },
    {
        id: 38,
        name: "Tangy Tomato Bliss",
        description: "Editor's Choice: Tangy Tomato Bliss is a rich, tangy tomato sauce with a hint of sweetness. Ideal for pasta, pizza, or as a dip.",
        brand: "Tomato Fusion",
        price: "7.75",
        referenceID: "sauce_6",
        color: ["red"],
        dimensions: ["10x10cm"],
        sizes: ["medium"],
        remaining: 40,
        images: {
            detail: [
                {
                    imgSrc: "/mnt/data/sauce2.png",
                    main: true,
                    alt: "The main image of the Tangy Tomato Bliss",
                }
            ]
        }
    }
];



const DairyProducts = [
    {
        id: 38,
        name: "A variety of dairy products",
        description: "A variety of dairy products including milk, cream, yogurt, and cheese, providing a refreshing and nutritious dairy experience.",
        brand: "Cool Breeze Dairy",
        price: "15.00",
        referenceID: "dairy_1",
        color: ["white"],
        dimensions: ["various"],
        sizes: ["various"],
        remaining: 100,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/dairy1.jpeg",
                    main: true,
                    alt: "A variety of dairy products including milk, cream, yogurt, and cheese.",
                },
                {
                    imgSrc: "static/img/display/jpg/dairy1-2.jpeg",
                    main: false,
                    alt: "A variety of dairy products including milk, cream, yogurt, and cheese.",
                },
                {
                    imgSrc: "static/img/display/jpg/dairy1-3.jpeg",
                    main: false,
                    alt: "A variety of dairy products including milk, cream, yogurt, and cheese.",
                }
            ]
        }
    },
    {
        id: 39,
        name: "ChudBerry Delight",
        description: "ChudBerry Delight is a premium chocolate bar offering a rich, indulgent taste experience, perfect for chocolate lovers.",
        brand: "Gourmet Chocolates",
        price: "12.50",
        referenceID: "dairy_2",
        color: ["brown", "golden"],
        dimensions: ["10x5cm"],
        sizes: ["standard"],
        remaining: 75,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/dairy2.jpeg",
                    main: true,
                    alt: "A premium chocolate bar offering a rich, indulgent taste experience.",
                },
                {
                    imgSrc: "static/img/display/jpg/dairy2-2.jpeg",
                    main: false,
                    alt: "A premium chocolate bar offering a rich, indulgent taste experience.",
                },
                {
                    imgSrc: "static/img/display/jpg/dairy2-3.jpeg",
                    main: false,
                    alt: "A premium chocolate bar offering a rich, indulgent taste experience.",
                }
            ]
        }
    },
    {
        id: 40,
        name: "Set of gourmet cheeses",
        description: "Prime Choice: Blue Bliss Heaven features a collection of gourmet cheeses including blue cheese and cheddar, perfect for cheese enthusiasts.",
        brand: "Artisan Cheeses",
        price: "20.00",
        referenceID: "dairy_3",
        color: ["blue", "yellow"],
        dimensions: ["various"],
        sizes: ["various"],
        remaining: 50,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/dairy3.jpeg",
                    main: true,
                    alt: "A collection of gourmet cheeses including blue cheese and cheddar.",
                },
                {
                    imgSrc: "static/img/display/jpg/dairy3-2.jpeg",
                    main: false,
                    alt: "A collection of gourmet cheeses including blue cheese and cheddar.",
                },
                {
                    imgSrc: "static/img/display/jpg/dairy3-3.jpeg",
                    main: false,
                    alt: "A collection of gourmet cheeses including blue cheese and cheddar.",
                }
            ]
        }
    },
    {
        id: 41,
        name: "Fresh Dairy Selection",
        description: "Editor's Choice: Fresh Dairy Selection includes a diverse range of fresh dairy products such as milk, butter, cottage cheese, and yogurt.",
        brand: "Daily Fresh Dairy",
        price: "18.00",
        referenceID: "dairy_4",
        color: ["white", "yellow"],
        dimensions: ["various"],
        sizes: ["various"],
        remaining: 90,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/dairy4.jpeg",
                    main: false,
                    alt: "A diverse range of fresh dairy products including milk, butter, cottage cheese, and yogurt.",
                },
                {
                    imgSrc: "static/img/display/jpg/dairy4-2.jpeg",
                    main: false,
                    alt: "A diverse range of fresh dairy products including milk, butter, cottage cheese, and yogurt.",
                },
                {
                    imgSrc: "static/img/display/jpg/dairy4-3.jpeg",
                    main: true,
                    alt: "A diverse range of fresh dairy products including milk, butter, cottage cheese, and yogurt.",
                }
            ]
        }
    },
    {
        id: 42,
        name: "Creamy Tofu Delights",
        description: "Editor's Choice: Creamy Tofu Delights offers a variety of tofu products that are perfect for a healthy, protein-rich diet.",
        brand: "Tofu Treats",
        price: "10.00",
        referenceID: "dairy_5",
        color: ["white"],
        dimensions: ["various"],
        sizes: ["various"],
        remaining: 80,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/dairy5.jpeg",
                    main: false,
                    alt: "A variety of tofu products perfect for a healthy, protein-rich diet.",
                },
                {
                    imgSrc: "static/img/display/jpg/dairy5-2.jpeg",
                    main: false,
                    alt: "A variety of tofu products perfect for a healthy, protein-rich diet.",
                },
                {
                    imgSrc: "static/img/display/jpg/dairy5-3.jpeg",
                    main: true,
                    alt: "A variety of tofu products perfect for a healthy, protein-rich diet.",
                }
            ]
        }
    }
];



const GrainProducts = [
    {
        id: 43,
        name: "Azure Pearl Rice",
        description: "Signature: Azure Pearl Rice is a delightful collection of rice grains, known for their soft texture and rich flavor, ideal for a variety of dishes.",
        brand: "Grain Harmony",
        price: "5.00",
        referenceID: "grain_1",
        color: ["white", "brown"],
        dimensions: ["various"],
        sizes: ["various"],
        remaining: 120,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/whole-grain1-3.jpeg",
                    main: true,
                    alt: "A bowl of white rice grains.",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-grain1-2.jpeg",
                    main: false,
                    alt: "A bowl of white rice grains.",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-grain1.jpeg",
                    main: false,
                    alt: "A plate of brown rice grains.",
                }
            ]
        }
    },
    {
        id: 44,
        name: "Golden Pasta Delight",
        description: "Spotlight: Golden Pasta Delight features a premium selection of pasta, perfect for gourmet cooking and offering a rich and authentic taste.",
        brand: "Pasta Perfection",
        price: "7.50",
        referenceID: "grain_2",
        color: ["yellow"],
        dimensions: ["various"],
        sizes: ["standard"],
        remaining: 85,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/whole-grain2.jpeg",
                    main: true,
                    alt: "A package of premium pasta.",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-grain2-2.jpeg",
                    main: false,
                    alt: "A plate of pasta.",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-grain2-3.jpeg",
                    main: false,
                    alt: "A plate of pasta.",
                }

            ]
        }
    },
    {
        id: 45,
        name: "Barley Bliss Mix",
        description: "Prime Choice: Barley Bliss Mix offers an exquisite variety of barley grains, perfect for hearty meals and nutritious recipes.",
        brand: "Barley Bliss",
        price: "6.00",
        referenceID: "grain_3",
        color: ["beige"],
        dimensions: ["various"],
        sizes: ["various"],
        remaining: 95,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/whole-grain3.jpeg",
                    main: true,
                    alt: "A scoop of barley grains.",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-grain3-2.jpeg",
                    main: false,
                    alt: "A scoop of barley grains.",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-grain3-3.jpeg",
                    main: false,
                    alt: "A scoop of barley grains.",
                }
            ]
        }
    },
    {
        id: 46,
        name: "Golden Popcorn Kernels",
        description: "Editor's Choice: Golden Popcorn Kernels are a selection of premium popcorn kernels, perfect for a tasty and healthy snack.",
        brand: "Popcorn Paradise",
        price: "4.50",
        referenceID: "grain_4",
        color: ["yellow", "white"],
        dimensions: ["various"],
        sizes: ["various"],
        remaining: 110,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/whole-grain4.jpeg",
                    main: true,
                    alt: "A bowl of mixed yellow and white popcorn kernels.",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-grain4-2.jpeg",
                    main: false,
                    alt: "A bowl of popcorn.",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-grain4-3.jpeg",
                    main: false,
                    alt: "A bowl of popcorn",
                }
            ]
        }
    },
    {
        id: 47,
        name: "Multigrain Bread",
        description: "Editor's Choice: Multigrain Bread is a nutritious selection of whole grain bread, perfect for a healthy and balanced diet.",
        brand: "Bread Haven",
        price: "3.50",
        referenceID: "grain_5",
        color: ["brown"],
        dimensions: ["various"],
        sizes: ["standard"],
        remaining: 130,
        images: {
            detail: [
                {
                    imgSrc: "static/img/display/jpg/whole-grain5.jpeg",
                    main: false,
                    alt: "A loaf of multigrain bread with slices and grains.",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-grain5-2.jpeg",
                    main: false,
                    alt: "A loaf of multigrain bread with slices and grains.",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-grain5-3.jpeg",
                    main: true,
                    alt: "A loaf of multigrain bread with slices and grains.",
                }
            ]
        }
    }
];


 export {
    DrinksMenu,
    FeaturedItems,
    NewItems,
    IceCreams,
    Snacks,
    BakedItems,
    Sauces,
    DairyProducts,
    GrainProducts
    
 };