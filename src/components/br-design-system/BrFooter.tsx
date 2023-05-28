import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface BrFooterProps {}

const BrFooter = (props: BrFooterProps) => {
    return (
        <footer className="br-footer" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
            <div className="container-lg">
                <div className="logo text-sm-center">
                    <img src="/static/images/logo.png" alt="logo" width={100} />
                </div>
                <div className="text-sm-center">
                    <div className="social-network">
                        <div className="social-network-title">Sobre o projeto</div>
                        <div className="flex">
                            <a className="br-button circle" href="#" aria-label="Compartilhar por Facebook">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <span className="br-divider my-3"></span>
            <div className="container-lg">
                <div className="info">
                    <div className="text-down-01 text-medium pb-3">
                        Todo o conteúdo deste site está publicado sob a licença <strong>MIT</strong>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default BrFooter;
