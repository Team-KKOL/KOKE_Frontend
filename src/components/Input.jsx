import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types"; //부모로부터 전달받은 prop의 데이터 type을 검사함
import styled from "styled-components";

const StyledContext = styled.div`
  width: 100%;
`;
const StyledInput = styled.input`
  border-radius: 8px;
  border: 1px solid #949494;
  width: 28vw;
  height: 3vh;
  margin-bottom: 1rem;
`;
const StyledLabel = styled.label`
  width: 100%;
  height: 3vh;
  font-size: 20px;
  margin-bottom: 0.8rem;
  text-align: left;
`;
// const StyledButton = styled.button``;

const Input = forwardRef(
  (
    {
      type,
      label,
      value,
      name,
      onChange,
      onFocus,
      style,
      placeholder,
      maxLength,
      button,
    },
    ref
  ) => {
    return (
      <StyledContext style={style}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          type={type}
          ref={ref}
          value={value}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          maxLength={maxLength}
        ></StyledInput>
        {/* <StyledButton>{button}</StyledButton> */}
      </StyledContext>
    );
  }
);
Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(["text", "password", "tel", "email"]),
  //   autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  // errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};
export default Input;
