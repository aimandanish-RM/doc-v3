---
id: gourmet-card
title: Gourmet Card
sidebar_label: Gourmet Card
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL :`https://open.revenuemonster.my/v3/membership/verify`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/membership/verify`

:::note
(**For Alipay Merchant** )
Collect information using member card ID
:::

### Request Parameters

| Parameter      | Type   | Description                 | Example               |
| -------------- | ------ | --------------------------- | --------------------- |
| `memberCardId` | String | From Ali Pay member card id | 28158443195878043074  |
| `storeId`      | String | Store ID                    | "4949529109748431621" |

> Example Request

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/loyalty/chop-stamp/card/scan" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV1Z4NF9UbE5MZEZRIl0sImV4cCI6MTU4NjMzNzc1OCwiaWF0IjoxNTgzNzQ1NzU4LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXlKSG9qb2VNcHYwViIsIm5iZiI6MTU4Mzc0NTc1OCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.FfBkCb7fjCKJdcy_DS06dKgEtcAvukPio0HyDRtH2UovhZsLFSqD_8oo21u094XSor_mqFg4hqXmLaHjX-h92Wz3kHl7OwiKQb16x8Rnl5OdyPHtMqIZqP8ab8Ch0RHEZ33VchK1zBTnG6Xosrb1B44tWqJ0_kdTtbRZN4rG821C8i4sb6sx8GaxgluJ5q7CEifMTBFJam_Jub9LfAfukq8YyIl0Bykp7B3A_su2QoELL9L_ElJdV9FuwFPHcKr9bxLvVSrEdyrFg7IBm_tJHxSl8gTh3j4b6lWZrBCfMSLraXaYRNzz1ddbVnwYD4aRuSyRmQeMYTUj0cInktnKUA" \
--header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \
--data-raw "{
\"memberCardId\": \"28158443195878043074\"
 \"storeId\": \"4949529109748431621\",
}"
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Transaction object                                                                                        | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>

<strong>Item object (item):</strong>

| Parameter       | Type     | Description           | Example                |
| --------------- | -------- | --------------------- | ---------------------- |
| `id`            | String   | Gourmet Card ID       | "28158443195878043074" |
| `transactionId` | String   | Transaction ID        | "1584431832399399267"  |
| `cardId`        | String   | Card ID               | "1576632501406219093"  |
| `memberId`      | String   | Member ID             | "1584431797984173748"  |
| `expiredAt`     | DateTime | Expired date time     | "2020-05-16T07:59:18Z" |
| `createdAt`     | DateTime | Creation date time    | "2020-03-17T07:59:18Z" |
| `updateAt`      | DateTime | Last update date time | "2020-03-05T09:40:21Z" |
| `card`          | Object   | Refer to explanation below | (Refer to explanation below) |


<br/>

<strong> Card object (card):</strong>

| Parameter            | Type     | Description          | Example                                                                                                                      |
| -------------------- | -------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                 | String   | Card ID              | "1576632501406219093"                                                                                                        |
| `name`               | String   | Card Name            | "九折美食卡"                                                                                                                 |
| `lifetime`           | Uint     | Life Time            | 60                                                                                                                           |
| `lifetimeType`       | String   | Life Time Type       | "DAY"                                                                                                                        |
| `amount`             | Uint     | Amount               | 10                                                                                                                           |
| `currency`           | String   | Currency type        | "RMB"                                                                                                                        |
| `discountType`       | String   | Discount type        | "DISCOUNT"                                                                                                                   |
| `discountValue`      | String   | Discount Value       | "1000"                                                                                                                       |
| `minimumSpentAmount` | Uint     | Minimum Spent Amount | 10                                                                                                                           |
| `wallet`             | String   | Wallet : Alipay      | "ALIPAY"                                                                                                                     |
| `templateId`         | String   | Template ID          | "20191218000000002154347000300178"                                                                                           |
| `status`             | String   | Status               | "ACTIVE"                                                                                                                     |
| `image`              | String   | Image                | "https://rm-sandbox-membership-public.oss-ap-southeast-3.aliyuncs.com/gourmet/card/image-1579510518825819467-1579510518.png" |
| `icon`               | String   | Icon                 | "https://rm-sandbox-membership-public.oss-ap-southeast-3.aliyuncs.com/gourmet/card/icon-1579505367845553007-1579505367.png"  |
| `createAt`           | DateTime | Create date time     | "2019-12-18T01:28:24Z"                                                                                                       |
| `updateAt`           | DateTime | Update date time     | "2019-12-18T01:28:24Z"                                                                                                       |

> Example Response

```json
{
  "item": {
    "id": "28158443195878043074",
    "transactionId": "1584431832399399267",
    "cardId": "1576632501406219093",
    "memberId": "1584431797984173748",
    "expiredAt": "2020-05-16T07:59:18Z",
    "createdAt": "2020-03-17T07:59:18Z",
    "updatedAt": "2020-03-17T07:59:18Z",
    "card": {
      "id": "1576632501406219093",
      "name": "九折美食卡",
      "lifetime": 60,
      "lifetimeType": "DAY",
      "amount": 10,
      "currency": "RMB",
      "discountType": "DISCOUNT",
      "discountValue": "1000",
      "minimumSpentAmount": 10,
      "wallet": "ALIPAY",
      "templateId": "20191218000000002154347000300178",
      "status": "ACTIVE",
      "image": "https://rm-sandbox-membership-public.oss-ap-southeast-3.aliyuncs.com/gourmet/card/image-1579510518825819467-1579510518.png",
      "icon": "https://rm-sandbox-membership-public.oss-ap-southeast-3.aliyuncs.com/gourmet/card/icon-1579505367845553007-1579505367.png",
      "createdAt": "2019-12-18T01:28:24Z",
      "updatedAt": "2019-12-18T01:28:24Z"
    }
  },
  "code": "SUCCESS"
}
```
