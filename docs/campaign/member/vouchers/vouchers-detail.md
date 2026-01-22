---
id: vouchers-detail
title: Get Vouchers
sidebar_label: Get Vouchers
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/me/vouchers?countryCode=60&phoneNumber=187824152`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/me/vouchers?countryCode=60&phoneNumber=187824152`

:::note

- Using Query String to **Get Vouchers** by input the **country code** and **phone number**
- Using Query String to set a limit: ~/?limit=< limit >
- To implement a pagination cursor, you may use query string: ~/?cursor= < cursor >
- Example :
  `https://open.revenuemonster.my/v3/loyalty/me/vouchers?countryCode=60&phoneNumber=187824152&limit=100&cursor=asdas`

:::

### Request Parameters

> Example Request

```json
curl --location --request GET "{{open_base_path}}/v3/loyalty/me/vouchers?countryCode=60&phoneNumber=187824152" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \

```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `items`   | Array  | Vouchers object                                                                                           | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |
| `meta`    | Object | Inside `meta` have `count` key example `"count": 2 `                                                      | 2                            |

<br />

<strong>Vouchers object (item):</strong>

| Parameter            | Type     | Description                                                                      | Example                                                            |
| -------------------- | -------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `key`                | String   | Voucher Key (Internal Usage)                                                     | "EhIKBk1lbWJlchDOuOKz24XWkg4SGQoNTWVtYmVyUHJvZmlsZRDl-MTxiPOPjzY"  |
| `label`              | String   | Voucher Label                                                                    | "asdasd"                                                           |
| `voucherBatchKey`    | String   | Voucher Batch Key                                                                | "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQs4n7iuzioaQW" |
| `type`               | String   | Voucher Type ("CASH", "DISCOUNT", "GIFT")                                        | "CASH"                                                             |
| `amount`             | Uint     | Amount of the voucher                                                            | 100                                                                |
| `discountRate`       | Uint     | Voucher Discount Rate                                                            | 0                                                                  |
| `minimumSpendAmount` | Uint     | Set a Minimum Spend Amount                                                       | 0                                                                  |
| `origin`             | String   | Origin is for determine voucher source ("SYSTEM", "SELF", "MARKETPLACE")         | "SYSTEM"                                                           |
| `imageUrl`           | String   | Voucher Image                                                                    | ""                                                                 |
| `memberProfile`      | Object   | Member Profile (refer to profile page)                                           | null                                                               |
| `assignedAt`         | DateTime | Voucher Assign                                                                   | "0001-01-01T00:00:00Z"                                             |
| `payload`            | Object   | Refer to explanation below                                                       | (Refer to explanation below)                                       |
| `qrUrl`              | String   | Voucher QRcode URL                                                               | ""                                                                 |
| `code`               | String   | Voucher Code                                                                     | "xR43u4bRhUU"                                                      |
| `isShipping`         | Bool     | Voucher Shipping                                                                 | false                                                              |
| `address`            | Object   | Refer to explanation below                                                       | (Refer to explanation below)                                       |
| `expiry`             | Object   | Refer to explanation below                                                       | (Refer to explanation below)                                       |
| `usedAt`             | DateTime | Voucher Use                                                                      | "2020-11-25T13:58:55+08:00"                                        |
| `redeemedAt`         | DateTime | Voucher Redeem                                                                   | "2020-11-25T04:33:04Z"                                             |
| `isDeviceRedeem`     | Bool     | Voucher Redeem Device                                                            | true                                                               |
| `status`             | String   | Voucher Status ("VALID", "ISSUE", "REDEEMED", "VOID", "EXPIRED", "MARKET_PLACE") | "VOID"                                                             |
| `voucherComboKey`    | String   | Voucher Combo Key                                                                | null                                                               |
| `isMarketPlace`      | Bool     | Voucher is in Market Place ?                                                     | false                                                              |
| `createdAt`          | DateTime | Create date time                                                                 | "2020-11-18T06:43:19Z"                                             |
| `updatedAt`          | DateTime | Last update date time                                                            | "2020-11-25T05:58:56Z"                                             |

<br />

<strong>Payload object:</strong>

| Parameter     | Type   | Description                | Example                      |
| ------------- | ------ | -------------------------- | ---------------------------- |
| `tnc`         | Array  |                            | ["T&C"]                      |
| `contactInfo` | Object | Refer to explanation below | (Refer to explanation below) |

<br/>
<strong>Expiry object:</strong>

| Parameter   | Type     | Description                         | Example                |
| ----------- | -------- | ----------------------------------- | ---------------------- |
| `type`      | String   | Voucher Type ("DYNAMIC" , "STATIC") | "DYNAMIC"              |
| `day`       | Uint     | Expired Day                         | 1                      |
| `expiredAt` | DateTime | Voucher Expired                     | "2020-11-26T04:33:04Z" |

<br />
<strong>Address object:</strong>

| Parameter      | Type   | Description | Example |
| -------------- | ------ | ----------- | ------- |
| `addressLine1` | String | Address 1   | ""      |
| `addressLine2` | String | Address 2   | ""      |
| `postcode`     | String | Postcode    | ""      |
| `city`         | String | City        | ""      |
| `state`        | String | State       | ""      |
| `country`      | String | Country     | ""      |

<br />

> Example Response

```js
{
    "code": "SUCCESS",
    "meta": {
        "count": 2
    },
    "items": [
        {
            "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIWCgdWb3VjaGVyGgtaUVlhUzAzVEppdA",
            "label": "Test",
            "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQuceypfycqqUW",
            "type": "CASH",
            "amount": 100,
            "discountRate": 0,
            "minimumSpendAmount": 0,
            "origin": "SYSTEM",
            "imageUrl": "",
            "memberProfile": null,
            "assignedAt": "0001-01-01T00:00:00Z",
            "qrUrl": "",
            "code": "ZQYaS03TJit",
            "isShipping": false,
            "address": null,
            "expiry": {
                "type": "DYNAMIC",
                "day": 1,
                "expiredAt": "2020-11-26T05:26:01Z"
            },
            "usedAt": "0001-01-01T00:00:00Z",
            "redeemedAt": "2020-11-25T05:26:01Z",
            "isDeviceRedeem": true,
            "status": "REDEEMED",
            "voucherComboKey": null,
            "isMarketPlace": false,
            "createdAt": "2020-11-25T05:25:30Z",
            "updatedAt": "2020-11-25T05:26:01Z"
        },
        {
            "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIcCgdWb3VjaGVyGhFybXNAeFI0M3U0YlJoVVUtMA",
            "label": "asdasd",
            "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQs4n7iuzioaQW",
            "type": "CASH",
            "amount": 100,
            "discountRate": 0,
            "minimumSpendAmount": 0,
            "origin": "SYSTEM",
            "imageUrl": "",
            "memberProfile": null,
            "assignedAt": "0001-01-01T00:00:00Z",
            "qrUrl": "",
            "code": "rms@xR43u4bRhUU",
            "isShipping": false,
            "address": null,
            "expiry": {
                "type": "DYNAMIC",
                "day": 1,
                "expiredAt": "2020-11-26T04:33:04Z"
            },
            "usedAt": "0001-01-01T00:00:00Z",
            "redeemedAt": "2020-11-25T04:33:04Z",
            "isDeviceRedeem": true,
            "status": "REDEEMED",
            "voucherComboKey": null,
            "isMarketPlace": false,
            "createdAt": "2020-11-18T06:43:19Z",
            "updatedAt": "2020-11-25T04:33:04Z"
        }
    ]
}
```
