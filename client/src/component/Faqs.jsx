import { Grid } from '@mui/material';
import React, { useState } from 'react';

function Faqs() {
    const faqs = [
        {
          question: 'How does seo work?',
          answer:`Search Engine Optimization (SEO) is a strategy for increasing a website's traffic via organic search results. When you enlist professional SEO services, you can significantly boost your website's visibility and attract more traffic and leads. SEO helps users on the internet find the most relevant results for their queries. Search engines assess the intent behind user searches, consider their language and location, and rank websites that offer the most value. SEO services allow you to optimize your site for Google's search engine crawler to better understand your content on the search engine results pages (SERPs). Google gathers extensive data from web pages, and through indexing and crawling, it makes this information accessible. The structure and quality of your website's SEO services play a crucial role in determining how your content is indexed and, ultimately, how well it ranks when people search for your service.`,
        },
        {
          question: 'How do I improve my website authority?',
          answer:`The credibility of your website hinges on the effectiveness of your off-page Link Building efforts. When your website garners reputable and high-quality mentions from other websites, which are essentially votes of confidence, it signifies your legitimacy as a business`,
        },
        {
          question: 'Which part of seo I should work first?',
          answer: `SEO is a long-term strategy that has a lot of moving parts.Your website's on-page structure must be clear and load quickly. The content plays a major role in SEO, probably the most important role, then comes the right keyword research and proper integration.`,
        },
        {
          question: 'What is the roi of seo?',
          answer: `The SEO ROI may take 4 to 5 months, at a minimum, for SEO efforts to become effective and for your website to rank on Google. Although SEO requires time to deliver a substantial return on investment, it's a cost-effective marketing method, usually involving only service charges with no additional payments to search engines.`,
        },
        {
          question: 'What is better seo or ppc?',
          answer: `SEO and PPC offer distinct advantages. SEO is a low-cost, long-term strategy that fosters organic growth. PPC, on the other hand, is a rapid, high-impact approach with precise audience targeting, but it typically requires a more significant investment.`,
        },
        {
          question: 'What is keyword research?',
          answer:`Keyword research involves investigating the terms and phrases people use when searching on Google for products or services similar to what your website offers. Our agency conducts comprehensive keyword research, compiling a list of search terms, including their monthly search volume and ranking difficulty.`,
        },
        {
          question: 'Where is Pakistan do you provide seo services?',
          answer:`We offer SEO services in Pakistan and worldwide.`,
        },
      ];

      const [activeIndex, setActiveIndex] = useState(null);

      const toggleAccordion = (index) => {
        if (index === activeIndex) {
          setActiveIndex(null);
        } else {
          setActiveIndex(index);
        }
      };
  return (
    <div>
      <Grid container justifyContent={"center"}>
        <Grid item lg={8} sx={{pb:{xs:4,md:10}}}>
          <h1 className="heading text-center">FAQ</h1>
        </Grid>
      </Grid>
        <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            {faq.question}
            <span className={`faq-icon ${index === activeIndex ? 'open' : ''}`}>+</span>
          </div>
          {index === activeIndex && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Faqs