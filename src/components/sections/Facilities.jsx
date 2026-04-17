import { facilitiesContent } from '@/settings';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import './Facilities.css';

const Facilities = () => {
  const { title, subtitle, facilities } = facilitiesContent;

  return (
    <Section id="facilities">
      <Container>
        <div className="facilities-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility) => (
            <Card key={facility.id} hover className="facility-card">
              <div className="facility-image-wrapper">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="facility-image"
                />
              </div>
              <div className="facility-content">
                <h3 className="facility-name">{facility.name}</h3>
                <p className="facility-description">{facility.description}</p>
                <ul className="facility-features">
                  {facility.features.map((feature, index) => (
                    <li key={index} className="facility-feature">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Facilities;
