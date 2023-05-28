import type { NextPage } from 'next';

import Home from '../components/Home';
import styles from '../styles/Home.module.css';

const IndexPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Home />
        </div>
    );
};

export default IndexPage;
