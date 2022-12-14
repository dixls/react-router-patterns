import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ColorsForm({addColor}) {
    let history = useHistory();
    
    const [formData, setFormData] = useState({
        colorName: "",
        colorData: "",
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        addColor(formData);
        history.push("/colors")
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