importScripts('https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js');

onmessage = (e) => {
    const { img, width, height } = e.data;
    const code = jsQR(img, width, height, { inversionAttempts: 'dontInvert' });
    postMessage(code);
};
