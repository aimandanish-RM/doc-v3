import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const navItems = [
  {
    label: "Prerequisite",
    links: [
      { label: "Quick Start", href: "/docs/introduction/overview" },
      { label: "Merchant Onboarding", href: "/docs/merchant-onboarding/introduction" },
      { label: "Payment", href: "/docs/v2/payment/quick-pay" },
    ],
  },
  {
    label: "Products",
    links: [
      { label: "Visa Offers Platform", href: "/docs/visa-vop/enroll-user" },
      { label: "Plugin", href: "/docs/v2/plugin/introduction" },
      { label: "à la carte", href: "/docs/alacarte-open/introduction" },
      { label: "Loyalty & Voucher", href: "/docs/campaign/member/register-loyalty-member" },
    ],
  },
  {
    label: "Miscellaneous",
    links: [
      { label: "Settings", href: "/docs/settings/account-detail/create-account" },
      { label: "eKYC", href: "/docs/ekyc/mykad-recognition" },
      { label: "Short Message Service", href: "/docs/sms/send-sms" },
      { label: "Push Notification", href: "/docs/push-notification/push-to-merchant" },
      { label: "Downloads", href: "/docs/downloads/revenue-monster-logo" },
      { label: "e-Commerce Plugin", href: "/docs/ecom-plugin/lowCodeCheckout" },
      { label: "Appendix", href: "/docs/payment-method" },
    ],
  },
];

export default function CardNavMenu({ open, setOpen, mobile }) {
  const [mobileOpen, setMobileOpen] = useState(false);




  // 🔹 DESKTOP VERSION (your existing overlay)
  return (
    <div
      className={`${styles.overlay} ${open ? styles.open : ""}`}
      onClick={() => setOpen(false)}
    >
<div
  className={styles.menu}
  onClick={(e) => e.stopPropagation()}
>
        {navItems.map((section, i) => (
          <div
            key={section.label}
            className={styles.card}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <h3>{section.label}</h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
