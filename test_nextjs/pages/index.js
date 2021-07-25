import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/product');
    }
    return (
        <div>
            <h1>Home Page</h1>
            <Link href={'/blog'} >
                <a>Blog</a>
            </Link>
            <Link href={'/product'} >
                <a>Products</a>
            </Link>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

export default Home;
