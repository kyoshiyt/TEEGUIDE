import { SEO } from '../../components/SEO';
import { MarkdownRenderer } from '../../components/ui/MarkdownRenderer';
import { SITE_CONFIG } from '../../config';

export function Privacy() {
  const content = `
Last Updated: ${new Date().toLocaleDateString()}

This Privacy Policy describes how ${SITE_CONFIG.siteName} ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website.

## Information We Collect

### 1. Information You Provide to Us
When you interact with our website, such as subscribing to our newsletter or contacting us, we may collect:
*   Your name
*   Your email address
*   Any other information you choose to provide in your communications

### 2. Information Collected Automatically
When you visit the site, we automatically collect certain information about your device, including:
*   Browser type and version
*   Time zone setting
*   Operating system and platform
*   Information about how you interact with our website (pages viewed, links clicked)
*   IP address

We collect this data using cookies and similar tracking technologies.

## How We Use Your Information

We use the collected information to:
*   Provide, operate, and maintain our website
*   Improve, personalize, and expand our website
*   Understand and analyze how you use our website
*   Develop new products, services, features, and functionality
*   Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website
*   Send you emails (if you subscribed to our newsletter)
*   Find and prevent fraud

## Sharing Your Information

We do not sell your personal information to third parties. We may share your information in the following situations:

*   **Service Providers:** We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf (e.g., email delivery, hosting, analytics).
*   **Legal Requirements:** We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
*   **Business Transfers:** We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.

## Amazon Associates

As an Amazon Associate, we earn from qualifying purchases. Amazon may use cookies to track your clicks and purchases. Please review Amazon's Privacy Notice for more information on how they handle your data.

## Your Rights

Depending on your location, you may have rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us.

## Contact Us

If you have any questions about this Privacy Policy, please contact us at ${SITE_CONFIG.contactEmail}.
`;

  return (
    <>
      <SEO title="Privacy Policy" description="Our privacy policy detailing how we collect, use, and protect your data." />
      
      <div className="bg-stone-50 py-12 lg:py-20 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MarkdownRenderer content={content} />
      </div>
    </>
  );
}
