import axios from "axios";
import { useEffect, useState } from "react"

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios("/productData.json").then((data) => setProducts(data.data)).catch(err => setError(err)).finally(() => setLoading(false))
    }, [])
    
    return { products, loading, error }
}