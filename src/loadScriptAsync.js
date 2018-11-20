export default function loadScriptAsync(
  scriptUrl,
  timeoutDuration,
  customLoadName = 'unnamed',
) {
  /* istanbul ignore next line */
  const FORCED_TIMEOUT_IN_MS = timeoutDuration || 30000;
  return new Promise(function(resolveCallback, rejectCallback) {
    let script = document.createElement('script');
    script.src = scriptUrl;
    script.type = 'text/javascript';
    script.onError = rejectCallback;
    script.async = true;
    script.onload = resolveCallback;
    script.addEventListener('error', rejectCallback, { once: true });
    script.addEventListener('load', resolveCallback, { once: true });
    document.head.appendChild(script);
    const timer = setTimeout(() => {
      rejectCallback({
        error: `${customLoadName} - load script async promise rejected by timeout`
      });
      clearTimeout(timer);
    }, FORCED_TIMEOUT_IN_MS);
  });
}
