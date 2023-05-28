import React from 'react';
export interface BrButtonProps {
    texto: string;
    type?: 'button' | 'submit' | 'reset';
    enfase?: 'primary' | 'secondary';
    formato?: 'circle' | 'block';
    densidade?: 'large' | 'small';
    dark?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const BrButton = (props: BrButtonProps) => {
    return (
        <button
            disabled={props.disabled}
            className={`br-button 
            ${props.enfase} 
            ${props.formato} 
            ${props.densidade} 
            ${props.dark ? 'dark-mode' : ''}`}
            onClick={props.onClick}
            type={props.type ?? 'button'}
        >
            {props.texto}
        </button>
    );
};
export default BrButton;
