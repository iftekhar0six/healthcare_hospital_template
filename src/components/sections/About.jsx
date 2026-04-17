import { aboutContent } from '@/settings';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import './About.css';

const About = () => {
  const { title, subtitle, description, image, stats, features } = aboutContent;

  return (
    <Section id="about">
      <Container>
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src={image} alt="About HealthCare Plus" className="about-image" />
          </div>
          <div className="about-content">
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
            <p className="about-description">{description}</p>

            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.id} className="about-stat">
                  <div className="about-stat-value">{stat.value}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <ul className="about-features">
              {features.map((feature, index) => (
                <li key={index} className="about-feature">
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
