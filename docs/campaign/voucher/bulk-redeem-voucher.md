---
id: bulk-redeem-voucher
title: Bulk Redeem Voucher
sidebar_label: Bulk Redeem Voucher
api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/vouchers/redeem
    prod: https://open.revenuemonster.my/v3/vouchers/redeem
  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: |
    {
      "codes": [
        "string"
      ]
    }

examples:
  request: |
    curl --location --request POST "https://sb-open.revenuemonster.my/v3/vouchers/redeem" \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV2E1NHl5dE1QSUZnIl0sImV4cCI6MTc0NTA1MDY2MCwiaWF0IjoxNzQyNDU4NjYwLCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UW5vcURvcm1kblpjWSIsIm5iZiI6MTc0MjQ1ODY2MCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.T-6nuPM-V0dMV6cgFrfzznx-pdOwyUVvM6EdIxpsQYu8GWjGIN6xrZzBbldy7Fafp2zuhKLfRkE6G-FVuSfV3Qg_S8hDJD4SpB0_bawuXwNmq-tMp1WOFkE0IOfMtfCowp4z6arDayhQTIT0qO36aQ1XzZrsPwqvRJ8fo_YfsurE8Z1UnSXukZWPTpjDs7fio8ZEVcNlWDWuimGHJcpYuH4FgvIdMJ1oWqnwZtvf9gDqmig5ddSpPEVTjf9cGMVBdZlwPXXw0mRuI0ClKMbBgrgUwmnYnIT3zPTRxNwMPKj4AkI3QnLbFkLvTDpk9wrIgrXLFNEZ37j9mQtehuTSgQ" \
    --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
    --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
    --header "X-Timestamp: 1717039047" \
    --data-raw "{
      \"codes\": [\"32zSv2W8\", \"344PNV5r\", \"V2FrkTnh\"]
    }"
  body: |
    There is no example body request.
  response: |
    {
        "item": [
            {
                "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORITCgdWb3VjaGVyGggzMnpTdjJXOA",
                "label": "dasdadas",
                "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQqPfD1ua8up4Y",
                "type": "CASH",
                "amount": 100,
                "discountRate": 0,
                "minimumSpendAmount": 100,
                "origin": "SYSTEM",
                "imageUrl": "",
                "memberProfile": null,
                "assignedAt": "0001-01-01T00:00:00Z",
                "payload": null,
                "qrUrl": "",
                "code": "32zSv2W8",
                "isShipping": false,
                "address": null,
                "expiry": {
                    "type": "DYNAMIC",
                    "day": 2,
                    "expiredAt": "2025-06-15T09:18:05Z"
                },
                "usedAt": "0001-01-01T00:00:00Z",
                "redeemedAt": "2025-06-13T09:18:05Z",
                "isDeviceRedeem": true,
                "status": "REDEEMED",
                "voucherComboKey": null,
                "isMarketPlace": false,
                "createdAt": "2025-05-06T10:38:51Z",
                "updatedAt": "2025-06-13T09:18:05Z"
            },
            {
                "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORITCgdWb3VjaGVyGggzNDRQTlY1cg",
                "label": "dasdadas",
                "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQqPfD1ua8up4Y",
                "type": "CASH",
                "amount": 100,
                "discountRate": 0,
                "minimumSpendAmount": 100,
                "origin": "SYSTEM",
                "imageUrl": "",
                "memberProfile": null,
                "assignedAt": "0001-01-01T00:00:00Z",
                "payload": null,
                "qrUrl": "",
                "code": "344PNV5r",
                "isShipping": false,
                "address": null,
                "expiry": {
                    "type": "DYNAMIC",
                    "day": 2,
                    "expiredAt": "2025-06-15T09:18:05Z"
                },
                "usedAt": "0001-01-01T00:00:00Z",
                "redeemedAt": "2025-06-13T09:18:05Z",
                "isDeviceRedeem": true,
                "status": "REDEEMED",
                "voucherComboKey": null,
                "isMarketPlace": false,
                "createdAt": "2025-05-06T10:38:51Z",
                "updatedAt": "2025-06-13T09:18:05Z"
            },
            {
                "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORITCgdWb3VjaGVyGghWMkZya1RuaA",
                "label": "dasdadas",
                "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQqPfD1ua8up4Y",
                "type": "CASH",
                "amount": 100,
                "discountRate": 0,
                "minimumSpendAmount": 100,
                "origin": "SYSTEM",
                "imageUrl": "",
                "memberProfile": null,
                "assignedAt": "0001-01-01T00:00:00Z",
                "payload": null,
                "qrUrl": "",
                "code": "V2FrkTnh",
                "isShipping": false,
                "address": null,
                "expiry": {
                    "type": "DYNAMIC",
                    "day": 2,
                    "expiredAt": "2025-06-15T09:18:05Z"
                },
                "usedAt": "0001-01-01T00:00:00Z",
                "redeemedAt": "2025-06-13T09:18:05Z",
                "isDeviceRedeem": true,
                "status": "REDEEMED",
                "voucherComboKey": null,
                "isMarketPlace": false,
                "createdAt": "2025-05-06T10:38:51Z",
                "updatedAt": "2025-06-13T09:18:05Z"
            }
        ],
        "code": "SUCCESS"
    }
---


import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
Url :`https://open.revenuemonster.my/v3/vouchers/redeem`<br/>
Sandbox Url : `https://sb-open.revenuemonster.my/v3/vouchers/redeem`

:::note
Redeem voucher(s) by Bulk
:::

:::note

- The URL is consists of [base_URL]/v3/vouchers/redeem.

- [base_URL] is the base URL depending on your environment (Sandbox or production)

:::

### Request Parameters

| Parameter              | Type     | Description                 | Example                 |
| ---------------------- | -------- | --------------------------- | ----------------------- |
| `codes`                 | []String |  Voucher Code               | ["8JwpM3BC","7AbaVWXS"] |

> Example Request

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/vouchers/redeem" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV2E1NHl5dE1QSUZnIl0sImV4cCI6MTc0NTA1MDY2MCwiaWF0IjoxNzQyNDU4NjYwLCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UW5vcURvcm1kblpjWSIsIm5iZiI6MTc0MjQ1ODY2MCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.T-6nuPM-V0dMV6cgFrfzznx-pdOwyUVvM6EdIxpsQYu8GWjGIN6xrZzBbldy7Fafp2zuhKLfRkE6G-FVuSfV3Qg_S8hDJD4SpB0_bawuXwNmq-tMp1WOFkE0IOfMtfCowp4z6arDayhQTIT0qO36aQ1XzZrsPwqvRJ8fo_YfsurE8Z1UnSXukZWPTpjDs7fio8ZEVcNlWDWuimGHJcpYuH4FgvIdMJ1oWqnwZtvf9gDqmig5ddSpPEVTjf9cGMVBdZlwPXXw0mRuI0ClKMbBgrgUwmnYnIT3zPTRxNwMPKj4AkI3QnLbFkLvTDpk9wrIgrXLFNEZ37j9mQtehuTSgQ" \
--header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1717039047" \
--data-raw "{
  \"codes\": [\"32zSv2W8\", \"344PNV5r\", \"V2FrkTnh\"]
}"
```

### Response Parameters

| Parameter | Type     | Description                                                                                               | Example                      |
| --------- | -------- | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object[] | Voucher object                                                                                            | (Refer to explanation below) |
| `code`    | String   | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>

<strong>Voucher object (item):</strong>

| Parameter            | Type             | Description                                                                                                                                                                                                                                                                                                                                                             | Example                                                                      |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `key`                | String           | Voucher key                                                                                                                                                                                                                                                                                                                                                             | "EhQKCE1lcmNoYW50E<br/>JXVzd3wraqTORIVCgdWb3Vja<br/>GVyGgpOQWtsRWZiVmRW"     |
| `label`              | String           | label of voucher for merchant remarks                                                                                                                                                                                                                                                                                                                                   | "Free Breakfast"                                                             |
| `voucherBatchKey`     | String           | Parent key of current voucher                                                                                                                                                                                                                                                                                                                                           | "EhQKCE1lcmNoYW50E<br/>JXVzd3wraqTORIYCgxWb3Vja<br/>GVyQmF0Y2gQkvnGweaB2uQg" |
| `type`               | String           | Define type of vouchers: **DISCOUNT**, **GIFT**, **CASH**                                                                                                                                                                                                                                                                                                               | "GIFT"                                                                       |
| `amount`             | Uint             | Required if type = **CASH**, notation in cents, eg. RM 1.00 = 100                                                                                                                                                                                                                                                                                                       | 0                                                                            |
| `discountRate`       | Uint             | Required if type = **DISCOUNT**, notation without decimals, eg. 1% = 100                                                                                                                                                                                                                                                                                                | 100                                                                          |
| `minimumSpendAmount` | Uint             | min amount to activate this voucher, required if type = **CASH**, **DISCOUNT**, notation in cents, eg. RM 1.00 = 100                                                                                                                                                                                                                                                    | 100                                                                          |
| `origin`             | String           | **SYSTEM** (voucher code generated from RM server), **SELF** (voucher code uploaded from merchant csv file)                                                                                                                                                                                                                                                             | "SYSTEM"                                                                     |
| `imageUrl`           | String           | Image URL of current voucher, optional                                                                                                                                                                                                                                                                                                                                  | ""                                                                           |
| `memberProfile`      | String           | Member profile of user's social media                                                                                                                                                                                                                                                                                                                                   | ""                                                                           |
| `assignedAt`         | DateTime         | Date time of voucher issuance (UTC)                                                                                                                                                                                                                                                                                                                                     | "2018-09-28T17:15:17Z"                                                       |
| `qrUrl`              | String           | QR code for user to scan with Wechat or Facebook to add the voucher into their member account.                                                                                                                                                                                                                                                                          | QR Url link (refer to below code)                                            |
| `code`               | String           | Voucher Code, members can keep this code for future redemption. Same as the qrURL below except this code is not a URL.                                                                                                                                                                                                                                                  | "NAklEfbVdV"                                                                 |
| `isShipping`         | Boolean          | **True** if items/goods to be delivered physically to customers                                                                                                                                                                                                                                                                                                         | false                                                                        |
| `address`            | String           | Required if isShipping = true                                                                                                                                                                                                                                                                                                                                           | null                                                                         |
| `expiry`             | Object of Expiry | Expiry date time of current voucher                                                                                                                                                                                                                                                                                                                                     | (Refer below)                                                                |
| `usedAt`             | DateTime         | Date time of voucher being reinstateed (UTC)                                                                                                                                                                                                                                                                                                                                 | "GIFT"                                                                       |
| `redeemedAt`         | DateTime         | Date time of voucher being redeemed (UTC)                                                                                                                                                                                                                                                                                                                               | "GIFT"                                                                       |
| `isDeviceRedeem`     | Boolean          | **TRUE** means only can be redeemed through merchant app. **FALSE** means customer can do redemption from own loyalty app.                                                                                                                                                                                                                                              | false                                                                        |
| `status`             | String           | Status of current voucher: <br/>1. Merchant **created voucher batch** `(status=VALID)`<br/><br/>2. Merchant **issued** or going to **transfer voucher to customer** `(status=ISSUED)`<br/><br/>3. Merchant **shows voucher to customer and customer scans to get it** `(status=REDEEMED)`<br/><br/>4. Customers go back to shop and **use the voucher** `(status=reinstate)` | "VALID"                                                                      |
| `createdAt`          | DateTime         | Date time of voucher being created (UTC)                                                                                                                                                                                                                                                                                                                                | "2018-06-21T11:08:00Z"                                                       |
| `updatedAt`          | DateTime         | Date time of voucher being updated (UTC)                                                                                                                                                                                                                                                                                                                                | "2018-09-28T17:19:44.686549977Z"                                             |

<br/>

<strong>Expiry object (expiry):</strong>

| Parameter  | Type     | Description                                                                               | Example                            |
| ---------- | -------- | ----------------------------------------------------------------------------------------- | ---------------------------------- |
| `type`     | String   | "DYNAMIC" (days from now), "FIXED" (specific fixed date)                                  | "DYNAMIC"                          |
| `day`      | Uint     | Only required by "DYNAMIC" expiry type. To indicate number of days from now until expiry. | 30                                 |
| `expiryAt` | DateTime | Only required by "FIXED". To indicate specific expiry date.                               | "2020-10-07T17:44:26.679908+08:00" |

> Example Response

```json
{
    "item": [
        {
            "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORITCgdWb3VjaGVyGggzMnpTdjJXOA",
            "label": "dasdadas",
            "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQqPfD1ua8up4Y",
            "type": "CASH",
            "amount": 100,
            "discountRate": 0,
            "minimumSpendAmount": 100,
            "origin": "SYSTEM",
            "imageUrl": "",
            "memberProfile": null,
            "assignedAt": "0001-01-01T00:00:00Z",
            "payload": null,
            "qrUrl": "",
            "code": "32zSv2W8",
            "isShipping": false,
            "address": null,
            "expiry": {
                "type": "DYNAMIC",
                "day": 2,
                "expiredAt": "2025-06-15T09:18:05Z"
            },
            "usedAt": "0001-01-01T00:00:00Z",
            "redeemedAt": "2025-06-13T09:18:05Z",
            "isDeviceRedeem": true,
            "status": "REDEEMED",
            "voucherComboKey": null,
            "isMarketPlace": false,
            "createdAt": "2025-05-06T10:38:51Z",
            "updatedAt": "2025-06-13T09:18:05Z"
        },
        {
            "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORITCgdWb3VjaGVyGggzNDRQTlY1cg",
            "label": "dasdadas",
            "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQqPfD1ua8up4Y",
            "type": "CASH",
            "amount": 100,
            "discountRate": 0,
            "minimumSpendAmount": 100,
            "origin": "SYSTEM",
            "imageUrl": "",
            "memberProfile": null,
            "assignedAt": "0001-01-01T00:00:00Z",
            "payload": null,
            "qrUrl": "",
            "code": "344PNV5r",
            "isShipping": false,
            "address": null,
            "expiry": {
                "type": "DYNAMIC",
                "day": 2,
                "expiredAt": "2025-06-15T09:18:05Z"
            },
            "usedAt": "0001-01-01T00:00:00Z",
            "redeemedAt": "2025-06-13T09:18:05Z",
            "isDeviceRedeem": true,
            "status": "REDEEMED",
            "voucherComboKey": null,
            "isMarketPlace": false,
            "createdAt": "2025-05-06T10:38:51Z",
            "updatedAt": "2025-06-13T09:18:05Z"
        },
        {
            "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORITCgdWb3VjaGVyGghWMkZya1RuaA",
            "label": "dasdadas",
            "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQqPfD1ua8up4Y",
            "type": "CASH",
            "amount": 100,
            "discountRate": 0,
            "minimumSpendAmount": 100,
            "origin": "SYSTEM",
            "imageUrl": "",
            "memberProfile": null,
            "assignedAt": "0001-01-01T00:00:00Z",
            "payload": null,
            "qrUrl": "",
            "code": "V2FrkTnh",
            "isShipping": false,
            "address": null,
            "expiry": {
                "type": "DYNAMIC",
                "day": 2,
                "expiredAt": "2025-06-15T09:18:05Z"
            },
            "usedAt": "0001-01-01T00:00:00Z",
            "redeemedAt": "2025-06-13T09:18:05Z",
            "isDeviceRedeem": true,
            "status": "REDEEMED",
            "voucherComboKey": null,
            "isMarketPlace": false,
            "createdAt": "2025-05-06T10:38:51Z",
            "updatedAt": "2025-06-13T09:18:05Z"
        }
    ],
    "code": "SUCCESS"
}
```
