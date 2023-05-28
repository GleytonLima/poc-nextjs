import Head from 'next/head';
import Breadcrumb from './Breadcrumb';
import BrFooter from './br-design-system/BrFooter';
import BrHeader from './br-design-system/BrHeader';

const Layout = ({ children }: any) => {
    return (
        <div>
            <Head>
                <title>Liraa App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BrHeader />
            <Breadcrumb />
            <main>{children}</main>
            <BrFooter />
        </div>
    );
};

export default Layout;
