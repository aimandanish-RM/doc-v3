---
id: deeplink-integration
title: "DeepLink Integration"
sidebar_label: "DeepLink Integration"
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

# Deeplink Integration

Deeplink Integration enables businesses to manage their orders through a single mobile application and process transactions using various payment methods, thereby enhancing the customer experience.

:::note
This integration is compatible with any mobile device or terminal, as long as you are using our application.
:::

# Deeplink

:::caution
This is applicable to the Merchant App on terminals with versions greater than 2.10.0.

Demo: [applink-demo](https://github.com/RevenueMonster/applink-demo)
:::

## Application Receiver

### Setup 1: AndroidManifest

```xml
<activity android:name=".ReceiverActivity" android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.SEND" />
        <category android:name="android.intent.category.DEFAULT" />
        <data android:mimeType="text/plain" />
    </intent-filter>
</activity>
```

### Setup 2: ReceiverActivity

```kotlin
class ReceiverActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        //....

        try {
            val keySet: Set<String> = intent?.extras!!.keySet()
            keySet.forEach {
                Log.v("Receiver", "key = $it || value = ${intent.extras!![it]}")
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }

        val result = intent?.getStringExtra("result")
        val transactionType = intent?.getIntExtra("transactionType")
        //Do your code here

    }
}
```


## Deeplink: Quick Pay

```kotlin
val i = Intent("REVENUE_MONSTER_PAYMENT").apply {
    putExtra("packageName", packageName)
    putExtra("receiverName", <<YOUR_ACTIVITY>>::class.java.name)
    putExtra("transactionType", 1)
    putExtra("orderId", System.currentTimeMillis().toString())
    putExtra("orderTitle", "Intent Demo")
    putExtra("amount", 10)
    putExtra("printReceipt", false)
}
startActivity(i)
```

**Response Parameters**

```kotlin
val jsonString = intent?.getStringExtra("result")
```

| Parameter       | Type   | Validation                                                      | Description                    |
| --------------- | ------ | --------------------------------------------------------------- | ------------------------------ |
| `item`          | JSON   | [Transaction Object](./query-transaction.md#transaction-object) | Transaction response           |
| `code`          | String | ENUM("SUCCESS")                                                 | Determine request have success |
| `error.code`    | String |                                                                 | Error code                     |
| `error.message` | String |                                                                 | Error message                  |

## Deeplink: Card Payment

```kotlin
val i = Intent("REVENUE_MONSTER_PAYMENT").apply {
    putExtra("packageName", packageName)
    putExtra("receiverName", <<YOUR_ACTIVITY>>::class.java.name)
    putExtra("transactionType", 2)
    putExtra("orderId", System.currentTimeMillis().toString())
    putExtra("orderTitle", "Intent Demo")
    putExtra("amount", 100)
    putExtra("printReceipt", false)
}
startActivity(i)
```

Note: For terminal MF919 we had no control for the receipt printing.

**Response Parameters**

```kotlin
val jsonString = intent?.getStringExtra("result")
```

| Parameter       | Type   | Validation                                                      | Description                    |
| --------------- | ------ | --------------------------------------------------------------- | ------------------------------ |
| `item`          | JSON   | [Transaction Object](./query-transaction.md#transaction-object) | Transaction response           |
| `code`          | String | ENUM("SUCCESS")                                                 | Determine request have success |
| `error.code`    | String |                                                                 | Error code                     |
| `error.message` | String |                                                                 | Error message                  |

## Deeplink: Void Transaction

```kotlin
val i = Intent("REVENUE_MONSTER_PAYMENT").apply {
    putExtra("packageName", packageName)
    putExtra("receiverName", <<YOUR_ACTIVITY>>::class.java.name)
    putExtra("transactionType", 3)
    putExtra("transactionId", "240620034957010325054813")
    putExtra("reason", "Wrong Order")
    putExtra("email", "test@abc.my")
    putExtra("pin", "456789")
    putExtra("printReceipt", false)
}
startActivity(i)
```

**Response Parameters**

```kotlin
val jsonString = intent?.getStringExtra("result")
```

| Parameter       | Type   | Validation                                                      | Description                    |
| --------------- | ------ | --------------------------------------------------------------- | ------------------------------ |
| `item`          | JSON   | [Transaction Object](./query-transaction.md#transaction-object) | Transaction response           |
| `code`          | String | ENUM("SUCCESS")                                                 | Determine request have success |
| `error.code`    | String |                                                                 | Error code                     |
| `error.message` | String |                                                                 | Error message                  |

## Deeplink: Wallet Settlement

```kotlin
val i = Intent("REVENUE_MONSTER_PAYMENT").apply {
    putExtra("packageName", packageName)
    putExtra("receiverName", <<YOUR_ACTIVITY>>::class.java.name)
    putExtra("transactionType", 4)
    putExtra("print", false)
}
startActivity(i)
```

**Response Parameters**

```kotlin
val jsonString = intent?.getStringExtra("result")
```

| Parameter                   | Type   | Validation | Description               |
| --------------------------- | ------ | ---------- | ------------------------- |
| `totalSalesAmount`          | Uint64 |            | Total sales amount        |
| `totalSalesCount`           | Uint64 |            | Total sales count         |
| `totalRefundedAmount`       | Uint64 |            | Total refunded amount     |
| `totalRefundedCount`        | Uint64 |            | Total refunded count      |
| `wallet[*].name`            | String |            | Wallet name               |
| `wallet[*].method`          | String |            | Wallet method             |
| `wallet[*].region`          | String |            | Wallet region             |
| `wallet[*].sales.count`     | Uint64 |            | Wallet sales count        |
| `wallet[*].sales.amount`    | Uint64 |            | Wallet sales amount       |
| `wallet[*].refunded.count`  | Uint64 |            | Wallet refunded count     |
| `wallet[*].refunded.amount` | Uint64 |            | Wallet refunded amount    |
| `range[*]`                  | String | RFC3339    | Range of settlement dates |

## Deeplink: Card Settlement

```kotlin
val i = Intent("REVENUE_MONSTER_PAYMENT").apply {
    putExtra("packageName", packageName)
    putExtra("receiverName", <<YOUR_ACTIVITY>>::class.java.name)
    putExtra("transactionType", 5)
}
startActivity(i)
```

**Response Parameters**

```kotlin
val jsonString = intent?.getStringExtra("result")
```

| Parameter                       | Type   | Validation          | Description                                               |
| ------------------------------- | ------ | ------------------- | --------------------------------------------------------- |
| `code`                          | String | ENUM("SUCCESS")     | Determine request have success                            |
| `error.code`                    | String |                     | Error code                                                |
| `error.message`                 | String |                     | Error message                                             |
| `error.debug`                   | String |                     | Debug message ( sandbox only )                            |
| `summary.batchNo`               | String |                     | Sequence no. of the terminal settlement                   |
| `summary.currencyType`          | String | ENUM("MYR")         | Settlement Currency Type ( currently supported MYR only)  |
| `summary.noOfTransactions`      | Uint64 |                     | Count of settled transactions                             |
| `summary.settlementAt`          | String | RFC3339             | Date and time of the settlement                           |
| `summary.totalSalesAmount`      | Uint64 |                     | Total sales amount in cents                               |
| `transactions[*].amount`        | Uint64 |                     | Transactions amount in cents                              |
| `transactions[*].currencyType`  | Uint64 | ENUM("MYR")         | Transaction Currency Type ( currently supported MYR only) |
| `transactions[*].transactionAt` | String | RFC3339             | Date and time of the transaction                          |
| `transactions[*].transactionId` | String |                     | Transaction ID                                            |
| `transactions[*].type`          | String | ENUM("SALE","VOID") | Transaction type                                          |


