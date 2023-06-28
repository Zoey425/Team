import { useState } from 'react';

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const resetForm = () => {
    setValues(initialValue);
  };

  return { values, handleChanges, resetForm };
};

export default useForm;
