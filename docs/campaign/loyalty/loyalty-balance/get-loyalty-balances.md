---
id: get-loyalty-balances
title: Get Loyalty Balances
sidebar_label: Get Loyalty Balances
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/balances`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/balances`

:::note
Get loyalty balances
:::

### Request Parameters

> Example Request

```json
curl --location --request GET "https://sb-open.revenuemonster.my/v3/loyalty/balances" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \

```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `items`   | Array  |                                                                                                           | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |
| `meta`    | Object | Inside `meta` have `count`and `cursor`                                                                    | { "count": 2 , "cursor":""}  |

<br />

| Parameter       | Type     | Description                       | Example                 |
| --------------- | -------- | --------------------------------- | ----------------------- |
| `id`            | String   |                                   | "1647502414730379278"   |
| `store`         | Object   |                                   | **refer below example** |
| `transactionId` | String   |                                   | ""                      |
| `method`        | String   |                                   | "LOYALTY_CREDIT"        |
| `type`          | String   |                                   | "QUICK_PAY"             |
| `order`         | Object   |                                   | **refer below example** |
| `terminalId`    | String   |                                   | ""                      |
| `currencyType`  | String   |                                   | "MYR"                   |
| `transactionAt` | DateTime |                                   | "2022-01-27T04:02:46Z"  |
| `status`        | String   |                                   | "SUCCESS"               |
| `createdAt`     | DateTime | Creation date time of merchant    | "2022-01-27T04:02:46Z"  |
| `updatedAt`     | DateTime | Last update date time of merchant | "2022-01-27T04:02:46Z"  |

<br />

<strong>Store object (store):</strong>

| Parameter              | Type     | Description                                    | Example                                                      |
| ---------------------- | -------- | ---------------------------------------------- | ------------------------------------------------------------ |
| `id`                   | String   | Store ID                                       | "1601912947341252990"                                        |
| `merchantSettlementId` | String   | Merchant Settlement ID                         | "1596124535165747709"                                        |
| `name`                 | String   | Store Name                                     | "Mountain Food - Aeon Mall Shah Alam"                        |
| `imageUrl`             | String   | Yes                                            | "https://storage.googleapis.com/rm-prod-asset/img/store.png" |
| `addressLine1`         | String   | Store Address 1                                | "B-5-30, 5th Floor, Block Bougainvillea,"                    |
| `addressLine2`         | String   | Store Address 2                                | "PJU 6A, Lebuhraya SPRINT, 10 Boulevard,"                    |
| `postCode`             | String   | Postcode of store                              | "47400"                                                      |
| `city`                 | String   | City of store                                  | "Petaling Jaya"                                              |
| `state`                | String   | State of store                                 | "Selangor"                                                   |
| `country`              | String   | Country of store                               | "Malaysia"                                                   |
| `countryCode`          | String   | Country code of store contact number           | "60"                                                         |
| `phoneNumber`          | String   | Phone number of store                          | "377334080"                                                  |
| `geoLocation`          | Object   | Geo Location (latitude and longitude) of store | {"latitude": 3.1349857, "longitude": 101.6136659 }           |
| `status`               | String   | Current status of store                        | "ACTIVE"                                                     |
| `createdAt`            | DateTime | Creation date time of store                    | "2020-09-14T03:01:20Z"                                       |
| `updatedAt`            | DateTime | Last update date time of store                 | "2020-09-14T03:01:20Z"                                       |

<br />

<strong>Order object (order):</strong>

| Parameter | Type   | Required | Description                                         | Example              |
| --------- | ------ | -------- | --------------------------------------------------- | -------------------- |
| `id`      | String | Yes      | Order ID (from Merchant), max: 24                   | "134850717797247290" |
| `title`   | String | Yes      |                                                     | ""                   |
| `detail`  | String | Yes      |                                                     | ""                   |
| `amount`  | Uint   | Yes      | Amount of order in cent (min RM 0.10 or amount: 10) | 100                  |

> Example Response

```json
{
  "items": [
    {
      "id": "1643256166719420340",
      "store": {
        "id": "1601912947341252990",
        "merchantSettlementId": "1596124535165747709",
        "name": "Mountain Food - Aeon Mall Shah Alam",
        "imageUrl": "https://storage.googleapis.com/rm-prod-asset/img/store.png",
        "addressLine1": "BUBBLEBEE SHAH ALAM,  SEKSYEN 13,  SHAH ALAM",
        "addressLine2": "BUBBLEBEE SHAH ALAM,  SEKSYEN 13,  SHAH ALAM",
        "postCode": "40100",
        "city": "Shah Alam",
        "state": "Selangor",
        "country": "Malaysia",
        "countryCode": "60",
        "phoneNumber": "1123621544",
        "geoLocation": {
          "latitude": 3.0753809,
          "longitude": 101.5502306
        },
        "status": "ACTIVE",
        "createdAt": "2021-03-24T07:58:02Z",
        "updatedAt": "2021-11-12T02:56:02Z"
      },
      "transactionId": "",
      "method": "LOYALTY_CREDIT",
      "type": "QUICK_PAY",
      "order": {
        "id": "220127120247232716",
        "title": "In store payment",
        "detail": "[Merchant app] Pay to Mountain Food - Aeon Mall Shah Alam with loyalty balance",
        "amount": 100
      },
      "terminalId": "",
      "currencyType": "MYR",
      "transactionAt": "2022-01-27T04:02:46Z",
      "status": "SUCCESS",
      "createdAt": "2022-01-27T04:02:46Z",
      "updatedAt": "2022-01-27T04:02:46Z"
    },
    {
      "id": "1643256151642900798",
      "store": {
        "id": "1601912947341252990",
        "merchantSettlementId": "1596124535165747709",
        "name": "Mountain Food - Aeon Mall Shah Alam",
        "imageUrl": "https://storage.googleapis.com/rm-prod-asset/img/store.png",
        "addressLine1": "BUBBLEBEE SHAH ALAM,  SEKSYEN 13,  SHAH ALAM",
        "addressLine2": "BUBBLEBEE SHAH ALAM,  SEKSYEN 13,  SHAH ALAM",
        "postCode": "40100",
        "city": "Shah Alam",
        "state": "Selangor",
        "country": "Malaysia",
        "countryCode": "60",
        "phoneNumber": "1123621544",
        "geoLocation": {
          "latitude": 3.0753809,
          "longitude": 101.5502306
        },
        "status": "ACTIVE",
        "createdAt": "2021-03-24T07:58:02Z",
        "updatedAt": "2021-11-12T02:56:02Z"
      },
      "transactionId": "",
      "method": "LOYALTY_CREDIT",
      "type": "QUICK_PAY",
      "order": {
        "id": "220127120233232716",
        "title": "In store payment",
        "detail": "[Merchant app] Pay to Mountain Food - Aeon Mall Shah Alam with loyalty balance",
        "amount": 100
      },
      "terminalId": "",
      "currencyType": "MYR",
      "transactionAt": "2022-01-27T04:02:31Z",
      "status": "SUCCESS",
      "createdAt": "2022-01-27T04:02:31Z",
      "updatedAt": "2022-01-27T04:02:31Z"
    }
  ],
  "code": "SUCCESS",
  "meta": {
    "count": 50,
    "cursor": "eyJzaWduYXR1cmUiOiJVUWdGcTdXekI3Q1JtYUhGQmRUVHJmVVFJeGc9IiwibmV4dCI6IkVoNEtFa3h2ZVdGc2RIbFVjbUZ1YzJGamRHbHZiaENDN04zUzlvRzJzQlkifQ"
  }
}
```
