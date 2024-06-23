const itemCart             = document.querySelector(".item-cart");
const itemCartTotal        = document.querySelector(".cart-item-total");

// For now this will be stored as a mock DB but will be replaced later
// in the local storage when the backend is built. Example of how the cart looks
// const itemCart = [
//     {
//         "id"  : "#id",
//         "name": "some item name",
//         "price": 9.88,
//         "quantity": 4

//     }
// ]


class ItemCart {

    constructor() {
        this._NOT_FOUND = -1;
        this._cart      = []
    }

    static updateCartDisplay(numOfItems, totalPrice) {

        itemCart.textContent      = numOfItems < 10 ? numOfItems : "10+";
        itemCart.style.display    = numOfItems <= 0 ? "none" : "block";   
        itemCartTotal.textContent = (parseInt(totalPrice) <= 0) ? "Items: £0.00" : `Items: £${totalPrice}`;
    }
    

    add(item) {

        const index = this.findByID(item.id).index;
       
        if (index === this._NOT_FOUND) {
           item.quantity = 1;
           this._cart.push(item);
        } else {
            this._updateItemQuantityByOne(index);
        }
    }

    _updateItemQuantityByOne(index) {
        if (index !== this._NOT_FOUND) {
            this._cart[index].quantity += 1;
            return true;
        }
       
    }

    updateCartItemQuantity(item) {

        const index = this.findByID(item.id).index;
        if (index === this._NOT_FOUND) {
            this._cart.push(item);
        } else {
            this._cart[index].quantity = item.quantity;         
        }
   
    }

    deleteByID(id) {
        const index = this.findByID(id).index;

        if (index != this._NOT_FOUND) {
           this._cart.splice(index, 1);
           return true;
         } 
         return false;
    }

    getCartQuantity() {
        let itemsCount = 0;
        this._cart.forEach((item) => {
            if (item.quantity > 0) {
                itemsCount += item.quantity;
            }
          
        })
        return itemsCount;
    }

    getTotalPrice() {
        let totalPrice = 0;
        this._cart.forEach((item) => {
            const itemTotal = item.quantity * item.price; 
            totalPrice += itemTotal;
        });
        return parseFloat(totalPrice.toFixed(2)); 
    }

    clearCart() {
        this._cart = [];
    }

    getAllItems() {
        return this._cart;
    }

    findByID(id) {
    
        const index = this._cart.findIndex(item => parseInt(item.id) === parseInt(id))

        if (index === this._NOT_FOUND) {
            return {item:null, index: this._NOT_FOUND}
        }

        const item = this._cart[index];
        return {item: item, index: index}
    }
    
}


export default ItemCart;
