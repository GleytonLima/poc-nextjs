import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface BrSelectProps {
    id: string;
    label: string;
    name: string;
    placeholder: string;
    required?: boolean;
    onBlur?: any;
    onChange?: any;
    disabled?: boolean;
    itens: {
        value: string;
        text: string;
    }[];
    errorMessage?: any;
}

const BrSelect = (props: BrSelectProps) => {
    return (
        <>
            <div className="br-select" style={{ maxWidth: '100%' }}>
                <div className="br-input">
                    <label htmlFor={props.id}>{props.label}</label>
                    <input
                        id={props.id}
                        type="text"
                        required={props.required}
                        disabled={props.disabled}
                        placeholder={props.placeholder}
                    />
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
                    {props.itens.map((item) => (
                        <div key={item.value} className="br-item" tabIndex={-1}>
                            <div className="br-radio">
                                <input
                                    id={item.value}
                                    type="radio"
                                    name={props.name}
                                    onBlur={props.onBlur}
                                    onChange={props.onChange}
                                    value={item.value}
                                />
                                <label htmlFor={item.value}>{item.text}</label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {props.errorMessage && (
                <span className="feedback danger" role="alert">
                    <FontAwesomeIcon icon={faTimes} />
                    {props.errorMessage}
                </span>
            )}
        </>
    );
};
export default BrSelect;
