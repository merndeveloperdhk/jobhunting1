import { Link } from "react-router-dom";
import moment from 'moment';

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © {moment().format('YYYY')} - All right reserved by <Link>M M GROUP</Link></p>
  
  </aside>
</footer>
    );
};

export default Footer;