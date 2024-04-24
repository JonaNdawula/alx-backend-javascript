export default function getResponseFromAPI() {
  const aPromise = new Promise((res, rej) => {
    res();
    rej();
  });
  return aPromise;
}
