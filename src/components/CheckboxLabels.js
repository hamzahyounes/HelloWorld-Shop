import * as React from 'react';
import { orange } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel disabled={false} control={<Checkbox />} label="Disabled" />
      <FormControlLabel 
        control={<Checkbox defaultChecked={false} 
        sx={{
            color: "#aaa",
            '&.Mui-checked': {
            color: orange[600],
            },
        }}
        />} 

        label="All Products" />
    </FormGroup>
  );
}