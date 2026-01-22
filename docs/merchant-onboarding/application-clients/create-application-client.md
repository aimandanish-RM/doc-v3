---
id: create-application-client
title: Create Application Client
sidebar_label: Create Application Client
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/partner/merchant/{merchantId}/application`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/partner/merchant/{merchantId}/application`

:::note
Create Application Client
:::

### Request Parameters

| Parameter          | Type         | Example |
| ------------------ | ------------ | ------- | ---------------------- |
| `userId`           | String       |         | "1647501978916382207"  |
| `name`             | String       |         | "Name"                 |
| `homePageUrl`      | String       |         | "https://google.com"   |
| `logoUrl`          | String       |         | "https://google.com"   |
| `privacyPolicyUrl` | String       |         | "https://google.com"   |
| `redirectUri`      | Array String |         | ["https://google.com"] |
| `publicKey`        | String       |         | "....."                |
| `isActive`         | Boolean      |         | true                   |

<br />

> Example Request

```json
curl --location --request GET "https://sb-open.revenuemonster.my/v3/partner/merchant/{merchantId}/application" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \

```

> Example Body Request

```json
{
  "userId": "1647501978916382207",
  "name": "required name",
  "homePageUrl": "https://google.com",
  "logoUrl": "https://google.com",
  "privacyPolicyUrl": "https://google.com",
  "redirectUri": ["https://google.com"],
  "isActive": true,
  "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBsJf/68nKn3WFcmbA4uK45\nYTQJ2M9XRf82COhN6OQpTLs4PEQSFCix9/05DdOfqe4PR64JS+nlA3q54YXLq++b\nuG8aerNM39Ie0VssTq+Wu3antoq9qvSQL0ADSfLPtWxRKirY8ysrFWN8yU2p7ofp\n/byYvo5DZ9i6aclctottecc/1NWaXWFSLzbsceSGjP3O+17+gMXCnwroT87XdGXJ\nY/D11Cly8sD3Ll9OKIT1aDlKkkR9FWcFct0wDYEedutBAMOFjYAW3jvcUbdi7CKy\neX42N7t7dIb1tw+WTFSpx5+tHKqRwLUq5S9eTx4e8+UxJ9LUTyr14O+TkTSL8Fpx\nAgMBAAE=\n-----END PUBLIC KEY-----"
}
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object |                                                                                                           | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

| Parameter             | Type           | Description                       | Example                                                                             |
| --------------------- | -------------- | --------------------------------- | ----------------------------------------------------------------------------------- |
| `clientId`            | String         |                                   | "1647502414730379278"                                                               |
| `clientSecret`        | String         |                                   | "dtbDsFgbLDzGhMleKjTFZXGxrDKFnMqe"                                                  |
| `client`              | Object         |                                   | {publicKey: "**refer below example**"}                                              |
| `server`              | Object         |                                   | {publicKey: "**refer below example**" , privateKey :"**refer below example**"}      |
| `name`                | String         |                                   | "required name"                                                                     |
| `homePageUrl`         | String         |                                   | "https://google.com"                                                                |
| `logoUrl`             | String         |                                   | "https://storage.googleapis.com/rm-sandbox-asset/img/default-application-logo.png", |
| `privacyPolicyUrl`    | String         |                                   | "https://google.com"                                                                |
| `merchantIdy`         | String         |                                   | "1647501978894816174"                                                               |
| `userId`              | String         |                                   | "1647501978916382207"                                                               |
| `oAuthClientProducts` | Array          |                                   | []                                                                                  |
| `isActive`            | Bool           |                                   | false                                                                               |
| `redirectUri`         | Array (String) |                                   | ["https://google.com"],                                                             |
| `createdAt`           | DateTime       | Creation date time of merchant    | "2021-02-12T08:53:13Z"                                                              |
| `updatedAt`           | DateTime       | Last update date time of merchant | "2021-02-12T08:53:13Z"                                                              |

<br />

```json
{
  "item": {
    "clientId": "1647502414730379278",
    "clientSecret": "dtbDsFgbLDzGhMleKjTFZXGxrDKFnMqe",
    "client": {
      "publicKey": "-----BEGIN PUBLIC KEY-----\nMIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBsJf/68nKn3WFcmbA4uK45\nYTQJ2M9XRf82COhN6OQpTLs4PEQSFCix9/05DdOfqe4PR64JS+nlA3q54YXLq++b\nuG8aerNM39Ie0VssTq+Wu3antoq9qvSQL0ADSfLPtWxRKirY8ysrFWN8yU2p7ofp\n/byYvo5DZ9i6aclctottecc/1NWaXWFSLzbsceSGjP3O+17+gMXCnwroT87XdGXJ\nY/D11Cly8sD3Ll9OKIT1aDlKkkR9FWcFct0wDYEedutBAMOFjYAW3jvcUbdi7CKy\neX42N7t7dIb1tw+WTFSpx5+tHKqRwLUq5S9eTx4e8+UxJ9LUTyr14O+TkTSL8Fpx\nAgMBAAE=\n-----END PUBLIC KEY-----"
    },
    "server": {
      "publicKey": "-----BEGIN RSA PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3PfCJJSxGIvXNI//SROs\n3RK183bs25NjzJH6iXB3Y3hPmHWzGRckU0IAmCMIpu37p76DgzMJF8jfyZmvVNBv\nftQaQUGsCyUlGb+zkBGhdYC7uNmOfCpx49+ic3GrOnXrX/2x32qSRoLq3Ux1iZWf\nTA03Pb1O7v8ikBI1NN8z8+GR2IY6eWlr53+sSw/nFVKFwgnij3AV7rxmjuQOPdnn\n48tQJfm7uOGWy2HSlg8Mu2GJWhZar3GfEGVEfBLXN2AUTLCQGmVX/MqwWCsE+vjz\n985meEuMAXKe8OiFUlRn2Y/8nX0rT/YCqorTRWURNrYKr34f50G287kIm3s7vVmW\nwwIDAQAB\n-----END RSA PUBLIC KEY-----\n",
      "privateKey": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEA3PfCJJSxGIvXNI//SROs3RK183bs25NjzJH6iXB3Y3hPmHWz\nGRckU0IAmCMIpu37p76DgzMJF8jfyZmvVNBvftQaQUGsCyUlGb+zkBGhdYC7uNmO\nfCpx49+ic3GrOnXrX/2x32qSRoLq3Ux1iZWfTA03Pb1O7v8ikBI1NN8z8+GR2IY6\neWlr53+sSw/nFVKFwgnij3AV7rxmjuQOPdnn48tQJfm7uOGWy2HSlg8Mu2GJWhZa\nr3GfEGVEfBLXN2AUTLCQGmVX/MqwWCsE+vjz985meEuMAXKe8OiFUlRn2Y/8nX0r\nT/YCqorTRWURNrYKr34f50G287kIm3s7vVmWwwIDAQABAoIBAQC3C/8l8o8qOF3U\nSx09WjEvCdr0jqXz14sq4hrbU/Fy0y2MrKPquwL6fYikfxEhx69a7DVhsBtuOpc4\nGDnoVqqmM+pz+IUezmyHggir5g8MmdHodUDVlwu1q4KVg6pGyXxsjmqVG2GFS9pn\n7HjJusq1Y5VJbdM/pNbq5kpxPB17fuznDBXXE7pPQ5V1MbmarNO7EyU5yrhqDqhB\nrTHoZSb9qQ1d7oQSl7JCrolAvmdjgVoHedYECT4vDVYi7yVgsQtKVxt29TDTi1jA\nmDXXC+pBtVxgtuRJzkFp6NHTc9CfcJ+mg98bPKag/VQDvAnS+8Lai/NpIMp1NXFp\nuARJ6c+hAoGBAPVMGMSduFzXcSC2TpmGfnE36svYKg6SPEa80yQsDPWCcKG09r26\n+QkrgOJkIcjFjMsg6y7OvxVQ7NXqYOBv9LqOqhmp4RBAMryxQeh4sWi69EBEEmIL\nDWXvrxu0u18910vdizGvru+Mq2jD1qEFUem1m2acOig/EK+1Ho1M9hkJAoGBAOab\n6Im7npFfkZVRx/np+bUUwo+38YI2kIq6GHEtdzRdL4L6wk5YxCMB1T6Mv1PGtgnY\nY9plWuMJpW4kuarhYWRFHr0RFUCExYn9PGScc4EZ8OVgRzYMrYrAH0MZS1eRFkbi\nH/PDqcwarQW5Ic56Q+BJ38p/0B2Syr0UACL3fCBrAoGBAKbOJpGdhz9rKfzKvExe\nTyGCmuIfjwn1m5Om2BXi9rUFDL6KJrgCq1L3CF/rI6Y54HJJYmSkJwDB1SvqhBJb\nT5qFZVqqUOgSH+58w4roeAv2Bh6lq7KMPYIyKWu3zSsJDJ0EfKE/DMDNccp+UjeR\nPJCm9JQkbM/tgtVZXvtLeJaxAoGBALLj6OzHbYeKIm455a5ZscqmExPX9nIzj8b9\n+634PguR6iRqD8clFumtJ1YBav47HMXgZf1qOKn8tqcNuDX15k4ZTHIQSXMmS/Ly\nTiIiN3vDutrE6Bjmls0Wommzun1wYF6WVYEMnLBnVScmaTI6KGNaC0+T/MakM7+f\nP0fgwhqHAoGAC9g5GYadr7C4CFPku4yOxpnOae5wR8FcxjNkfIJxV9DULjaTzISs\nzAKio5XbYR/Q4HnIYKS9vjIF7IOJGawt4MQGxAJBIdeye0w9DGyTU5In0ZlCGa6n\ngmxGBxjCTaGGSuUnA9VcCV6g4xpW1JIXCoJUl0EY/a+Re8hENR/HmH0=\n-----END RSA PRIVATE KEY-----\n"
    },
    "name": "required name",
    "homePageUrl": "https://google.com",
    "logoUrl": "https://google.com",
    "privacyPolicyUrl": "https://google.com",
    "merchantId": "1647501978894816174",
    "userId": "1647501978916382207",
    "oAuthClientProducts": [],
    "isActive": false,
    "redirectUri": ["https://google.com"],
    "createdAt": "2022-03-17T07:33:34Z",
    "updatedAt": "2022-03-17T07:36:10Z"
  },
  "code": "SUCCESS"
}
```
