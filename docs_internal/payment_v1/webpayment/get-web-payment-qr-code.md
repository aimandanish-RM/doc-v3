---
id: get-web-payment-qr-code
title: Get Individual QR Code
sidebar_label: Get Individual QR Code
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/online/qrcode?checkoutId=1561390635417535731&method=WECHATPAY_MY`<br/><br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/online/qrcode?checkoutId=1561390635417535731&method=WECHATPAY_MY`

:::note
Generate a QR code to display on your web or mobile for user to scan
:::

**Example of Indvidual QR Code**

<details>
  <summary>
    <b> Decoder your Image using Base64</b>
  </summary>
  Using <b>qrCodeImageBase64</b> URL to generate a QR Code
  <Card width="100%">
    <Image src="/img/payment-image/individual-qr-code.png" />
  </Card>
</details>

<details>
  <summary>
    <b>User will received</b>
  </summary>
  Once user scan the QR Code it will display 
  <Card width="100%">
    <Image src="/img/payment-image/check-out-payment.png" />
  </Card>
</details>
<br/>

### Request Parameters

| Parameter    | Type   | Description                                                 | Example               |
| ------------ | ------ | ----------------------------------------------------------- | --------------------- |
| `checkoutId` | String | Code to identify web payment url                            | "1547775958720585401" |
| `method`     | String | [RM currently supported method](../.././payment-method.mdx) | ["WECHATPAY_MY"]      |

<br/>

### Response Parameters

| Parameter           | Type   | Description                           | Example                       |
| ------------------- | ------ | ------------------------------------- | ----------------------------- |
| `qrCodeImageBase64` | String | Decoder the Url by using Base64 Image | Example will display at above |
| `url`               | String | payment Url                           | Example will display at below |

> Example Response

```json
{
  "item": {
    "qrCodeImageBase64": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABlBMVEX///8AAABVwtN+AAADOUlEQVR42uzdwW7bOhAF0Pj/f/ot3yZm7iWHaWCdu2oRC5BOAGo8Q7ZfIiIiIiIiIiIiIiIi8vo5b6/4/6/rj7y97LuPfHdXm3cKAAAAABlA+tP1Q7xFWX8ufYiTnwIAAADAjxe+XXnTxX79OJtvgf5OAQAAAOAWQMXz9rLgDt7+FAAAAAD+BMD6svX396DSPvllAAAAAMCFfkD6tT+lTV8U6SMCAAAAwNXJ0B/5078bjQEAAOAzAU5K5qAUTgdA1+8fAAAAALp+wPEeoaqx2fdXp9Z+AAAAPBsgXefTBwu+51cNhaBAn1IAAADAEwHS3Y3BR04q3uq9sX4tAQAAAMCF5fBEK91B2c/cR3sJAAAAeCJA0OzsewnpkL06WhO0BwAAAADgcCU86Wn299Cv5JdGSwAAAADwqp4uWNjTfd7BO+dmFwAAAADPBqjalNUpwHQRT5+kP7QIAAAAABeq4H5drg4jpj2CqYYwAAAAALz644H9JKcvhYNrR88MAQAA4IkAa5Sq9q0m2X2lPb8hAAAAAAC6LYn9hDp9nKrE3WwoAAAAAEDbGejvq9pLWQ3Ag18aAAAAAExMhtJpeXWqJt2Mno7b53eKAgAA4IkAfYmb7lU82fsYtEJ/uyECAACAzwQYPN237psGa3oqc7MhAgAAgIcBpEXs9JpeDY/mz8gAAAAAwNfmSp7ibXpM/0YAAAAAYKserorYqu0ZNDZvbg8HAAAAgKEOZdWw3NwoXp3SBgAAAIDZerjatd0X1OkpmOowIgAAAADsV8EVVFDnpn3O484AAAAAAMxulDx54mqZTrcbXdoeCQAAAADxN/l+iT8psn9ntyQAAAAAxP+/QHBfad0c1MPpBGl+pygAAACeA7BZMvenCk8G70EPFwAAAABeU0OhapLdt0zTidRmHwIAAAAADpui625BOqtO69x+0j6/XR4AAAAANorToBqtJuObu8rnGyIAAAAA0G0ASmWCWroaKI2WwgAAAAAQf51PnySoudMl/lIbGAAAAAB2/yX/dACU7umphuxTu4UAAAAAYGi6Hbwjqg7C+nZH5/4AAAB4LICIiIiIiIiIiIiIiIh8Vv4LAAD//+flU07X8QYtAAAAAElFTkSuQmCC",
    "url": "https://mywallet.wechatpay.com.my/app/pay/myw_order_idx.cgi?prepay_id=415613907510f1b0e0920320010983"
  },
  "code": "SUCCESS"
}
```
