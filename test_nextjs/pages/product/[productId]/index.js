import { useRouter } from "next/router";

const ProductDetail = () => {
    const { query: { productId } } = useRouter();
    return <h1>Details about product {productId}</h1>
}

export default ProductDetail;
