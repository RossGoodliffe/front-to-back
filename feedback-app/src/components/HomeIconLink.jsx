import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function HomeIconLink() {
    return (
      <div className="about-link">
          <Link exact to="/">
              <FaHome size={30} />
          </Link>
      </div>
    )
}

export default HomeIconLink