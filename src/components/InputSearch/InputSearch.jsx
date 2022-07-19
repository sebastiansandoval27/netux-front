import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { InputContainer } from "./inputSearch.styled";
import { AiOutlineSearch } from "react-icons/ai";

const InputSearch = () => {
  return (
    <InputContainer>
      <input type="text" placeholder="Búsqueda" />
      <AiOutlineSearch />
    </InputContainer>
  );
};

export default InputSearch;
