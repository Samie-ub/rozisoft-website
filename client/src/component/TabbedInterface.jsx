import React, { useState } from 'react';
import "../styles/service-page-styles.css"

function TabbedInterface({ points }) {
  const [activeTab, setActiveTab] = useState(0);

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
