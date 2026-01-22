---
id: deduct-loyalty-point
title: Deduct Loyalty Point
sidebar_label: Deduct Loyalty Point
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>DELETE</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/reward`<br/>
Sandbox URL :  `https://sb-open.revenuemonster.my/v3/loyalty/reward`

:::note
To deduct loyalty point(s) to customers using phone number or member ID.
:::

### Request Parameters

| Parameter  | Type    | Required | Description                            | Example               |
| ---------- | ------- | -------- | -------------------------------------- | --------------------- |
| `point`    | Integer | Yes      | Loyalty point given to customers.      | 100                   |
| `memberId` | String  | No       | Member ID if type "ID" being provided. | "2777058682717858418" |

> Example Request Phone Number

```json
curl --location --request DELETE "https://sb-open.revenuemonster.my/v3/loyalty/reward" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw" \
  --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
  --header "X-Timestamp: 1528450585" \
  --data "{
   \"point\": 100,
   \"memberId\": \"1231231312\"
}"
```

### Response Parameters

| Parameter | Type   |                                                                           Description                                                                            | Example   |
| --------- | ------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------- |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer [Appendix 1: Error Codes](https://doc.revenuemonster.my/#appendix-1-error-codes)) | "SUCCESS" |

> Example Response

```json
{
  "code": "SUCCESS"
}
```

<hr/>