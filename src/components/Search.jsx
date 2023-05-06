import { useState } from "react";
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { FormStyle } from "../styles/Search.style";

function Search() {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`)
    }

  return (
    <FormStyle onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <FaSearch />
    </FormStyle>
  )
}

export default Search
