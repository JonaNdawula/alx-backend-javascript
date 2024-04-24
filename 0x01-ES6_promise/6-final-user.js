import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise = [signUpUser(firstName, lastName),
    uploadPhoto(fileName)];

  return Promise.allSettled(promise)
    .then((values) => {
      const resolve = [];
      values.forEach((value) => {
	if (value.status === 'fulfiled') {
	  resolve.push(value);
	} else {
	  resolve.push({
	    status: value.status,
	    value: `Error: ${value.reason.message}`,
	  });
	}
      });
      return resolve;
    });
}
