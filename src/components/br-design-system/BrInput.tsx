import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface BrInputProps {
    id: string;
    name: string;
    label: string;
    required?: boolean;
    onBlur?: any;
    onChange?: any;
    placeholder?: string;
    errorMessage?: any;
    type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'time' | 'datetime-local' | 'search' | 'tel' | 'url';
}

const BrInput = (props: BrInputProps) => {
    return (
        <div className={`br-input ${props.errorMessage ? 'danger' : ''}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={props.id}
                type={props.type}
                name={props.name}
                onChange={props.onChange}
                onBlur={props.onBlur}
                required={props.required}
                placeholder={props.placeholder}
            />
            {props.errorMessage && (
                <span className="feedback danger" role="alert">
                    <FontAwesomeIcon icon={faTimes} />
                    {props.errorMessage}
                </span>
            )}
        </div>
    );
};
export default BrInput;
