---
id: voucher-by-code
title: Get Voucher By Code
sidebar_label: Get Voucher By Code
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
Url :`https://open.revenuemonster.my/v3/voucher/NAklEfbVdV`<br/>
Sandbox Url : `https://sb-open.revenuemonster.my/v3/voucher/NAklEfbVdV`

:::note
To get single voucher by code
:::

### Request Parameters

:::note

- The URL is consists of [base_URL]/v3/voucher/[voucher_code].

- [base_URL] is the base URL depending on your environment (Sandbox or production)

- Pass an empty JSON object Example: `{}`

:::

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Voucher object                                                                                            | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

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
| `usedAt`             | DateTime         | Date time of voucher being voided (UTC)                                                                                                                                                                                                                                                                                                                                 | "GIFT"                                                                       |
| `redeemedAt`         | DateTime         | Date time of voucher being redeemed (UTC)                                                                                                                                                                                                                                                                                                                               | "GIFT"                                                                       |
| `isDeviceRedeem`     | Boolean          | **TRUE** means only can be redeemed through merchant app. **FALSE** means customer can do redemption from own loyalty app.                                                                                                                                                                                                                                              | false                                                                        |
| `status`             | String           | Status of current voucher: <br/>1. Merchant **created voucher batch** `(status=VALID)`<br/><br/>2. Merchant **issued** or going to **transfer voucher to customer** `(status=ISSUED)`<br/><br/>3. Merchant **shows voucher to customer and customer scans to get it** `(status=REDEEMED)`<br/><br/>4. Customers go back to shop and **use the voucher** `(status=VOID)` | "VALID"                                                                      |
| `createdAt`          | DateTime         | Date time of voucher being created (UTC)                                                                                                                                                                                                                                                                                                                                | "2018-06-21T11:08:00Z"                                                       |
| `updatedAt`          | DateTime         | Date time of voucher being updated (UTC)                                                                                                                                                                                                                                                                                                                                | "2018-09-28T17:19:44.686549977Z"                                             |

<br/>

<strong>Expiry object (expiry):</strong>

| Parameter  | Type     | Description                                                                                 | Example                            |
| ---------- | -------- | ------------------------------------------------------------------------------------------- | ---------------------------------- |
| `type`     | String   | **DYNAMIC** (days from now), **FIXED** (specific fixed date)                                | "DYNAMIC"                          |
| `day`      | Uint     | Only required by **DYNAMIC** expiry type. To indicate number of days from now until expiry. | 30                                 |
| `expiryAt` | DateTime | Only required by **FIXED**. To indicate specific expiry date.                               | "2020-10-07T17:44:26.679908+08:00" |

> Example Response

```json
{
  "item": {
    "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIVCgdWb3VjaGVyGgpOQWtsRWZiVmRW",
    "label": "oijfge",
    "redemptionRuleKey": null,
    "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQkvnGweaB2uQg",
    "type": "GIFT",
    "amount": 0,
    "discountRate": 0,
    "minimumSpendAmount": 0,
    "origin": "SYSTEM",
    "imageUrl": "",
    "memberProfile": null,
    "redemptionRule": null,
    "assignedAt": "2018-09-28T17:15:17Z",
    "payload": null,
    "qrUrl": "http://api.revenuemonster.my/qr/4118165203679668885/voucher/NAklEfbVdV",
    "code": "NAklEfbVdV",
    "isShipping": false,
    "address": null,
    "expiry": {
      "type": "DYNAMIC",
      "day": 100,
      "expiredAt": "2019-01-06T17:19:35Z"
    },
    "usedAt": "2018-09-28T17:19:44.686549737Z",
    "redeemedAt": "2018-09-28T17:19:35Z",
    "isDeviceRedeem": false,
    "status": "VOID",
    "createdAt": "2018-06-21T11:08:00Z",
    "updatedAt": "2018-09-28T17:19:44.686549977Z"
  },
  "code": "SUCCESS"
}
```
