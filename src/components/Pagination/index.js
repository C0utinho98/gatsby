import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './styles';

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <Container>
    {!isFirst && <Link to={prevPage}>Página anterior</Link>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && <Link to={nextPage}>Próxima pagina </Link>}
  </Container>
);

Pagination.prototype = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currenPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};

export default Pagination;
