---
id: calculate-spending-reward
title: Calculate Spending Reward
sidebar_label: Calculate Spending Reward
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/spending-reward/calculate`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/spending-reward/calculate`

:::note
Use amount sales to Calculate Spending Reward points
:::

### Request Parameters

| Parameter      | Type   | Description          | Example |
| -------------- | ------ | -------------------- | ------- |
| `currencyType` | String | Currently `MYR` only | MYR     |
| `amount`       | int    | Amount Sales         | 300     |

> Example Request

```json
curl --location --request GET "{{open_base_path}}/v3/loyalty/spending-reward/calculate" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer {{clientToken}}" \
  --header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
  --header "X-Timestamp: 1528450585" \
  --data "{
    \"currencyType\": \"MYR\",
    \"amount\": 300

}"
```

### Response Parameters

| Parameter | Type   | Description                                                                                                                                                      | Example                      |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Point object                                                                                                                                                     | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer [Appendix 1: Error Codes](https://doc.revenuemonster.my/#appendix-1-error-codes)) | "SUCCESS"                    |

<br/>

<strong>Point Object (item)</strong> <br/>

| Parameter     | Type | Description                       | Example |
| ------------- | ---- | --------------------------------- | ------- |
| `point`       | Int  | Loyalty point given to customers. | 3       |

Currency notation (currently only support MYR)

> Example Response

```json
{
  "item": {
    "point": 3
  },
  "code": "SUCCESS"
}
```
