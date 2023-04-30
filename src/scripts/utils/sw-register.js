import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('sw no supported in the browser');
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register sw', error);
  }
};

export default swRegister;
