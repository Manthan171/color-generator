import React, { useState } from 'react'
import Values from 'values.js';
import SingleColor from './SingleColor/SingleColor';

function ColorGenerator() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values('#f15025').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(color);
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            console.log(colors)
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }
    return (
        <>
            <section className='header'>
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="#f15025"
                        className={`${error ? 'error' : null}`} />
                    <button type="submit" className='btn'>Submit</button>
                </form>
            </section>
            <section className='colors-main'>
                <div className='colors'>
                    {list.map((color, index) => {
                        return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
                    })}
                </div>
            </section>
        </>
    )
}

export default ColorGenerator;