---
id: cancel-spending-loyalty-point
title: Cancel Spending Loyalty Point
sidebar_label: Cancel Spending Loyalty Point
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/spending-reward/cancel`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/spending-reward/cancel`

:::note
Cancel the Spending Loyalty Point by ID
:::

### Request Parameters

| Parameter | Type   | Required | Description                                    | Example                                                     |
| --------- | ------ | -------- | ---------------------------------------------- | ----------------------------------------------------------- |
| `id`      | String | Yes      | Get the **id** from spending loyalty point api | "dee13d3470f2dd43466c252cfc67f967" ( from Respond QR code ) |

> Example Request

```json
curl --location --request POST "{{open_base_path}}/v3/loyalty/spending-reward/cancel" \
--header "Content-Type: application/json"\
--header "Authorization: Bearer {{clientToken}}" \
--header "X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585"\
--data-raw "{
  \"id\":\"dee13d3470f2dd43466c252cfc67f967\"

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
