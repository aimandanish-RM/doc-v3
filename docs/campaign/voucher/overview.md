---
id: overview
title: Overview
sidebar_label: Overview
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

:::note

- **Voucher** is for user to collect **free gift** , **cashback** and **discount**

:::

### Issue Voucher Using RM Merchant App/Terminal

![image](/img/voucher/issue-voucher.png)

<hr/>

![image](/img/voucher/issue-voucher-api.png)

| Parameter  | Type   | Description                                                                                            | Example             |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------ | ------------------- |
| `VALID`    | String | Voucher is still valid, waiting for user to redeem.                                                    | status : "VALID"    |
| `ISSUE`    | String | Click “Issue” button from RM Merchant App/Terminal.                                                    | status : "ISSUE"    |
| `REDEEMED` | String | **Optional**: User scan with RM Loyalty Program, and this voucher can now be viewed under “My Rewards” | status : "REDEEMED" |
| `VOID`     | String | User used voucher at merchant shop. Merchant has scanned this voucher.                                 | status : "VOID"     |
| `EXPIRED`  | String | Voucher has reached its expiry date. It cannot be used anymore                                         | status : "EXPIRED"  |

<hr/>

### Voucher Marketplace

:::note

**Send** voucher to other merchant

:::

![image](/img/voucher/marketplace-voucher.png)

| Parameter      | Type   | Description                                                                                            | Example                 |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| `VALID`        | String | Voucher is still valid, waiting for user to redeem.                                                    | status : "VALID"        |
| `ISSUE`        | String | Click “Issue” button from RM Merchant App/Terminal.                                                    | status : "ISSUE"        |
| `REDEEMED`     | String | **Optional**: User scan with RM Loyalty Program, and this voucher can now be viewed under “My Rewards” | status : "REDEEMED"     |
| `VOID`         | String | User used voucher at merchant shop. Merchant has scanned this voucher.                                 | status : "VOID"         |
| `EXPIRED`      | String | Voucher has reached its expiry date. It cannot be used anymore                                         | status : "EXPIRED"      |
| `MARKET_PLACE` | String | Send/Share voucher to other merchant                                                                   | status : "MARKET_PLACE" |

<hr/>

### Sample Response

:::note

- Frequency of callback: 5 times, interval of 1 min each
- Callback will stop when RM server receives HTTP response of **200-OK**
- **In case of unreachable server callback, please proceed to call [Get Voucher By Code endpoint](/campaign/voucher/voucher-by-code.md).**

:::

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
