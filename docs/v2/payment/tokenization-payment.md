---
id: tokenization-payment
title: "Tokenization Payment"
sidebar_label: "Tokenization Payment"
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

# Tokenization Payment

Tokenization involves the substitution of sensitive data with non-sensitive data. Within the payments sector, it is employed to protect a card's Primary Account Number (PAN) by substituting it with a distinctive sequence of numbers. Payment tokens are issued in real-time used at online payment scenario only example recurring, subscription and mobility or even micromobility transactions.

## Tokenization: Recurring Payment

Recurring payment is for your customer to bind their card and our system able to take the fund from customer card and receive payment based on the recurring rules been defined and pass to recurring engine.

### Create Recurring Customer

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/recurring-payment`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/recurring-payment`

**Request Parameters**

| Parameter             | Type   | Validation                         | Required | Description                                                         |
| --------------------- | ------ | ---------------------------------- | -------- | ------------------------------------------------------------------- |
| `storeId`             | String |                                    | Yes      | Store ID                                                            |
| `email`               | String |                                    | Yes      | Customer email                                                      |
| `name`                | String |                                    | Yes      | Customer name                                                       |
| `countryCode`         | String |                                    | Yes      | Customer country code                                               |
| `phoneNumber`         | String |                                    | Yes      | Customer phone number                                               |
| `productName`         | String |                                    | Yes      | Recurring product name                                              |
| `productDescription`  | String |                                    | Yes      | Recurring product description                                       |
| `currency`            | String | ENUM("MYR")                        | Yes      | Recurring payment currency                                          |
| `amount`              | Uint64 |                                    | Yes      | Recurring payment amount                                            |
| `redirectUrl`         | String |                                    | Yes      | Redirect URL after customer bind card                               |
| `notifyUrl`           | String |                                    | Yes      | Notify URL when payment has made                                    |
| `recurringInterval`   | String | ENUM("MONTHLY", "WEEKLY", "DAILY") | Yes      |                                                                     |
| `recurringTarget`     | String |                                    | Yes      | Recurring target rules can be different values based on interval    |
| `recurringRepetition` | Uint64 |                                    | Yes      | Recurring repetition rules, how many times charge the customer card |

<strong>Recurring Target Rules:</strong>

| Interval | Target | Payment Behaviour                     |
| -------- | ------ | ------------------------------------- |
| WEEKLY   | 0      | Every week of Sunday                  |
| WEEKLY   | 1      | Every week of Monday                  |
| WEEKLY   | 2      | Every week of Tuesday                 |
| WEEKLY   | 3      | Every week of Wednesday               |
| WEEKLY   | 4      | Every week of Thursday                |
| WEEKLY   | 5      | Every week of Friday                  |
| WEEKLY   | 6      | Every week of Saturday                |
| MONTHLY  | -1     | End of every month e.g. 2022/10/31    |
| MONTHLY  | 0      | Start of every month, e.g. 2022/10/01 |
| MONTHLY  | 1 - 28 | Day of month                          |

```json title="Example Request"
{
    "storeId": "1602660043994159611",
    "email": "oska.ng@revenuemonster.my",
    "name":" Oska Ng OpenAPI",
    "countryCode": "60",
    "phoneNumber": "187824152",
    "currency":"MYR",
    "amount": 120,
    "redirectUrl": "https://google.com",
    "notifyUrl": "https://google.com",
    "productName": "Some Product Name",
    "productDescription": "Some Product productDescription",
    "recurringInterval": "WEEKLY",
    "recurringTarget": "1",
    "recurringRepetition": 10
}
```

**Response Parameters**

| Parameter                                   | Type   | Validation                         | Description                                                                               |
| ------------------------------------------- | ------ | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| `item.id`                                   | String |                                    | Recurring payment id                                                                      |
| `item.merchantId`                           | String |                                    | Merchant ID                                                                               |
| `item.storeId`                              | String |                                    | Store ID                                                                                  |
| `item.label`                                | String |                                    | Customer card front six last four digits                                                  |
| `item.email`                                | String |                                    | Customer email                                                                            |
| `item.countryCode`                          | String |                                    | Customer country code                                                                     |
| `item.phoneNumber`                          | String |                                    | Customer phone number                                                                     |
| `item.productName`                          | String |                                    | Recurring product name                                                                    |
| `item.productDescription`                   | String |                                    | Recurring product description                                                             |
| `item.isActive`                             | String |                                    | Recurring payment is active, when card bind successfully will automatically become active |
| `item.createdAt`                            | String | RFC3339                            | Recurring created date time                                                               |
| `item.updatedAt`                            | String | RFC3339                            | Recurring last updated date time                                                          |
| `item.clientKey`                            | String |                                    | Internal usage only                                                                       |
| `item.redirectUrl`                          | String |                                    | URL for customer to redirect after card bind                                              |
| `item.notifyUrl`                            | String |                                    | URL for notify when transaction made                                                      |
| `item.paymentUrl`                           | String |                                    | URL for customer bind their card                                                          |
| `item.recurringPayment.amount`              | Uint64 |                                    | Recurring payment amount                                                                  |
| `item.recurringPayment.currency`            | Uint64 | ENUM("MYR")                        | Recurring payment currency                                                                |
| `item.recurringPayment.recurringInterval`   | Uint64 | ENUM("MONTHLY", "WEEKLY", "DAILY") | Recurring payment interval                                                                |
| `item.recurringPayment.recurringTarget`     | Uint64 |                                    | Recurring target rules can be different values based on interval                          |
| `item.recurringPayment.recurringRepetition` | Uint64 |                                    | Recurring repetition rules, how many times charge the customer card                       |
| `code`                                      | String | ENUM("SUCCESS")                    | Determine request have success                                                            |
| `error.code`                                | String |                                    | Error code                                                                                |
| `error.message`                             | String |                                    | Error message                                                                             |
| `error.debug`                               | String |                                    | Debug message ( sandbox only )                                                            |


### Redirect Response

:::info
Redirect URL to redirect your customer back to your page after card bind, it's can be any of the URL ( deeplink, browser url, server url ) as long as the browser itself can go and process.
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>GET</span><br/>

| Parameter    | Type   | Validation                             | Required | Description           |
| ------------ | ------ | -------------------------------------- | -------- | --------------------- |
| `status`     | String | Enum("SUCCESS", "FAILED", "CANCELLED") | Yes      | Card bind status      |
| `customerId` | String |                                        | Yes      | Card bind customer id |
| `reason`     | String |                                        | No       | Card bind fail reason |

### Notify Response

:::info
Notify URL or Callback URL to inform server on transaction status after payment made. <br />

Notify will call only when the transaction is success, fail and refund will not fired a notify to your server. We suggest you to do a query transaction to get full transaction info if you need full info, for notify will only response the partial transaction info.

Reference: [Query Transaction](./query-transaction.md)
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>GET</span><br/>

| Parameter          | Type   | Validation                | Required | Description                       |
| ------------------ | ------ | ------------------------- | -------- | --------------------------------- |
| `eventType`        | String | Enum("RECURRING_PAYMENT") | Yes      | Notify event type                 |
| `data.amount`      | Uint64 |                           | Yes      | Recurring payment amount          |
| `data.currency`    | String | ENUM("MYR")               | Yes      | Recurring order currency          |
| `data.countryCode` | String |                           | Yes      | Recurring customer country code   |
| `data.phoneNumber` | String |                           | Yes      | Recurring customer phone number   |
| `data.customerId`  | String |                           | Yes      | Recurring customer id             |
| `data.email`       | String |                           | Yes      | Recurring customer email          |
| `data.name`        | String |                           | Yes      | Recurring customer name           |
| `data.merchantId`  | String |                           | Yes      | Merchant id                       |
| `data.storeId`     | String |                           | Yes      | Store id                          |
| `data.orderId`     | String |                           | Yes      | Recurring transaction order id    |
| `data.status`      | String | ENUM("SUCCESS")           | Yes      |                                   |
| `data.createdAt`   | String | RFC3339                   | Yes      | Recurring order created date time |
| `data.updatedAt`   | String | RFC3339                   | Yes      | Recurring order updated date time |

## Tokenization: Tokenized Payment

Tokenized payment is for your to let your customer bind their card and you can take the fund from customer and receive payment based on your own requirements. If you have own recurring engine to process payment you can using this API instead of our recurring payment example like [WooCommerce Subscription Plugin](https://woocommerce.com/products/woocommerce-subscriptions/).

### Create Tokenized Customer

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/tokenized-payment`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/tokenized-payment`

**Request Parameters**

| Parameter            | Type   | Validation | Required | Description                           |
| -------------------- | ------ | ---------- | -------- | ------------------------------------- |
| `storeId`            | String |            | Yes      | Store ID                              |
| `email`              | String |            | Yes      | Customer email                        |
| `name`               | String |            | Yes      | Customer name                         |
| `countryCode`        | String |            | Yes      | Customer country code                 |
| `phoneNumber`        | String |            | Yes      | Customer phone number                 |
| `productName`        | String |            | Yes      | Tokenized product name                |
| `productDescription` | String |            | Yes      | Tokenized product description         |
| `redirectUrl`        | String |            | Yes      | Redirect URL after customer bind card |

```json title="Example Request"
{
    "storeId": "1602660043994159611",
    "email": "oska.ng@revenuemonster.my",
    "name":" Oska Ng OpenAPI",
    "countryCode": "60",
    "phoneNumber": "187824152",
    "redirectUrl": "https://google.com",
    "productName": "card tokenized binding",
    "productDescription": "some description for card tokenized"
}
```

**Response Parameters**

| Parameter                 | Type   | Validation      | Description                                                                               |
| ------------------------- | ------ | --------------- | ----------------------------------------------------------------------------------------- |
| `item.id`                 | String |                 | Recurring payment id                                                                      |
| `item.merchantId`         | String |                 | Merchant ID                                                                               |
| `item.storeId`            | String |                 | Store ID                                                                                  |
| `item.label`              | String |                 | Customer card front six last four digits                                                  |
| `item.email`              | String |                 | Customer email                                                                            |
| `item.countryCode`        | String |                 | Customer country code                                                                     |
| `item.phoneNumber`        | String |                 | Customer phone number                                                                     |
| `item.productName`        | String |                 | Recurring product name                                                                    |
| `item.productDescription` | String |                 | Recurring product description                                                             |
| `item.isActive`           | String |                 | Recurring payment is active, when card bind successfully will automatically become active |
| `item.createdAt`          | String | RFC3339         | Recurring created date time                                                               |
| `item.updatedAt`          | String | RFC3339         | Recurring last updated date time                                                          |
| `item.clientKey`          | String |                 | Internal usage only                                                                       |
| `item.redirectUrl`        | String |                 | URL for customer to redirect after card bind                                              |
| `notifyUrl`               | String |                 | Notify URL when payment has made                                                          |
| `item.paymentUrl`         | String |                 | URL for customer bind their card                                                          |
| `code`                    | String | ENUM("SUCCESS") | Determine request have success                                                            |
| `error.code`              | String |                 | Error code                                                                                |
| `error.message`           | String |                 | Error message                                                                             |
| `error.debug`             | String |                 | Debug message ( sandbox only )                                                            |

### Redirect Response

:::info
Redirect URL to redirect your customer back to your page after card bind, it's can be any of the URL ( deeplink, browser url, server url ) as long as the browser itself can go and process.
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>GET</span><br/>

| Parameter    | Type   | Validation                             | Required | Description           |
| ------------ | ------ | -------------------------------------- | -------- | --------------------- |
| `status`     | String | Enum("SUCCESS", "FAILED", "CANCELLED") | Yes      | Card bind status      |
| `customerId` | String |                                        | Yes      | Card bind customer id |
| `reason`     | String |                                        | No       | Card bind fail reason |

## Tokenization Customer API

This section's api is available for both recurirng payment and tokenized payment's customer mainly just for partner to able utilize the tokenize payment features and also the customer informations. 

:::note
These API will be available only when the customer been binded once else you will not able to use this API to request the customer information.
:::

### Get Customer Info

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL :`https://open.revenuemonster.my/v3/customer/{customer_id}`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/customer/{customer_id}`

**Request Parameters**

| Parameter     | Type  | Validation | Required | Description                                                                  |
| ------------- | ----- | ---------- | -------- | ---------------------------------------------------------------------------- |
| `customer_id` | Param |            | Yes      | Customer ID return from the creation of recurring payment / tokenize payment |

**Response Parameters**

| Parameter                                   | Type   | Validation                         | Description                                                                               |
| ------------------------------------------- | ------ | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| `item.id`                                   | String |                                    | Recurring payment id                                                                      |
| `item.merchantId`                           | String |                                    | Merchant ID                                                                               |
| `item.storeId`                              | String |                                    | Store ID                                                                                  |
| `item.label`                                | String |                                    | Customer card front six last four digits                                                  |
| `item.email`                                | String |                                    | Customer email                                                                            |
| `item.countryCode`                          | String |                                    | Customer country code                                                                     |
| `item.phoneNumber`                          | String |                                    | Customer phone number                                                                     |
| `item.productName`                          | String |                                    | Recurring product name                                                                    |
| `item.productDescription`                   | String |                                    | Recurring product description                                                             |
| `item.isActive`                             | String |                                    | Recurring payment is active, when card bind successfully will automatically become active |
| `item.createdAt`                            | String | RFC3339                            | Recurring created date time                                                               |
| `item.updatedAt`                            | String | RFC3339                            | Recurring last updated date time                                                          |
| `item.clientKey`                            | String |                                    | Internal usage only                                                                       |
| `item.redirectUrl`                          | String |                                    | URL for customer to redirect after card bind                                              |
| `item.notifyUrl`                            | String |                                    | URL for notify when transaction made                                                      |
| `item.paymentUrl`                           | String |                                    | URL for customer bind their card                                                          |
| `item.recurringPayment.amount`              | Uint64 |                                    | Recurring payment amount                                                                  |
| `item.recurringPayment.currency`            | Uint64 | ENUM("MYR")                        | Recurring payment currency                                                                |
| `item.recurringPayment.recurringInterval`   | Uint64 | ENUM("MONTHLY", "WEEKLY", "DAILY") | Recurring payment interval                                                                |
| `item.recurringPayment.recurringTarget`     | Uint64 |                                    | Recurring target rules can be different values based on interval                          |
| `item.recurringPayment.recurringRepetition` | Uint64 |                                    | Recurring repetition rules, how many times charge the customer card                       |
| `code`                                      | String | ENUM("SUCCESS")                    | Determine request have success                                                            |
| `error.code`                                | String |                                    | Error code                                                                                |
| `error.message`                             | String |                                    | Error message                                                                             |
| `error.debug`                               | String |                                    | Debug message ( sandbox only )                                                            |

### Get Customer Orders

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL :`https://open.revenuemonster.my/v3/customer/{customer_id}/orders`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/customer/{customer_id}/orders`

**Request Parameters**

| Parameter     | Type  | Validation | Required | Description                                                                  |
| ------------- | ----- | ---------- | -------- | ---------------------------------------------------------------------------- |
| `customer_id` | Param |            | Yes      | Customer ID return from the creation of recurring payment / tokenize payment |

**Response Parameters**

| Parameter                    | Type   | Validation      | Description                            |
| ---------------------------- | ------ | --------------- | -------------------------------------- |
| `item.*.id`                  | String |                 | Recurring order id                     |
| `item.merchantId`            | String |                 | Merchant ID                            |
| `item.storeId`               | String |                 | Store ID                               |
| `item.*.recurringCustomerId` | String |                 | Customer ID                            |
| `item.*.transactionId`       | String |                 | Transaction ID                         |
| `item.*.createdAt`           | String | RFC3339         | Recurring order created date time      |
| `item.*.updatedAt`           | String | RFC3339         | Recurring order last updated date time |
| `item.*.amount`              | Uint64 |                 | Recurring order payment amount         |
| `item.*.currency`            | String | ENUM("MYR")     | Recurring order currency               |
| `code`                       | String | ENUM("SUCCESS") | Determine request have success         |
| `error.code`                 | String |                 | Error code                             |
| `error.message`              | String |                 | Error message                          |
| `error.debug`                | String |                 | Debug message ( sandbox only )         |

### Toggle Customer Status

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>PUT</span><br/>
URL :`https://open.revenuemonster.my/v3/customer/{customer_id}/status`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/customer/{customer_id}/status`

**Request Parameters**

| Parameter     | Type  | Validation | Required | Description                                                                  |
| ------------- | ----- | ---------- | -------- | ---------------------------------------------------------------------------- |
| `customer_id` | Param |            | Yes      | Customer ID return from the creation of recurring payment / tokenize payment |


**Response Parameters**

| Parameter                                   | Type   | Validation                         | Description                                                                               |
| ------------------------------------------- | ------ | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| `item.id`                                   | String |                                    | Recurring payment id                                                                      |
| `item.merchantId`                           | String |                                    | Merchant ID                                                                               |
| `item.storeId`                              | String |                                    | Store ID                                                                                  |
| `item.label`                                | String |                                    | Customer card front six last four digits                                                  |
| `item.email`                                | String |                                    | Customer email                                                                            |
| `item.countryCode`                          | String |                                    | Customer country code                                                                     |
| `item.phoneNumber`                          | String |                                    | Customer phone number                                                                     |
| `item.productName`                          | String |                                    | Recurring product name                                                                    |
| `item.productDescription`                   | String |                                    | Recurring product description                                                             |
| `item.isActive`                             | String |                                    | Recurring payment is active, when card bind successfully will automatically become active |
| `item.createdAt`                            | String | RFC3339                            | Recurring created date time                                                               |
| `item.updatedAt`                            | String | RFC3339                            | Recurring last updated date time                                                          |
| `item.clientKey`                            | String |                                    | Internal usage only                                                                       |
| `item.redirectUrl`                          | String |                                    | URL for customer to redirect after card bind                                              |
| `item.notifyUrl`                            | String |                                    | URL for notify when transaction made                                                      |
| `item.paymentUrl`                           | String |                                    | URL for customer bind their card                                                          |
| `item.recurringPayment.amount`              | Uint64 |                                    | Recurring payment amount                                                                  |
| `item.recurringPayment.currency`            | Uint64 | ENUM("MYR")                        | Recurring payment currency                                                                |
| `item.recurringPayment.recurringInterval`   | Uint64 | ENUM("MONTHLY", "WEEKLY", "DAILY") | Recurring payment interval                                                                |
| `item.recurringPayment.recurringTarget`     | Uint64 |                                    | Recurring target rules can be different values based on interval                          |
| `item.recurringPayment.recurringRepetition` | Uint64 |                                    | Recurring repetition rules, how many times charge the customer card                       |
| `code`                                      | String | ENUM("SUCCESS")                    | Determine request have success                                                            |
| `error.code`                                | String |                                    | Error code                                                                                |
| `error.message`                             | String |                                    | Error message                                                                             |
| `error.debug`                               | String |                                    | Debug message ( sandbox only )                                                            |

### Create Customer Order ( Payment )

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>POST</span><br/>
URL :`https://open.revenuemonster.my/v3/customer/{customer_id}/order`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/customer/{customer_id}/order`

:::caution
This API will use the customer binded card to make a payment, it's not a manual order creation.
:::

**Request Parameters**

| Parameter     | Type   | Validation  | Required | Description                                                                  |
| ------------- | ------ | ----------- | -------- | ---------------------------------------------------------------------------- |
| `customer_id` | Param  |             | Yes      | Customer ID return from the creation of recurring payment / tokenize payment |
| `currency`    | String | ENUM("MYR") | Yes      | Payment currency                                                             |
| `amount`      | Uint64 |             | Yes      | Payment amount                                                               |
| `title`       | String |             | No       | Payment information title                                                    |
| `description` | String |             | No       | Payment information description                                              |

```json title="Example Request"
{
    "currency": "MYR",
    "amount": 100,
    "title": "Some order title",
    "description": "Some order description"
}
```

**Response Parameters**

| Parameter       | Type   | Validation                                                      | Description                    |
| --------------- | ------ | --------------------------------------------------------------- | ------------------------------ |
| `item`          | JSON   | [Transaction Object](./query-transaction.md#transaction-object) | Transaction response           |
| `code`          | String | ENUM("SUCCESS")                                                 | Determine request have success |
| `error.code`    | String |                                                                 | Error code                     |
| `error.message` | String |                                                                 | Error message                  |
| `error.debug`   | String |                                                                 | Debug message ( sandbox only ) |