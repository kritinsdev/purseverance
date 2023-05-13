import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    async function createProduct(ev) {
        ev.preventDefault();
        const data = {title, description, price};
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }

    if(goToProducts) {
        router.push('/products');
    }

    return (
        <Layout>
            <h1>New product</h1>

            <form onSubmit={createProduct}>
                <label>Product Name</label>
                <input
                    type="text"
                    placeholder="Product name"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)} />

                <label>Product Description</label>
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)} />

                <label>Product Price</label>
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={ev => setPrice(ev.target.value)} />

                <button type="submit" className="btn-primary">Save</button>
            </form>
        </Layout>
    )
}