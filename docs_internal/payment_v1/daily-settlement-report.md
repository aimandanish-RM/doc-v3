---
id: daily-settlement-report
title: Daily Settlement Report
sidebar_label: Daily Settlement Report
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL :`https://open.revenuemonster.my/v3/payment/reconciliation`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/reconciliation`

:::note
To get Daily Payment report
:::

### Request Parameters

| Parameter         | Type     | Required | Description                                            | Example      |
| ----------------- | -------- | -------- | ------------------------------------------------------ | ------------ |
| `transactionType` | String   | Yes      | "PAYMENT" or "REFUND"                                  | "PAYMENT"    |
| `date`            | String   | Yes      | Date of the report                                     | "2019-12-31" |
| `method`          | []String | Yes      | [RM currently supported method](../payment-method.mdx) | []           |
| `region`          | []String | Yes      | Region of wallet, "MALAYSIA" or "CHINA"                | []           |
| `cursor`          | String   | Yes      | Optional, if pagination exists                         | ""           |

> Example Request

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/reconciliation" \
--header "Content-Type: application/json"\
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw" \
--header "X-Signature: sha256 OsjlEWZLKx0IXgC5PUk6sM+ZZdrS/ELBNdEGj+okOhVAwo/i+GK91CwEmIbLko+p0Vbs8Ph+iBQG/3DyS7kHug=="\
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1527407052" \
--data-raw "{
	"transactionType": "PAYMENT",
    "date": "2021-07-28",
    "method": ["BOOST"],
    "region": ["MALAYSIA"],
    "cursor": ""
}"
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `items`   | Object | Transaction object                                                                                        | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |
| `meta`    | Object | Database object                                                                                           | {}                           |

<br/>

<strong>Transaction object (item):</strong>

| Parameter          | Type     | Description                                                                    | Example                    |
| ------------------ | -------- | ------------------------------------------------------------------------------ | -------------------------- |
| `transactionAt`    | DateTime | Transaction date time of transaction                                           | "2019-12-31T07:00:10Z"     |
| `merchantId`       | String   | (Can view From RM Portal)                                                      | "4118165203679668885"      |
| `merchantName`     | String   | (Can view From RM Portal)                                                      | "Revenue Monster Sdn Bhd"  |
| `storeId`          | String   | Store ID                                                                       | "4949529109748431621"      |
| `storeName`        | String   | Store Name                                                                     | "Kim's Food Corner"        |
| `region`           | String   | Region of wallet, "MALAYSIA" or "CHINA"                                        | "MALAYSIA"                 |
| `method`           | String   | [RM currently supported method](../payment-method.mdx)                         | "TNG"                      |
| `transactionType`  | String   | "PAYMENT" or "REFUND"                                                          | "PAYMENT"                  |
| `type`             | String   | "QUICK_PAY" , "QR_PAY","Web_Payment" , "Mobile_Payment" , "Mobile_Web_Payment" | "QUICK_PAY"                |
| `transactionId`    | String   | Transaction ID (from RM server)                                                | "152161448229438994"       |
| `orderId`          | String   | Order ID (from Merchant), max: 24                                              | "1577775608765190100M6010" |
| `currencyType`     | String   | Currency notation (currently only support `MYR`)                               | "MYR"                      |
| `grossAmount`      | Double   | Gross Amount QR pay                                                            | "0.10"                     |
| `mdr`              | Double   | MDR (from RM server)                                                           | "0.70"                     |
| `serviceFee`       | Double   | Service Fee (from RM server)                                                   | "-0.00"                    |
| `settlementAmount` | Double   | Settlement Amount                                                              | "0.10"                     |

<br/>

> Example Response

```json
{
  "items": [
      {
         "transactionAt": "2021-07-28T03:30:44Z",
         "merchantId": "4118165203679668885",
         "merchantName": "Revenue Monster",
         "storeId": "1623743430847879711",
         "storeName": "SIDEC",
         "region": "MALAYSIA",
         "method": "BOOST",
         "transactionType": "PAYMENT",
         "type": "QUICK_PAY",
         "transactionId": "210728033043010428257992",
         "orderId": "361323863",
         "currencyType": "MYR",
         "grossAmount": "12.50",
         "mdr": "1.00",
         "serviceFee": "-0.13",
         "settlementAmount": "12.37"
      },
      {
         "transactionAt": "2021-07-28T03:35:14Z",
         "merchantId": "4118165203679668885",
         "merchantName": "Revenue Monster",
         "storeId": "1623743430847879711",
         "storeName": "SIDEC",
         "region": "MALAYSIA",
         "method": "BOOST",
         "transactionType": "PAYMENT",
         "type": "QUICK_PAY",
         "transactionId": "210728033514010427503879",
         "orderId": "-1689379397",
         "currencyType": "MYR",
         "grossAmount": "13.50",
         "mdr": "1.00",
         "serviceFee": "-0.14",
         "settlementAmount": "13.36"
      },
  ],
  "code": "SUCCESS",
  "meta": {}
}
```
