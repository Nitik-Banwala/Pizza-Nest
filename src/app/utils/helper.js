export const footerData = [
    {
        title: 'Quick Links',
        links: ['Home', 'About Us', 'Gallery', 'Testimonial', 'Contact'],
    },
    {
        title: 'Support',
        links: ['Terms & Conditions', 'Privacy Policy'],
    },
]
export const pizzas = [
    {
        id: 1,
        name: 'Margherita',
        type: 'veg',
        image: '/assets/images/png/eatone.png',
    },
    {
        id: 2,
        name: 'Masala Paneer',
        type: 'veg',
        image: '/assets/images/png/eattwo.png',
    },
    {
        id: 3,
        name: 'Farmhouse Magic',
        type: 'veg',
        image: '/assets/images/png/eatthree.png',
    },
    {
        id: 4,
        name: 'Cheese Overload',
        type: 'nonveg',
        image: '/assets/images/png/eatfour.png',
    },
    {
        id: 5,
        name: 'BBQ Chicken',
        type: 'nonveg',
        image: '/assets/images/png/eatone.png',
    },
    {
        id: 6,
        name: 'Pepperoni Blast',
        type: 'nonveg',
        image: '/assets/images/png/eattwo.png',
    },
]

export const restaurants = [
    {
        id: 1,
        name: 'Punjabi Tadka',
        cuisine: 'North Indian, Punjabi',
        rating: 4.0,
        image: '/assets/images/png/restaurantsone.png',
    },
    {
        id: 2,
        name: 'Pizza Paradise',
        cuisine: 'Pizza, Fast Food',
        rating: 4.0,
        image: '/assets/images/png/restaurantstwo.png',
    },
    {
        id: 3,
        name: 'Desi Dhaba',
        cuisine: 'North Indian, Street Food',
        rating: 4.0,
        image: '/assets/images/png/restaurantsthree.png',
    },
    {
        id: 4,
        name: 'Sharma Sweets',
        cuisine: 'Sweets, North Indian',
        rating: 4.0,
        image: '/assets/images/png/restaurantsfour.png',
    },
    {
        id: 5,
        name: 'Royal Biryani',
        cuisine: 'Biryani, Mughlai',
        rating: 4.2,
        image: '/assets/images/png/restaurantsone.png',
    },
    {
        id: 6,
        name: 'Spice Garden',
        cuisine: 'South Indian, Chinese',
        rating: 3.9,
        image: '/assets/images/png/restaurantstwo.png',
    },
]
export const PIZZAS = [
    {
        id: 1, name: 'Classic Margherita',
        rest: 'Pizza Paradise',
        price: 249,
        rating: 4.0,
        type: 'veg',
        img: '/assets/images/png/famousone.png'
    },
    {
        id: 2, name: 'Cheese Overload',
        rest: 'Desi Dhaba',
        price: 299,
        rating: 4.5,
        type: 'veg',
        img: '/assets/images/png/famoustwo.png'
    },
    {
        id: 3, name: 'Veggie Fiesta',
        rest: "La Pino'z Pizza",
        price: 269,
        rating: 4.2,
        type: 'veg',
        img: '/assets/images/png/famousthree.png'
    },
    {
        id: 4, name: 'Masala Paneer',
        rest: 'Pizza Wings',
        price: 299,
        rating: 4.4,
        type: 'veg',
        img: '/assets/images/png/famousfour.png'
    },
    {
        id: 5, name: 'Farmhouse Magic',
        rest: 'Oven Story',
        price: 279,
        rating: 4.0,
        type: 'veg',
        img: '/assets/images/png/famousfive.png'
    },
    {
        id: 6, name: 'Peppy Paneer',
        rest: 'Pizza Wings',
        price: 289,
        rating: 4.5,
        type: 'veg',
        img: '/assets/images/png/famoussix.png'
    },
    {
        id: 7, name: 'Peri Peri Paneer',
        rest: 'Oven Story',
        price: 299,
        rating: 4.2,
        type: 'veg',
        img: '/assets/images/png/famousseven.png'
    },
    {
        id: 8, name: 'Cheese n Corn',
        rest: "Domino's Pizza",
        price: 259,
        rating: 4.4,
        type: 'veg',
        img: '/assets/images/png/famouseight.png'
    },
    {
        id: 9, name: 'Chicken BBQ',
        rest: 'Pizza Hut',
        price: 329,
        rating: 4.6,
        type: 'nonveg',
        img: '/assets/images/png/famousone.png'
    },
    {
        id: 10, name: 'Chicken Tikka',
        rest: 'Desi Dhaba',
        price: 349,
        rating: 4.7,
        type: 'nonveg',
        img: '/assets/images/png/famoustwo.png'
    },
    {
        id: 11, name: 'Keema Do Pyaza',
        rest: 'Pizza Paradise',
        price: 319,
        rating: 4.3,
        type: 'nonveg',
        img: '/assets/images/png/famousthree.png'
    },
    {
        id: 12, name: 'Spicy Chicken Supreme'
        , rest: "La Pino'z Pizza",
        price: 339,
        rating: 4.5,
        type: 'nonveg',
        img: '/assets/images/png/famousfour.png'
    },
]

export const TYPE_FILTERS = [
    { label: 'All', value: 'all' },
    { label: 'Vegetarian', value: 'veg' },
    { label: 'Non-Vegetarian', value: 'nonveg' },
]

export const SORT_FILTERS = [
    { label: 'Top Rated', value: 'top' },
    { label: 'Price : Low to High', value: 'lohi' },
    { label: 'Price : High to Low', value: 'hilo' },
]
export const MEALS = [
    {
        id: 'm1', name: 'Coca-Cola',
        price: 40,
        emoji: '/assets/images/png/cartone.png',
        rest: 'Add-on'
    },
    {
        id: 'm2', name: 'Crispy Fries',
        price: 89,
        emoji: '/assets/images/png/carttwo.png',
        rest: 'Add-on'
    },
    {
        id: 'm3', name: 'Fudge Brownie',
        price: 109,
        emoji: '/assets/images/png/cartthree.png',
    },
    {
        id: 'm4', name: 'Garlic Bread',
        price: 79,
        emoji: '/assets/images/png/cartone.png',
        rest: 'Add-on'
    },
    {
        id: 'm5', name: 'Pasta',
        price: 129,
        emoji: '/assets/images/png/carttwo.png',
        rest: 'Add-on'
    },
    {
        id: 'm6', name: 'Lemonade',
        price: 49
        , emoji: '/assets/images/png/cartthree.png',
        rest: 'Add-on'
    },
]
export const HELP_DATA = [
    {
        title: "Order Issues",
        items: [
            "My order is delayed",
            "I received wrong item",
            "Order not delivered",
            "Cancel my order"
        ]
    },
    {
        title: "Payments & Refunds",
        items: [
            "Payment failed but money deducted",
            "Refund not received",
            "How long refund takes",
            "Apply coupon code"
        ]
    },
    {
        title: "Account & Login",
        items: [
            "Unable to login",
            "Forgot password",
            "Change email or phone",
            "Delete my account"
        ]
    },
    {
        title: "Delivery & Address",
        items: [
            "Change delivery address",
            "Add new address",
            "Delivery charges info",
            "Track my order"
        ]
    },
    {
        title: "Contact Us",
        items: [
            "Call us: +91 9876543210",
            "Email: support@pizzanest.com",
            "Live chat available 9AM - 11PM"
        ]
    }
]
