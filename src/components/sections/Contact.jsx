import { contactContent } from '@/settings';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import './Contact.css';

const Contact = () => {
  const { title, subtitle, description, contactMethods, departments, officeHours, mapEmbedUrl } = contactContent;

  return (
    <Section id="contact">
      <Container>
        <div className="contact-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          <p className="contact-description">{description}</p>
        </div>

        <div className="contact-methods">
          {contactMethods.map((method) => (
            <Card key={method.id} hover className="contact-method-card">
              <div className="contact-method-icon">{method.icon}</div>
              <h3 className="contact-method-title">{method.title}</h3>
              <div className="contact-method-primary">{method.primary}</div>
              <div className="contact-method-secondary">{method.secondary}</div>
              <p className="contact-method-description">{method.description}</p>
            </Card>
          ))}
        </div>

        <div className="contact-content">
          <Card className="contact-departments-card">
            <h3 className="contact-card-title">Department Contacts</h3>
            <div className="contact-departments">
              {departments.map((dept) => (
                <div key={dept.id} className="contact-department">
                  <h4 className="contact-department-name">{dept.name}</h4>
                  <div className="contact-department-info">
                    <div className="contact-department-item">
                      <span>📞</span> {dept.phone}
                    </div>
                    <div className="contact-department-item">
                      <span>📧</span> {dept.email}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="contact-hours-card">
            <h3 className="contact-card-title">Office Hours</h3>
            <div className="contact-hours">
              <div className="contact-hour-item">
                <span className="contact-hour-icon">📅</span>
                <div>
                  <div className="contact-hour-day">Weekdays</div>
                  <div className="contact-hour-time">{officeHours.weekdays}</div>
                </div>
              </div>
              <div className="contact-hour-item">
                <span className="contact-hour-icon">📅</span>
                <div>
                  <div className="contact-hour-day">Saturday</div>
                  <div className="contact-hour-time">{officeHours.saturday}</div>
                </div>
              </div>
              <div className="contact-hour-item">
                <span className="contact-hour-icon">📅</span>
                <div>
                  <div className="contact-hour-day">Sunday</div>
                  <div className="contact-hour-time">{officeHours.sunday}</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="contact-map">
          <iframe
            src={mapEmbedUrl}
            className="contact-map-iframe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hospital Location"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
