import React from 'react';

export default React.createContext({
  results: [],
  page: 1,
  term: "",
  searchByTerm : (term) => {},
  handleMore : (term) => {}
});