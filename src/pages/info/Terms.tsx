import { SEO } from '../../components/SEO';
import { MarkdownRenderer } from '../../components/ui/MarkdownRenderer';
import { SITE_CONFIG } from '../../config';

export function Terms() {
  const content = `
Last Updated: ${new Date().toLocaleDateString()}

Please read these Terms of Use carefully before using the ${SITE_CONFIG.siteName} website.

## 1. Acceptance of Terms

By accessing or using this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.

## 2. Use License

Permission is granted to temporarily download one copy of the materials (information or software) on ${SITE_CONFIG.siteName}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
*   Modify or copy the materials;
*   Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
*   Attempt to decompile or reverse engineer any software contained on the website;
*   Remove any copyright or other proprietary notations from the materials; or
*   Transfer the materials to another person or "mirror" the materials on any other server.

This license shall automatically terminate if you violate any of these restrictions and may be terminated by ${SITE_CONFIG.siteName} at any time. 

## 3. Disclaimer

The materials on ${SITE_CONFIG.siteName}'s website are provided on an 'as is' basis. ${SITE_CONFIG.siteName} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

Further, ${SITE_CONFIG.siteName} does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.

## 4. Limitations

In no event shall ${SITE_CONFIG.siteName} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ${SITE_CONFIG.siteName}'s website, even if ${SITE_CONFIG.siteName} or a ${SITE_CONFIG.siteName} authorized representative has been notified orally or in writing of the possibility of such damage.

## 5. Accuracy of Materials

The materials appearing on ${SITE_CONFIG.siteName}'s website could include technical, typographical, or photographic errors. ${SITE_CONFIG.siteName} does not warrant that any of the materials on its website are accurate, complete or current. ${SITE_CONFIG.siteName} may make changes to the materials contained on its website at any time without notice. However, ${SITE_CONFIG.siteName} does not make any commitment to update the materials.

## 6. Links

${SITE_CONFIG.siteName} has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ${SITE_CONFIG.siteName} of the site. Use of any such linked website is at the user's own risk.

## 7. Modifications

${SITE_CONFIG.siteName} may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.

## 8. Governing Law

These terms and conditions are governed by and construed in accordance with the laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
`;

  return (
    <>
      <SEO title="Terms of Use" description="Terms and conditions for using our website." />
      
      <div className="bg-stone-50 py-12 lg:py-20 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Terms of Use
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MarkdownRenderer content={content} />
      </div>
    </>
  );
}
