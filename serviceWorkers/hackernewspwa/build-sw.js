import {injectManifest} from 'workbox-build';

injectManifest({
  swSrc: './src/sw.js',
  swDest: './public/sw.js',
  maximumFileSizeToCacheInBytes:300000,
  globDirectory: 'src/',
  globPatterns: [
      '**/*.html',
      '**/*.jpeg',
      '**/*.jpg'
  ]
});