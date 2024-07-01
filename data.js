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


 export {
    FeaturedItems,
    NewItems,
    
 };