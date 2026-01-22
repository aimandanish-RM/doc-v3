---
id: verify-signature
title: Verify Signature
sidebar_label: Verify Signature
---

:::note

- Verify Signature is used to verify your signature.

:::

:::important

- <span style={{ color: "black", fontWeight: "bold" }}>Data object</span> needs to be sorted, the <span style={{ color: "black", fontWeight: "bold" }}>Nested object</span> also needs to be sorted.

:::

### Step 1 : Response Parameter

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>

:::note

- Refer to which API endpoint you are calling , below response parameter is just an **EXAMPLE**

:::

#### Example of Web/Mobile Payment

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | item object                                                                                               | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />
<strong>item Object (item):</strong>

| Parameter    | Type   | Description                                                            | Example                                                                      |
| ------------ | ------ | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `checkoutId` | String | Code to identify web payment url                                       | "1617985392758071583"                                                        |
| `url`        | String | Example to form checkout URL. Note: to change base URL to desired URL. | "https://sb-pg.revenuemonster.my/v2/checkout?checkoutId=1617985392758071583" |

> Example Response

```json
{
  "item": {
    "checkoutId": "1617985392758071583",
    "url": "https://sb-pg.revenuemonster.my/v2/checkout?checkoutId=1617985392758071583"
  },
  "code": "SUCCESS"
}
```

:::important

- Sort the above json key **alphabetically** and make it **compact**

:::

### Step 2 : Encode the data using Base64 format

:::note

eyJpdGVtIjp7ImNoZWNrb3V0SWQiOiIxNjE3OTg1MzkyNzU4MDcxNTgzIiwidXJsIjoiaHR0cHM6Ly9zYi1wZy5yZXZlbnVlbW9uc3Rlci5teS92Mi9jaGVja291dD9jaGVja291dElkPTE2MTc5ODUzOTI3NTgwNzE1ODMifSwiY29kZSI6IlNVQ0NFU1MifQ==
:::

### Step 3: Construct plain text parameters

:::important

- if the body is empty then the `data` parameter can be skip
- if it's verifying our callback then the `requestUrl` can be skip

:::

| Parameter    | Type   | Required | Description                                                        | Example                                             |
| ------------ | ------ | -------- | ------------------------------------------------------------------ | --------------------------------------------------- |
| `data`       | String | Yes      | Base64 data body from Step 2.                                      | Refer to **Step 2**                                 |
| `method`     | String | Yes      | HTTP call method used                                              | "post"                                              |
| `nonceStr`   | String | Yes      | Get from Response Header                                           | "VYNknZohxwicZMaWbNdBKUrnrxDtaRhN"                  |
| `requestUrl` | String | Yes      | API URL that you call must be exactly the same, together with URL. | https://sb-open.revenuemonster.my/v3/payment/online |
| `signType`   | String | Yes      | Sign Type, prefer SHA-256                                          | "sha256"                                            |
| `timestamp`  | String | Yes      | Get from Response Header                                           | "1527407052"                                        |

**Example**
:::note
data=eyJpdGVtIjp7ImNoZWNrb3V0SWQiOiIxNjE3OTg1MzkyNzU4MDcxNTgzIiwidXJsIjoiaHR0cHM6Ly9zYi1wZy5yZXZlbnVlbW9uc3Rlci5teS92Mi9jaGVja291dD9jaGVja291dElkPTE2MTc5ODUzOTI3NTgwNzE1ODMifSwiY29kZSI6IlNVQ0NFU1MifQ==&#38;method=post&#38;nonceStr=VYNknZohxwicZMaWbNdBKUrnrxDtaRhN&#38;signType=sha256&#38;timestamp=1527407052&#38;requestUrl=https://sb-open.revenuemonster.my/v3/payment/online

:::

:::important

- Verify the content string using **public key** ( Can get From Merchant Portal => Developer => Applications => Server public key)

:::
