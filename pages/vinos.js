import Head from "next/head";
import Layout from "../components/Layout";
import Vinos from "../components/Vinos";

export default function VinosPage() {
    return (
        <div>
            <Head>
                <title>L'ancora vinos</title>
            </Head>
            <Layout>
                <Vinos />
            </Layout>
        </div>
    )
}