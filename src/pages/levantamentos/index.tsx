import type { NextPage } from 'next';

import '@govbr-ds/core/dist/core.min.css';
import BrButton from '../../components/br-design-system/BrButton';
import BrTable from '../../components/br-design-system/BrTable';
import styles from '../../styles/Home.module.css';

const LevantamentosPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <BrTable />
            <BrButton enfase="primary" texto="Novo Levantamento" />
        </div>
    );
};

export default LevantamentosPage;
