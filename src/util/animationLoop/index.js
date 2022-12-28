// Animation Loop
const loopHandleMap = new Map();
export function startLoop(onLoop, onLoopKey = onLoop, frameRate = 60) {
  const loopHandle = { id: null };
  loopHandleMap.set(onLoopKey, loopHandle);
  //
  let timestamp = Date.now();
  const loopCall = () => {
    if (Date.now() - timestamp > 1000 / frameRate) {
      timestamp = Date.now();
      onLoop();
    }
    loopHandle.id = requestAnimationFrame(loopCall);
  };
  loopCall();
  return () => {
    if (loopHandle.id !== null) {
      cancelAnimationFrame(loopHandle.id);
    }
  };
}
export function endLoop(onLoop, onLoopKey = null) {
  const key = onLoopKey || onLoop;
  const loopHandle = loopHandleMap.get(key);
  if (loopHandle && loopHandle.id !== null) {
    cancelAnimationFrame(loopHandle.id);
  }
  loopHandleMap.delete(onLoop);
}
