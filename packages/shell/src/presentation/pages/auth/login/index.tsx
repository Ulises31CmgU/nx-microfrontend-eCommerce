import React, { useState } from 'react';
import { useUserState } from '@e-commerce/common-types-functions';

import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  const { isLoggedIn, login } = useUserState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    login({ username, password });
    setUsername('');
    setPassword('');
  };

  if (isLoggedIn) {
    navigate('/', { replace: true });
  }

  return (
    <Stack>
      <Typography variant="h4">Login using username and password</Typography>
      <Grid container gap={5} mt={10}>
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          type={'password'}
          fullWidth
        />
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </Grid>

      <span style={{ marginTop: 200 }}>
        To login use one of the following credentials:
      </span>
      <span>
        <strong> username--password </strong>
      </span>
      <span>johnd--m38rmF$ </span>
      <span>mor_2314--83r5^_</span>
    </Stack>
  );
}
