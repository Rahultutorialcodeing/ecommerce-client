import { ProductCardEl } from "@/elements/productCardEl";


const dummyProducts = [
    {
        id: 1,
        name: 'Men’s Shirt',
        price: 500,
        discountPrice: 1000,
        image: 'https://example.com/original-shirts/mens-shirt.jpg'
    },
    {
        id: 2,
        name: 'Women’s Dress',
        price: 1200,
        discountPrice: 1500,
        image: 'https://example.com/original-dresses/womens-dress.jpg'
    },
    {
        id: 3,
        name: 'Sneakers',
        price: 800,
        discountPrice: 1200,
        image: 'https://example.com/original-shoes/sneakers.jpg'
    },
    {
        id: 4,
        name: 'Casual T-Shirt',
        price: 300,
        discountPrice: 600,
        image: 'https://example.com/original-shirts/casual-tshirt.jpg'
    },
    {
        id: 5,
        name: 'Jeans',
        price: 900,
        discountPrice: 1300,
        image: 'https://example.com/original-pants/jeans.jpg'
    },
    {
        id: 6,
        name: 'Formal Blazer',
        price: 2500,
        discountPrice: 3000,
        image: 'https://example.com/original-jackets/formal-blazer.jpg'
    },
    {
        id: 7,
        name: 'Shorts',
        price: 400,
        discountPrice: 800,
        image: 'https://example.com/original-pants/shorts.jpg'
    },
    {
        id: 8,
        name: 'Winter Jacket',
        price: 1500,
        discountPrice: 2000,
        image: 'https://example.com/original-jackets/winter-jacket.jpg'
    },
    {
        id: 9,
        name: 'Skirt',
        price: 700,
        discountPrice: 1000,
        image: 'https://example.com/original-dresses/skirt.jpg'
    },
    {
        id: 10,
        name: 'Sandals',
        price: 500,
        discountPrice: 700,
        image: 'https://example.com/original-shoes/sandals.jpg'
    }
];

export const NewProductListEl = () => (
    <div className=" container ml-auto mr-auto w-full flex flex-col gap-3 mt-7 p-2 " >
        <div className=" w-full flex items-center justify-start">
            <p className=" font-bold text-3xl "> New Arrival </p>
        </div>
        <div className="overflow-x-scroll overflow-y-hidden grid grid-flow-col auto-cols-max gap-2 justify-start w-full">
            {dummyProducts.map(product => (
                <ProductCardEl
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    image={product.image}
                />
            ))}
        </div>


    </div>

);