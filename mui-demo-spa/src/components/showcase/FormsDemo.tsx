import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Box, Typography } from '@mui/material';

interface FormData {
  name: string;
  email: string;
  option: string;
}

export const FormsDemo: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    option: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name as string]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name as string]: '',
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.option) newErrors.option = 'Please select an option';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log('Form Data:', formData);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Forms Demo
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
      />
      <FormControl fullWidth margin="normal" error={!!errors.option}>
        <InputLabel>Option</InputLabel>
        <Select
          name="option"
          value={formData.option}
          onChange={handleChange}
          label="Option"
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
        {errors.option && <Typography variant="caption" color="error">{errors.option}</Typography>}
      </FormControl>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};