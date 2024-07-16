
const orders = [
    {
        id: 1,
        name: "Avocado",
        dateOrderPlaced: "11 January 2024",
        total: 9.99,
        orderBy: "Egbie",
        orderID: "#2332-3232-3333",
        deliverMsg: "Package was handed to the resident",
        dateToDeliver: "Delivered On 18th January",
        img: "../../../static/img/display/jpg/avacodo-slice.jpg",
        pageRedirectLink: '',
        returnMsg: "Not eligible for return",
        shippingSpeed: "Premium Delivery",

        costBreakdown: {
            subtotal: 7.25,
            postageAndPackaging: 0.00,
            beforeVAT: 7.25,
            vat: 1.74,
            total: 9.99,
            grandTotal: 9.99, 
        },
        payee: [
            {
                details: {
                    name: "Egbie",
                    shippingAddress: "121 Made Up Address",
                    city: "London",
                    postcode: "B1 456"
                },
                card: {
                    endingDigit: 4256,
                    cardType: "Visa",
                }
            }
        ]
    },
    {
        id: 2,
        name: "Bulk Organic Sicilian Orange",
        dateOrderPlaced: "20 February 2024",
        total: 15.99,
        orderBy: "Peter Parker",
        orderID: "#2332-3232-3334",
        deliverMsg: "Package was handed to the resident",
        dateToDeliver: "Delivered On 1st March",
        img: "../../../static/img/display/jpg/box-of-oranges.jpeg",
        pageRedirectLink: '',
        returnMsg: "Not eligible for return",
        shippingSpeed: "Standard Delivery",

        costBreakdown: {
            subtotal: 13.50,
            postageAndPackaging: 0.00,
            beforeVAT: 13.50,
            vat: 2.49,
            total: 15.99,
            grandTotal: 15.99,
        },
        payee: [
            {
                details: {
                    name: "Peter Parker",
                    shippingAddress: "456 Elm Street",
                    city: "New York",
                    postcode: "NY 10001"
                },
                card: {
                    endingDigit: 1234,
                    cardType: "Visa",
                }
            }
        ]
    },
    {
        id: 3,
        name: "Three Boxes of Protein Shake",
        dateOrderPlaced: "11 January 2024",
        total: 29.97,
        orderBy: "Mary Jane",
        orderID: "#2332-3232-3335",
        deliverMsg: "Package was signed by a resident",
        dateToDeliver: "Delivered On 18th March",
        img: "../../../static/img/display/jpg/protein.jpg",
        pageRedirectLink: '',
        returnMsg: "Not eligible for return",
        shippingSpeed: "Express Delivery",

        costBreakdown: {
            subtotal: 24.98,
            postageAndPackaging: 2.99,
            beforeVAT: 27.97,
            vat: 2.00,
            total: 29.97,
            grandTotal: 29.97,
        },
        payee: [
            {
                details: {
                    name: "Mary Jane",
                    shippingAddress: "789 Maple Avenue",
                    city: "Los Angeles",
                    postcode: "CA 90001"
                },
                card: {
                    endingDigit: 5678,
                    cardType: "MasterCard",
                }
            }
        ]
    },
    {
        id: 4,
        name: "Golden Oats Bites",
        dateOrderPlaced: "11 April 2024",
        total: 14.97,
        orderBy: "Lois Lane",
        orderID: "#2332-3232-3336",
        deliverMsg: "Package was left on resident door step",
        dateToDeliver: "Delivered On 11th April",
        img: "../../../static/img/display/jpg/snacks1.jpeg",
        pageRedirectLink: '',
        returnMsg: "Not eligible for return",
        shippingSpeed: "Next-Day Delivery",

        costBreakdown: {
            subtotal: 12.47,
            postageAndPackaging: 2.50,
            beforeVAT: 13.10,
            vat: 1.87,
            total: 14.97,
            grandTotal: 14.97,
        },
        payee: [
            {
                details: {
                    name: "Lois Lane",
                    shippingAddress: "321 Cedar Road",
                    city: "Metropolis",
                    postcode: "MT 20002"
                },
                card: {
                    endingDigit: 9012,
                    cardType: "MasterCard",
                }
            }
        ]
    },
    {
        id: 5,
        name: "Gournmet Sauce Trio",
        dateOrderPlaced: "11 June 2024",
        total: 6.50,
        orderBy: "Eddie Brock",
        orderID: "#2332-3232-3337",
        deliverMsg: "Package was left with next door neighbour",
        dateToDeliver: "Delivered On 12th June",
        img: "../../../static/img/display/jpg/sauce2-2.jpeg",
        pageRedirectLink: '',
        returnMsg: "Not eligible for return",
        shippingSpeed: "Economy Delivery",

        costBreakdown: {
            subtotal: 5.50,
            postageAndPackaging: 0.50,
            beforeVAT: 6.00,
            vat: 0.50,
            total: 6.50,
            grandTotal: 6.50,
        },
        payee: [
            {
                details: {
                    name: "Eddie Brock",
                    shippingAddress: "1234 Fake Street",
                    city: "San Francisco",
                    postcode: "CA 94101"
                },
                card: {
                    endingDigit: 3456,
                    cardType: "Visa",
                }
            }
        ]
    }
];



export default orders;