import { Grid } from '@mui/material';
import React, { useState } from 'react';

function Faqs({ faqsData }) {
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
        <Grid item lg={8} sx={{ pb: { xs: 4, md: 10 } }}>
          <h1 className="heading text-center">FAQ</h1>
        </Grid>
      </Grid>
      <div className="faq-container">
        {faqsData.map((faq, index) => (
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
  );
}

export default Faqs;
