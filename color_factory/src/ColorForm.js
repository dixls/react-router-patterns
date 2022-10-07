import React, { useState } from "react";

function ColorsForm () {
    const [formData, setFormData] = useState({
        colorName: "",
        colorData: "",
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="colorName">Color Name</label>
            <input onChange={handleChange} type="text" name="colorName" value={formData.colorName} />
            <label for="colorData">Choose a Color</label>
            <input onChange={handleChange} type="color" name="colorData" value={formData.colorData} />
            <button>Add Color</button>
        </form>
    )
}

export default ColorsForm;