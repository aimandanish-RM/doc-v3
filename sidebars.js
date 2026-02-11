//next task side bar and custom css


module.exports = {
  someSidebar: {
    Introduction: ["introduction/overview", "introduction/usecase"],

    "Quick Start": [
      {
        type: "category",
        label: "SDK",
        items: ["quickstart/sdk", "quickstart/mobile-sdk"],
      },
      "quickstart/signature-algorithm",
      "quickstart/verify-signature",
{
  type: "category",
  label: "Access Token",
  items: [
    {
      type: "doc",
      id: "quickstart/accesstoken/client-credentials",
      className: "api-post",
    },
    {
      type: "doc",
      id: "quickstart/accesstoken/authorization-code",
      className: "api-post",
    },
    {
      type: "doc",
      id: "quickstart/accesstoken/refresh-token",
      className: "api-post",
    },
  ],
}

    ],

"Merchant Onboarding": [
  "merchant-onboarding/introduction",

  {
    type: "doc",
    id: "merchant-onboarding/create-merchant",
    className: "api-post",
  },
  {
    type: "doc",
    id: "merchant-onboarding/get-merchants",
    className: "api-get",
  },
  {
    type: "doc",
    id: "merchant-onboarding/get-merchant",
    className: "api-get",
  },
  {
    type: "doc",
    id: "merchant-onboarding/update-merchant",
    className: "api-patch",
  },
  {
    type: "doc",
    id: "merchant-onboarding/submit-merchant-for-review",
    className: "api-post",
  },
  {
    type: "doc",
    id: "merchant-onboarding/upload-merchant-file",
    className: "api-post",
  },

  {
    type: "category",
    label: "Application Clients",
    items: [
      {
        type: "doc",
        id: "merchant-onboarding/application-clients/get-application-clients",
        className: "api-get",
      },
      {
        type: "doc",
        id: "merchant-onboarding/application-clients/create-application-client",
        className: "api-post",
      },
      {
        type: "doc",
        id: "merchant-onboarding/application-clients/update-application-client",
        className: "api-put",
      },
    ],
  },
],



Payment: [
  {
    type: "doc",
    id: "v2/payment/quick-pay",
    className: "api-post",
  },
  {
    type: "doc",
    id: "v2/payment/query-transaction",
    className: "api-get",
  },
  {
    type: "doc",
    id: "v2/payment/cancel-transaction",
    className: "api-post",
  },
  {
    type: "doc",
    id: "v2/payment/terminal-integration",
    className: "api-post",
  },
  "v2/payment/deeplink-integration",
  {
    type: "doc",
    id: "v2/payment/online-payment",
    className: "api-post",
  },
  {
    type: "doc",
    id: "v2/payment/tokenization-payment",
    className: "api-post",
  },
  {
    type: "doc",
    id: "v2/payment/reconciliation",
    className: "api-post",
  },
],


    // "(Deprecated) Payment": [
    //   "payment/overview",
    //   "payment/quick-pay",
    //   {
    //     type: "category",
    //     label: "Transaction QR",
    //     items: [
    //       "payment/transactionQR/transaction-qr",
    //       "payment/transactionQR/get-transaction-qr-code-url",
    //       "payment/transactionQR/get-transaction-qr-code-url-by-code",
    //       "payment/transactionQR/get-transaction-by-code",
    //     ],
    //   },
    //   {
    //     type: "category",
    //     label: "Web/Mobile Payment",
    //     items: [
    //       "payment/webpayment/web-payment",
    //       "payment/webpayment/notify-url",
    //       // "payment/webpayment/get-web-payment-qr-code",
    //       "payment/webpayment/qr-code&url-by-checkout-id",
    //       "payment/webpayment/get-online-transaction",
    //       "payment/customertoken/get-customer-token",
    //       "payment/customertoken/delete-customer-token",
    //     ],
    //   },
    //   {
    //     type: "category",
    //     label: "Customer Binding",
    //     items: [
    //       {
    //         type: "category",
    //         label: "Recurring Payments",
    //         items: [
    //           "payment/customer/recurringpayment/create-recurring-customer"
    //         ]
    //       },
    //       {
    //         type: "category",
    //         label: "Tokenized Payments",
    //         items: [
    //           "payment/customer/tokenizedpayment/create-tokenized-customer",
    //         ]
    //       },
    //       "payment/customer/toggle-customer-status",
    //       "payment/customer/get-customer-orders",
    //       "payment/customer/create-customer-order",
    //     ],
    //   },
    //   "payment/alipay-mini-program",
    //   "payment/refund",
    //   "payment/reverse",
    //   "payment/query-status-by-order-id",
    //   "payment/query-status-by-transaction-id",
    //   "payment/get-fpx-bank-list",
    //   "payment/get-all-transaction",
    //   "payment/daily-settlement-report",
    // ],

    // "(Deprecated) POS Integration": [
    //   "pos/payment",
    //   "pos/cancellation",
    //   "pos/card-refund",
    //   "pos/card-settlement",
    // ],

"Visa Offers Platform": [
  {
    type: "doc",
    id: "visa-vop/enroll-user",
    className: "api-post",
  },
  {
    type: "doc",
    id: "visa-vop/unenroll-user",
    className: "api-delete",
  },
  {
    type: "doc",
    id: "visa-vop/enroll-card",
    className: "api-post",
  },
  {
    type: "doc",
    id: "visa-vop/unenroll-card",
    className: "api-delete",
  },
  "visa-vop/webhook",
],


    Plugin: [
  "v2/plugin/introduction",
  "v2/plugin/integration",
],

"à la carte": [
  "alacarte-open/introduction",
  {
    type: "category",
    label: "Orders",
    items: [
      {
        type: "doc",
        id: "alacarte-open/orders/get-orders-by-store-id",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/orders/get-order-by-id",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/orders/update-order-status",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/orders/refund-order",
        className: "api-post",
      },
    ],
  },
  {
    type: "category",
    label: "Store",
    items: [
      {
        type: "doc",
        id: "alacarte-open/store/get-store-by-id",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/store/update-store-by-id-delivery",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/store/update-store-by-id-types",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/store/update-store-by-id-availability",
        className: "api-post",
      },
    ],
  },
  {
    type: "category",
    label: "Inventory",
    items: [
      {
        type: "doc",
        id: "alacarte-open/inventory/create-category-by-store-id",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/inventory/get-categories-by-store-id",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/inventory/update-category-by-id",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/inventory/create-item",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/inventory/get-items-by-category-id",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/inventory/get-all-items-by-store-id",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/inventory/update-item-by-id",
        className: "api-post",
      },
      {
        type: "doc",
        id: "alacarte-open/inventory/update-item-quantity-by-id",
        className: "api-post",
      },
    ],
  },
  {
    type: "doc",
    id: "alacarte-open/set-notification",
    className: "api-post",
  },
],


"Loyalty & Voucher": [
  {
    type: "category",
    label: "Member",
    items: [
      {
        type: "doc",
        id: "campaign/member/register-loyalty-member",
        className: "api-post",
      },
      {
        type: "doc",
        id: "campaign/member/check-loyalty-member",
        className: "api-post",
      },
      {
        type: "doc",
        id: "campaign/member/profile",
        className: "api-get",
      },
      {
        type: "category",
        label: "Vouchers",
        items: [
          {
            type: "doc",
            id: "campaign/member/vouchers/vouchers-detail",
            className: "api-get",
          },
          {
            type: "doc",
            id: "campaign/member/vouchers/voucher-by-code",
            className: "api-get",
          },
          {
            type: "doc",
            id: "campaign/member/vouchers/redeem-voucher",
            className: "api-post",
          },
        ],
      },
      {
        type: "category",
        label: "Rewards",
        items: [
          {
            type: "doc",
            id: "campaign/member/rewards/rewards-detail",
            className: "api-get",
          },
          {
            type: "doc",
            id: "campaign/member/rewards/reward-by-id",
            className: "api-get",
          },
          {
            type: "doc",
            id: "campaign/member/rewards/redeem-reward",
            className: "api-post",
          },
        ],
      },
    ],
  },
  {
    type: "category",
    label: "Loyalty",
    items: [
      {
        type: "category",
        label: "Loyalty Point",
        items: [
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-point/give-loyalty-point",
            className: "api-post",
          },
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-point/deduct-loyalty-point",
            className: "api-delete",
          },
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-point/spending-loyalty-point",
            className: "api-post",
          },
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-point/cancel-spending-loyalty-point",
            className: "api-post",
          },
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-point/calculate-spending-reward",
            className: "api-post",
          },
        ],
      },
      {
        type: "category",
        label: "Loyalty Members",
        items: [
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-members/member-authorize",
            className: "api-post",
          },
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-members/loyalty-members",
            className: "api-get",
          },
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-members/loyalty-member",
            className: "api-get",
          },
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-members/loyalty-member-history",
            className: "api-get",
          },
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-members/bulk-create-members",
            className: "api-post",
          },
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-members/topup-online",
            className: "api-post",
          },
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-members/topup-offline",
            className: "api-post",
          },
        ],
      },
      {
        type: "category",
        label: "Loyalty Balance",
        items: [
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-balance/get-loyalty-balances",
            className: "api-get",
          },
          {
            type: "doc",
            id: "campaign/loyalty/loyalty-balance/spend-loyalty-balance",
            className: "api-post",
          },
        ],
      },
    ],
  },
  {
    type: "category",
    label: "Voucher",
    items: [
      "campaign/voucher/overview",
      {
        type: "doc",
        id: "campaign/voucher/get-voucher-batches",
        className: "api-get",
      },
      {
        type: "doc",
        id: "campaign/voucher/voucher-by-code",
        className: "api-post",
      },
      {
        type: "doc",
        id: "campaign/voucher/voucher-batch-by-key",
        className: "api-get",
      },
      {
        type: "doc",
        id: "campaign/voucher/issue-voucher",
        className: "api-post",
      },
      {
        type: "doc",
        id: "campaign/voucher/void-voucher",
        className: "api-post",
      },
      {
        type: "doc",
        id: "campaign/voucher/reinstate-voucher",
        className: "api-patch",
      },
      {
        type: "doc",
        id: "campaign/voucher/bulk-redeem-voucher",
        className: "api-post",
      },
    ],
  },
  {
    type: "category",
    label: "Campaign",
    items: [
      {
        type: "doc",
        id: "campaign/chop-stamp",
        className: "api-post",
      },
      {
        type: "doc",
        id: "campaign/gourmet-card",
        className: "api-post",
      },
    ],
  },
],

    // "Merchant Wallet": [
    //   "merchant-wallet/check-balance",
    //   "merchant-wallet/topup-wallet",
    //   "merchant-wallet/history",
    //   "merchant-wallet/topup-history",
    // ],
Settings: [
  {
    type: "category",
    label: "Account",
    items: [
      {
        type: "doc",
        id: "settings/account-detail/create-account",
        className: "api-post",
      },
      {
        type: "doc",
        id: "settings/account-detail/get-accounts",
        className: "api-get",
      },
      {
        type: "doc",
        id: "settings/account-detail/get-account",
        className: "api-get",
      },
      {
        type: "doc",
        id: "settings/account-detail/update-account",
        className: "api-put",
      },
      {
        type: "doc",
        id: "settings/account-detail/submit-account-review",
        className: "api-post",
      },
    ],
  },
  {
    type: "category",
    label: "Store",
    items: [
      {
        type: "doc",
        id: "settings/store-detail/store-details",
        className: "api-get",
      },
      {
        type: "doc",
        id: "settings/store-detail/get-store-by-id",
        className: "api-get",
      },
      {
        type: "doc",
        id: "settings/store-detail/create-store",
        className: "api-post",
      },
      {
        type: "doc",
        id: "settings/store-detail/update-store",
        className: "api-patch",
      },
      {
        type: "doc",
        id: "settings/store-detail/delete-store",
        className: "api-delete",
      },
    ],
  },
  {
    type: "category",
    label: "Merchant",
    items: [
      {
        type: "doc",
        id: "settings/merchant-detail/merchant-profile",
        className: "api-get",
      },
      {
        type: "doc",
        id: "settings/merchant-detail/merchant-subscriptions",
        className: "api-get",
      },
    ],
  },
  {
    type: "category",
    label: "User",
    items: [
      {
        type: "doc",
        id: "settings/user-profile",
        className: "api-get",
      },
    ],
  },
],

"eKYC": [
  {
    type: "doc",
    id: "ekyc/mykad-recognition",
    className: "api-post",
  },
  {
    type: "doc",
    id: "ekyc/liveness-check-with-face-verification",
    className: "api-post",
  },
  {
    type: "doc",
    id: "ekyc/face-verification",
    className: "api-post",
  },
  {
    type: "doc",
    id: "ekyc/get-mykad-result",
    className: "api-post",
  },
  {
    type: "doc",
    id: "ekyc/get-ekyc-result",
    className: "api-post",
  },
],

"Short Message Service": [
  {
    type: "doc",
    id: "sms/send-sms",
    className: "api-post",
  },
],

"Push Notification": [
  {
    type: "doc",
    id: "push-notification/push-to-merchant",
    className: "api-post",
  },
],

    Downloads: [
      "downloads/revenue-monster-logo",
      "downloads/application",
      "downloads/logo",
      "downloads/testing-wallets",
    ],
    "e-Commerce Plugin": [
      "ecom-plugin/lowCodeCheckout",
      "ecom-plugin/wooCommerce",
      "ecom-plugin/opencart",
      "ecom-plugin/easystore",
      {
        type: 'link',
        label: "SiteGiant",
        href: "https://support.sitegiant.com/knowledge-base/how-to-set-up-revenue-monster-payment-gateway/",
      },
    ],
    Appendix: ["payment-method", "product-terms", "error-codes", "bank-code"],
  },
};
