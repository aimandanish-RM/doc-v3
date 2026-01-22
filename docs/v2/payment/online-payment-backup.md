
## Extra: Card-on-File Tokenization ( CoFT )

Card-on-File Tokenization ( CoFT ) will be applied when your customer doing card payment, they will return the customer token to allow your customer can proceed payment without key in again full card information to provide better security so you will able to get customer token or remove the token via API and also payment with [Direct Payment Checkout API](#mode-gobiz-w-token).

:::note
We suggest you to calling the get customer token api after the transaction is success or after the webhook, else the token might not exists even you're completed the payments.
:::

### Get Customer Tokens

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/tokens/{customer_id}`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/tokens/{customer_id}`

**Request Parameters**

| Parameter     | Type  | Validation | Required | Description                                                   |
| ------------- | ----- | ---------- | -------- | ------------------------------------------------------------- |
| `customer_id` | Param |            | Yes      | Customer ID you have used when create online payment checkout |

**Response Paramters**

| Parameter                | Type   | Validation                 | Description                             |
| ------------------------ | ------ | -------------------------- | --------------------------------------- |
| `item.*.id`              | String |                            | Token ID                                |
| `item.*.label`           | String |                            | Token label                             |
| `item.*.provider`        | String | ENUM("GOBIZ")              | Token provider                          |
| `item.*.token`           | String |                            | Use this token when proceed payment     |
| `item.*.country`         | String | ENUM("MY")                 | Token country                           |
| `item.*.createdAt`       | String | RFC3339                    | Payment checkout created date time      |
| `item.*.updatedAt`       | String | RFC3339                    | Payment checkout last updated date time |
| `item.*.card.name`       | String |                            | Card name when input card information   |
| `item.*.card.method`     | String | ENUM("MASTERCARD", "VISA") | Card type                               |
| `item.*.card.lastFourNo` | String |                            | Last four digit of the card             |
| `item.*.card.expMonth`   | Uint64 |                            | Card expiry month                       |
| `item.*.card.expYear`    | Uint64 |                            | Card expriy year                        |
| `code`                   | String | ENUM("SUCCESS")            | Determine request have success          |
| `error.code`             | String |                            | Error code                              |
| `error.message`          | String |                            | Error message                           |
| `error.debug`            | String |                            | Debug message ( sandbox only )          |

### Delete Customer Token

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>DELETE</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/tokens/{customer_id}`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/tokens/{customer_id}`

**Request Parameters**

| Parameter     | Type   | Validation | Required | Description                                                   |
| ------------- | ------ | ---------- | -------- | ------------------------------------------------------------- |
| `customer_id` | Param  |            | Yes      | Customer ID you have used when create online payment checkout |
| `token`       | String |            | Yes      | Token                                                         |

```json title="Example Request"
{
  "token": "tk10f26d83de548aee420872dae999992475"
}
```

**Response Paramters**

| Parameter                | Type   | Validation                 | Description                             |
| ------------------------ | ------ | -------------------------- | --------------------------------------- |
| `item.*.id`              | String |                            | Token ID                                |
| `item.*.label`           | String |                            | Token label                             |
| `item.*.provider`        | String | ENUM("GOBIZ")              | Token provider                          |
| `item.*.token`           | String |                            | Use this token when proceed payment     |
| `item.*.country`         | String | ENUM("MY")                 | Token country                           |
| `item.*.createdAt`       | String | RFC3339                    | Payment checkout created date time      |
| `item.*.updatedAt`       | String | RFC3339                    | Payment checkout last updated date time |
| `item.*.card.name`       | String |                            | Card name when input card information   |
| `item.*.card.method`     | String | ENUM("MASTERCARD", "VISA") | Card type                               |
| `item.*.card.lastFourNo` | String |                            | Last four digit of the card             |
| `item.*.card.expMonth`   | Uint64 |                            | Card expiry month                       |
| `item.*.card.expYear`    | Uint64 |                            | Card expriy year                        |
| `code`                   | String | ENUM("SUCCESS")            | Determine request have success          |
| `error.code`             | String |                            | Error code                              |
| `error.message`          | String |                            | Error message                           |
| `error.debug`            | String |                            | Debug message ( sandbox only )          |