import { faBars, faChartBar, faTh, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
export interface BrHeaderProps {}

const BrHeader = (props: BrHeaderProps) => {
    return (
        <>
            <header className="br-header">
                <div className="container-lg">
                    <div className="header-top">
                        <div className="header-logo">
                            <img src="/static/images/logo.png" alt="logo" width={100} />
                            <span className="br-divider vertical"></span>
                            <div className="header-sign">LIRAa App</div>
                        </div>
                        <div className="header-actions">
                            <div className="header-functions dropdown">
                                <button
                                    className="br-button circle small"
                                    type="button"
                                    data-toggle="dropdown"
                                    aria-label="Abrir Funcionalidades do Sistema"
                                >
                                    <FontAwesomeIcon icon={faTh} />
                                </button>
                                <div className="br-list">
                                    <div className="header">
                                        <div className="title">Funcionalidades do Sistema</div>
                                    </div>
                                    <div className="br-item">
                                        <button
                                            className="br-button circle small"
                                            type="button"
                                            aria-label="Funcionalidade 1"
                                        >
                                            <Link href="/levantamentos">
                                                <FontAwesomeIcon icon={faChartBar} />
                                                <span className="text">Levantamentos</span>
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="header-login">
                                <div className="header-sign-in">
                                    <button className="br-sign-in small" type="button" data-trigger="login">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span className="d-sm-inline">Entrar</span>
                                    </button>
                                </div>
                                <div className="header-avatar"></div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="header-menu">
                            <div className="header-menu-trigger">
                                <button
                                    className="br-button small circle"
                                    type="button"
                                    aria-label="Menu"
                                    data-toggle="menu"
                                    data-target="#main-navigation"
                                    id="navigation"
                                >
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                            </div>
                            <div className="header-info">
                                <div className="header-title">Levantamento Rápido de Índices para Aedes aegypti</div>
                            </div>
                        </div>
                    </div>
                </div>
                <i className="br-notification" style={{ display: 'none' }}></i>
            </header>
            <div className="br-menu" id="main-navigation">
                <div className="menu-container">
                    <div className="menu-panel">
                        <div className="menu-header">
                            <div className="menu-title">
                                <span>LIRAa App</span>
                                <span style={{ marginLeft: '25px' }}></span>
                            </div>
                            <div className="menu-close">
                                <button
                                    className="br-button circle"
                                    type="button"
                                    aria-label="Fechar o menu"
                                    data-dismiss="menu"
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                        </div>
                        <nav className="menu-body">
                            <div className="menu-folder">
                                <Link className="menu-item" href="/levantamentos">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </span>
                                    <span className="content">Levantamentos - Gerenciar</span>
                                </Link>
                            </div>
                        </nav>
                        <div className="menu-footer">
                            <div className="social-network">
                                <div className="social-network-title">Sobre o Projeto</div>
                                <div className="flex">
                                    <a className="br-button circle" href="#" aria-label="Compartilhar por Facebook">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </div>
                            </div>
                            <div className="menu-info">
                                <div className="text-center text-down-01">
                                    Todo o conteúdo deste site está publicado sob a licença <strong>MIT</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-scrim" data-dismiss="menu" tabIndex={0}></div>
                </div>
            </div>
        </>
    );
};
export default BrHeader;
