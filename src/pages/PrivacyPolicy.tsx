import React from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const privacyPolicyContent = `
# LinkSeek Privacy Policy

**Last Updated:** 08/23/2025  
**Version:** 1.0

## Introduction

LinkSeek ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how our Chrome extension collects, uses, and protects your information when you use LinkSeek.

## Information We Collect

### Data Collected for Core Functionality

**Search Terms**: When you use LinkSeek to search for words on web pages, we temporarily process your search terms to perform the search functionality. These terms are not stored or retained after your search session ends.

**Page Content**: To provide search results, LinkSeek temporarily accesses the text content of the current webpage you're viewing. This content is processed locally within your browser and is not transmitted to or stored on our servers.

**User Preferences**: LinkSeek stores your preference for the Ctrl+F keyboard shortcut binding locally in your browser. This setting is stored using Chrome's storage API and remains on your device.

**Search Interactions**: We detect when you click the search button or use the Ctrl+F shortcut to trigger the search functionality. This interaction data is used solely to activate the search feature.

### Data We Do NOT Collect

We do not collect, store, or transmit:
- Personal identifying information (names, email addresses, etc.)
- Browsing history or web page visit data
- Location information
- Financial or payment information
- Authentication credentials
- Personal communications
- Health information
- Any data beyond what is necessary for the search functionality

## How We Use Your Information

### Core Functionality
- **Search Processing**: Your search terms and page content are used to find and highlight word occurrences on web pages
- **Preference Storage**: Your Ctrl+F shortcut preference is stored to maintain your chosen interaction method
- **Cross-Page Search**: When you click on linked page results, we open those pages and perform searches as requested

### Remote API Usage
LinkSeek uses a secure API service to enhance search functionality:
- **Purpose**: Provides intelligent crawling and cross-page search results
- **Data Sent**: Only search terms and URLs are sent to the API server
- **Security**: All communication is encrypted via HTTPS
- **Retention**: The API server does not store or retain any data

## Data Storage and Retention

### Local Storage
- User preferences are stored locally in your browser using Chrome's storage API
- Search terms and page content are processed temporarily and not stored
- No data is retained after your search session ends

### Remote Storage
- Our API server does not store or retain any user data
- All API requests are processed in real-time and discarded immediately

## Data Security

We implement appropriate security measures to protect your information:
- All API communications are encrypted using HTTPS
- No sensitive or personal data is transmitted to our servers
- Local storage uses Chrome's secure storage mechanisms
- We do not have access to your personal browsing data

## Third-Party Services

### API Service
LinkSeek communicates with a secure API service hosted on PythonAnywhere for enhanced search functionality. This service:
- Only receives search queries and URLs
- Does not store or retain any data
- Operates under strict security protocols
- Is used solely to enhance the search experience

## Your Rights and Choices

### Control Over Data
- You can disable the Ctrl+F shortcut feature at any time
- You can uninstall LinkSeek to remove all stored preferences
- You control when searches are performed by actively using the extension

### Data Access
Since we do not store personal data, there is no personal information to access, modify, or delete.

## Children's Privacy

LinkSeek does not knowingly collect personal information from children under 13. The extension is designed for general use and does not target children.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify users of any material changes by updating the "Last Updated" date at the top of this policy.

## Contact Information

If you have any questions about this Privacy Policy or our data practices, please contact us at:
- Email: munnethgill@gmail.com
- Website: https://munnethgill.live

## Compliance

This Privacy Policy complies with:
- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR) principles
- California Consumer Privacy Act (CCPA) requirements

---

**By using LinkSeek, you agree to the collection and use of information in accordance with this Privacy Policy.**

`;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-800">
          <ReactMarkdown>{privacyPolicyContent}</ReactMarkdown>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <Button size="lg" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Support Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
