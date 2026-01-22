---
id: voucher-batch-by-key
title: Get Voucher Batch By Key
sidebar_label: Get Voucher Batch By Key
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
Url : `https://sb-open.revenuemonster.my/v3/voucher-batch/EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQi5rUhcrdx78V/vouchers`<br/><br/>
Sandbox Url : `https://sb-open.revenuemonster.my/v3/voucher-batch/EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQi5rUhcrdx78V/vouchers`

:::note
To get Multiple voucher batches by Key .
:::

### Request Parameters

:::note

- The URL is consists of [base_URL]/v3/voucher-batch/[batchkey]/vouchers.

- [batchkey] can be retrieved by viewing at merchant portal or using endpoint [`Get voucher By Batches`](https://doc.revenuemonster.my/#get-voucher-by-batches)

- Pass an empty JSON object Example: `{}`

:::

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `items`   | Object | Transaction object                                                                                        | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>
<strong>Voucher object (items):</strong>

| Parameter         | Type             | Description                                                                                                                | Example                                                                           |
| ----------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `key`             | String           | Voucher key                                                                                                                | "EhQKCE1lcmNoYW50E<br/>JXVzd3wraqTORIVCgdWb3Vja<br/>GVyGgpOQWtsRWZiVmRW"          |
| `label`           | String           | label of voucher for merchant remarks                                                                                      | "Free Breakfast”                                                                  |
| `voucherBatchKey`  | String           | Parent key of current voucher                                                                                              | "EhQKCE1lcmNo<br/>YW50EJXVzd3wraqTORIYCgx<br/>Wb3VjaGVyQm<br/>F0Y2gQkvnGweaB2uQg" |
| `type`            | String           | Define type of vouchers: **DISCOUNT**, **GIFT**, **CASH**                                                                  | “GIFT"                                                                            |
| `amount`          | Uint             | Required if type = **CASH**, notation in cents, eg. RM 1.00 = 100                                                          | 10000                                                                             |
| `discountRate`    | Uint             | Required if type = **DISCOUNT**, notation without decimals, eg. 1% = 100                                                   | 0                                                                                 |
| `imageUrl`        | String           | Image URL of current voucher, optional                                                                                     | Image Url link <br/>(Refer to the below code)                                     |
| `quantity`        | Uint             | Total quantity of voucher(s) in this batch                                                                                 | 1                                                                                 |
| `balanceQuantity` | Uint             | Total quantity of voucher(s) remaining in this batch                                                                       | 0                                                                                 |
| `usedQuantity`    | Uint             | Total quantity of voucher(s) used/assigned/redeemed in this batch                                                          | 1                                                                                 |
| `expiry`          | Object of Expiry | Expiry date time of current voucher                                                                                        | (Refer below)                                                                     |
| `origin`          | String           | **SYSTEM** (voucher code generated from RM server), **SELF** (voucher code uploaded from merchant csv file)                | “SYSTEM”                                                                          |
| `isShipping`      | Boolean          | **True** if items/goods to be delivered physically to customers                                                            | false                                                                             |
| `reason`          | String           | Will show if voucher batch is fail during creation. Optional.                                                              | ”"                                                                                |
| `isDeviceRedeem`  | Boolean          | **TRUE** means only can be redeemed through merchant app. **FALSE** means customer can do redemption from own loyalty app. | false                                                                             |
| `createdAt`       | DateTime         | Date time of voucher being created (UTC)                                                                                   | "2018-06-21T11:08:00Z"                                                            |
| `updatedAt`       | DateTime         | Date time of voucher being updated (UTC)                                                                                   | "2018-09-28T17:19:44.686549977Z"                                                  |

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
  "items": [
    {
      "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIWCgdWb3VjaGVyGgtVVUVyYTIyVlN5Mg",
      "label": "test",
      "voucherBatchKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQi5rUhcrdx78V",
      "type": "CASH",
      "amount": 100,
      "discountRate": 0,
      "minimumSpendAmount": 0,
      "origin": "SYSTEM",
      "imageUrl": "",
      "memberProfile": {
        "id": "1039768290679711875",
        "name": "yussuf",
        "email": "yussuf888@gmail.com",
        "nric": "",
        "address": {
          "addressLine1": "",
          "addressLine2": "",
          "postcode": "",
          "city": "",
          "state": "",
          "country": ""
        },
        "gender": "",
        "state": "",
        "birthDate": "0001-01-01T00:00:00Z",
        "loyaltyPoint": 0,
        "credit": 112,
        "countryCode": "60",
        "phoneNumber": "176473298",
        "profileImageUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/avatar.png",
        "hasPinCode": false,
        "memberTier": null,
        "status": "ACTIVE",
        "createdAt": "2018-10-19T03:39:47Z"
      },
      "assignedAt": "0001-01-01T00:00:00Z",
      "qrUrl": "",
      "code": "UUEra22VSy2",
      "isShipping": false,
      "address": null,
      "expiry": {
        "type": "DYNAMIC",
        "day": 1,
        "expiredAt": "2050-12-31T23:59:59Z"
      },
      "usedAt": "0001-01-01T00:00:00Z",
      "redeemedAt": "2019-03-22T04:58:38Z",
      "isDeviceRedeem": true,
      "status": "REDEEMED",
      "voucherComboKey": null,
      "createdAt": "2019-02-01T03:13:19Z",
      "updatedAt": "2019-03-13T03:16:26Z"
    }
  ],
  "code": "SUCCESS",
  "meta": {
    "count": 1
  }
}
```
