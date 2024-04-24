export default function guardrail(mathFunction) {
  const queue = [];
  let mathResult;

  try {
    mathResult = mathFunction();
  } catch (error) {
    mathResult = error.toString();
  }
  queue.push(mathResult);
  queue.push('Guardrail was processed');
  return queue;
}
