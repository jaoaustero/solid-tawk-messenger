<h1 align="center">
    Notice: Still Under Development
</h1>

<br/><br/>

<p align="center">
    <a href="https://www.tawk.to/"
    target="_blank"
    rel="noopener noreferrer">
        <img width="120"
            src="https://www.tawk.to/wp-content/uploads/2020/04/tawk-sitelogo.png"
            alt="Tawk logo">
    </a>
</p>

<h1 align="center">
    Tawk messenger for Solid
</h1>

> A plugin for SolidJS framework of [tawk.to](https://www.tawk.to/) messenger.

<br/>

## Features
- Documented and Self explaining methods
- Small size without any external libraries
- All Javascript API are avaiable

<br/>

## Installation
The plugin are available in node and yarn package managers.
```bash
# Node
npm install solid-tawk-messenger

# Yarn
yarn add solid-tawk-messenger
```

<br/>

## Quickstart
Import the **solid-tawk-messenger** in your main component. The **propertyId** and **widgetId** will
be found on your tawk dashboard **Administration > Chat Widget**.

```js
import SolidTawkMessenger from 'solid-tawk-messenger';

function App() {
    return (
        <TawkMessenger
            propertyId="property_id"
            widgetId="widget_id"/>
    )
}
```

<br/>

## Documentation

This project includes a `docs` folder with more details on:
1.  [SPA setup](docs/spa-setup.md)
1.  [SSR setup](docs/ssr-setup.md)
1.  [API Reference](docs/api-reference.md)

<br/>


## License

Code released under [MIT](https://github.com/jaoaustero/solid-tawk-messenger/blob/main/LICENSE) license.
