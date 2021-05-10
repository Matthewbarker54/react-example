import React from 'react';
import { useField } from 'formik';
import { InputWithLabel } from './input';

export const FormikInput = (props: any) => {
    const [field, meta] = useField(props);

  return ( 
      <InputWithLabel
        {...field}
        {...props}
        errorText={meta.touched ? meta.error : ''}
        />
  );
}
