---
id: integration
title: "Integration"
sidebar_label: "Integration"
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

# Plugin

Plugin will be publicly allow for all merchants to install, if you need to build a private plugin you will need add some validation when you're decoding the signed request.

## Setup Plugin

You can create plugin from your merchant portal, and specifying the `platform` and `category`. The platform is important based on your integration type, 

* If you're building mobile app or terminal plugin will be `Mobile Native`
* If you're building for web will be `Web Portal`. 
 
You can save your secret key from the portal it's needed when you're decoding the signature.

<img src="/img/plugin/example-plugin.png"  />

## Authorize Setup ( Signed Request )

The way of plugin authorize the merchant is via plugin signed request. Signed request contains all of the required information that enough to determine who is using such as identifier, role and platform.

### Example & Structure

Here an example of a signed request, it contains 2 segments and split by ".". The first segment was signature use for verifying the validity of the signed request and second segment will be the merchant data and information.

> _FuBOoZR8iGNThRTj9FpEfcBPI4Jhh6ZGPqMU76HnSA=.eyJtZXJjaGFudElkIjoiNDExODE2NTIwMzY3OTY2ODg4NSIsIm5vbmNlU3RyIjoiMTY4ODEwMjQwMiIsInBsYXRmb3JtIjoiV0VCX1BPUlRBTCIsInJlZmVyZW5jZUlkIjoiODE5MDY1NjA0NTE2NjIzMjcxNiIsInJlZmVyZW5jZUxhYmVsIjoiREVWIFJNUyIsInJlZmVyZW5jZVJvbGUiOiJPV05FUiIsInJlZmVyZW5jZVR5cGUiOiJVU0VSIiwic3RvcmVJZHMiOltdLCJzdWJzY3JpcHRpb25FeHBpcmVkQXQiOiIyMDUwLTEyLTMxVDIzOjU5OjU5WiIsInN1YnNjcmlwdGlvblN0YXR1cyI6IkFDVElWRSIsInRpbWVzdGFtcCI6IjE2ODgxMDI0MDIiLCJ1cmwiOiJodHRwOi8vMTI3LjAuMC4xOjU1MDAvaW5kZXguaHRtbCIsInVzZXJDb3VudHJ5Q29kZSI6IjYwIiwidXNlcklkIjoiODE5MDY1NjA0NTE2NjIzMjcxNiIsInVzZXJQaG9uZSI6IjEyODUzNDQ4OCJ9

### Signature Verification 

Once you have the first segment of data you can verify the signature using signing step below. 

1. Base64 URL decode the first segment of data
2. Initialize signer HMAC-SHA256 with Secret Key
3. Write second segment of data to signer
4. Generate signature
5. Check signature with first segments

:::note
Example Code in Go

```go
package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"strings"
)

func main() {
	secretKey := "some_secret_key_from_portal"
	signedRequest := "_FuBOoZR8iGNThRTj9FpEfcBPI4Jhh6ZGPqMU76HnSA=.eyJtZXJjaGFudElkIjoiNDExODE2NTIwMzY3OTY2ODg4NSIsIm5vbmNlU3RyIjoiMTY4ODEwMjQwMiIsInBsYXRmb3JtIjoiV0VCX1BPUlRBTCIsInJlZmVyZW5jZUlkIjoiODE5MDY1NjA0NTE2NjIzMjcxNiIsInJlZmVyZW5jZUxhYmVsIjoiREVWIFJNUyIsInJlZmVyZW5jZVJvbGUiOiJPV05FUiIsInJlZmVyZW5jZVR5cGUiOiJVU0VSIiwic3RvcmVJZHMiOltdLCJzdWJzY3JpcHRpb25FeHBpcmVkQXQiOiIyMDUwLTEyLTMxVDIzOjU5OjU5WiIsInN1YnNjcmlwdGlvblN0YXR1cyI6IkFDVElWRSIsInRpbWVzdGFtcCI6IjE2ODgxMDI0MDIiLCJ1cmwiOiJodHRwOi8vMTI3LjAuMC4xOjU1MDAvaW5kZXguaHRtbCIsInVzZXJDb3VudHJ5Q29kZSI6IjYwIiwidXNlcklkIjoiODE5MDY1NjA0NTE2NjIzMjcxNiIsInVzZXJQaG9uZSI6IjEyODUzNDQ4OCJ9"
	segments := strings.Split(signedRequest, ".")
	if len(segments) != 2 {
		panic("invalid signed request")
	}

	signer := hmac.New(sha256.New, []byte(secretKey))
	signer.Write([]byte(segments[1]))

	if base64.URLEncoding.EncodeToString(signer.Sum(nil)) != segments[0] {
		panic("invalid signed request signature")
	}

	fmt.Print("valid signature")
}
```
:::

### Merchant Data & Information

From the second segment of the signed request, you can obtain the data by `Base64URL` decode then you will got the JSON data from the signed request.

```json
{
  "merchantId": "4118165203679668885",
  "nonceStr": "1688102402",
  "platform": "WEB_PORTAL",
  "referenceId": "8190656045166232716",
  "referenceLabel": "DEV RMS",
  "referenceRole": "OWNER",
  "referenceType": "USER",
  "storeIds": [],
  "subscriptionExpiredAt": "2050-12-31T23:59:59Z",
  "subscriptionStatus": "ACTIVE",
  "timestamp": "1688102402",
  "url": "http://127.0.0.1:5500/index.html",
  "userCountryCode": "60",
  "userPhone": "128534488"
}
```

## Webview Setup

Webview will have to handle the `postMessage` from our application and using the signed request from us will need to pass it to your backend to proceed with decoding, verifying and your own business logic. 

:::note
Most of the function are using browser native feature so all the rules still remains by default such as storage limit for session, local storage and cookie. 
:::

### Initialize Handshake

While initialize / rendering the view our application will send a signed request to you and that's mean initialize is completed after that you will able proceed your own views. Example of VanillaJS code to initialize the receiver and also sender, once initialize complete you will be able communicate with our application. For the message handler to handling the response from our application please refer [Message Handler](#request--message-handler).

```js
var initialized = false;
var signedRequest = "";
var appWindow = null;
var appOrigin = null
var sendMessage = function (message) {
    appWindow.postMessage(JSON.stringify(message), appOrigin);
}

function onReceiveMessage(data) {
    // your business logic for the response will be here
}

window.addEventListener('message', function (event) {
    if (initialized) {
        return onReceiveMessage(event.data)
    }

    initialized = true
    signedRequest = event.data
    appWindow = event.source
    appOrigin = event.origin
    sendMessage({ action: 'FINISH_HANDSHAKE' })
})
```

## Request & Message Handler

With the request communication with our application you're able to utilize the browser features like cookies, local storage, session storage and mores to provide better experience for your development so you don't need to worried about it might not working in webview.

Some of the request is one-way action so you will be expected no response from our application.

### Finish Handshake

To inform our application the handshake step is completed.

**Request (postMessage):**

```json
{
    "action": "FINISH_HANDSHAKE"
}
```

### Get Signed Request

To get the signed request. Most of the time you will get it when initialize so this function will be rarely use.

**Request (postMessage):**

```json
{
    "action": "REQUEST_SIGNED_REQUEST",
}
```

**Response:**

```json
{
    "action": "REQUEST_SIGNED_REQUEST",
    "data": "_FuBOoZR8iGNThRTj9FpEfcBPI4Jhh6ZGPqMU76HnSA=.eyJtZXJjaGFudElkIjoiNDExODE2NTIwMzY3OTY2ODg4NSIsIm5vbmNlU3RyIjoiMTY4ODEwMjQwMiIsInBsYXRmb3JtIjoiV0VCX1BPUlRBTCIsInJlZmVyZW5jZUlkIjoiODE5MDY1NjA0NTE2NjIzMjcxNiIsInJlZmVyZW5jZUxhYmVsIjoiREVWIFJNUyIsInJlZmVyZW5jZVJvbGUiOiJPV05FUiIsInJlZmVyZW5jZVR5cGUiOiJVU0VSIiwic3RvcmVJZHMiOltdLCJzdWJzY3JpcHRpb25FeHBpcmVkQXQiOiIyMDUwLTEyLTMxVDIzOjU5OjU5WiIsInN1YnNjcmlwdGlvblN0YXR1cyI6IkFDVElWRSIsInRpbWVzdGFtcCI6IjE2ODgxMDI0MDIiLCJ1cmwiOiJodHRwOi8vMTI3LjAuMC4xOjU1MDAvaW5kZXguaHRtbCIsInVzZXJDb3VudHJ5Q29kZSI6IjYwIiwidXNlcklkIjoiODE5MDY1NjA0NTE2NjIzMjcxNiIsInVzZXJQaG9uZSI6IjEyODUzNDQ4OCJ9"
}
```

### Open New Link

To open up new link url on user browser.

**Request (postMessage):**

```json
{
    "action": "WHATS_APP_LINK",
    "message": "https://google.com"
}
```

### Toggle Loader

To trigger loader, will work as on/off strategy.

**Request (postMessage):**

```json
{
    "action": "TOGGLE_LOADER"
}
```

### Show Notification ( Toast )

To show toast notification to user

**Request (postMessage):**

```json
{
    "action": "SHOW_NOTIFICATION",
    "message": "some notification message toast"
}
```

### Set Cookie

Set the cookie value with `type` as a key

**Request (postMessage):**

```json
{
    "action": "SET_COOKIE",
    "type": "some_key",
    "message": "some_value"
}
```

### Set Session Storage

Set the session storage value with `type` as a key

**Request (postMessage):**

```json
{
    "action": "SET_SESSION_STORAGE",
    "type": "some_key",
    "message": "some_value"
}
```

### Set Local Storage

Set the session storage value with `type` as a key

**Request (postMessage):**

```json
{
    "action": "SET_LOCAL_STORAGE",
    "type": "some_key",
    "message": "some_value"
}
```

### Delete Cookie

Delete the cookie value with `type` as a key

**Request (postMessage):**

```json
{
    "action": "REMOVE_COOKIE",
    "type": "some_key"
}
```

### Delete Session Storage

Set the session storage value with `type` as a key

**Request (postMessage):**

```json
{
    "action": "REMOVE_SESSION_STORAGE",
    "type": "some_key"
}
```

### Delete Local Storage

Set the session storage value with `type` as a key

**Request (postMessage):**

```json
{
    "action": "REMOVE_LOCAL_STORAGE",
    "type": "some_key"
}
```

### Get Cookie Value

Get the cookie value with `type` as a key

**Request (postMessage):**

```json
{
    "action": "GET_COOKIE",
    "type": "some_key"
}
```

**Response:**

```json
{
    "type": "some_key",
    "action": "GET_COOKIE",
    "data": "some_value"
}
```

### Get Session Storage Value

Get the session storage value with `type` as a key

**Request (postMessage):**

```json
{
    "action": "GET_SESSION_STORAGE",
    "type": "some_key"
}
```

**Response:**

```json
{
    "type": "some_key",
    "action": "GET_SESSION_STORAGE",
    "data": "some_value"
}
```

### Get Local Storage Value

Get the session storage value with `type` as a key

**Request (postMessage):**

```json
{
    "action": "GET_LOCAL_STORAGE",
    "type": "some_key"
}
```

**Response:**

```json
{
    "type": "some_key",
    "action": "GET_LOCAL_STORAGE",
    "data": "some_value"
}
```