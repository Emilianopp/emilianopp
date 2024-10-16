import React from 'react';
import { Container, Row } from 'react-bootstrap';
import publications from '../../../config/pubs.json'; // Importing the JSON file directly

{console.log(publications)}
const PublicationsComp = () => {
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
            <ul className="pub-list">{console.log(publications)}
            {publications
  .filter(pub => pub.category === 'conference')
  .map((pub, index) => {
      return (
      <li className = 'pubList' key={index} >
        <h3 style={{ fontWeight: 'bold' }}>
          {pub.url ? (
            <a href={pub.url} className="pub-link" >
              {pub.title}
            </a>
          ) : (
            <span>{pub.title}</span> // Fallback if URL is missing
          )}
        </h3>
        <p >
          {pub.authors.map(author => (
            <span key={author}>
              {author === 'Emiliano Penaloza' ? (
                  <h className='me'> {author}</h> // Bold if the author is Emiliano Penaloza

              ) : (
                <h className='other'> {author}</h> // Bold if the author is Emiliano Penaloza

              )}
              {', '} {/* Add a comma between authors */}
            </span>
          ))}
          <h className='other'> ({pub.year}).</h> 
           <br />
            <span className='other'>{pub.journal}</span>

        </p>
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
                  return (
                  <li className = 'pubList' key={index} >
                    <h3 style={{ fontWeight: 'bold' }}>
                      {pub.url ? (
                        <a href={pub.url} className="pub-link" >
                          {pub.title}
                        </a>
                      ) : (
                        <span>{pub.title}</span> // Fallback if URL is missing
                      )}
                    </h3>
                    <p >
                      {pub.authors.map(author => (
                        <span key={author}>
                          {author === 'Emiliano Penaloza' ? (
                              <h className='me'> {author}</h> // Bold if the author is Emiliano Penaloza
            
                          ) : (
                            <h className='other'> {author}</h> // Bold if the author is Emiliano Penaloza
            
                          )}
                          {', '} {/* Add a comma between authors */}
                        </span>
                      ))}
                      <h className='other'> ({pub.year}).</h> 
                       <br />
                        <span className='other'>{pub.journal}</span>
            
                    </p>
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
