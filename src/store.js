import { writable } from 'svelte/store';
export const user = writable( {
  name: '',
  email: '',
  pass: '',
  id: 0,
  err: null,
  exists: false,
  admin: false,
  isMember: false,
});
