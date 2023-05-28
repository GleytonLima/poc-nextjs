import { faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface BrDateRangePickerProps {
    id: string;
    label: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
    onBlur?: any;
    onChange?: any;
    errorMessage?: any;
}

const BrDateRangePicker = (props: BrDateRangePickerProps) => {
    return (
        <>
            <div className="br-datetimepicker" data-mode="range" data-type="text">
                <div className="br-input has-icon">
                    <label htmlFor={props.id}>{props.label}</label>
                    <input
                        id={props.id}
                        type="text"
                        name={props.name}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        required={props.required}
                        disabled={props.disabled}
                        placeholder="dd/mm/aaaa até dd/mm/aaaa"
                        data-input="data-input"
                    />
                    <button
                        className="br-button circle small"
                        type="button"
                        aria-label="Abrir Seletor de Data"
                        data-toggle="data-toggle"
                        id={'range-input-btn'}
                    >
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </button>
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
export default BrDateRangePicker;
