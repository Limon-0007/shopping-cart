import { getShoppingCart } from "../Components/ema-john-resources/utilities/fakedb"

const loaderData = async () => {
    const loadedProducts = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
    const products = await loadedProducts.json()

    const storedCard = getShoppingCart()
    const savedCart = []
    for (const id in storedCard) {
        const addedProduct = products.find(pd => pd.id === id)
        if (addedProduct) {
            const quantity = storedCard[id]
            addedProduct.quantity = quantity
            savedCart.push(addedProduct)
        }
    }
    return savedCart
}

export default loaderData;