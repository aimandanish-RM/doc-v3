---
id: issue-voucher
title: Issue Voucher
sidebar_label: Issue Voucher
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
Url : `https://open.revenuemonster.my/v3/voucher-batch/EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQkvnGweaB2uQg/issue`<br/><br/>
Sandbox Url : `https://sb-open.revenuemonster.my/v3/voucher-batch/EhQKCE1lcmNoYW50EJXVzd3wraqTORIYCgxWb3VjaGVyQmF0Y2gQkvnGweaB2uQg/issue`

:::note
To issue vouchers for customer.
:::

### Request Parameters

:::note

- The URL is consists of [base_URL]/v3/voucher-batch/[batchkey]/issue.

- [base_URL] is the base URL depending on your environment (Sandbox or production)

- [batchkey] can be retrieved by viewing at merchant portal or using endpoint [`Get voucher By Batches`](https://doc.revenuemonster.my/#get-voucher-by-batches)

- Pass an empty JSON object Example: `{}`

:::

### Response Parameters

| Parameter | Type   |                                                Description                                                | Example                      |
| --------- | ------ | :-------------------------------------------------------------------------------------------------------: | ---------------------------- |
| `item`    | Object |                                              Voucher object                                               | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>
<strong>Voucher object (item):</strong>

| Parameter | Type   | Description                                                                                                            | Example                           |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |
| `code`    | String | Voucher Code, members can keep this code for future redemption. Same as the qrURL below except this code is not a URL. | "NAklEfbVdV"                      |
| `qrUrl`   | String | QR code for user to scan with Wechat or Facebook to add the voucher into their member account.                         | QR Url link (refer to below code) |

> Example Response

```json
{
  "item": {
    "code": "NAklEfbVdV",
    "qrUrl": "http://api.local.rm:8080/qr/4118165203679668885/voucher/NAklEfbVdV"
  },
  "code": "SUCCESS"
}
```
