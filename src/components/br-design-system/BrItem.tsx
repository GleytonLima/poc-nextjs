export interface BrItemProps {}

const BrItem = (props: BrItemProps) => {
    return (
        <div className="br-list" role="list">
            <div className="header">
                <div className="title">Título</div>
            </div>
            <span className="br-divider"></span>
            <div className="br-item" role="listitem">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <i className="fas fa-heartbeat" aria-hidden="true"></i>
                    </div>
                    <div className="col">ITEM Texto principal</div>
                    <div className="col-auto">META</div>
                </div>
            </div>
            <div className="br-item" role="listitem">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <i className="fas fa-heartbeat" aria-hidden="true"></i>
                    </div>
                    <div className="col">ITEM Texto principal</div>
                    <div className="col-auto">META</div>
                </div>
            </div>
            <div className="br-item" role="listitem">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <i className="fas fa-heartbeat" aria-hidden="true"></i>
                    </div>
                    <div className="col">ITEM Texto principal</div>
                    <div className="col-auto">META</div>
                </div>
            </div>
        </div>
    );
};
export default BrItem;
