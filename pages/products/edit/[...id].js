import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

export default function editProductPage() {
    const router = useRouter();
    console.log({router});
    const {id} = router.query;
    useEffect(() => {
        axios.get('/api/products?id='+id)
        .then(response => {
            console.log(response.data);
        })
    }, [id]);
    // const id = router.params
    return (
        <Layout>
            edit product form here
        </Layout>
    );
}