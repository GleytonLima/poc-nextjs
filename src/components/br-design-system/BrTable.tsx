import {
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faChevronDown,
    faEllipsisV,
    faSearch,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface BrTableProps {}

const BrTable = (props: BrTableProps) => {
    return (
        <div style={{ margin: '50px' }}>
            <div
                className="br-table"
                data-search="data-search"
                data-selection="data-selection"
                data-collapse="data-collapse"
                data-random="data-random"
            >
                <div className="table-header">
                    <div className="top-bar">
                        <div className="table-title">Levantamentos</div>
                        <div className="search-trigger">
                            <button
                                className="br-button circle"
                                type="button"
                                data-toggle="search"
                                aria-label="Abrir busca"
                            >
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                    <div className="search-bar">
                        <div className="br-input">
                            <label htmlFor="table-searchbox-27509">Buscar</label>
                            <input id="table-searchbox-27509" type="text" placeholder="Buscar na tabela" />
                            <button className="br-button circle" type="button" aria-label="Buscar">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                        <button
                            className="br-button circle"
                            type="button"
                            data-dismiss="search"
                            aria-label="Fechar busca"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <div className="selected-bar">
                        <div className="info">
                            <span className="count">0</span>
                            <span className="text">item selecionado</span>
                        </div>
                        <div className="actions-trigger text-nowrap">
                            <button
                                className="br-button circle"
                                type="button"
                                data-toggle="dropdown"
                                data-target="target02-27509"
                                aria-label="Ver mais opções"
                            >
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                            <div className="br-list" id="target02-27509" hidden={true} style={{ left: -130 }}>
                                <button className="br-item" type="button" data-toggle="">
                                    Registrar levantamento
                                </button>
                                <span className="br-divider"></span>
                                <button className="br-item" type="button">
                                    Sorteio de Quarteirões
                                </button>
                                <span className="br-divider"></span>
                                <button className="br-item" type="button">
                                    Editar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <table>
                    <caption>Tabela de Levantamentos</caption>
                    <thead>
                        <tr>
                            <th className="column-collapse" scope="col"></th>
                            <th className="column-checkbox" scope="col">
                                <div className="br-checkbox hidden-label">
                                    <input
                                        id="check-all-27509"
                                        name="check-all-27509"
                                        type="checkbox"
                                        aria-label="Selecionar tudo"
                                        data-parent="check-01-27509"
                                    />
                                    <label htmlFor="check-all-27509">Selecionar todas as linhas</label>
                                </div>
                            </th>
                            <th scope="col">Ano</th>
                            <th scope="col">Município</th>
                            <th scope="col">Período</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button
                                    className="br-button circle small"
                                    type="button"
                                    aria-label="Expandir/Retrair Rótulo 01"
                                    data-toggle="collapse"
                                    data-target="collapse-1-4-27509"
                                >
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </button>
                            </td>
                            <td>
                                <div className="br-checkbox hidden-label">
                                    <input
                                        id="check-line-1-27509"
                                        name="check-line-1-27509"
                                        type="checkbox"
                                        aria-label="Selecionar linha 1"
                                        data-child="check-01-27509"
                                    />
                                    <label htmlFor="check-line-1-27509">Selecionar linha 1</label>
                                </div>
                            </td>
                            <td data-th="Título coluna 1">2023</td>
                            <td data-th="Título coluna 2">Alavarães</td>
                            <td data-th="Título coluna 3">16/04 a 18/04</td>
                        </tr>
                        <tr className="collapse">
                            <td id="collapse-1-4-27509" aria-hidden="true" hidden={true} colSpan={6}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies aliquet
                                lacinia. Vestibulum in interdum eros. Donec vel tempus diam. Aenean pulvinar mattis nisi
                                in laoreet. Integer felis mi, vehicula sed pretium sit amet, pellentesque vel nisl.
                                Curabitur metus ante, pellentesque in lectus a, sagittis imperdiet mi.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button
                                    className="br-button circle small"
                                    type="button"
                                    aria-label="Expandir/Retrair Rótulo 01"
                                    data-toggle="collapse"
                                    data-target="collapse-2-4-27509"
                                >
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </button>
                            </td>
                            <td>
                                <div className="br-checkbox hidden-label">
                                    <input
                                        id="check-line-2-27509"
                                        name="check-line-2-27509"
                                        type="checkbox"
                                        aria-label="Selecionar linha 2"
                                        data-child="check-01-27509"
                                    />
                                    <label htmlFor="check-line-2-27509">Selecionar linha 2</label>
                                </div>
                            </td>
                            <td data-th="Título coluna 1">2023</td>
                            <td data-th="Título coluna 2">Atalaia</td>
                            <td data-th="Título coluna 3">22/04 a 26/04</td>
                        </tr>
                        <tr className="collapse">
                            <td id="collapse-2-4-27509" aria-hidden="true" hidden={true} colSpan={6}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies aliquet
                                lacinia. Vestibulum in interdum eros. Donec vel tempus diam. Aenean pulvinar mattis nisi
                                in laoreet. Integer felis mi, vehicula sed pretium sit amet, pellentesque vel nisl.
                                Curabitur metus ante, pellentesque in lectus a, sagittis imperdiet mi.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button
                                    className="br-button circle small"
                                    type="button"
                                    aria-label="Expandir/Retrair Rótulo 01"
                                    data-toggle="collapse"
                                    data-target="collapse-3-4-27509"
                                >
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </button>
                            </td>
                            <td>
                                <div className="br-checkbox hidden-label">
                                    <input
                                        id="check-line-3-27509"
                                        name="check-line-3-27509"
                                        type="checkbox"
                                        aria-label="Selecionar linha 3"
                                        data-child="check-01-27509"
                                    />
                                    <label htmlFor="check-line-3-27509">Selecionar linha 3</label>
                                </div>
                            </td>
                            <td data-th="Título coluna 1">2023</td>
                            <td data-th="Título coluna 2">Manaus</td>
                            <td data-th="Título coluna 3">20/04 a 29/04</td>
                        </tr>
                        <tr className="collapse">
                            <td id="collapse-3-4-27509" aria-hidden="true" hidden={true} colSpan={6}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies aliquet
                                lacinia. Vestibulum in interdum eros. Donec vel tempus diam. Aenean pulvinar mattis nisi
                                in laoreet. Integer felis mi, vehicula sed pretium sit amet, pellentesque vel nisl.
                                Curabitur metus ante, pellentesque in lectus a, sagittis imperdiet mi.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="table-footer">
                    <nav
                        className="br-pagination"
                        aria-label="Paginação de resultados"
                        data-total="50"
                        data-current="1"
                        data-per-page="20"
                    >
                        <div className="pagination-per-page">
                            <div className="br-select">
                                <div className="br-input">
                                    <label htmlFor="per-page-selection-random-91921">Exibir</label>
                                    <input id="per-page-selection-random-91921" type="text" placeholder=" " />
                                    <button
                                        className="br-button"
                                        type="button"
                                        aria-label="Exibir lista"
                                        tabIndex={-1}
                                        data-trigger="data-trigger"
                                    >
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </button>
                                </div>
                                <div className="br-list" tabIndex={0}>
                                    <div className="br-item" tabIndex={-1}>
                                        <div className="br-radio">
                                            <input
                                                id="per-page-10-random-91921"
                                                type="radio"
                                                name="per-page-random-91921"
                                                value="per-page-10-random-91921"
                                                defaultChecked={true}
                                            />
                                            <label htmlFor="per-page-10-random-91921">10</label>
                                        </div>
                                    </div>
                                    <div className="br-item" tabIndex={-1}>
                                        <div className="br-radio">
                                            <input
                                                id="per-page-20-random-91921"
                                                type="radio"
                                                name="per-page-random-91921"
                                                value="per-page-20-random-91921"
                                            />
                                            <label htmlFor="per-page-20-random-91921">20</label>
                                        </div>
                                    </div>
                                    <div className="br-item" tabIndex={-1}>
                                        <div className="br-radio">
                                            <input
                                                id="per-page-30-random-91921"
                                                type="radio"
                                                name="per-page-random-91921"
                                                value="per-page-30-random-91921"
                                            />
                                            <label htmlFor="per-page-30-random-91921">30</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="br-divider d-none d-sm-block mx-3"></span>
                        <div className="pagination-information d-none d-sm-flex">
                            <span className="current">1</span>&ndash;<span className="per-page">3</span>&nbsp;de&nbsp;
                            <span className="total">3</span>&nbsp;itens
                        </div>
                        <div className="pagination-go-to-page d-none d-sm-flex ml-auto">
                            <div className="br-select">
                                <div className="br-input">
                                    <label htmlFor="go-to-selection-random-15337">Página</label>
                                    <input id="go-to-selection-random-15337" type="text" placeholder=" " />
                                    <button
                                        className="br-button"
                                        type="button"
                                        aria-label="Exibir lista"
                                        tabIndex={-1}
                                        data-trigger="data-trigger"
                                    >
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </button>
                                </div>
                                <div className="br-list" tabIndex={0}>
                                    <div className="br-item" tabIndex={-1}>
                                        <div className="br-radio">
                                            <input
                                                id="go-to-1-random-15337"
                                                type="radio"
                                                name="go-to-random-15337"
                                                value="go-to-1-random-15337"
                                                defaultChecked={true}
                                            />
                                            <label htmlFor="go-to-1-random-15337">1</label>
                                        </div>
                                    </div>
                                    <div className="br-item" tabIndex={-1}>
                                        <div className="br-radio">
                                            <input
                                                id="go-to-2-random-15337"
                                                type="radio"
                                                name="go-to-random-15337"
                                                value="go-to-2-random-15337"
                                            />
                                            <label htmlFor="go-to-2-random-15337">2</label>
                                        </div>
                                    </div>
                                    <div className="br-item" tabIndex={-1}>
                                        <div className="br-radio">
                                            <input
                                                id="go-to-3-random-15337"
                                                type="radio"
                                                name="go-to-random-15337"
                                                value="go-to-3-random-15337"
                                            />
                                            <label htmlFor="go-to-3-random-15337">3</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="br-divider d-none d-sm-block mx-3"></span>
                        <div className="pagination-arrows ml-auto ml-sm-0">
                            <button className="br-button circle" type="button" aria-label="Voltar página">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                            <button className="br-button circle" type="button" aria-label="Avançar página">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
export default BrTable;
