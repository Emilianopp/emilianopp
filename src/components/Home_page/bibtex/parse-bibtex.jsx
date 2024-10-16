// parse-bibtex.js
const fs = require('fs');
const bibtexParse = require('bibtex-parse-js');

// Read the BibTeX file
const bibFile = fs.readFileSync('path/to/publications.bib', 'utf-8');

// Parse the BibTeX file
const parsedPubs = bibtexParse.toJSON(bibFile);

// Map the parsed BibTeX entries to your desired structure
const publications = parsedPubs.map((pub) => {
  return {
    title: pub.entryTags.title,
    authors: pub.entryTags.author,
    year: pub.entryTags.year,
    journal: pub.entryTags.journal || pub.entryTags.booktitle,
    category: determineCategory(pub), // Determine category by inspecting BibTeX fields
    links: {
      repo: pub.entryTags.url || '',
      link: pub.entryTags.doi || '',
      preprint: pub.entryTags.eprint || '',
    },
    bibtex: pub.citationKey,
  };
});

// Helper function to determine category based on BibTeX entry type
function determineCategory(pub) {
  switch (pub.entryType) {
    case 'article':
      return 'conference'; // Example of mapping
    case 'inproceedings':
      return 'workshop';
    default:
      return 'other';
  }
}

// Write the result to a JSON file
fs.writeFileSync('config/pubs.json', JSON.stringify(publications, null, 2));

console.log('Publications successfully parsed and saved to config/pubs.json');
