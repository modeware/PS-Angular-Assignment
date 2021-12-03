export interface Product{
    category: string
    description: string
    image: string
    price: number
    rating: {rate: string, count: number}
    title: string
}