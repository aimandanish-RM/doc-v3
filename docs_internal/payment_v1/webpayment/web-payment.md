---
id: web-payment
title: Web/Mobile Payment Transaction
sidebar_label: Web/Mobile Payment Transaction
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

:::note

- Used by e-commerce and SaaS businesses for one-time purchases.

- Demo Web Payment (Version 3): [Click Here](https://sb-api.revenuemonster.my/demo/payment/online)

- Web Payment Sequence Diagram

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
    Click Here
  </Button>
</Flex>
:::

### Example of Web Payment

![image](/img/gif/web-payment.gif)

### Example of Mobile Web Payment

<img src="/img/gif/mobile-web-payment.gif" width="300" height="600" />

<!-- ![image](/img/gif/mobile-web-payment.gif) -->

<hr />

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/online`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/online`

:::note

- To create a unified payment checkout page for your website and Mobile.
- **Data object** needs to be sorted, the **Nested object** also needs to be sorted.

:::

### Request Parameters

| Parameter       | Type     | Required | Description                                                                                     | Example                                                                                                               |
| --------------- | -------- | -------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `order`         | Object   | Yes      | Object of order                                                                                 | (Refer to explanation below)                                                                                          |
| `method`        | []String | Yes      | RM currently supported method                                                                   | ["WECHATPAY_MY","WECHATPAY_CN" <br/>,"PRESTO_MY","BOOST_MY","TNG_MY" , "ALIPAY_CN","GRABPAY_MY","RAZER_MY", GOBIZ_MY] |
| `type`          | String   | Yes      | Obejct of type                                                                                  | (Refer to explanation below)                                                                                          |
| `storeId`       | String   | Yes      | ID of the store to create QR code                                                               | "10946114768247530"                                                                                                   |
| `paymentOrders` | []String | Optional | Sequence of the payment method tabs                                                             | ["WALLET","ONLINE_BANKING","CARD", <br/>"PAY_LATER"]                                                                  |
| `redirectUrl`   | String   | Yes      | URL to redirect after payment is made                                                           | "https://google.com"                                                                                                  |
| `notifyUrl`     | String   | Yes      | This is a notify URL or callback URL to inform server on transaction status after payment made. | "https://google.com"                                                                                                  |
| `layoutVersion` | String   | Optional | Select layout for Web payment                                                                   | V1 / **V2 (Supported Credit Card)**                                                                                   |

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

<hr />

For **MOBILE_PAYMENT** only, please apply at application.

<strong>SDK for MOBILE_PAYMENT</strong> :-

- [RM-IOS](https://github.com/RevenueMonster/RM-IOS)
- [RM-Android](https://github.com/RevenueMonster/RM-Android) <br/><br />

<hr />

> Example Request

```json
curl --location --request POST "{{open_base_path}}/v3/payment/online" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer {{clientToken}}" \
  --header "X-Nonce-Str: XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG" \
  --header "X-Signature: sha256 YTTV0p1XJUllLNwAC/m430ZbteZhdBmUm3aVnKH4XEZU2yfl7liCPzEI40VqTwFcmMLByJ0mRyzc97gzVn1XZVIr1DaPpW3LUv/on82hIDhLue4uJzKg+vS8/CKJC4+SJ1NpL4rDQEg/hdq4mrNIckTN5+UCFbM4tLCDN8FanSoI3SxcfmvfBwuOc5ro4WWStJlr/LxLJWHRdI8ZpTc1gmNkzRKA9YXJI6iACrkg4cUtMkQ0nii9dHu+brKtK2gCtZ6kdPxgiykDlJuPcpHBGsG+wjNGXLxNeeZjbIl6m40dtdwwyiDbdsk/ZelN0J8Xw1rti7a7dHY/vNnN4W+tUA==" \
  --header "X-Timestamp: 1547643342" \
  --data "{
    \"order\": {
    	\"title\": \"hello\",
    	\"detail\": \"hello\",
    	\"additionalData\": \"world\",
	    \"amount\": 100,
	    \"currencyType\": \"MYR\",
	    \"id\": \"13234353336\"
    },
    \"customer\": {
      \"userId\": \"13245876\",
      \"email\": "",
      \"countryCode\": "",
      \"phoneNumber\": "",
    },
    \"method\": [],
    \"type\": \"WEB_PAYMENT\",
    \"storeId\": \"977596145540933417\",
    \"redirectUrl\": \"https://google.com\",
    \"notifyUrl\": \"https://google.com\",
    \"layoutVersion\": \"v3\"
}"
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

<hr />

### Advance Options

<details>
  <summary>
    <b>Create individual payment checkout</b>
  </summary>
  <br />
  After you get the <b>url</b> from <b>response API</b>, you can append a query
  String
  <br />
  <br />
  Example:
  <br />
  <b>
    https://sb-pg.revenuemonster.my/v4/checkout?checkoutId=1548316308361173347&method=TNG_MY
  </b>
</details>
