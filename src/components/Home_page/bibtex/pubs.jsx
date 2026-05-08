import { Container, Row, Collapse } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import publications from '../../../config/pubs.json';

// Dynamic image imports
const importAll = (r) => {
  const images = {};
  r.keys().forEach((item) => {
    // Get the file name without extension
    const fileName = item.replace('./', '');
    images[fileName] = r(item);
  });
  return images;
};

// Import all images from assets folder
const images = importAll(require.context('../../../assets', false, /\.(png|jpe?g|svg)$/));

const PublicationsComp = () => {
  // State to track which publications are expanded
  const [expandedPubs, setExpandedPubs] = useState({});

  // Function to toggle the expanded state of a publication
  const toggleExpand = (id) => {
    setExpandedPubs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));

    // Ensure expanded content scrolls into view when opening
    if (!expandedPubs[id]) {
      setTimeout(() => {
        const el = document.getElementById(`collapse-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 250);
    }
  };

  // Function to get the correct image source
  const getImageSrc = (imagePath) => {
    return images[imagePath] || null;
  };

  return (
    <Row id="pubs">
      <Container className="project-cards-pubs ">
        <Row className="pubs-row">
          <div className="header-padder">
            <h1 className="Projects-header">Research</h1>
          </div>
    
          {/* Conference Publications */}
          <div className="pub-section">
            <h2 className="pub-category">Publications</h2>
            <ul className="pub-list">
            {publications
  .filter(pub => pub.category === 'conference')
  .map((pub, index) => {
      const pubId = `conf-${index}`;
      return (
      <li className="pubList" key={index}>
        <h3 style={{ fontWeight: 'bold' }}>
          <span className="pub-title-container">
            <button
              className={`dropdown-icon ${expandedPubs[pubId] ? 'expanded' : ''}`}
              aria-expanded={!!expandedPubs[pubId]}
              aria-controls={`collapse-${pubId}`}
              onClick={() => toggleExpand(pubId)}
              title={expandedPubs[pubId] ? 'Collapse details' : 'Expand details'}
            >
              ▶
            </button>
            <span className="pub-title-text" onClick={() => toggleExpand(pubId)} style={{ cursor: 'pointer' }}>
              {pub.title}
            </span>
          </span>
        </h3>
        <p>
          {pub.authors.map((author, authorIndex) => (
            <span key={authorIndex}>
              {(author === 'Emiliano Penaloza' || author.startsWith('Emiliano Penaloza')) ? (
                <span className='me'>{author}</span>
              ) : (
                <span className='other'>{author}</span>
              )}
              {authorIndex < pub.authors.length - 1 && ', '}
            </span>
          ))}
          <span className='other'> ({pub.year}).</span> 
          <br />
          <span className='other'>{pub.journal}</span>
        </p>
        
        <Collapse in={expandedPubs[pubId]}>
          <div id={`collapse-${pubId}`} className="pub-details">
            <div className="pub-description">
              <p>{pub.description}</p>
            </div>
            {/* explicit link/button to open the paper */}
            {pub.url && (
              <div className="pub-open-row">
                <a href={pub.url} className="pub-open-btn" onClick={(e) => { e.stopPropagation(); }} target="_blank" rel="noopener noreferrer">Open paper</a>
              </div>
            )}
            {pub.imagePath && getImageSrc(pub.imagePath) && (
              <div className="pub-image-container">
                <img 
                  src={getImageSrc(pub.imagePath)} 
                  alt={`Visual for ${pub.title}`} 
                  className="pub-image"
                />
              </div>
            )}
          </div>
        </Collapse>
      </li>
    );
  })}        
      </ul>
          </div>
    
          {/* Workshop Publications */}
          <div className="pub-section">
            <h2 className="pub-category">Workshops & Talks</h2>
            <ul className="pub-list">
              {publications
                .filter(pub => pub.category === 'workshop')
                .map((pub, index) => {
                  const pubId = `workshop-${index}`;
                  return (
                  <li className="pubList" key={index}>
                    <h3 style={{ fontWeight: 'bold' }}>
                      <span className="pub-title-container">
                        <button
                          className={`dropdown-icon ${expandedPubs[pubId] ? 'expanded' : ''}`}
                          aria-expanded={!!expandedPubs[pubId]}
                          aria-controls={`collapse-${pubId}`}
                          onClick={() => toggleExpand(pubId)}
                          title={expandedPubs[pubId] ? 'Collapse details' : 'Expand details'}
                        >
                          ▶
                        </button>
                        <span className="pub-title-text" onClick={() => toggleExpand(pubId)} style={{ cursor: 'pointer' }}>
                          {pub.title}
                        </span>
                      </span>
                    </h3>
                    <p>
                      {pub.authors.map((author, authorIndex) => (
                        <span key={authorIndex}>
                      {(author === 'Emiliano Penaloza' || author.startsWith('Emiliano Penaloza')) ? (

                            <span className='me'>{author}</span>
                          ) : (
                            <span className='other'>{author}</span>
                          )}
                          {authorIndex < pub.authors.length - 1 && ', '}
                        </span>
                      ))}
                      <span className='other'> ({pub.year}).</span> 
                      <br />
                      <span className='other'>{pub.journal}</span>
                    </p>
                    
                    <Collapse in={expandedPubs[pubId]}>
                      <div id={`collapse-${pubId}`} className="pub-details">
                        <div className="pub-description">
                          <p>{pub.description}</p>
                        </div>
                        {/* explicit link/button to open the paper */}
                        {pub.url && (
                          <div className="pub-open-row">
                            <a href={pub.url} className="pub-open-btn" onClick={(e) => { e.stopPropagation(); }} target="_blank" rel="noopener noreferrer">Open paper</a>
                          </div>
                        )}
                        {pub.imagePath && getImageSrc(pub.imagePath) && (
                          <div className="pub-image-container">
                            <img 
                              src={getImageSrc(pub.imagePath)} 
                              alt={`Visual for ${pub.title}`} 
                              className="pub-image"
                            />
                          </div>
                        )}
                      </div>
                    </Collapse>
                  </li>
                );
              })}   
            </ul>
          </div>
        </Row>
      </Container>
    </Row>
  );
};

export default PublicationsComp;
