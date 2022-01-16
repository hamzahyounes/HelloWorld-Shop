// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange, deepPurple } from '@mui/material/colors';
// 
// export default function LetterAvatars() {
//   return (
//       <Avatar sx={{ bgcolor: deepOrange[500] }}>H</Avatar>
//   );
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { orange } from '@mui/material/colors';

const HeaderAvatar = () =>  {
  return (
      <Avatar sx={{ bgcolor: orange[500] }}>H</Avatar>
  );
}

export default HeaderAvatar;