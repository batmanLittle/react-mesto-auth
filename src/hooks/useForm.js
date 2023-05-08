import { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (evt) => {
    const input = evt.target;
    setForm({
      ...form,
      [input.name]: input.value,
    });
  };

  return { form, handleChange };
};

export default useForm;
