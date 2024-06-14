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
        reference_id: "demo_7",
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
                    imgSrc: "static/img/display/jpg/cabbage.jpg",
                    main: false,
                    alt: "A small image of the cabbage",
                },

            ]
        }
    },

     {
         id:   2,
         name: "Organic Bananas",
         description: "Delicious and healthy, bananas are a great source of essential nutrients. Packed with potassium and energy, they are perfect for a quick snack or adding to smoothies and desserts. Enjoy the sweet and creamy taste of our premium bananas.",
         brand: "Tropical",
         price: "12.99",
         reference_id: "demo_2",
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
                    imgSrc: "static/img/display/jpg/banana.jpg",
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
         description: "Vibrant, crisp, and packed with vitamins, our Bell Peppers add a burst of color and flavor to any dish. Perfect for salads, stir-fries, and grilling, these peppers are a versatile and healthy choice. Enjoy them raw or cooked for a delightful crunch and sweetness.",
         brand: "Fresh Harvest",
         price: "5.49",
         reference_id: "demo_3",
         color: ["red", "yellow", "green"],
         dimensions: ["10x15cm", "15x20cm"],
         sizes: ["small", "medium", "large"], 
         remaining: 100,
         images: {  
            detail: [
              
                {
                    imgSrc: "static/img/display/jpg/bell-pepper.jpg",
                    main: true,
                    alt: "The main image of a banana",
        
                },
                {
                    imgSrc: "static/img/display/jpg/bell-pepper.jpg",
                    main: false,
                    alt: "The main image of a banana",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-bell-pepper.jpg",
                    main: false,
                    alt: "The main image of a banana",
                },


            ]
            
         }
     },
     {
         id:   4,
         name: "Cauliflower",
         description: "Fresh and crunchy, our Cauliflower is a versatile vegetable perfect for a variety of dishes. Whether roasted, steamed, or used in a stir-fry, cauliflower provides a healthy and tasty addition to your meals. Rich in vitamins and fiber, it's a nutritious choice.",
         brand: "Green Valley",
         price: "8.49",
         reference_id: "demo_4",
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
         description: "Our Red Onions are full of flavor and add a beautiful color to any dish. Perfect for salads, grilling, or as a flavorful addition to cooked meals, these onions are a kitchen staple. Rich in antioxidants, they not only taste great but also provide health benefits.",
         brand: "Organic Farm",
         price: "5.99",
         reference_id: "demo_5",
         color: ["red", "purple"],
         dimensions: ["10x15cm", "15x20cm"],
         sizes: ["small", "medium", "large"], 
         remaining: 120,
         images: {
            detail: [
              
                {
                    imgSrc: "static/img/display/jpg/red-onion.jpg",
                    main: true,
                    alt: "An image of red onion",
        
                },
                {
                    imgSrc: "static/img/display/jpg/red-onion.jpg",
                    main: false,
                    alt: "An image of red onion",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-red-onion.jpg",
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
         reference_id: "demo_6",
         color: ["green"],
         dimensions: ["12x18cm", "15x20cm"],
         sizes: ["small", "medium", "large"], 
         remaining: 90,
         images: {

            detail: [
              
                {
                    imgSrc: "static/img/display/jpg/avocado.jpg",
                    main: true,
                    alt: "An image of avocado",
        
                },
                {
                    imgSrc: "static/img/display/jpg/avocado.jpg",
                    main: false,
                    alt: "An image of avocado",
                },
                {
                    imgSrc: "static/img/display/jpg/whole-avocado.jpg",
                    main: false,
                    alt: "An image of avocado",
                },


            ]
           
         }
     }
 ];

 export default FeaturedItems;