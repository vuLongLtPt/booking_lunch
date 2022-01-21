import { Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

function SelectOption({ listData, placeholder }) {
    const [size, setSize] = useState("default");

    const children = [];
    listData.forEach((item, idx) => {
        children.push(<Option key={idx}>{item}</Option>);
    });

    function handleChange(value) {
        console.log(`Selected: ${value}`);
    }

    return (
        <Select
            size={size}
            maxTagCount="responsive"
            placeholder={placeholder}
            onChange={handleChange}
            style={{ width: "100%" }}
        >
            {children}
        </Select>
    );
}
export default SelectOption;
