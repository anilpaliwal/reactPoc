import React from 'react';
import * as stylex from '@stylexjs/stylex';


type Props = {
    label: string
}


const TextAreaInput = ({ label }: Props) => {
    return (
        <div  {...stylex.props(styles.inputContainer)} >
            <label {...stylex.props(styles.label)} htmlFor="name">
                {label}
            </label>
            <textarea rows={5} wrap='soft'
                {...stylex.props(styles.input)}
                placeholder={`Enter ${label.toLowerCase()} here`}
            />
        </div>
    );
};

export default TextAreaInput;

const styles = stylex.create({
    label: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#333',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '20vw',
        boxSizing: 'border-box',
        background: '#fff'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '10px 16px',
        width: '50vw'
    },
});