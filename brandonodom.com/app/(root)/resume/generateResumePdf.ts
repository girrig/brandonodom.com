// This is all Claude 3.7 Sonnet Enhanced voodoo magic

/**
 * Generates a PDF from the given resume element reference
 * @param resumeElement - Reference to the HTML element containing the resume
 */
export const generateResumePdf = (resumeElement: HTMLElement | null): void => {
  // Check if resume element is available
  if (!resumeElement) {
    console.error("Resume element reference not found");
    return;
  }

  // Hide the button before printing
  const downloadButton = document.querySelector(
    ".download-button"
  ) as HTMLElement;
  if (downloadButton) downloadButton.style.display = "none";

  // Create a print window with just the resume content
  const printWindow = window.open("", "_blank");

  if (printWindow) {
    try {
      // Set up the new document
      const printDoc = printWindow.document;

      // Create HTML structure
      const html = printDoc.createElement("html");
      const head = printDoc.createElement("head");
      const body = printDoc.createElement("body");

      // Create and append title
      const title = printDoc.createElement("title");
      title.textContent = "Brandon_Odom_Resume";
      head.appendChild(title);

      // Add print-specific styles for better page breaks
      const printStyles = printDoc.createElement("style");
      printStyles.textContent = `
        /* Control page margins while still hiding headers/footers */
        @page {
          size: auto;
          /* Small margins on all sides to remove headers/footers but give some breathing room */
          margin: 8mm;
        }
        
        /* Remove any default borders and adjust body styling */
        html, body {
          margin: 0;
          padding: 0;
          border: none;
          box-shadow: none;
        }
        
        /* Add additional padding to the content for better appearance */
        body {
          padding: 5mm;
        }
        
        /* Remove any borders on the main resume container but maintain proper spacing */
        body > div, .max-w-4xl {
          border: none !important;
          box-shadow: none !important;
          margin: 0 auto !important;
        }
        
        /* Print-specific styles for better page breaks */
        @media print {
          /* Hide all headers and footers */
          html {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Prevent page breaks inside these elements */
          h3, h4, ul, li {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Keep headers with their content */
          h3, h4 {
            page-break-after: avoid !important;
            break-after: avoid !important;
            margin-top: 15px !important;
          }
          
          /* Allow page breaks between major sections */
          .mb-8 {
            page-break-after: auto !important;
            break-after: auto !important;
            margin-bottom: 40px !important;
          }
          
          /* Keep skill groups together */
          .mb-3 {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Prevent job experience subsections from breaking across pages */
          .mb-6 {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Keep job title and company together */
          .flex.justify-between {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Force page breaks before major sections if needed */
          .education-section, .publications-section, .skills-section, .certifications-section {
            page-break-before: auto !important;
            break-before: auto !important;
          }
        }
      `;
      head.appendChild(printStyles);

      // Copy styles from the original page
      const styles = document.getElementsByTagName("style");
      Array.from(styles).forEach((style) => {
        head.appendChild(style.cloneNode(true));
      });

      // Copy stylesheet links
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      links.forEach((link) => {
        head.appendChild(link.cloneNode(true));
      });

      // Add resume content to body
      const resumeClone = resumeElement.cloneNode(true) as HTMLElement;

      // Add classes to help with page breaks
      const sections = resumeClone.querySelectorAll(".mb-8");
      sections.forEach((section) => {
        const heading = section.querySelector("h3");
        if (heading) {
          const text = heading.textContent?.toLowerCase() || "";
          if (text.includes("education")) {
            section.classList.add("education-section");
          } else if (text.includes("publications")) {
            section.classList.add("publications-section");
          } else if (text.includes("skills")) {
            section.classList.add("skills-section");
          } else if (text.includes("certifications")) {
            section.classList.add("certifications-section");
          }
        }
      });

      body.appendChild(resumeClone);

      // Assemble the document
      html.appendChild(head);
      html.appendChild(body);
      printDoc.documentElement.replaceWith(html);

      // Print after a short delay to allow styles to load
      setTimeout(() => {
        printWindow.print();
        printWindow.close();

        // Restore the button
        if (downloadButton) downloadButton.style.display = "block";
      }, 300);
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Restore button in case of error
      if (downloadButton) downloadButton.style.display = "block";

      // Close the window if there was an error
      printWindow.close();
    }
  }
};
