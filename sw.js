// 最小 service worker：只为满足 PWA 安装条件，不快取任何内容
// 这样每次打开都是最新的，改了代码刷新就生效

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', () => {
  // 不拦截、不缓存，直接走网络
});
