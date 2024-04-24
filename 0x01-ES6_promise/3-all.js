import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const values = [uploadPhoto(), createUser()];
  return Promise.all(values)
    .then((values) => {
      console.log(`${values[1].firstName}${values[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
