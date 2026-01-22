---
id: history 
title: Check Wallet History
sidebar_label: Check Wallet History
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/wallet/history`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/wallet/history`

:::note
Check merchant wallet topup history
:::

### Request Parameters

| Parameter       | Type     | Description    | Example                                                                |
| --------------- | -------- | -------------- | ---------------------------------------------------------------------- |
| `cursor`        | String   | Cursor         | "60"                                                                   |
| `transactionAt` | String[] | Transaction At | ["2021-01-11T09:54:46Z", "2021-01-11T09:54:46Z"]                       |
| `referenceType` | String   | Reference Type | "DELIVERY", "BILLING", "TOPUP_MANUAL", "TOPUP_ONLINE", "TOPUP_BANKIN"" |

> Example Request

```json
curl --location --request GET "{{open_base_path}}/v3/wallet/history" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \
```


### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `items`   | Object | History object                                                                                            | (Refer to explanation below) |
| `cursor`  | String | Cursor for next page                                                                                      |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

<strong>History object (item):</strong>

| Parameter       | Type   | Description                                                       | Example                                                               |
| --------------- | ------ | ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`            | String | Wallet History ID                                                 | 1598969381529317751                                                   |
| `referenceId`   | String | Wallet reference ID usually is your Merchant ID                   | 4118165203679668885                                                   |
| `walletId`      | String | Wallet ID                                                         | 1585119930335618836                                                   |
| `type`          | String | History type                                                      | "TOPUP", "DEDUCT"                                                     |
| `referenceType` | String | History reference type                                            | "DELIVERY", "BILLING", "TOPUP_MANUAL", "TOPUP_ONLINE", "TOPUP_BANKIN" |
| `reference`     | String | Reference about the reference type usually it's usage information | Online Transaction Topup -1598969316445167528                         |
| `credit`        | uint64 | How much credit added or deducted                                 | 10                                                                    |
| `currentCredit` | uint64 | Credit balance after added or deducted                            | 1952                                                                  |
| `sequenceId`    | uint64 | A sequential number                                               | 26                                                                    |
| `transactionAt` | DateTime | When history transaction                                          | 2020-09-01T14:09:41Z                                                  |

> Example Response

```json
{
    "cursor": "Eg13YWxsZXRoaXN0b3J5GOfBvdiL7bWAFg",
    "items": [
        {
            "id": "1598969381529317751",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "TOPUP",
            "referenceType": "TOPUP_ONLINE",
            "reference": "Online Transaction Topup -1598969316445167528",
            "credit": 10,
            "currentCredit": 1952,
            "sequenceId": 26,
            "transactionAt": "2020-09-01T14:09:41Z"
        },
        {
            "id": "1598237166700465896",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "TOPUP",
            "referenceType": "TOPUP_MANUAL",
            "reference": "Manual Transaction Topup -1598237166252470682",
            "credit": 1200,
            "currentCredit": 1942,
            "sequenceId": 25,
            "transactionAt": "2020-08-24T02:46:06Z"
        },
        {
            "id": "1594972550536250079",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "BILLING",
            "reference": "hi there",
            "credit": 7,
            "currentCredit": 742,
            "sequenceId": 24,
            "transactionAt": "2020-07-17T07:55:50Z"
        },
        {
            "id": "1594972542744931127",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "BILLING",
            "reference": "hi there",
            "credit": 7,
            "currentCredit": 749,
            "sequenceId": 23,
            "transactionAt": "2020-07-17T07:55:42Z"
        },
        {
            "id": "1594954009766669631",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "BILLING",
            "reference": "nintendo",
            "credit": 7,
            "currentCredit": 756,
            "sequenceId": 22,
            "transactionAt": "2020-07-17T02:46:49Z"
        },
        {
            "id": "1594953995593064228",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "BILLING",
            "reference": "nintendo",
            "credit": 7,
            "currentCredit": 763,
            "sequenceId": 21,
            "transactionAt": "2020-07-17T02:46:35Z"
        },
        {
            "id": "1587103404332947270",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery Charges - 1587103404863127410 (MRSPEEDY)",
            "credit": 1300,
            "currentCredit": 770,
            "sequenceId": 20,
            "transactionAt": "2020-04-17T06:03:24Z"
        },
        {
            "id": "1587103399234680991",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery Charges - 1587103399697690059 (MRSPEEDY)",
            "credit": 1300,
            "currentCredit": 2070,
            "sequenceId": 19,
            "transactionAt": "2020-04-17T06:03:19Z"
        },
        {
            "id": "1587103363591085218",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery Charges - 1587103363766008955 (MRSPEEDY)",
            "credit": 1300,
            "currentCredit": 3370,
            "sequenceId": 18,
            "transactionAt": "2020-04-17T06:02:43Z"
        },
        {
            "id": "1587103320158314263",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery Charges - 1587103320477287218 (MRSPEEDY)",
            "credit": 1300,
            "currentCredit": 4670,
            "sequenceId": 17,
            "transactionAt": "2020-04-17T06:02:00Z"
        },
        {
            "id": "1585678546527733513",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery Charges - 1585678546951971486 (MYSPEEDY)",
            "credit": 700,
            "currentCredit": 5970,
            "sequenceId": 16,
            "transactionAt": "2020-03-31T18:15:46Z"
        },
        {
            "id": "1585678500215703241",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery Charges - 1585678500218585810 (MYSPEEDY)",
            "credit": 700,
            "currentCredit": 6670,
            "sequenceId": 15,
            "transactionAt": "2020-03-31T18:15:00Z"
        },
        {
            "id": "1585678499950457023",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery Charges - 1585678499177927239 (MYSPEEDY)",
            "credit": 700,
            "currentCredit": 7370,
            "sequenceId": 14,
            "transactionAt": "2020-03-31T18:14:59Z"
        },
        {
            "id": "1585678087845580902",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery charge - 12345",
            "credit": 700,
            "currentCredit": 8070,
            "sequenceId": 13,
            "transactionAt": "2020-03-31T18:08:07Z"
        },
        {
            "id": "1585508224750097249",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery charge - 12345",
            "credit": 700,
            "currentCredit": 8770,
            "sequenceId": 12,
            "transactionAt": "2020-03-29T18:57:04Z"
        },
        {
            "id": "1585504454491935739",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery charge - 12345",
            "credit": 700,
            "currentCredit": 9470,
            "sequenceId": 11,
            "transactionAt": "2020-03-29T17:54:14Z"
        },
        {
            "id": "1585503926786227184",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery charge - 12345",
            "credit": 700,
            "currentCredit": 10170,
            "sequenceId": 10,
            "transactionAt": "2020-03-29T17:45:26Z"
        },
        {
            "id": "1585503925657821388",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery charge - 12345",
            "credit": 700,
            "currentCredit": 10870,
            "sequenceId": 9,
            "transactionAt": "2020-03-29T17:45:25Z"
        },
        {
            "id": "1585503920670337650",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery charge - 12345",
            "credit": 700,
            "currentCredit": 11570,
            "sequenceId": 8,
            "transactionAt": "2020-03-29T17:45:20Z"
        },
        {
            "id": "1585503913649332455",
            "walletId": "1585119930335618836",
            "referenceId": "4118165203679668885",
            "type": "DEDUCT",
            "referenceType": "DELIVERY",
            "reference": "Delivery charge - 12345",
            "credit": 700,
            "currentCredit": 12270,
            "sequenceId": 7,
            "transactionAt": "2020-03-29T17:45:13Z"
        }
    ]
}
```
