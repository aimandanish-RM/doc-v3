---
id: online-payment
title: "Online Payment"
sidebar_label: "Online Payment"

api:
  method: POST
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/payment/online
    prod: https://open.revenuemonster.my/v3/payment/online
  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body:
    type: json
    example: |
      {
        "storeId": "123456789012345678901234",
        "redirectUrl": "https://merchant.com/payment/redirect",
        "notifyUrl": "https://merchant.com/payment/notify",
        "layoutVersion": "v4",
        "type": "WEB_PAYMENT",
        "order": {
          "id": "ORDER123456789012345678",
          "title": "Online Payment",
          "currencyType": "MYR",
          "amount": 1000
        }
      }
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

# Online Payment

Online payment allow business to accept online payments through our web applications. With Revenue Monster's Online
Payment, customer can enter payment details or select e-wallet options to complete the payment process from their
smartphones and website.

- Demo Web Payment : [Click Here](https://sb-api.revenuemonster.my/demo/payment/online)

:::info
Online payment is an online payment method and it's subscription will based on online subscription rate.
:::

<Flex justifyContent="center">
  <Button
    width="100%"
    sx={{
      ":hover": {
        backgroundColor: "blue",
      },
      backgroundColor: "#528ef7",
      borderRadius: 15,
    }}
    onClick={() => {
      window.location.href =
        "https://drive.google.com/drive/folders/1MOJBWY6aw6KiUUMRMbHo-hXMuxjI3Z0Q?usp=sharing";
    }}
  >
    Payment Sequence Diagram
  </Button>
</Flex>

<br />

**Example of Web Payment**

![image](/img/gif/web-payment.gif)

**Example of Mobile Payment**

<img src="/img/gif/mobile-web-payment.gif" width="300" height="600" />

## Hosted Payment Checkout

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/online`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/online`

:::note

- To create a unified payment checkout page for your website and mobile.
- **Data object** needs to be sorted, the **Nested object** also needs to be sorted.
:::

**Request Parameters**

| Parameter              | Type     | Validation                            | Required    | Description                                            |
|------------------------|----------|---------------------------------------|-------------|--------------------------------------------------------|
| `storeId`              | String   |                                       | Yes         | Store ID                                               |
| `redirectUrl`          | String   | URL                                   | Yes         | Example of [Redirect URL Response](#redirect-response) |
| `notifyUrl`            | String   | URL                                   | Yes         | Example of [Notify URL Response](#notify-response)     |
| `layoutVersion`        | String   | ENUM("v3", "v4")                      | Yes         | Always use v4                                          |
| `type`                 | String   | ENUM("WEB_PAYMENT", "MOBILE_PAYMENT") | Yes         | Checkout session type                                  |
| `method`               | []String |                                       | No          | Payment methods                                        |
| `order.id`             | String   | Length(24)                            | Yes         | Order ID                                               |
| `order.title`          | String   | Length(32)                            | Yes         | Order Title                                            |
| `order.currencyType`   | String   | ENUM("MYR")                           | Yes         | Order Currency Type ( currently supported MYR only)    |
| `order.amount`         | Uint64   |                                       | Yes         | Order Amount                                           |
| `order.detail`         | String   | Length(600)                           | No          | Order Detail                                           |
| `order.additionalData` | String   | Length(128)                           | No          | Order Additional Data                                  |
| `customer.userId`      | String   |                                       | Conditional | **Required** when the tokenization is enabled          |
| `customer.email`       | String   |                                       | No          |                                                        |
| `customer.countryCode` | String   |                                       | No          |                                                        |
| `customer.phoneNumber` | String   |                                       | No          |                                                        |

**Response Parameters**

| Parameter         | Type   | Validation      | Description                    |
|-------------------|--------|-----------------|--------------------------------|
| `item.checkoutId` | String |                 | Checkout session id            |
| `item.url`        | String |                 | Checkout session url           |
| `code`            | String | ENUM("SUCCESS") | Determine request have success |
| `error.code`      | String |                 | Error code                     |
| `error.message`   | String |                 | Error message                  |
| `error.debug`     | String |                 | Debug message ( sandbox only ) |

### Advance: Individual Payment Checkout

After you have the **checkout session url** from the checkout api.

**Example**:
https://sb-pg.revenuemonster.my/v4/checkout?checkoutId=1548316308361173347

### Redirect Response

:::info
Redirect URL to redirect your customer back to your page after payment, it's can be any of the URL ( deeplink, browser
url, server url ) as long as the browser itself can go and process.
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>GET</span><br/>

| Parameter | Type   | Validation                                        | Required | Description         |
|-----------|--------|---------------------------------------------------|----------|---------------------|
| `status`  | String | Enum("SUCCESS", "FAILED", "CANCELLED", "EXPIRED") | Yes      | Payment Status      |
| `orderId` | String |                                                   | Yes      | Payment Order ID    |
| `reason`  | String |                                                   | No       | Payment fail reason |

### Notify Response

:::info
Notify URL or Callback URL to inform server on transaction status after payment made. <br />

Notify will call only when the transaction is success, fail and refund will not fired a notify to your server. We
suggest you to do a query transaction to get full transaction info if you need full info, for notify will only response
the partial transaction info.

Reference: [Query Transaction](./query-transaction.md)
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>

| Parameter                   | Type                       | Validation                                                            | Required | Description                                                |
|-----------------------------|----------------------------|-----------------------------------------------------------------------|----------|------------------------------------------------------------|
| `eventType`                 | ENUM("PAYMENT_WEB_ONLINE") |                                                                       | Yes      | Notify event type                                          |
| `data.store`                | JSON                       | [Transaction Object: Store](./query-transaction.md#store)             | No       | Store details                                              |
| `data.referenceId`          | String                     |                                                                       | No       | Reference ID                                               |
| `data.transactionId`        | String                     |                                                                       | Yes      | Transaction ID                                             |
| `data.terminalId`           | String                     |                                                                       | No       | Terminal ID                                                |
| `data.currencyType`         | String                     | ENUM("MYR")                                                           | Yes      | Currency Type ( currently supported MYR only)              |
| `data.balanceAmount`        | Uint64                     |                                                                       | Yes      | Remaining balance amount for initiate refund               |
| `data.finalAmount`          | Uint64                     |                                                                       | Yes      | Amount after all deductions ( voucher, membership)         |
| `data.platform`             | String                     | ENUM("TERMINAL", "MOBILE_APP", "OPEN_API", "WEB_LOYALTY")             | Yes      | Transaction platform                                       |
| `data.type`                 | String                     | [Appendix: Type](./query-transaction.md#transaction-type)             | Yes      | Transaction type                                           |
| `data.method`               | String                     | [Appendix: Method](./query-transaction.md#transaction-method--region) | Yes      | Transaction payment method                                 |
| `data.region`               | String                     | [Appendix: Region](./query-transaction.md#transaction-method--region) | Yes      | Transaction pament region                                  |
| `data.status`               | String                     | [Appendix: Status](./query-transaction.md#transaction-status)         | Yes      | Transaction payment status                                 |
| `data.transactionAt`        | String                     | RFC3339                                                               | No       | Transaction payment date time ( exists only when SUCCESS ) |
| `data.createdAt`            | String                     | RFC3339                                                               | Yes      | Transaction created date time                              |
| `data.updatedAt`            | String                     | RFC3339                                                               | Yes      | Transaction last updated date time                         |
| `data.payee.userId`         | String                     |                                                                       | No       | Payment provider user id                                   |
| `data.payee.subUserId`      | String                     |                                                                       | No       | Payment provider sub user id                               |
| `data.order.id`             | String                     |                                                                       | Yes      | Order ID                                                   |
| `data.order.title`          | String                     | Length(32)                                                            | Yes      | Order Title                                                |
| `data.order.currencyType`   | String                     | ENUM("MYR")                                                           | Yes      | Order Currency Type ( currently supported MYR only)        |
| `data.order.amount`         | Uint64                     |                                                                       | Yes      | Order Amount                                               |
| `data.order.detail`         | String                     | Length(600)                                                           | No       | Order Detail                                               |
| `data.order.additionalData` | String                     | Length(128)                                                           | No       | Order Additional Data                                      |

## Query Payment Checkout

:::caution
Please note that payment checkout isn't the payment transaction info, while payment checkout will only return the
checkout information like status, amount, redirectUrl but for more information about the success payment checkout
transaction you can query transcation using [Query By Transaction ID](./query-transaction.md#query-by-transaction-id)
with the response of this API `transactionId`.
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/online?checkoutId={checkoutId}`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/online?checkoutId={checkoutId}`

**Request Parameters**

| Parameter    | Type       | Validation | Description          |
|--------------|------------|------------|----------------------|
| `checkoutId` | QueryParam | Yes        | Payment checkout  id |

**Response Paramters**

| Parameter                   | Type   | Validation                                                            | Description                                                                                         |
|-----------------------------|--------|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `code`                      | String | ENUM("SUCCESS")                                                       | Determine request have success                                                                      |
| `error.code`                | String |                                                                       | Error code                                                                                          |
| `error.message`             | String |                                                                       | Error message                                                                                       |
| `error.debug`               | String |                                                                       | Debug message ( sandbox only )                                                                      |
| `item.id`                   | String |                                                                       | Payment checkout id                                                                                 |
| `item.type`                 | String | ENUM("WEB_PAYMENT", "WEB_MOBILE_PAYMENT", "MOBILE_PAYMENT")           | Payment checkout type                                                                               |
| `item.transactionId`        | String |                                                                       | Payment transaction id, you can query transaction using [Query Transaction](./query-transaction.md) |
| `item.order.id`             | String | Length(24)                                                            | Order ID                                                                                            |
| `item.order.title`          | String | Length(32)                                                            | Order Title                                                                                         |
| `item.order.currencyType`   | String | ENUM("MYR")                                                           | Order Currency Type ( currently supported MYR only)                                                 |
| `item.order.amount`         | Uint64 |                                                                       | Order Amount                                                                                        |
| `item.order.detail`         | String | Length(600)                                                           | Order Detail                                                                                        |
| `item.order.additionalData` | String | Length(128)                                                           | Order Additional Data                                                                               |
| `item.platform`             | String | ENUM("OPEN_API")                                                      | Payment checkout platform                                                                           |
| `item.method`               | String | [Appendix: Method](./query-transaction.md#transaction-method--region) | Payment checkout available methods                                                                  |
| `item.redirectUrl`          | String | URL                                                                   | Payment redirect url including cancel and fail                                                      |
| `item.notifyUrl`            | String | URL                                                                   | Payment notify url                                                                                  |
| `item.startAt`              | String | RFC3339                                                               | Payment checkout start date time                                                                    |
| `item.status`               | String | ENUM("SUCCESS", "FAILED", "CANCELLED", "EXPIRED")                     | Payment checkout status                                                                             |
| `item.createdAt`            | String | RFC3339                                                               | Payment checkout created date time                                                                  |
| `item.updatedAt`            | String | RFC3339                                                               | Payment checkout last updated date time                                                             |

## Direct Payment Checkout

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/online/checkout`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/online/checkout`

:::note

- With this you can create payment checkout with your own ui design page
- There's two mode qrcode & url, most of the times URL is preferred over QRCode
- For assets information you may take from [Github](https://github.com/RevenueMonster/Payment-Icon).
  :::

:::caution
Please note that direct payment checkout is required you to perform API call to let us know that your payment checkout
is still active. So the API call for [Query Payment Checkout](#query-payment-checkout) is required else the payment
status will not keep updated until our system perform a pre-timeout check. Suggested API interval check will be 3 to 5
seconds or even longer based on your use cases.
:::

### Mode: URL

**Request Parameters**

| Parameter    | Type   | Validation                                                            | Required | Description       |
|--------------|--------|-----------------------------------------------------------------------|----------|-------------------|
| `checkoutId` | String |                                                                       | Yes      | Checkout ID       |
| `type`       | String | ENUM("URL")                                                           | Yes      | Checkout type url |
| `method`     | String | [Appendix: Method](./query-transaction.md#transaction-method--region) | Yes      | Checkout method   |

```json title="Example Request"
{
  "checkoutId": "1582438693268947023",
  "type": "URL",
  "method": "ALIPAYPLUS_MY"
}
```

**Response Paramters**

| Parameter       | Type   | Validation      | Description                    |
|-----------------|--------|-----------------|--------------------------------|
| `item.type`     | String | ENUM("URL")     | Checkout session type          |
| `item.url`      | String |                 | Checkout session url           |
| `code`          | String | ENUM("SUCCESS") | Determine request have success |
| `error.code`    | String |                 | Error code                     |
| `error.message` | String |                 | Error message                  |
| `error.debug`   | String |                 | Debug message ( sandbox only ) |

### Mode: QRCode

<details open>
  <summary>
    <b> Decode your Image using Base64</b>
  </summary>
  Using <b>qrCodeImageBase64</b> URL to generate a QR Code
  <Card width="100%">
    <Image src="/img/payment-image/individual-qr-code.png" />
  </Card>
</details>

<details open>
  <summary>
    <b>What user will receive</b>
  </summary>
  Once user scan the QR Code it will display 
  <Card width="100%">
    <Image src="/img/payment-image/check-out-payment.png" />
  </Card>
</details>
<br/>

**Request Parameters**

| Parameter    | Type   | Validation                                                            | Required | Description          |
|--------------|--------|-----------------------------------------------------------------------|----------|----------------------|
| `checkoutId` | String |                                                                       | Yes      | Checkout ID          |
| `type`       | String | ENUM("QRCODE")                                                        | Yes      | Checkout type qrcode |
| `method`     | String | [Appendix: Method](./query-transaction.md#transaction-method--region) | Yes      | Checkout method      |

```json title="Example Request"
{
  "checkoutId": "1582438693268947023",
  "type": "QRCODE",
  "method": "MAYBANK_MY"
}
```

**Response Paramters**

| Parameter                 | Type   | Validation      | Description                    |
|---------------------------|--------|-----------------|--------------------------------|
| `item.type`               | String | ENUM("QRCODE")  | Checkout session type          |
| `item.qrcode.base64Image` | String |                 |                                |
| `item.qrcode.data`        | String |                 |                                |
| `code`                    | String | ENUM("SUCCESS") | Determine request have success |
| `error.code`              | String |                 | Error code                     |
| `error.message`           | String |                 | Error message                  |
| `error.debug`             | String |                 | Debug message ( sandbox only ) |

### Mode: DuitNow QR

**Request Parameters**

| Parameter    | Type   | Validation             | Required | Description          |
|--------------|--------|------------------------|----------|----------------------|
| `checkoutId` | String |                        | Yes      | Checkout ID          |
| `type`       | String | ENUM("DUITNOW_QRCODE") | Yes      | Checkout type qrcode |
| `method`     | String | ENUM("")               | Yes      | Checkout method      |

```json title="Example Request"
{
  "checkoutId": "1687168234460362061",
  "method": "",
  "type": "DUITNOW_QRCODE"
}
```

**Response Paramters**

| Parameter                 | Type   | Validation      | Description                    |
|---------------------------|--------|-----------------|--------------------------------|
| `item.type`               | String | ENUM("QRCODE")  | Checkout session type          |
| `item.qrcode.base64Image` | String |                 |                                |
| `item.qrcode.data`        | String |                 |                                |
| `code`                    | String | ENUM("SUCCESS") | Determine request have success |
| `error.code`              | String |                 | Error code                     |
| `error.message`           | String |                 | Error message                  |
| `error.debug`             | String |                 | Debug message ( sandbox only ) |

### Mode: Alipay Mini Program

**Request Parameters**

| Parameter    | Type   | Validation                                                            | Required | Description          |
|--------------|--------|-----------------------------------------------------------------------|----------|----------------------|
| `checkoutId` | String |                                                                       | Yes      | Checkout ID          |
| `type`       | String | ENUM("MINI_PROGRAM")                                                  | Yes      | Checkout type qrcode |
| `method`     | String | [Appendix: Method](./query-transaction.md#transaction-method--region) | Yes      | Checkout method      |

```json title="Example Request"
{
  "checkoutId": "1582438693268947023",
  "type": "MINI_PROGRAM",
  "method": "ALIPAY_CN"
}
```

**Response Paramters**

| Parameter       | Type   | Validation           | Description                                  |
|-----------------|--------|----------------------|----------------------------------------------|
| `item.type`     | String | ENUM("MINI_PROGRAM") | Checkout session type                        |
| `item.data`     | String |                      | Base64 encoded data for pass to mini program |
| `code`          | String | ENUM("SUCCESS")      | Determine request have success               |
| `error.code`    | String |                      | Error code                                   |
| `error.message` | String |                      | Error message                                |
| `error.debug`   | String |                      | Debug message ( sandbox only )               |

**Alipay Mini Program Frontend**

:::note
Use base64 decode data paramter, and pass into mini program api.
:::

```js
my.tradePay({
    orderStr: <
    < decoded base64 from url parameter >>,
    success
:
(res) => {
    console.log("success", res)
},
    fail
:
(res) => {
    console.log("error", res)
},
})
;
```

### Mode: WechatPay Mini Program

:::note
Before start integration, you will need contact us via support@revenuemonster.my and inform us to bind your "Mini
Program App ID / 小程序 App ID" to your account once binded then we will inform you and can proceed with the developmen.
:::

**Request Parameters**

| Parameter    | Type   | Validation                                                            | Required | Description          |
|--------------|--------|-----------------------------------------------------------------------|----------|----------------------|
| `checkoutId` | String |                                                                       | Yes      | Checkout ID          |
| `type`       | String | ENUM("MINI_PROGRAM")                                                  | Yes      | Checkout type qrcode |
| `method`     | String | [Appendix: Method](./query-transaction.md#transaction-method--region) | Yes      | Checkout method      |
| `userId`     | String |                                                                       | Yes      | Wechat User Open ID  |

```json title="Example Request"
{
  "checkoutId": "1582438693268947023",
  "type": "MINI_PROGRAM",
  "method": "WECHATPAY_CN",
  "userId": "oFGqK6w1kZyjDTtNAcOXBDHAa8CY"
}
```

**Response Paramters**

| Parameter       | Type   | Validation           | Description                                  |
|-----------------|--------|----------------------|----------------------------------------------|
| `item.type`     | String | ENUM("MINI_PROGRAM") | Checkout session type                        |
| `item.data`     | String |                      | Base64 encoded data for pass to mini program |
| `code`          | String | ENUM("SUCCESS")      | Determine request have success               |
| `error.code`    | String |                      | Error code                                   |
| `error.message` | String |                      | Error message                                |
| `error.debug`   | String |                      | Debug message ( sandbox only )               |

**WechatPay Mini Program Frontend**

:::note
Use base64 decode data paramter, and pass into mini program api.
:::

```js
var base64decoded = "<< decoded base64 from url parameter >>";
var payload = JSON.parse(base64decoded);
wx.requestPayment({
    ...payload,
    'success': function (res) {
        console.log("success", res)
    },
    'fail': function (res) {
        console.log("fail", res)
    },
    'complete': function (res) {
        console.log("complete", res)
    }
});
```

### Mode: FPX

<details>
  <summary>
    <b>FPX Bank Codes via API</b>
  </summary>
  <b>Method</b> : <span style={{ color: "orange", fontWeight: "bold" }}>GET</span><br />
  <b>URL</b> : https://open.revenuemonster.my/v3/payment/fpx-bank<br />
  <b>Sandbox URL</b> : https://sb-open.revenuemonster.my/v3/payment/fpx-bank<br /><br />

  ```json
{
  "item": {
    "ABB0233:B2C": {
      "code": "ABB0233:B2C",
      "isOnline": true,
      "name": "Affin Bank"
    },
    "ABMB0212:B2C": {
      "code": "ABMB0212:B2C",
      "isOnline": true,
      "name": "Alliance Bank (Personal)"
    },
    "AGRO01:B2C": {
      "code": "AGRO01:B2C",
      "isOnline": true,
      "name": "AGRONet"
    },
    "AMBB0209:B2C": {
      "code": "AMBB0209:B2C",
      "isOnline": true,
      "name": "AmBank"
    },
    "BCBB0235:B2C": {
      "code": "BCBB0235:B2C",
      "isOnline": true,
      "name": "CIMB Bank"
    },
    "BIMB0340:B2C": {
      "code": "BIMB0340:B2C",
      "isOnline": true,
      "name": "Bank Islam"
    },
    "BKRM0602:B2C": {
      "code": "BKRM0602:B2C",
      "isOnline": true,
      "name": "Bank Rakyat"
    },
    "BMMB0341:B2C": {
      "code": "BMMB0341:B2C",
      "isOnline": true,
      "name": "Bank Muamalat"
    },
    "BSN0601:B2C": {
      "code": "BSN0601:B2C",
      "isOnline": true,
      "name": "Bank Simpanan Nasional"
    },
    "HLB0224:B2C": {
      "code": "HLB0224:B2C",
      "isOnline": true,
      "name": "Hong Leong Bank"
    },
    "HSBC0223:B2C": {
      "code": "HSBC0223:B2C",
      "isOnline": true,
      "name": "HSBC"
    },
    "KFH0346:B2C": {
      "code": "KFH0346:B2C",
      "isOnline": true,
      "name": "Kuwait Finance House"
    },
    "MB2U0227:B2C": {
      "code": "MB2U0227:B2C",
      "isOnline": true,
      "name": "Maybank2U"
    },
    "MBB0228:B2C": {
      "code": "MBB0228:B2C",
      "isOnline": true,
      "name": "Maybank2E"
    },
    "OCBC0229:B2C": {
      "code": "OCBC0229:B2C",
      "isOnline": true,
      "name": "OCBC"
    },
    "PBB0233:B2C": {
      "code": "PBB0233:B2C",
      "isOnline": true,
      "name": "Public Bank"
    },
    "RHB0218:B2C": {
      "code": "RHB0218:B2C",
      "isOnline": true,
      "name": "RHB Bank"
    },
    "SCB0216:B2C": {
      "code": "SCB0216:B2C",
      "isOnline": true,
      "name": "Standard Chartered Bank"
    },
    "UOB0226:B2C": {
      "code": "UOB0226:B2C",
      "isOnline": true,
      "name": "United Oversea Bank"
    }
  },
  "code": "SUCCESS"
}
  ```

</details>

<details>
  <summary>
    <b>FPX Bank Codes</b>
  </summary>


| Code             | Name                        |
|------------------|-----------------------------|
| ABB0233:B2C      | Affin Bank                  |
| ABMB0212:B2C     | Alliance Bank (Personal)    |
| AGRO01:B2C       | AGRONet                     |
| AMBB0209:B2C     | AmBank                      |
| BCBB0235:B2C     | CIMB Bank                   |
| BIMB0340:B2C     | Bank Islam                  |
| BKRM0602:B2C     | Bank Rakyat                 |
| BMMB0341:B2C     | Bank Muamalat               |
| BSN0601:B2C      | Bank Simpanan Nasional      |
| HLB0224:B2C      | Hong Leong Bank             |
| HSBC0223:B2C     | HSBC                        |
| KFH0346:B2C      | Kuwait Finance House        |
| MB2U0227:B2C     | Maybank2U                   |
| MBB0228:B2C      | Maybank2E                   |
| OCBC0229:B2C     | OCBC                        |
| PBB0233:B2C      | Public Bank                 |
| RHB0218:B2C      | RHB Bank                    |
| SCB0216:B2C      | Standard Chartered Bank     |
| UOB0226:B2C      | United Oversea Bank         |

</details>

**Request Parameters**

| Parameter      | Type   | Validation     | Required | Description          |
|----------------|--------|----------------|----------|----------------------|
| `checkoutId`   | String |                | Yes      | Checkout ID          |
| `type`         | String | ENUM("URL")    | Yes      | Checkout type qrcode |
| `method`       | String | ENUM("FPX_MY") | Yes      | Checkout method      |
| `fpx.bankCode` | String |                | Yes      | FPX Bank code        |

```json title="Example Request"
{
  "checkoutId": "1687166508263303064",
  "method": "FPX_MY",
  "type": "URL",
  "fpx": {
    "bankCode": "TEST0021"
  }
}
```

**Response Paramters**

| Parameter       | Type   | Validation      | Description                    |
|-----------------|--------|-----------------|--------------------------------|
| `item.type`     | String | ENUM("QRCODE")  | Checkout session type          |
| `item.url`      | String |                 | FPX Payment URL                |
| `code`          | String | ENUM("SUCCESS") | Determine request have success |
| `error.code`    | String |                 | Error code                     |
| `error.message` | String |                 | Error message                  |
| `error.debug`   | String |                 | Debug message ( sandbox only ) |

### Mode: GoBiz / Paydee / Mastercard

**Request Parameters**

| Parameter    | Type   | Validation                    | Required | Description          |
|--------------|--------|-------------------------------|----------|----------------------|
| `checkoutId` | String |                               | Yes      | Checkout ID          |
| `type`       | String | ENUM("URL")                   | Yes      | Checkout type qrcode |
| `method`     | String | ENUM("GOBIZ_MY", "PAYDEE_MY", "MASTERCARD_MY") | Yes      | Checkout method      |
| `gobiz.type` | String | ENUM("UNIVERSAL_PAYMENT")     | No      | GoBiz Payment Type   |

```json title="Example Request"
{
  "checkoutId": "1687168234460362061",
  "method": "MASTERCARD_MY",
  "type": "URL"
}
```

**Response Paramters**

| Parameter       | Type   | Validation      | Description                    |
|-----------------|--------|-----------------|--------------------------------|
| `item.type`     | String | ENUM("URL")     | Checkout session type          |
| `item.url`      | String |                 | GoBiz Payment URL              |
| `code`          | String | ENUM("SUCCESS") | Determine request have success |
| `error.code`    | String |                 | Error code                     |
| `error.message` | String |                 | Error message                  |
| `error.debug`   | String |                 | Debug message ( sandbox only ) |
