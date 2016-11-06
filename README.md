# Tab Gear

> Chrome extension for tab management

### Installation

```
npm install
```

### Usage

```
npm start
```

### Build

```
npm run build
```

### Testing

```
npm test
```

### Publication

* Upload extension using [Developer Dashboard](https://chrome.google.com/webstore/developer)


### Updating

* `npm run build`
* Open [Extensions](chrome://extensions/)
* Click "Pack extension"
* Use `cache/build/` to fill "Extension root directory" and "Private key file"
* Move `cache/build/build.crx` to `build/<version>.crx`
* Actualize "update.xml"


### Links

* [Manifest File](https://developer.chrome.com/extensions/manifest)
* [Developer Dashboard](https://chrome.google.com/webstore/developer)
* [Chrome Web Store](https://chrome.google.com/webstore/category/extensions)
* [HTML Entities](https://dev.w3.org/html5/html-author/charref)
