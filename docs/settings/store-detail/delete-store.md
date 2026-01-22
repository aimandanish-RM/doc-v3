---
id: delete-store
title: Delete Store
sidebar_label: Delete Store
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "red", fontWeight: "bold" }}>DEL</span><br/>
URL : `https://open.revenuemonster.my/v3/store/1662168764176583360`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/store/1662168764176583360`

:::note
To delete specific store under the merchant. Specify `store_id` in your query.
:::

:::warning
Deleted stores cannot be revoked!
:::

### Request Parameters:

:::note

- The URL is consists of `[base_URL]`/v3/store/`[store_id]`

- Pass in `Store ID` in your query

:::

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example   |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | --------- |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS" |

> Example Response

```json
{
  "code": "SUCCESS"
}
```
