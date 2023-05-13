import Layout from "@/components/Layout";

export default function NewProduct() {
    return (
        <Layout>
            <h1>New product</h1>
            <label>Product Name</label>
            <input type="text" placeholder="Product name"/>
            <label>Product Description</label>
            <textarea placeholder="Description" />
            <label>Product Price</label>
            <input type="number" placeholder="Price" />
            <button className="btn-primary">Save</button>
        </Layout>
    )
}