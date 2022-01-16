import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Switch from '@mui/material/Switch';


const OrangeSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: orange[600],
      '&:hover': {
        backgroundColor: alpha(orange[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: orange[600],
    },
  }));

export default OrangeSwitch;