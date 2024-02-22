import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdEmail } from "react-icons/md";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button startIcon={MdEmail} variant="contained" color="secondary" justify-content="center" align-items="center" display="flex">Join Our Mailing List!</Button>
    </Stack>
  );
}