import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const values = [uploadPhoto(), createUser()];

  return Promise.all(values)
    .then((values) => console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`),
      () => console.log('Signup system offline'));
}
