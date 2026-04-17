import { activitiesContent } from '@/settings';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import './Activities.css';

const Activities = () => {
  const { title, subtitle, activities } = activitiesContent;

  return (
    <Section id="activities">
      <Container>
        <div className="activities-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="activities-grid">
          {activities.map((activity) => (
            <Card key={activity.id} hover className="activity-card">
              <div className="activity-image-wrapper">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="activity-image"
                />
              </div>
              <div className="activity-content">
                <h3 className="activity-title">{activity.title}</h3>
                <p className="activity-description">{activity.description}</p>
                <div className="activity-schedule">
                  <div className="activity-schedule-item">
                    <span className="activity-schedule-icon">📅</span>
                    <span>{activity.date}</span>
                  </div>
                  <div className="activity-schedule-item">
                    <span className="activity-schedule-icon">🕒</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Activities;
