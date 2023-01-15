import Head from 'next/head';
import Platos from '../components/Platos';
import Layout from '../components/Layout';

export default function CartasPage() {
    return (
        <div>
            <Head>
                <title>L'ancora carta</title>
            </Head>
            <Layout>
                <Platos />
            </Layout>
        </div>
    )
}