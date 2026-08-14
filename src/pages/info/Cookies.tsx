import { SEO } from '../../components/SEO';
import { MarkdownRenderer } from '../../components/ui/MarkdownRenderer';

export function Cookies() {
  const content = `
Last Updated: ${new Date().toLocaleDateString()}

This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.

## What are cookies?

Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.

## Why do we use cookies?

We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our website for advertising, analytics, and other purposes.

## Types of Cookies We Use

*   **Essential website cookies:** These cookies are strictly necessary to provide you with services available through our website and to use some of its features.
*   **Performance and functionality cookies:** These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
*   **Analytics and customization cookies:** These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
*   **Advertising cookies:** These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.

## How can I control cookies?

You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.

You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.

## Where can I get further information?

If you have any questions about our use of cookies or other technologies, please refer to our Contact page.
`;

  return (
    <>
      <SEO title="Cookie Policy" description="Information about how we use cookies on our website." />
      
      <div className="bg-stone-50 py-12 lg:py-20 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Cookie Policy
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MarkdownRenderer content={content} />
      </div>
    </>
  );
}
