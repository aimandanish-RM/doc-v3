---
id: opencart
title: Opencart
sidebar_label: Opencart
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

:::note
Enable RM payment for Opencart
:::

### Step 1 : Install RM in Opencart

Go to this link [Install RM payment gateway](https://github.com/RevenueMonster/opencart-payment-gateway) > Code > Download ZIP<br/>

![image](/img/gif/download-opencart.png)

### Step 2 : Plugin RM in Opencart

Go to Extensions > Installer > Upload File > Upload the Zip file<br/>

![image](/img/gif/install-opencart.png)

### Step 3 : Enable RM plug-in

![image](/img/gif/enable-opencart.gif)<br/>
Go to Extensions > Extensions > Choose payments > <b>Install</b> Revenue Monster Payment Gateway

### Step 4 : Setup Payment Gateway

| Title                  | Required | Example                                                                                                                      |
| ---------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Sandbox Mode           | Optional | Yes                                                                                                                          |
| Debug Model            | Optional | Disabled                                                                                                                     |
| RM Client ID           | Yes      | <a href="https://doc.revenuemonster.my/docs/quickstart/signature-algorithm#step-1--create-new-application">Get Client ID</a> |
| RM Client Secret       | Yes      | <a href="https://doc.revenuemonster.my/docs/quickstart/signature-algorithm#step-2--obtain-credential">Get Client Secret</a>  |
| RM Store ID            | Yes      | [RM Merchant portal](https://merchant.revenuemonster.my/) > Store Management > Store ID                                      |
| RM Client Private Key  | Yes      | <a href="https://doc.revenuemonster.my/docs/quickstart/signature-algorithm#generate-rsa-keys">Get Client Private Key</a>     |
| Payment Success Status | Optional | Processing                                                                                                                   |
| Total                  | Yes      | 0.10                                                                                                                         |
| Geo Zone               | Yes      | All Zones                                                                                                                    |
| Status                 | Yes      | Enabled                                                                                                                      |

After done all the flow click **Save**<br/>

![image](/img/gif/setup-opencart.gif)<br/>

### Example of Payment

<b>Web view</b> <br />

![image](/img/gif/webview-opencart.gif) <br />

<b>Mobile view</b> <br />

![image](/img/gif/mobileview-opencart.gif)
