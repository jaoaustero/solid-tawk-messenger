# How to Use

Here are the basic how to usse callback and access the expose functions from the plugin. You can
see the list of APIs in the [API reference](api-reference.md)

<br/>

## Expose Function
To access the expose functions, you will need to declare a variable and pass it as ref props, this
will return an object that contains API functions from the plugin after the widget is load.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.maximize();
    });

    return (
        <TawkMessenger
            propertyId="property_id"
            widgetId="widget_id"
            ref={$tawkMessenger}/>
    );
}
```

<br/>

## Using Callbacks
Using the API callbacks, simply pass a function props then it will emit by the plugin.

```js
function App() {
    let $tawkMessenger;
    
    $tawkMessenger.onLoad(() => {
        // place your code here
    });

    return (
        <TawkMessenger
            propertyId="property_id"
            widgetId="widget_id"
            ref={$tawkMessenger}}/>
    );
}
```
