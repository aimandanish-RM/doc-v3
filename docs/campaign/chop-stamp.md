---
id: chop-stamp
title: Give Chop Stamp
sidebar_label: Give Chop Stamp
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/chop-stamp/card/scan`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/chop-stamp/card/scan`<br/>

:::note
Give a stamp to customer
:::

### Request Parameters

| Parameter | Type   | Description      | Example                                                                                                          |
| --------- | ------ | ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| `code`    | String | QR code Url link | EhQKCE1lcmNoYW50EJXVzd3wraqTORIgChRMb3lhbHR5Q2hvcFN0YW1wQ2FyZBCm1qHe2eDX_BU:d439a47d-3cd3-48bc-aae7-1effda5c7e1b |

![images](/img/campaign/chop-stamp.png)

> Example Request

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/loyalty/chop-stamp/card/scan" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV1Z4NF9UbE5MZEZRIl0sImV4cCI6MTU4NjMzNzc1OCwiaWF0IjoxNTgzNzQ1NzU4LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXlKSG9qb2VNcHYwViIsIm5iZiI6MTU4Mzc0NTc1OCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.FfBkCb7fjCKJdcy_DS06dKgEtcAvukPio0HyDRtH2UovhZsLFSqD_8oo21u094XSor_mqFg4hqXmLaHjX-h92Wz3kHl7OwiKQb16x8Rnl5OdyPHtMqIZqP8ab8Ch0RHEZ33VchK1zBTnG6Xosrb1B44tWqJ0_kdTtbRZN4rG821C8i4sb6sx8GaxgluJ5q7CEifMTBFJam_Jub9LfAfukq8YyIl0Bykp7B3A_su2QoELL9L_ElJdV9FuwFPHcKr9bxLvVSrEdyrFg7IBm_tJHxSl8gTh3j4b6lWZrBCfMSLraXaYRNzz1ddbVnwYD4aRuSyRmQeMYTUj0cInktnKUA" \
--header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \
--data-raw "{
	\"code\": \"EhQKCE1lcmNoYW50EJXVzd3wraqTORIgChRMb3lhbHR5Q2hvcFN0YW1wQ2FyZBCm1qHe2eDX_BU:d439a47d-3cd3-48bc-aae7-1effda5c7e1b\"
}"
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Transaction object                                                                                        | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>

<strong>Transaction object (item):</strong>

| Parameter          | Type     | Description           | Example                                                                       |
| ------------------ | -------- | --------------------- | ----------------------------------------------------------------------------- |
| `id`               | String   | Chop Stamp ID         | "1583401221690518310"                                                         |
| `key`              | String   | Chop Stamp Key        | "EhQKCE1lcmNoYW50EJXVzd3wraqTORIgChRMb3lhbHR5Q2hvcFN0YW1wQ2FyZBCm1qHe2eDX_BU" |
| `noOfChoppedStamp` | Uint     | Number of redeem      | 2                                                                             |
| `isCompleted`      | Bool     | True or False         | false                                                                         |
| `startAt`          | DateTime | Time Start            | "2020-03-02T13:49:08Z"                                                        |
| `endAt`            | DateTime | Time End              | "2021-04-02T13:49:08Z"                                                        |
| `createdAt`        | DateTime | Creation date time    | "2020-03-05T09:40:21Z"                                                        |
| `updatedAt`        | DateTime | Last update date time | "2020-03-05T09:40:21Z"                                                        |

> Example Response

```json
{
  "item": {
    "id": "1583401221690518310",
    "key": "EhQKCE1lcmNoYW50EJXVzd3wraqTORIgChRMb3lhbHR5Q2hvcFN0YW1wQ2FyZBCm1qHe2eDX_BU",
    "noOfChoppedStamp": 2,
    "isCompleted": false,
    "startAt": "2020-03-02T13:49:08Z",
    "endAt": "2021-04-02T13:49:08Z",
    "createdAt": "2020-03-05T09:40:21Z",
    "updatedAt": "2020-03-05T09:40:21Z"
  },
  "code": "SUCCESS"
}
```
