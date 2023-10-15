import React, { useState } from 'react';
import "../styles/service-page-styles.css"
function TabbedInterface() {
  const [activeTab, setActiveTab] = useState(0);

  const points = [
    {
      title: '1. Search ability Check Of The Website',
      description: 'Initially, we commence a technical website audit to assess its search engine performance. This entails verifying proper indexing on Google, identifying and rectifying any irrelevant indexed links, and addressing pages that may return a 404 error. Additionally, we scrutinize the websites robots file to ascertain if any pages are inaccessible to web crawlers. In the next step, we ensure the correct inclusion of the sitemap on the website.',
    },
    {
      title: '2. Website Speed Checker',
      description: 'The subsequent phase of our technical audit involves assessing the websites performance, with a focus on its speed and related elements, including the minification of JS and CSS files and the presence of excessive inline CSS. Our objective is to determine if the website attains the desired speed performance on both mobile devices and desktops. Ensuring compliance with the core web vitals test is of paramount significance, as Googles significant core updates have had a notable impact on the rankings of many websites in search engine results pages (SERPs).',
    },
    {
      title: '3.  Overall Website & URL Structure Check',
      description: `Next, we evaluate the website's overall structure, examining design adherence to search engine guidelines, user-friendliness, page presentation, and navigation ease. Additionally, we scrutinize the URL structure, ensuring SEO-friendly URLs that incorporate real words, facilitating improved rankings and crawler accessibility based on URLs alone.`,
    },
    {
      title: '4. Complete On Page, Meta Title Description, Images & Content Checker',
      description: `After completing the technical assessments, we transition to evaluating the website's on-page SEO performance. This includes analyzing the optimization of meta titles and descriptions, assessing the heading hierarchy within the content, and examining the effective utilization of H tags. We also review keyword distribution, considering the integration of long-tailed keywords, synonyms, and LSI keywords. Our focus is on ensuring that the content aligns with the intended audience's needs and offers value. Equally crucial, we verify the originality of the content to prevent plagiarism issues.`,
    },
    {
      title: '5.  Keyword Usage & Internal Linking Checker',
      description: `Following the content assessment, we conduct a thorough examination of keyword usage. We meticulously evaluate whether keywords are appropriately integrated, avoiding overstuffing and ensuring they align with their intended intent. We also verify the effectiveness of internal linking, a critical factor for improving website navigation and establishing a coherent information structure. This in-depth analysis encompasses all web content, blog posts, and product descriptions, aiming to identify opportunities for enhancing on-page SEO.`,
    },
    {
      title: '6. Backlink Review Checker',
      description: `Furthermore, we meticulously assess the website's backlink profile to gauge the strength and relevance of these links. We utilize various tools to evaluate the spam score associated with each backlink. This is a critical step to ascertain the quality and health of the links pointing to your website. It's essential to ensure that your backlinks are not only influential but also free from any harmful or questionable attributes, as low-quality links can have a detrimental impact on your website's SEO performance rather than enhancing it.`,
    },

 
  ];

  const handleTabClick = (index) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  return (
    <div className='tab-container'>
      <div className="tab-buttons">
        {points.map((point, index) => (
          <div key={index} onClick={() => handleTabClick(index)}  className={activeTab === index ? 'active-tab' : ''}>
            {point.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {points.map((point, index) => (
          <div key={index} className={`tab ${activeTab === index ? 'active' : ''}`}>
           
            {activeTab === index && <p>{point.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabbedInterface;
