import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
    const router = useRouter();
    const pathnames = router.asPath.split('/').filter((pathname) => pathname !== '');
    return (
        <nav>
            <div className="br-breadcrumb">
                <ul className="crumb-list">
                    <li className="crumb home">
                        <Link className="br-button circle" href="/">
                            <span className="sr-only">Página inicial</span>
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </li>
                    {pathnames && pathnames.length == 0 && (
                        <li className="crumb" data-active="active">
                            <FontAwesomeIcon className="icon" icon={faChevronRight} />
                            <span>Página atual</span>
                        </li>
                    )}
                    {pathnames &&
                        pathnames.map((pathname, index) => {
                            const route = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;

                            return (
                                <li key={route} className="crumb">
                                    <FontAwesomeIcon className="icon" icon={faChevronRight} />
                                    {isLast ? (
                                        <span>{pathname}</span>
                                    ) : (
                                        <Link href={route}>
                                            <strong>{pathname}</strong>
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                </ul>
            </div>
        </nav>
    );
};

export default Breadcrumb;
