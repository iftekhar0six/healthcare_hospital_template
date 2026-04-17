import { supportContent } from '@/settings';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import './Support.css';

const Support = () => {
  const { title, subtitle, description, image, donationTypes, bankDetails, otherMethods, taxInfo } = supportContent;

  return (
    <Section id="support" className="support-section">
      <Container>
        <div className="support-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          <p className="support-description">{description}</p>
        </div>

        <div className="support-content">
          <div className="support-image-wrapper">
            <img src={image} alt="Support Us" className="support-image" />
          </div>

          <div className="support-info">
            <Card className="support-card">
              <h3 className="support-card-title">Ways to Support</h3>
              <div className="support-types">
                {donationTypes.map((type) => (
                  <div key={type.id} className="support-type">
                    <div className="support-type-icon">{type.icon}</div>
                    <div className="support-type-content">
                      <h4 className="support-type-title">{type.title}</h4>
                      <p className="support-type-description">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="support-card">
              <h3 className="support-card-title">Bank Details</h3>
              <div className="support-bank-details">
                <div className="support-bank-item">
                  <span className="support-bank-label">Bank Name:</span>
                  <span className="support-bank-value">{bankDetails.bankName}</span>
                </div>
                <div className="support-bank-item">
                  <span className="support-bank-label">Account Name:</span>
                  <span className="support-bank-value">{bankDetails.accountName}</span>
                </div>
                <div className="support-bank-item">
                  <span className="support-bank-label">Account Number:</span>
                  <span className="support-bank-value">{bankDetails.accountNumber}</span>
                </div>
                <div className="support-bank-item">
                  <span className="support-bank-label">Routing Number:</span>
                  <span className="support-bank-value">{bankDetails.routingNumber}</span>
                </div>
                <div className="support-bank-item">
                  <span className="support-bank-label">SWIFT Code:</span>
                  <span className="support-bank-value">{bankDetails.swiftCode}</span>
                </div>
                <div className="support-bank-item">
                  <span className="support-bank-label">Account Type:</span>
                  <span className="support-bank-value">{bankDetails.accountType}</span>
                </div>
              </div>
            </Card>

            <Card className="support-card">
              <h3 className="support-card-title">Other Donation Methods</h3>
              <div className="support-methods">
                {otherMethods.map((method) => (
                  <div key={method.id} className="support-method">
                    <h4 className="support-method-title">{method.method}</h4>
                    <p className="support-method-details">{method.details}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="support-tax-info">
              {taxInfo}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Support;
