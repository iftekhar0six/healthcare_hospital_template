import { footerContent, siteInfo } from '@/settings';
import Container from '@/components/ui/Container';
import './Footer.css';

const Footer = () => {
  const { about, quickLinks, services, copyright, credentials } = footerContent;
  const { name, email, phone, address, socialMedia } = siteInfo;

  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-column footer-about">
            <h3 className="footer-title">{name}</h3>
            <p className="footer-description">{about}</p>
            <div className="footer-social">
              {socialMedia.facebook && (
                <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  Facebook
                </a>
              )}
              {socialMedia.twitter && (
                <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  Twitter
                </a>
              )}
              {socialMedia.instagram && (
                <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  Instagram
                </a>
              )}
              {socialMedia.linkedin && (
                <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={service.href} className="footer-link">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact">
              <p className="footer-contact-item">
                <strong>Phone:</strong> {phone}
              </p>
              <p className="footer-contact-item">
                <strong>Email:</strong> {email}
              </p>
              <p className="footer-contact-item">
                <strong>Address:</strong><br />
                {address.street}<br />
                {address.city}, {address.state} {address.zip}
              </p>
            </div>
          </div>
        </div>

        <div className="footer-credentials">
          {credentials.map((credential, index) => (
            <span key={index} className="footer-credential">
              {credential}
            </span>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{copyright}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
