---
id: authorization-code
title: Authorization Code
sidebar_label: Authorization Code
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

:::note
<span style={{ color: "red", fontWeight: "bold" }}>This page is for plugin developer only</span><br/><br/>
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://sb-oauth.revenuemonster.my/v1/token`<br/>
Sandbox URL : `https://sb-oauth.revenuemonster.my/v1/token`<br/>

**Process flow for Grant Type:** `auth_code` <br/>
This is for the scenario where a partner wants to request permission to develop an application of a merchant.

For authorization code, only `client_id` is needed. You are required to use the following request parameters as Query String. Go to [RM Merchant Portal](https://merchant.revenuemonster.my/) to get your **Client ID**

### Request Parameters

| Parameter      | Type   | Required | Description                                                                                                                                                                                                                                | Example                  |
| -------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| `responseType` | String | Yes      | Only support authorization code                                                                                                                                                                                                            | code                     |
| `clientId`     | String | Yes      | Client ID or AppID as obtained from [RM Merchant Portal](https://merchant.revenuemonster.my/).                                                                                                                                             | 3675930941412424316      |
| `redirectUri`  | String | Yes      | Specify your desired redirect Uri after request successful. This Uri must be EXACTLY the same as the one entered in [RM Merchant Portal](https://merchant.revenuemonster.my/)                                                              | <https://www.google.com> |
| `scope`        | String | Yes      | Scope of authorization granted to user, to perform action(s) when calling other API endpoints. (Currently only support `manage_payment`, `get_merchant_profile`, `get_user_profile`, `manage_store`). Separated by comma(s) without space. | manage_payment           |
| `state`        | String | No       | Optional field for user reference, will be passed back in response                                                                                                                                                                         | Anything                 |

**Example Request URL :**

<a href="https://sb-oauth.revenuemonster.my/authorize?responseType=code&clientId=3675930941412424316& redirectUri=https://www.google.com&scope=manage_payment&state=123456">
https://sb-oauth.revenuemonster.my/authorize?responseType=code&clientId=3675930941412424316&redirectUri=
https://www.google.com&scope=manage_payment&
state=123456</a>

![image](/img/developer-application/auth-respond.png)

<hr/>

### Response Parameters

| Parameter | Type   | Description                        | Example       |
| --------- | ------ | ---------------------------------- | ------------- |
| `code`    | String | Required for subsequent request(s) | Random string |
| `state`   | String | Optional field for user reference  | Anything      |

**Example Response URL :**

<a href="https://www.google.com/?code=iEWqJsA5KVEsWF11xTphDIx8vbUqomsiW2vT4KClOFaVqiGh517dDCfgPlHlqZUeP5atf0SnwiMO8P2X06md8Muv4nEWRW9nro6a5ef0M1jD7k1EFOh9fPV7Jvoe7wIRoVY6JYCSzHuWItQ3Un9J137smxcdSkZ8GKs14vDmREtwFsn8a0SSKBvgfjXEJGrWnCZaCOpEhXPDNzIfo71n0p8p38d9mUyNqxYpQ8UzlPpfAKEr0fiGIFTf6RakxUp&state=123456">https://www.google.com/?code=iEWqJsA5KVEsWF11xTphDIx8vbUqomsiW2vT4KClOFaVqiGh517
dDCfgPlHlqZUeP5atf0SnwiMO8P2X06md8Muv4nEWRW9nro6a5ef0M1jD7k1EFOh9f
PV7Jvoe7wIRoVY6JYCSzHuWItQ3Un9J137smxcdSkZ8GKs14vDmREtwFsn8a0SSKBvg
fjXEJGrWnCZaCOpEhXPDNzIfo71n0p8p38d9mUyNqxYpQ8UzlPpfAKEr0fiGIF
Tf6RakxUp&state=123456</a>
<br/>
<br/>

:::note

- From the redirected response URI, we can get authorization code from the query string, as follows: <br />
  `iEWqJsA5KVEsWF11xTphDIx8vbUqomsiW2vT4KClOFaVqiGh517dDCfgPlHlqZUeP5atf0SnwiMO8P2X06md8Muv4nEWRW9nro6a5ef0M1jD7k1EFOh9fPV7Jvoe7wIRoVY6JYCSzHuWItQ3Un9J137smxcdSkZ8GKs14vDmREtwFsn8a0SSKBvgfjXEJGrWnCZaCOpEhXPDNzIfo71n0p8p38d9mUyNqxYpQ8UzlPpfAKEr0fiGIFTf6RakxUp`<br /><br />

- Thereafter, user may use this code to generate an access token and proceed to call other endpoints.<br /><br />

- This code is valid for <b>ONE-TIME</b> only. Once used <b>(either successful or failed)</b>, you are required to request a new authorization code using the steps before.

:::
