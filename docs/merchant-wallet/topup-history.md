---
id: topup-history
title: Topup History
sidebar_label: Topup History
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/wallet/transaction`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/wallet/transaction`

:::note
Check merchant wallet topup history
:::

### Request Parameters

> Example Request

```json
curl --location --request GET "{{open_base_path}}/v3/wallet/transaction" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \

```


### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `items`   | Object | Transaction History object                                                                                | (Refer to explanation below) |
| `cursor`  | String | Cursor for next page                                                                                      |


<br />

<strong>Transaction History object (item):</strong>


| Parameter     | Type   | Description                           | Example                      |
| ------------- | ------ | ------------------------------------- | ---------------------------- |
| `id`          | String | Transaction History ID                | 1598969381529317751          |
| `walletId`    | String | Wallet ID                             | 1585119930335618836          |
| `referenceId` | String | Reference ID usually it's merchant id | 4118165203679668885          |
| `adminId`     | String | Admin ID                              | 1610358903738245784          |
| `detail`      | String | Transaction Detail                    | online payment gateway topup |
| `method`      | String | Payment Method                        | "ONLINE", "MANUAL", "BANKIN" |
| `status`      | String | Transaction Status                    | "IN_PROCESS", "SUCCESS"      |
| `credit`      | String | Credit                                | 10                           |
| `createdAt`   | DateTime | Transaction time                      | online payment gateway topup |

> Example Response

```json
{
    "cursor": "EhB0b3B1cHRyYW5zYWN0aW9uGOOiw6Cp3q6IFg",
    "items": [
        {
            "id": "1610358903738245784",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2021-01-11T09:55:03Z"
        },
        {
            "id": "1610358886697825817",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2021-01-11T09:54:46Z"
        },
        {
            "id": "1608265844473557156",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-12-18T04:30:44Z"
        },
        {
            "id": "1606715783856819424",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 100,
            "createdAt": "2020-11-30T05:56:23Z"
        },
        {
            "id": "1601284416420740159",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-09-28T09:13:36Z"
        },
        {
            "id": "1600767812731888504",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-09-22T09:43:32Z"
        },
        {
            "id": "1599322934290573511",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-09-05T16:22:14Z"
        },
        {
            "id": "1598969316445167528",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "SUCCESS",
            "credit": 10,
            "createdAt": "2020-09-01T14:08:36Z"
        },
        {
            "id": "1598968817666361543",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 100,
            "createdAt": "2020-09-01T14:00:17Z"
        },
        {
            "id": "1598968790237499773",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-09-01T13:59:51Z"
        },
        {
            "id": "1598547453611414512",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-08-27T16:57:33Z"
        },
        {
            "id": "1598547443206063414",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-08-27T16:57:23Z"
        },
        {
            "id": "1598237166252470682",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "6855324897421142801",
            "detail": "test",
            "method": "BANK_IN",
            "status": "SUCCESS",
            "credit": 1200,
            "createdAt": "2020-08-24T02:46:06Z"
        },
        {
            "id": "1598237110634689248",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10000,
            "createdAt": "2020-08-24T02:45:10Z"
        },
        {
            "id": "1596081463672087379",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-07-30T03:57:43Z"
        },
        {
            "id": "1596081443720817054",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-07-30T03:57:23Z"
        },
        {
            "id": "1595413037839967771",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-07-22T10:17:17Z"
        },
        {
            "id": "1593070654482816850",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-06-25T07:37:34Z"
        },
        {
            "id": "1589976273661708284",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-05-20T12:04:33Z"
        },
        {
            "id": "1589976219490767203",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "adminId": "",
            "detail": "online payment gateway topup",
            "method": "ONLINE",
            "status": "IN_PROCESS",
            "credit": 10,
            "createdAt": "2020-05-20T12:03:39Z"
        }
    ]
}
```
