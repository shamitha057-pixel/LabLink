import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon.jsx'

export default function NotFound() {
  return (
    <div className="notfound">
      <div>
        <p className="notfound__code">404</p>
        <h1>Page not found</h1>
        <p className="notfound__text">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn--primary">
          <Icon name="arrow-left" size={18} /> Back to home
        </Link>
      </div>
    </div>
  )
}