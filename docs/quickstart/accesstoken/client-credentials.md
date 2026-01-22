---
id: client-credentials
title: Client Credentials
sidebar_label: Client Credentials
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://oauth.revenuemonster.my/v1/token`<br/>
Sandbox URL : `https://sb-oauth.revenuemonster.my/v1/token`<br/>

**Process flow for Grant Type: `client_credentials`**

This is for the scenario that merchant's trusted developer is provided with **Client ID** and **Client Secret**.

:::note

To start with, you will need to get OAuth 2.0 client credentials you need (`client_id` and `client_secret`) from your [RM Merchant Portal](https://merchant.revenuemonster.my/).
Request an **Access Token** from RM `Authorisation Server`, and you will get a response consistsing of an **Access Token** and a **Refresh Token**. Use the **Access Token** to call the Revenue Monster API that you want to access. Refresh tokens can be stored to get new access tokens.

After getting an **Access Token** from RM Authorization Server , **Access token** is required for subsequent requests to our resource server(s) to get protected resources.
:::

### Step 1 : Get Client ID and Client Secret

To get your **Client ID** and **Client Secret** , go to [RM Merchant Portal](https://merchant.revenuemonster.my/) > **Developer** > **Application**

| Parameter      |  Type  | Required | Description                                                                                            |             Example              |
| :------------- | :----: | :------: | :----------------------------------------------------------------------------------------------------- | :------------------------------: |
| `ClientID`     | String |   Yes    | Client ID or AppID as obtained from [RM Merchant Portal](https://merchant.revenuemonster.my/).         |       3208919753194101125        |
| `ClientSecret` | String |   Yes    | Client secret or AppSecret as obtained from [RM Merchant Portal](https://merchant.revenuemonster.my/). | mglve4W3UhPSGOV7gnwoYKyvbRCe83zZ |

### Step 2 : Encode the parameters from Step 1 in Base 64 format

Structure: <br />
`clientID`:`clientSecret`

Example: <br />
Before Base64 encoding: <br />
`3675930941412424316:wmn7FUauXHdkoYa9182kCMkjGnNJVgin`

After Base64 encoding: <br />
`MzY3NTkzMDk0MTQxMjQyNDMxNjp3bW43RlVhdVhIZGtvWWE5MTgya0NNa2pHbk5KVmdpbg==`

### Step 3 : Put the Base64 encoded in Headers

**Content-Type** : application/json <br />
**Authorization** : Basic MzY3NTkzMDk0MTQxMjQyNDMxNjp3bW43RlVhdVhIZGtvWWE5MTgya0NNa2pHbk5KVmdpbg==

More info: [Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)

**In Body Request** :

`{ "grantType": "client_credentials" }`

|  Parameter  |  Type  | Required | Description                                           |      Example       |
| :---------: | :----: | :------: | ----------------------------------------------------- | :----------------: |
| `grantType` | String |   Yes    | Only support client credentials or authorisation code | client_credentials |

> Example Request

```json
curl --location --request POST "https://sb-oauth.revenuemonster.my/v1/token" \
  --header "Content-Type: application/json" \
  --header "Authorization: Basic NjY5MTY1ODE1MDQ5NjMyNzA1MTptNzFwc3dibVFWQzBpTXNHc000TEZMSUl4czZsWEV6eA==" \
  --data "{
  \"grantType\": \"client_credentials\"
}"
```

### Response Parameters

| Parameter               |  Type  | Description                                                                  |              Example |
| :---------------------- | :----: | ---------------------------------------------------------------------------- | -------------------: |
| `accessToken`           | String | Required for subsequent request(s)                                           |         Access Token |
| `tokenType`             | String | We only support “Bearer” type                                                |               Bearer |
| `expiresIn`             | String | Token expiry, in seconds format. “72591999” means 72591999 seconds or 30 day |             72591999 |
| `refreshToken`          | String | Required for getting new access token after expiry                           | Refresh token string |
| `refreshTokenExpiresIn` | String | Token expiry, in seconds format. “1576799999” means 1576799999 seconds       |           1576799999 |

> Example Response

```json
{
  "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVKbkJ6T0RncXUyRUZnIl0sImV4cCI6MTU5MzUwNjI5OSwiaWF0IjoxNTkwOTE0Mjk5LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UWxxNnVsSWFFaElvVyIsIm5iZiI6MTU5MDkxNDI5OSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.BLCRknhGjIG9nJKKlcOIdB1WGFLP6HkfV5-wwgrqaLoBXchn7BIa7hcrPCbXOMKzQBq91rqkEk77qRaK53Ny7FVtak1zXnbWK8TpMUpmRIhrJ9LVv-1LKhbiM8rZfzV8LVghf42noukeYboaDQlFHpn7nFihD2A_yItkA2MoFSwRP97OVoe19yKiWJoz4W_DSm2P2f3ISg-Sg5ZEIT1hemlS0NbMxadDrDM_6w1b7TuBoGRci5R_0kZYf5qquD5LGFf3JqFqQrtOTqUtEEkD46ytRw_docfExwZg_ohI9ovEejfhmNODKvnxdQI7NIzkuxPYd_FztOl3MwVFuJYnZw",
  "tokenType": "Bearer",
  "expiresIn": 2591999,
  "refreshToken": "hDzmdhTrnGmnMcvUKPjMGSXZNgPpHFNejPWdKBNNtMtZEcTzAqwyTeEfGvOQXcApKdAsUxxmjqytzFPmJIJxsOcuyyISsQPoeZfvgCKpURPWQlfeVrfvLNBPMHjpJQII",
  "refreshTokenExpiresIn": 1576799999
}
```
