import productsData from './products';
const products = productsData as unknown as Product[];

interface Product 
{
  name: string;
  price: number;
  preOrder: boolean;
}

const product = products[2];
let productName: string = product.name;
let shipping : number = 0;
let shippingAddress: string = "Boston";
let taxPercent: number;
let taxTotal: number;
let total: number;

let shoppingCart: Product[] = [];

if (!product) 
{
  throw new Error("Kein Produkt gefunden!");
}

// test and exercise purpose 
const findProduct = products.find((productElement) => productElement.name === 'fanny pack');

let checkPreOrder = (element : Product) => 
{
  if (element.preOrder === true) { console.log("You'll get notified when it's sent."); } 
  else { console.log("It has no pre order option.")}
  console.log("\n");
}

const freeShipping = () => 
{
  shipping = product.price >= 25 ? 0 : 5;
  if (shipping === 0) {
    console.log("We provide free shipping for this product.");
  }
};

taxPercent = shippingAddress === 'New York' ? 0.1 : 0.05;

if (product !== undefined && product !== null) 
{
  freeShipping();
  taxTotal = product.price * taxPercent; 
  total = product.price + taxTotal + shipping;

  const createReceipt = () => {
    const receipt = `
      Your receipt:
        Product:           ${productName}
        Price:             ${product?.price}
        Shipping:          ${shipping}
        Tax (${taxPercent * 100}%): ${taxTotal.toFixed(2)}
        Total:             ${total.toFixed(2)}
        Shipping address:  ${shippingAddress}
    `;
    console.log(receipt);
  };
  
  checkPreOrder(product);
  createReceipt();
}
