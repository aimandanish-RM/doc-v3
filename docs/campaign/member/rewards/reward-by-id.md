---
id: reward-by-id
title: Get Reward By ID
sidebar_label: Get Reward By ID
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/me/reward/{reward-id}?countryCode=60&phoneNumber=187824152`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/me/reward/{reward-id}?countryCode=60&phoneNumber=187824152`

:::note

- Get **Redeem detail** by input `{reward-id}`
- Using Query String to input the **country code** and **phone number**

:::

### Request Parameters

> Example Request

```json
curl --location --request GET "{{open_base_path}}/v3/loyalty/me/reward/1575971661443933008?countryCode=60&phoneNumber=187824152" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \



```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Reward object                                                                                             | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

<strong>Reward object (item):</strong>

| Parameter         | Type     | Description                                                         | Example                                        |
| ----------------- | -------- | ------------------------------------------------------------------- | ---------------------------------------------- |
| `id`              | String   | Reward ID                                                           | "1575971661443933008"                          |
| `label`           | String   | Reward Label                                                        | "Prudential RM 5 Cash Vouchers ( BoostPulse )" |
| `imageUrl`        | String   | Reward Image                                                        | ""                                             |
| `point`           | Uint     | Reward Point                                                        | 1                                              |
| `payload`         | Object   | Refer to explanation below                                          | (Refer to explanation below)                   |
| `isShipping`      | Bool     | Credit Balance                                                      | false                                          |
| `quantity`        | Uint     | Reward Quantity                                                     | 49998                                          |
| `balanceQuantity` | Uint     | Reward Balance Quantity                                             | 49991                                          |
| `usedQuantity`    | Uint     | Reward Used Quantity                                                | 2                                              |
| `redeemQuantity`  | String   | Reward Redeem Quantity                                              | 7                                              |
| `isEnabled`       | Bool     | Enable Reward                                                       | true                                           |
| `limitPerUser`    | Uint     | Set Limit per User use                                              | 1                                              |
| `status`          | String   | Reward status have ("COMPLETED", "INPROGRESS", "FAILED", "EXPIRED") | "COMPLETED"                                    |
| `isCombo`         | Bool     | Reward is Combo                                                     | false                                          |
| `type`            | String   | Reward type have **Combo** or **Batch**                             | ""                                             |
| `createdAt`       | DateTime | Create date time                                                    | "2020-11-18T06:43:19Z"                         |
| `updatedAt`       | DateTime | Last update date time                                               | "2020-11-25T05:58:56Z"                         |
| `expiredAt`       | DateTime | Expired date time                                                   | "2018-10-19T03:39:47Z"                         |

<br />
<strong>Payload object:</strong>

| Parameter     | Type   | Description  | Example                      |
| ------------- | ------ | ------------ | ---------------------------- |
| `tnc`         | Array  |              | ["T&C"]                      |
| `contactInfo` | Object | Contact Info | (Refer to explanation below) |

<br />
<strong>Contact Info object:</strong>

| Parameter     | Type   | Description  | Example |
| ------------- | ------ | ------------ | ------- |
| `email`       | String | Email        | ""      |
| `phoneNumber` | String | Phone Number | ""      |

<br />

> Example Response

```json
{
  "code": "SUCCESS",
  "item": {
    "id": "1575971661443933008",
    "label": "Prudential RM 5 Cash Vouchers ( BoostPulse )",
    "imageUrl": "https://storage.googleapis.com/rm-sandbox-merchant/4118165203679668885/gallery/00c5184b36484d865372c1841f4cc4ce.jpeg",
    "point": 1,
    "payload": {
      "tnc": ["T&C"],
      "contactInfo": {
        "email": "",
        "phoneNumber": ""
      }
    },
    "isShipping": false,
    "quantity": 49998,
    "balanceQuantity": 49991,
    "usedQuantity": 2,
    "redeemQuantity": 7,
    "isEnabled": true,
    "limitPerUser": 1,
    "status": "COMPLETED",
    "isCombo": false,
    "type": "",
    "createdAt": "2019-12-10T09:54:21Z",
    "updatedAt": "2019-12-10T09:55:05Z",
    "expiredAt": "2020-12-05T15:59:59Z"
  }
}
```
