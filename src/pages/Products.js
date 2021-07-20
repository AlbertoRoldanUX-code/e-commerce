import { Link } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h1>The Products page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>Online Course</Link>
        </li>
      </ul>
    </div>
  );
}

export default Products;
