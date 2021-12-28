# ![solid-headless](/images/banner.jpg)

<br/>

## Features
- Documented and Self explaining methods
- Small size without any external libraries
- All Javascript API are avaiable
- Maintained by Senior Front-end Developer of [tawk.to](https://www.tawk.to)

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
import TawkMessenger from 'solid-tawk-messenger';

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
1.  [How to Use](docs/how-to-use.md)
1.  [API Reference](docs/api-reference.md)

<br/>


## License

Code released under [MIT](https://github.com/jaoaustero/solid-tawk-messenger/blob/main/LICENSE) license.
