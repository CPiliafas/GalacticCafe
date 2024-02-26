import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdEmail } from "react-icons/md";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button startIcon={MdEmail} variant="contained" color="secondary" align-items="center" justify-content="center" display="flex" padding-top="10px">Join Our Mailing List!</Button>
    </Stack>
  );
}