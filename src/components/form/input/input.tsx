import React from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';

export const InputWithLabel = ({
    type,
    label,
    name,
    onChange,
    errorText,
    isRequired,
    value,
    ...props
}: any) => {
    const handleKeyDown = (e:any) => {
        const keys = [13];
        if(keys.includes(e.keycode)) onChange(e.target.value)
    }
  return ( 
    <FormControl mb='1rem' isInvalid={errorText}>
        <FormLabel>{label}</FormLabel>
        <Input
            type={type}
            name={name}
            id={name}
            isRequired={isRequired}
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown} 
            borderColor={errorText ? "red" : " #ccc"}
            {...props}
        />
        <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  );
}
