# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one of
the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

<br/>

## Table of contents
- [API Reference](#api-reference)
  - [Table of contents](#table-of-contents)
  - [onLoad](#onload)
  - [onStatusChange](#onstatuschange)
  - [onBeforeLoad](#onbeforeload)
  - [onChatMaximized](#onchatmaximized)
  - [onChatMinimized](#onchatminimized)
  - [onChatHidden](#onchathidden)
  - [onChatStarted](#onchatstarted)
  - [onChatEnded](#onchatended)
  - [onPrechatSubmit](#onprechatsubmit)
  - [onOfflineSubmit](#onofflinesubmit)
  - [onChatMessageVisitor](#onchatmessagevisitor)
  - [onChatMessageAgent](#onchatmessageagent)
  - [onChatMessageSystem](#onchatmessagesystem)
  - [onAgentJoinChat](#onagentjoinchat)
  - [onAgentLeaveChat](#onagentleavechat)
  - [onChatSatisfaction](#onchatsatisfaction)
  - [onVisitorNameChanged](#onvisitornamechanged)
  - [onFileUpload](#onfileupload)
  - [onTagsUpdated](#ontagsupdated)
  - [onUnreadCountChanged](#onunreadcountchanged)
  - [visitor](#visitor)
  - [maximize](#maximize)
  - [minimize](#minimize)
  - [toggle](#toggle)
  - [popup](#popup)
  - [getWindowType](#getwindowtype)
  - [showWidget](#showwidget)
  - [hideWidget](#hidewidget)
  - [toggleVisibility](#togglevisibility)
  - [getStatus](#getstatus)
  - [isChatMaximized](#ischatmaximized)
  - [isChatMinimized](#ischatminimized)
  - [isChatHidden](#ischathidden)
  - [isChatOngoing](#ischatongoing)
  - [isVisitorEngaged](#isvisitorengaged)
  - [onLoaded](#onloaded)
  - [onBeforeLoaded](#onbeforeloaded)
  - [widgetPosition](#widgetposition)
  - [endChat](#endchat)
  - [setAttributes](#setattributes)
  - [addEvent](#addevent)
  - [addTags](#addtags)
  - [removeTags](#removetags)
  - [secureMode](#securemode)
  - [customstyle](#customstyle)
    - [zIndex](#zindex)
    - [Visibility](#visibility)

<br/>

## onLoad
Callback function invoked right after the widget is rendered. This callback is not supported in
pop out chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onStatusChange
Callback function invoked when the page status changes. The function will receive the changed
status which will be either online, away or offline. This callback is not supported in pop out
chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onStatusChange((status) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onBeforeLoad
Callback function invoked right when Tawk_API is ready to be used and before the widget is rendered.
This callback is not supported in pop out chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onBeforeLoad(() => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onChatMaximized
Callback function invoked when the widget is maximized. This callback is not supported in pop out
chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onChatMaximized(() => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onChatMinimized
Callback function invoked when the widget is minimized. This callback is not supported in pop out
chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onChatMinimized(() => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onChatHidden
Callback function invoked when the widget is hidden. This callback is not supported in pop out chat
window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onChatHidden(() => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onChatStarted
Callback function invoked when the widget is started.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onChatStarted(() => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onChatEnded
Callback function invoked when the widget is ended. This callback is not supported in pop out chat
window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onChatEnded(() => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onPrechatSubmit
Callback function invoked when the Pre-Chat Form is submitted. The submitted form data is passed to
the function. This callback is not supported in pop out chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onPrechatSubmit((data) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onOfflineSubmit
Callback function invoked when the Offline form is submitted. The submitted form data is passed to
the function. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This
callback is not supported in pop out chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onOfflineSubmit((data) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onChatMessageVisitor
Callback function invoked when message is sent by the visitor. The message is passed to the
function. This callback is not supported in pop out chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onChatMessageVisitor((message) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onChatMessageAgent
Callback function invoked when message is sent by the agent. The message is passed to the function.
This callback is not supported in pop out chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onChatMessageAgent((message) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onChatMessageSystem
Callback function invoked when message is sent by the system. The message is passed to the function.
This callback is not supported in pop out chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onChatMessageSystem((message) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onAgentJoinChat
Callback function invoked when an agent joins the chat. The data is passed to the function. Will
contain {name : ”, position : ”, image : ”, id : ”}. This callback is not supported in pop out chat
window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onAgentJoinChat((data) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onAgentLeaveChat
Callback function invoked when an agent leaves the chat. The data is passed to the function. Will
contain {name : ”, id : ”}. This callback is not supported in pop out chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onAgentLeaveChat((data) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onChatSatisfaction
Callback function invoked when an agent leaves the chat. The satisfaction is passed to the function.
-1 = dislike | 0 = neutral | 1 = like. This callback is not supported in pop out chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onChatSatisfaction((satisfaction) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onVisitorNameChanged
Callback function invoked when the visitor manually changes his name. The visitorName is passed to
the function. This callback is not supported in pop out chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onVisitorNameChanged((visitorName) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onFileUpload
Callback function invoked when a file is uploaded. The link to the uploaded file is passed to the
function. This callback is not supported in pop out chat window.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onFileUpload((link) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onTagsUpdated
Callback function invoked when a tag is updated.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onTagsUpdated((data) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onUnreadCountChanged
Callback function that returns count of unread messages.

```js
function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onUnreadCountChanged((count) => {
            // place your code here
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## visitor
Object used to set the visitor name and email. Do not place this object in a function, as the
values need to be available before the widget script is downloaded.

Setting or changing the values after the widget script has been downloaded will not send the
values to the dashboard.

If the name and email will not be available on load time (eg single page app, ajax login), then
use the [setAttributes](#setAttributes) function instead.

```js
$tawkMessenger.visitor({
    name : 'name',
    email : 'email@email.com'
});

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.visitor({
                name : 'name',
                email : 'email@email.com'
            });
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={tawkMessenger}/>
        </div>
    );
}
```

<br/>

## maximize
Maximizes the chat widget.

```js
$tawkMessenger.maximize();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.maximize();
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## minimize
Minimizes the chat widget.

```js
$tawkMessenger.minimize();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.minimize();
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## toggle
Minimizes or Maximizes the chat widget based on the current state.

```js
$tawkMessenger.toggle();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.toggle();
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## popup
Opens the chat widget as a pop out.

```js
$tawkMessenger.popup();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.popup();
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## getWindowType
Returns the current widget type whether it’s inline or embed.

```js
$tawkMessenger.getWindowType();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            if ($tawkMessenger.getWindowType() === 'inline') {
                // do something if it's inline
            } else {
                // do something if it's embed
            }
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## showWidget
Shows the chat widget.

```js
$tawkMessenger.showWidget();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.showWidget();
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## hideWidget
Hide the chat widget.

```js
$tawkMessenger.hideWidget();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.hideWidget();
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## toggleVisibility
Hides or Shows the chat widget based on the current visibility state.

```js
$tawkMessenger.toggeVisibility();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.toggeVisibility();
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## getStatus
Returns the current page status (online, away or offline).

```js
$tawkMessenger.getStatus();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            const pageStatus = $tawkMessenger.getStatus();

            if (pageStatus === 'online') {
                // do something for online
            } else if (pageStatus === 'away') {
                // do something for away
            } else {
                // do something for offline
            }
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## isChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

```js
$tawkMessenger.isChatMaximized();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            if ($tawkMessenger.isChatMaximized()) {
                // do something if it's maximized
            }
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## isChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

```js
$tawkMessenger.isChatMinimized();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            if ($tawkMessenger.isChatMinimized()) {
                // do something if it's minimized
            }
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## isChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

```js
$tawkMessenger.isChatHidden();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            if ($tawkMessenger.isChatHidden()) {
                // do something if chat widget is hidden
            }
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## isChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

```js
$tawkMessenger.isChatOngoing();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            if ($tawkMessenger.isChatOngoing()) {
                // do something if there's ongoing chat
            }
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## isVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has
requested a chat.

```js
$tawkMessenger.isVisitorEngaged();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            if ($tawkMessenger.isVisitorEngaged()) {
                // do something if visitor engaged in chat
            }
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onLoaded
Returns a value (true or undefined) indicating when the plugin is ready.

```js
$tawkMessenger.onLoaded();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        if ($tawkMessenger.onLoaded()) {
            // place your code here
        }
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## onBeforeLoaded
Returns a value (true or undefined) indicating when plugin is initialize.

```js
$tawkMessenger.onBeforeLoaded();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        if ($tawkMessenger.onBeforeLoaded()) {
            // place your code here
        }
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## widgetPosition
Returns a string for current position of the widget.

```js
$tawkMessenger.widgetPosition();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            if ($tawkMessenger.widgetPosition() === 'br') {
                // do something if the widget is at bottom right
            }
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## endChat
Ends the current ongoing chat.

```js
$tawkMessenger.endChat();

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.endChat();
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## setAttributes
Set custom metadata regarding this chat/visitor.

This function takes in two values: attribute and callback.

The attribute value is of the object data type, which is a key value pair.

The key is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash).

You can also use this function to set the visitor name and email. However, you will need to enable
the secure mode first and also supply the calculated hash value in this function.

Refer to the secure mode section below on how to do this.

The reason it needs to be in [secure mode](#securemode) is to ensure data integrity — to ensure the
value sent from the widget to the dashboard is true and has not been tampered with.

The callback, which is a function, will be invoked to notify whether the save failed.

Error messages returned:

1. INVALID_ATTRIBUTES: No attributes were sent
1. SESSION_EXPIRED: The visitor’s current session has expired
1. SERVER_ERROR: Internal server error
1. ACCESS_ERROR: Error in accessing the page
1. ATTRIBUTE_LIMIT_EXCEEDED: Total custom attributes (excluding name, email and hash) is 50
1. CONTAINS_INVALID_KEY: Custom key is not alphanumeric or dash (keys will be lower case)
1. CONTAINS_INVALID_VALUE: Custom value is empty or the total length is more than 255 characters

```js
$tawkMessenger.setAttributes(attributes, callback);

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.setAttributes({
                id : 'A1234',
                store : 'Midvalley'
            }, function(error) {
                // do something if error
            });

            // Example for setting name and email

            $tawkMessenger.setAttributes({
                name : 'name',
                store : 'name@email.com',
                hash : 'has value'
            }, function(error) {
                // do something if error
            });
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## addEvent
Set a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY,
CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

```js
$tawkMessenger.addEvent(eventName, metaData, callback);

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.addEvent(
                'requested-quotation',
                function(error) {
                    // do something if error
                }
            );

            // Example with metadata

            $tawkMessenger.addEvent(
                'requested-quotation',
                {
                    sku : 'A0012',
                    name : 'Jeans',
                    price : '50'
                }
                function(error) {
                    // do something if error
                }
            );
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## addTags
Add tags to the chat.
This function takes in two values; tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The total number of tags is 10.
The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, VERSION_CONFLICT, SESSION_EXPIRED, SERVER_ERROR

```js
$tawkMessenger.addTags(tags, callback);

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.addTags(
                [
                    'hello',
                    'world'
                ],
                function(error) {
                    // do something if error
                }
            );
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## removeTags
Remove tags from the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, SESSION_EXPIRED, SERVER_ERROR

```js
$tawkMessenger.removeTags(tags, callback);

// Example

function App() {
    let $tawkMessenger;

    onMount(() => {
        $tawkMessenger.onLoad(() => {
            $tawkMessenger.removeTags(
                [
                    'hello',
                    'world'
                ],
                function(error) {
                    // do something if error
                }
            );
        });
    });

    return (
        <div>
            <TawkMessenger
                ref={$tawkMessenger}/>
        </div>
    );
}
```

<br/>

## secureMode
Secure method is to ensure the data you are sending is actually from you.

To enable secure mode, embed following code on your page.

The hash is server side generated HMAC using SHA256, the user’s email and your site’s API key.

You can get your API key from **Admin>Property Settings**.

```js
$tawkMessenger.visitor({
    name : 'name',
    email : 'email@email.com'
    hash : '<calculate-hash>'
});
```

<br/>

## customstyle
Object used to update the widget styling. Currently only supports zIndex style. Do not place this
object in a function, as the values need to be available before the widget script is downloaded.
Setting or changing the values after the widget script has been downloaded will not update the
widget’s style.

### zIndex
```js
function App() {
    const customStyle = {
        zIndex : Integer|String
    };

    return (
        <TawkMessenger
            customStyle={ customStyle }/>
    );
}

// Example

function App() {
    const customStyle = {
        zIndex : 1000
    };

    return (
        <TawkMessenger
            customStyle={ customStyle }/>
    );
}

function App() {
    const customStyle = {
        zIndex : '1000'
    };

    return (
        <TawkMessenger
            customStyle={ customStyle }/>
    );
}

function App() {
    const customStyle = {
        zIndex : '1000 !important'
    };

    return (
        <TawkMessenger
            customStyle={ customStyle }/>
    );
}
```

### Visibility
```js
function App() {
    const customStyle = {
        visibility : {
            desktop : {
                xOffset : String | Integer, // '20' || 20
                yOffset : String | Integer,
                position : '' // 'br', 'bl', 'cr', 'cl', 'tr', 'tl'
            },
            mobile : {
                xOffset : String | Integer, // '20' || 20
                yOffset : String | Integer,
                position : '' // 'br', 'bl', 'cr', 'cl', 'tr', 'tl'
            }
        }
    };

    return (
        <div>
            <TawkMessenger
                customStyle={ customStyle }/>
        </div>
    );
}

// Example
function App() {
    const customStyle = {
        visibility : {
            desktop : {
                xOffset : '15',
                yOffset : '15',
                position : 'cr'
            },
            mobile : {
                xOffset : 15,
                yOffset : 15,
                position : 'bl'
            }
        }
    };

    return (
        <div>
            <TawkMessenger
                customStyle={ customStyle }/>
        </div>
    );
}
