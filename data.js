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
         reference_id: "demo_3",
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
         description: "Our flavorful Red Onions enhance any dish with their vibrant color and robust taste. Ideal for salads, grilling, or as a savory addition to cooked meals, they're a kitchen essential rich in antioxidants for both flavor and health",
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


 
 function getItemByID(id) {
    return FeaturedItems.find((item) => item.id === parseInt(id))
 }
 export default getItemByID;