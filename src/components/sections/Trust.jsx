import { trustContent } from '@/settings';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import './Trust.css';

const Trust = () => {
  const { title, subtitle, items } = trustContent;

  return (
    <Section id="trust" className="trust-section">
      <Container>
        <div className="trust-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="trust-grid">
          {items.map((item) => (
            <Card key={item.id} hover>
              <div className="trust-icon">{item.icon}</div>
              <h3 className="trust-title">{item.title}</h3>
              <p className="trust-description">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Trust;
