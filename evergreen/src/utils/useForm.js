import { useState } from 'react';

const useForm = (defaults) => {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    //   check if value is a number
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }

    setValues({
      //   copy existing values into it
      ...values,
      //   update value that changed dynamiccally
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
};

export default useForm;
