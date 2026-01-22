---
id: signature-algorithm
title: Signature Algorithm
sidebar_label: Signature Algorithm
---

:::note

- Signature algorithm is used to sign your payment API request with a private key to obtain additional security.

:::

:::important

- <span style={{ color: "black", fontWeight: "bold" }}>Data object</span> needs to be sorted, the <span style={{ color: "black", fontWeight: "bold" }}>Nested object</span> also needs to be sorted.

:::

### Step 1 : Prepare a Request Parameter

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>

:::note

- Refer to which API endpoint you are calling , below request parameter is just an **EXAMPLE**

:::

#### Example of Web/Mobile Payment

| Parameter       | Type     | Required | Description                                                                                        | Example                                                                      |
| --------------- | -------- | -------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `order`         | Object   | Yes      | Object of order                                                                                    | (Refer to explanation below)                                                 |
| `customer`      | Object   | Yes      | Object of customer                                                                                 | (Refer to explanation below)                                                 |
| `method`        | []String | Yes      | [RM currently supported method](https://doc.revenuemonster.my/docs/payment-method.mdx)             | []                                                                           |
| `type`          | String   | Yes      | Object of type                                                                                     | (Refer to explanation below)                                                 |
| `storeId`       | String   | Yes      | ID of the store to create QR code                                                                  | "10946114768247530"                                                          |
| `redirectUrl`   | String   | Yes      | URL to redirect after payment is made                                                              | "https://google.com"                                                         |
| `notifyUrl`     | String   | Yes      | Example of [Notify URL Response](https://doc.revenuemonster.my/docs/payment/webpayment/notify-url) | "https://google.com"                                                         |
| `layoutVersion` | String   | Optional | Select layout for Web payment                                                                      | v1 / **v2 (Supported Credit Card)** / **v3 (Supported Credit Card and FPX)** |

<br />

<strong>Order object (order):</strong>

| Parameter        | Type   | Required | Description                                                                                       | Example                        |
| ---------------- | ------ | -------- | ------------------------------------------------------------------------------------------------- | ------------------------------ |
| `title`          | String | Yes      | Order title, max: 32                                                                              | "Sales"                        |
| `detail`         | String | Yes      | Order detail, max: 600                                                                            | "1 x iPhone X; 2 x SAMSUNG S8" |
| `additionalData` | String | Yes      | Order description                                                                                 | "Sales"                        |
| `amount`         | Uint   | Yes      | Amount of order in cent. Only required when "isPrefillAmount" = true. (min RM 0.10 or amount: 10) | 100                            |
| `currencyType`   | String | Yes      | Currency notation (currently only support `MYR`)                                                  | "MYR"                          |
| `id`             | String | Order ID | "6170506694335521334"                                                                             |

<br />

<strong>Customer object (customer):</strong>

| Parameter     | Type   | Required | Description                            | Example    |
| ------------- | ------ | -------- | -------------------------------------- | ---------- |
| `userId`      | String | Yes      | if tokenization enable need **userId** | "13245876" |
| `email`       | String | Optional | Customer Email                         | ""         |
| `countryCode` | String | Optional | Customer Country Code                  | ""         |
| `phoneNumber` | String | Optional | Customer Phone Number                  | ""         |

<br />

<strong>Type Object (type):</strong> <br />

| Parameter | Type   | Required | Example          |
| --------- | ------ | -------- | ---------------- |
| `type`    | String | Yes      | "WEB_PAYMENT"    |
| `type`    | String | Yes      | "MOBILE_PAYMENT" |

> Example Request

```json
{
  "order": {
    "title": "hello",
    "detail": "",
    "additionalData": "world",
    "amount": 10,
    "currencyType": "MYR",
    "id": "7211"
  },
  "customer": {
    "userId": "13245876",
    "email": ""
  },
  "method": [],
  "type": "WEB_PAYMENT",
  "storeId": "1608123035564538121",
  "redirectUrl": "https://revenuemonster.my",
  "notifyUrl": "https://dev-rm-api.ap.ngrok.io",
  "layoutVersion": "v3"
}
```

:::important

- Sort the above json key **alphabetically** and make it **compact**

- Replace following special character on the json body:<br/>
  **&lt;** to **\u003c**<br/>
  **&gt;** to **\u003e**<br/>
  **&amp;** to **\u0026**<br/>

:::

### Step 2 : Encode the data using Base64 format

:::note

ewogICAgIm9yZGVyIjogewogICAgCSJ0aXRsZSI6ICJoZWxsbyIsCiAgICAJImRldGFpbCI6ICIiLAogICAgCSJhZGRpdGlvbmFsRGF0YSI6ICJ3b3JsZCIsCgkgICAgImFtb3VudCI6IDEwLAoJICAgICJjdXJyZW5jeVR5cGUiOiAiTVlSIiwKCSAgICAiaWQiOiAgIjcyMTEiCiAgICB9LAogICAgImN1c3RvbWVyIjogewogICAgInVzZXJJZCI6ICIiLAogICAgImVtYWlsIjogIiIKfSwKICAgICJtZXRob2QiOltdLAogICAgInR5cGUiOiAiV0VCX1BBWU1FTlQiLAogICAgInN0b3JlSWQiOiAiMTYwODEyMzAzNTU2NDUzODEyMSIsCiAgICAicmVkaXJlY3RVcmwiOiAiaHR0cHM6Ly9yZXZlbnVlbW9uc3Rlci5teSIsCiAgICAibm90aWZ5VXJsIjogImh0dHBzOi8vZGV2LXJtLWFwaS5hcC5uZ3Jvay5pbyIsCiAgICAibGF5b3V0VmVyc2lvbiI6InYzIgp9
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
| `nonceStr`   | String | Yes      | Random string                                                      | "VYNknZohxwicZMaWbNdBKUrnrxDtaRhN"                  |
| `requestUrl` | String | Yes      | API URL that you call must be exactly the same, together with URL. | https://sb-open.revenuemonster.my/v3/payment/online |
| `signType`   | String | Yes      | Sign Type, prefer SHA-256                                          | "sha256"                                            |
| `timestamp`  | String | Yes      | UNIX timestamp of request                                          | "1527407052"                                        |

**Example**
:::note
data=ewogICAgIm9yZGVyIjogewogICAgCSJ0aXRsZSI6ICJoZWxsbyIsCiAgICAJImRldGFpbCI6ICIiLAogICAgCSJhZGRpdGlvbmFsRGF0YSI6ICJ3b3JsZCIsCgkgICAgImFtb3VudCI6IDEwLAoJICAgICJjdXJyZW5jeVR5cGUiOiAiTVlSIiwKCSAgICAiaWQiOiAgIjcyMTEiCiAgICB9LAogICAgImN1c3RvbWVyIjogewogICAgInVzZXJJZCI6ICIiLAogICAgImVtYWlsIjogIiIKfSwKICAgICJtZXRob2QiOltdLAogICAgInR5cGUiOiAiV0VCX1BBWU1FTlQiLAogICAgInN0b3JlSWQiOiAiMTYwODEyMzAzNTU2NDUzODEyMSIsCiAgICAicmVkaXJlY3RVcmwiOiAiaHR0cHM6Ly9yZXZlbnVlbW9uc3Rlci5teSIsCiAgICAibm90aWZ5VXJsIjogImh0dHBzOi8vZGV2LXJtLWFwaS5hcC5uZ3Jvay5pbyIsCiAgICAibGF5b3V0VmVyc2lvbiI6InYzIgp9&#38;method=post&#38;nonceStr=VYNknZohxwicZMaWbNdBKUrnrxDtaRhN&#38;requestUrl=https://sb-open.revenuemonster.my/v3/payment/online&#38;signType=sha256&#38;timestamp=1527407052
:::

### Step 4: Sign with CLIENT PRIVATE KEY

:::important

- Sign this content using `sha256` with rsa **private key** and make sure the **public key** have been uploaded to **RM Merchant Portal**

:::

| <!--   | Type | Required                                                 | Description            |     |
| ------ | ---- | -------------------------------------------------------- | ---------------------- |
| String | Yes  | Sign the request data in Step 3 using CLIENT PRIVATE KEY | Response show as below | --> |

:::note
**Example of Signature**

sha256 IrBg6t73VsH7ieEnQDB4CXHFjMWUkp8Dtddpxqw+4Gvz6Tag7Dx6nrfAt2ofYK8xZN9aBCvAKAfmAOGWIXnsTXfhFBnMA2kadiga7ufUJ81ozyhllbiliRM2ugw1OcqSTLRHWBPhrVwhHBxgDiG9wbuI3FKURrz+CufYYakFoCw=
:::

### Step 5: Signature of Request Data

:::note
Put this **Signature** into header under **X-Signature**, construct the request as below and call API endpoint:
:::

```json
curl --request POST
 --url 'https://sb-open.revenuemonster.my/v3/payment/online'
 --header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw'
 --header 'Content-Type: application/json'
 --header 'X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN'
 --header 'X-Signature: sha256 IrBg6t73VsH7ieEnQDB4CXHFjMWUkp8Dtddpxqw+4Gvz6Tag7Dx6nrfAt2ofYK8xZN9aBCvAKAfmAOGWIXnsTXfhFBnMA2kadiga7ufUJ81ozyhllbiliRM2ugw1OcqSTLRHWBPhrVwhHBxgDiG9wbuI3FKURrz+CufYYakFoCw='
 --header 'X-Timestamp: 1527407052'
 --data '{
  "order": {
    "title": "hello",
    "detail": "",
    "additionalData": "world",
    "amount": 10,
    "currencyType": "MYR",
    "id": "7211"
  },
  "customer": {
    "userId": "13245876",
    "email": ""
  },
  "method": [],
  "type": "WEB_PAYMENT",
  "storeId": "1608123035564538121",
  "redirectUrl": "https://revenuemonster.my",
  "notifyUrl": "https://dev-rm-api.ap.ngrok.io",
  "layoutVersion": "v3"
}'
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | item object                                                                                               | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />
<strong>item Object (item):</strong>

| Parameter    | Type   | Description                                                            | Example                                                                   |
| ------------ | ------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `checkoutId` | String | Code to identify web payment url                                       | "1548316308361173347"                                                     |
| `url`        | String | Example to form checkout URL. Note: to change base URL to desired URL. | "https://sb-pg.revenuemonster.my/checkout?checkoutId=1548316308361173347" |

> Example Response

```json
{
  "item": {
    "checkoutId": "1548316308361173347",
    "url": "https://sb-pg.revenuemonster.my/checkout?checkoutId=1548316308361173347"
  },
  "code": "SUCCESS"
}
```

<hr/>

## Using RM Merchant Portal to get Signature

### Step 1 : Create New Application

Go to **Merchant Portal** > **Developer** > **Applications** tab (last on the list) and you will see the following page:<br/>

![image](/img/developer-application/1.png)<br />

### Step 2 : Obtain Credential

Click on the <b>Applications</b> created in Step 1. You may edit and update relevant information here :
<br/>

If you would like to disable the application , simply toggle the **"ON/OFF"** switch button at the top right.
<br/>

![image](/img/developer-application/4.png)

Click on **Show** to reveal your **clientSecret**:

![image](/img/developer-application/5.png)

<hr/>

### Generate RSA KEYS

If you need help to generate a key, go to **Merchant portal > Developer > Application > Generator RSA Key** Suggested key size: 2048 Bit. Keep your private keys in a safe place! Or use our **Generate RSA key** tool.

- `Private Keys` are required to sign API request(s) contents.
- `Public Keys` are used to verify content received.

![image](/img/developer-application/rks-key.png)

<hr/>

### Optional Tool: Signature Debugger

`Public Keys` needs to have be wrap as following :

![image](/img/developer-application/9.png)<br/>
For security purposes, we enhanced our authentication flow and Open API by adding layers of encryption to our endpoints. You may develop your own encryption tool on your desired application directly, or use our Signature Debugger to do signing/verification using private/public keys as obtained from the previous step.
Refer more on `Signature Debugger`

![image](/img/developer-application/signature-debug.png)

<!-- <hr/>

### Use API to get Signature

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/tool/signature/generate`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/tool/signature/generate`

### Request Parameters

> Example Request

```json
{
  "data": {
    "order": {
      "title": "hello",
      "detail": "hello",
      "additionalData": "world",
      "amount": 100,
      "currencyType": "MYR",
      "id": "13234353986"
    },
    "method": [],
    "type": "WEB_PAYMENT",
    "storeId": "10946114768247530",
    "redirectUrl": "https://www.youtube.com/watch?v=k9NZYQHQ7Gg&list=RDGfcbOdIFWPE&index=13",
    "notifyUrl": "https://google.com",
    "layoutVersion": "v2"
  },
  "method": "post",
  "nonceStr": "XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG",
  "privateKey": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAvNvEeQ/Se29PKPbD4jWEvOPmMgGYJOQOKc/s0PhUSlIaZDnb\n9dc1Wvkl6vbsi1KYulRvrCNThO5db6a1Jj0erRpovcGXi3ACHF3sei9enaUHEHvd\nFWMAulAD2EI37sNIsyGm1wK5fpuVLlUPjeV+PzJKID1RvHM+3A5m9ZnxSj/SNF/7\nvSXRM1z4SYJuQDGmxVWEEkTkBcbleK2J1pdB88E3xhqzD3UQN2LLHSCM/A2nmA8Y\nEXkwfr7kRl2CJlDl+qrjb0n5i60D+j8JMFDg5mkl6VuTBuUg1PKJuJzRXmJK0GuA\na52I0QXId6uWXHc+Up1B6zvh5IhXa3+dzXBm4wIDAQABAoIBAGVnhy4NndGjKZjw\nLqtmWxhlMfPFwWCFh0lSGHD39aJWRU9tdbqhzEdFoeNwpAAG4HSj47ZE3ZJxvn+1\nvmyCwtblaDoDGZDIGooKsG/GwYHZ21oxd7sFBp4DWp0iqQ+tkXqFZiTqlJjzhv1y\ntMBW6huasAxxgFK0epsDrKrQ9qsLfX1MYjXUU/q1edIJ6+kf5gPeqboH8mWMi038\nSyTDnDuTqBsaWlOdfrlQjs4feVILrmAor6Egz1PcpNSwHpdtjh7vNb1f//8y+rxp\n5p6wvhVS5quRW6yT871qtp97Vq9TR6DThbIsp/Pc5cnRT653pdfNBgAE83ukacye\n6WfErdECgYEA+msNuG+tfgE1toA1+asXaCC0r4mrYLjP+uXBA57ZNHm5drS2tiI4\n3EqcVeek9VGUk/O65yWQ6SBgo0fXpGTNI8qYMONF6MDgRez/u81wBvVRLayAecJO\n7pA8Sokgitb/jyTqvIXJQYxQl+kHKiYtX281DNZ9CRfE0XOmf6UHTysCgYEAwRFw\neOc84ASQnBRzh6DHwKCQWRYZze5njIawty9zX/HZsPDlp4wqh4X4WzBFmBscnZ0L\n0EvaqBtQkIeGrdMAsgbFPFEPqMP3/iRCwBn3M6gW0CCSCLt4X7K2wXq1kJ6x7dhH\njt9b8u7MYonco+k8k7SHJj1elJXLa7Zh6q6pqykCgYEA4MZ6+FR1/CaF2hzXVhW2\n2uaQiQgf5p+9P84/JErPWITybpTjdDTfqQznq0xUC0eBABTEbXqQylEfrTBtZch9\nQmU1mpxGQhfut5V2L1LF/djxVvgCEkjRpN2e4KCZr0Yw+oH+md3UupuCM/kdTz4Z\neBJQIgfdD+5f4knW57hwCSUCgYEAtZN1OAAiHH2uk1wYm4H2248msuI6OpbxBBTY\ntjAGTkHi/qpREpacmQDCZuCrUzaMXx+IMMpmRpwJ1SPg4jIEAWqkrOl/1LUZ0wa/\nUHQbLZX0fqFjNps5xqcJgkWp5O2bYZl7Ez+19m/oAPSvcei1dCTgxnIJNaz7t727\nsT+7iqECgYBgfmuGu77mHrGdz8JMDwqdYWYJbtdxrPOqlH37G2D1IufAyDvLv2LN\nxjenpecoSSyhlVPQMTqD1T3HUaJ99GNE5ANe0qyVcENQVI38+9bb/VtY8vsXpvPi\nnHCRMiX3Li2Q75PT21I4GGiNoxXQphlAPevtfWfKKbrS2Y2DgQfeMA==\n-----END RSA PRIVATE KEY-----",
  "requestUrl": "https://sb-open.revenuemonster.my/v3/payment/online",
  "signType": "sha256",
  "timestamp": "1591946239"
}
```

### Response Parameters

> Example Response

```json
{
  "data": "data=eyJsYXlvdXRWZXJzaW9uIjoidjIiLCJtZXRob2QiOltdLCJub3RpZnlVcmwiOiJodHRwczovL2dvb2dsZS5jb20iLCJvcmRlciI6eyJhZGRpdGlvbmFsRGF0YSI6IndvcmxkIiwiYW1vdW50IjoxMDAsImN1cnJlbmN5VHlwZSI6Ik1ZUiIsImRldGFpbCI6ImhlbGxvIiwiaWQiOiIxMzIzNDM1Mzk4NiIsInRpdGxlIjoiaGVsbG8ifSwicmVkaXJlY3RVcmwiOiJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWs5TlpZUUhRN0dnXHUwMDI2bGlzdD1SREdmY2JPZElGV1BFXHUwMDI2aW5kZXg9MTMiLCJzdG9yZUlkIjoiMTA5NDYxMTQ3NjgyNDc1MzAiLCJ0eXBlIjoiV0VCX1BBWU1FTlQifQ==&method=post&nonceStr=XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG&requestUrl=https://sb-open.revenuemonster.my/v3/payment/online&signType=sha256&timestamp=1591946239",
  "sequenceData": "{\"layoutVersion\":\"v2\",\"method\":[],\"notifyUrl\":\"https://google.com\",\"order\":{\"additionalData\":\"world\",\"amount\":100,\"currencyType\":\"MYR\",\"detail\":\"hello\",\"id\":\"13234353986\",\"title\":\"hello\"},\"redirectUrl\":\"https://www.youtube.com/watch?v=k9NZYQHQ7Gg&list=RDGfcbOdIFWPE&index=13\",\"storeId\":\"10946114768247530\",\"type\":\"WEB_PAYMENT\"}",
  "signature": "sha256 FKdep5OjChzPEZI0IxQBl4gSmIxS9HWb6cyxWPTT3X76RmX/pU6EPXj/WCzW3DFkapNllnLegMylQKgNMNhI29ylihYQhFvbrDdbPNBLHio0MJVH/oRkdf7zrl0GOi6CtEBAktj0yQKN7qjk7qa7ZAghSEKRYeq+zGvgmpxF61EjGYogtShsxXK53+l+tnihOkNC0lgb7rY9W5Sahohrc0E7udY6mSqSTEoYVAmLq/KhYW7Ve6mp6cMRC5N/ELB2atcX8CvU6OnJ4sKPAqr0ML5cmIpKbjypVIPHv4HvvWFm2LC6wX8IMe5SgD891FAdBXfFgl3wR6nGhkpbMjg8ug=="
}
``` -->

<hr/>

### Invalid Request Signature

:::note

<!-- If you received **INVALID_REQUEST_SIGNATURE** -->

You can refer the below Response if you received **INVALID_REQUEST_SIGNATURE** <br/>
we will guide you step by step to fix the issue

```json
{
  "debug": {
    "preVerifyContent": {
      "step1": {
        "content": "{\"layoutVersion\":\"v2\",\"method\":[\"GOBIZ_MY\"],\"notifyUrl\":\"https://dev-rm-api.ap.ngrok.io\",\"order\":{\"additionalData\":\"world\",\"amount\":10,\"currencyType\":\"MYR\",\"detail\":\"hello\",\"id\":\"721115\",\"title\":\"hello\"},\"redirectUrl\":\"https://revenuemonster.my\",\"storeId\":\"10946114768247530\",\"type\":\"WEB_PAYMENT\"}",
        "remark": "Sort the json key alphabetically"
      },
      "step2": {
        "content": "eyJsYXlvdXRWZXJzaW9uIjoidjIiLCJtZXRob2QiOlsiR09CSVpfTVkiXSwibm90aWZ5VXJsIjoiaHR0cHM6Ly9kZXYtcm0tYXBpLmFwLm5ncm9rLmlvIiwib3JkZXIiOnsiYWRkaXRpb25hbERhdGEiOiJ3b3JsZCIsImFtb3VudCI6MTAsImN1cnJlbmN5VHlwZSI6Ik1ZUiIsImRldGFpbCI6ImhlbGxvIiwiaWQiOiI3MjExMTUiLCJ0aXRsZSI6ImhlbGxvIn0sInJlZGlyZWN0VXJsIjoiaHR0cHM6Ly9yZXZlbnVlbW9uc3Rlci5teSIsInN0b3JlSWQiOiIxMDk0NjExNDc2ODI0NzUzMCIsInR5cGUiOiJXRUJfUEFZTUVOVCJ9",
        "remark": "Encode the data using Base64 format"
      },
      "step3": {
        "content": "data=eyJsYXlvdXRWZXJzaW9uIjoidjIiLCJtZXRob2QiOlsiR09CSVpfTVkiXSwibm90aWZ5VXJsIjoiaHR0cHM6Ly9kZXYtcm0tYXBpLmFwLm5ncm9rLmlvIiwib3JkZXIiOnsiYWRkaXRpb25hbERhdGEiOiJ3b3JsZCIsImFtb3VudCI6MTAsImN1cnJlbmN5VHlwZSI6Ik1ZUiIsImRldGFpbCI6ImhlbGxvIiwiaWQiOiI3MjExMTUiLCJ0aXRsZSI6ImhlbGxvIn0sInJlZGlyZWN0VXJsIjoiaHR0cHM6Ly9yZXZlbnVlbW9uc3Rlci5teSIsInN0b3JlSWQiOiIxMDk0NjExNDc2ODI0NzUzMCIsInR5cGUiOiJXRUJfUEFZTUVOVCJ9&method=post&nonceStr=XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG&requestUrl=https://sb-open.revenuemonster.my/v3/payment/online&signType=sha256&timestamp=1599467903",
        "remark": "Construct plain text parameters on this format, if the body is empty then the `data` parameter can be skip"
      },
      "step4": {
        "content": "data=eyJsYXlvdXRWZXJzaW9uIjoidjIiLCJtZXRob2QiOlsiR09CSVpfTVkiXSwibm90aWZ5VXJsIjoiaHR0cHM6Ly9kZXYtcm0tYXBpLmFwLm5ncm9rLmlvIiwib3JkZXIiOnsiYWRkaXRpb25hbERhdGEiOiJ3b3JsZCIsImFtb3VudCI6MTAsImN1cnJlbmN5VHlwZSI6Ik1ZUiIsImRldGFpbCI6ImhlbGxvIiwiaWQiOiI3MjExMTUiLCJ0aXRsZSI6ImhlbGxvIn0sInJlZGlyZWN0VXJsIjoiaHR0cHM6Ly9yZXZlbnVlbW9uc3Rlci5teSIsInN0b3JlSWQiOiIxMDk0NjExNDc2ODI0NzUzMCIsInR5cGUiOiJXRUJfUEFZTUVOVCJ9&method=post&nonceStr=XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG&requestUrl=https://sb-open.revenuemonster.my/v3/payment/online&signType=sha256&timestamp=1599467903",
        "remark": "Sign this content using sha256 with rsa private key and make sure the public key have been uploaded to the portal"
      },
      "step5": {
        "remark": "The signature that generated from step 4, pass on the header X-Signature with prefix the sign type, e.g: sha256 {{ signatureContent }}l"
      }
    },
    "requestHeader": {
      "X-Nonce-Str": {
        "currentValue": "XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG",
        "isValid": true,
        "remark": "Make sure the nonce str is should not contain space and must unique at least for 120 second, if not the server will throw duplicate request error"
      },
      "X-Signature": {
        "currentValue": "sha256 XvedDW8H2gqGL5gMzTHqDy1PXX3OqRF09WuQDkeCDwuinOAsPstcPOSefUwkyHPM9WPNKKHyR5qXbKNLC7UgQyGi8Ynio03kDo0p+g3BqXaUT1tpo5D8kv42Kh2S8CW4RkX2Dkf+Yxi2XMQ8l3kzPZaRyhudaGerUZony4Npzf63p4+oTBbXE01uX/4x/WL57+zkaaVRc1KlJsLdGsBmLlPOHLana7udJffJyxXhOmyokBuJ4GoOC8JpDG9oaKCNMZ88ow9CWWB0yRPrK2KeaEDwzCm2Jh8IFKw1gS6avQAwsjychZWv5XmAXkZ8ZQrnLXJquA09QpLxPTtOeQC9SA==",
        "isValid": false,
        "remark": "The signature is invalid, please check preVerifyContent parameter on how to generate the signature or go to our API documentation https://doc.revenuemonster.my/docs/quickstart/signature-algorithm"
      },
      "X-Timestamp": {
        "currentValue": "1599467903",
        "isValid": false,
        "remark": "Make sure the timestamp generated on UTC timezone and must be maximum the time difference is 120 second from the request send to the server, if not the server will throw invalid timestamp"
      }
    }
  },
  "error": {
    "code": "INVALID_REQUEST_SIGNATURE",
    "message": "The request signature is invalid"
  }
}
```

- Check your **Private key** and **Public key**
- **No space** in JSON data
- To access all wallets, use `method:[]`
- For **amount:100** is RM 1.00

:::

<!-- `Public Keys` needs to have be wrap as following :
![image](/img/developer-application/9.png)

**Optional Tool: Signature Debugger**<br />

For security purposes, we enhanced our authentication flow and Open API by adding layers of encryption to our endpoints. You may use our Signature Debugger
You may develop your own encryption tool on your desired application directly, or you may use our Signature Debugger to do signing/verification using private/public keys as obtained from previous step.
Refer more on `Signature Debugger`

![image](/img/developer-application/10.png) -->
