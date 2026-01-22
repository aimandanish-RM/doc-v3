---
id: loyalty-member-history
title: Get Loyalty Member Hisotry
sidebar_label: Get Loyalty Member Hisotry
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL: `https://open.revenuemonster.my/v3/loyalty/member/2940921291529816182/history`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/member/2940921291529816182/history`

:::note
Get Loyalty Member Point History By `Member ID`
:::

### Request Parameters

:::note

- The URL is consists of `[base_URL]`/v3/loyalty/member/`[member_id]`/history

- Pass an empty JSON object Example: `{}`

:::

### Response Parameters

> Example Response

```json


{
   "items": [
      {
         "key": "EhIKBk1lbWJlchCpzIGbrcmr_BUSGQoNTWVtYmVyUHJvZmlsZRDclJuNr8mr_BUSGgoOTG95YWx0eUhpc3RvcnkQlYaaufPqrPwV",
         "merchantKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTOQ",
         "type": "VOUCHER_REDEEM",
         "description": "voucher combo voucher redeemed",
         "point": -4,
         "credit": 0,
         "creditBalance": 1,
         "createdAt": "2020-03-03T05:14:16Z",
         "updatedAt": "2020-03-03T05:14:16Z"
      },
      {
         "key": "EhIKBk1lbWJlchCpzIGbrcmr_BUSGQoNTWVtYmVyUHJvZmlsZRDclJuNr8mr_BUSGgoOTG95YWx0eUhpc3RvcnkQ2avRwsDhrPwV",
         "merchantKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTOQ",
         "type": "VOUCHER_REDEEM",
         "description": "Prudential RM 5 Cash Vouchers ( BoostPulse ) voucher redeemed",
         "point": -1,
         "credit": 0,
         "creditBalance": 1,
         "createdAt": "2020-03-03T05:08:53Z",
         "updatedAt": "2020-03-03T05:08:53Z"
      },
      {
         "key": "EhIKBk1lbWJlchCpzIGbrcmr_BUSGQoNTWVtYmVyUHJvZmlsZRDclJuNr8mr_BUSGgoOTG95YWx0eUhpc3RvcnkQ_4ekscn6q_wV",
         "merchantKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTOQ",
         "type": "CREDIT_TOP_UP",
         "description": "Top up 0.01 credits",
         "point": 0,
         "credit": 1,
         "creditBalance": 1,
         "createdAt": "2020-03-03T04:09:56Z",
         "updatedAt": "2020-03-03T04:09:56Z"
      },
      {
         "key": "EhIKBk1lbWJlchCpzIGbrcmr_BUSGQoNTWVtYmVyUHJvZmlsZRDclJuNr8mr_BUSGgoOTG95YWx0eUhpc3RvcnkQ976syJHbq_wV",
         "merchantKey": "EhQKCE1lcmNoYW50EJXVzd3wraqTOQ",
         "type": "QR_CODE_REDEEM",
         "description": "Earned 500 points",
         "point": 500,
         "credit": 0,
         "creditBalance": 0,
         "createdAt": "2020-03-03T03:51:56Z",
         "updatedAt": "2020-03-03T03:51:56Z"
      }
   ],
   "code": "SUCCESS",
   "meta": {
      "count": 4
   }
}


```
