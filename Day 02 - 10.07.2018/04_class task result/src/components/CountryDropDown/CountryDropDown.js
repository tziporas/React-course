import React from 'react';

const countryDropDown = (props) => (
    <select onChange={(e) => { props.countrySelectionHandler(e.target.value) }}>
        {
            props.countryArray.map((elemnt, index) => (
                <option value={elemnt.name} key={index}  >
                    {elemnt.name}
                </option>
            ))
        }
    </select>
)

export default countryDropDown;
