export default function getFullResponseFromAPI(success) {
  const aPromise = new Promise((res, rej) => {
    // res is resolve
    // rej is reject
    if (success) {
      res({
        status: 200,
	body: 'Success',
      });
    } else {
      rej(new Error('The fake API is not working currently'));
    }
  });
  return aPromise;
}
