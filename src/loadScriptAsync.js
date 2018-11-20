export default function loadScriptAsync(scriptUrl, resolveCallback, rejectCallback) {
  return new Promise(function() {
    let script = document.createElement('script');
    script.src = scriptUrl;
    script.type = 'text/javascript';
    script.onError = rejectCallback;
    script.async = true;
    script.onload = resolveCallback;
    script.addEventListener('error', rejectCallback, { once: true });
    script.addEventListener('load', resolveCallback, { once: true });
    document.head.appendChild(script);
    setTimeout(function() {
      resolveCallback('success');
    }, 300);
  });
}
