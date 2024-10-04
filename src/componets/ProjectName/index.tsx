import { useState } from 'react'
import * as stylex from '@stylexjs/stylex';


const projects = ['OFA', 'ARMF', 'DWM']

export default function ProjectName() {
    const [selectedApp, setSelectedApp] = useState('');

    const handleSelectChange = (event: any) => {
        setSelectedApp(event.target.value);
    };

    return (
        <div  {...stylex.props(styles.dropdownContainer)}>
            <p {...stylex.props(styles.label)}>Project Name</p>
            <select
                value={selectedApp}
                onChange={handleSelectChange}
                {...stylex.props(styles.dropdown)}
            >
                {projects.map((one) => (
                    <option {...stylex.props(styles.option)} value={one}>{one}</option>
                ))}

            </select>
        </div>

    );
}


const styles = stylex.create({
    dropdownContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '10px 16px',
        width: '50vw'
    },
    label: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#333',
    },
    dropdown: {
        width: '20vw',
        padding: '8px',
        fontSize: '16px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    option: {
        padding: '10px',
        fontSize: '16px',
    }
});