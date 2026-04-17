import { appointmentContent } from '@/settings';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import './Appointment.css';

const Appointment = () => {
  const { title, subtitle, description, contactInfo, timings, procedures, departments, note } = appointmentContent;

  return (
    <Section id="appointment" className="appointment-section">
      <Container>
        <div className="appointment-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          <p className="appointment-description">{description}</p>
        </div>

        <div className="appointment-grid">
          <div className="appointment-left">
            <Card className="appointment-contact-card">
              <h3 className="appointment-card-title">Contact Information</h3>
              <div className="appointment-contact-info">
                <div className="appointment-contact-item">
                  <span className="appointment-contact-icon">📞</span>
                  <div>
                    <div className="appointment-contact-label">Phone</div>
                    <div className="appointment-contact-value">{contactInfo.phone}</div>
                  </div>
                </div>
                <div className="appointment-contact-item">
                  <span className="appointment-contact-icon">🚨</span>
                  <div>
                    <div className="appointment-contact-label">Emergency</div>
                    <div className="appointment-contact-value">{contactInfo.emergencyPhone}</div>
                  </div>
                </div>
                <div className="appointment-contact-item">
                  <span className="appointment-contact-icon">📧</span>
                  <div>
                    <div className="appointment-contact-label">Email</div>
                    <div className="appointment-contact-value">{contactInfo.email}</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="appointment-timings-card">
              <h3 className="appointment-card-title">Appointment Timings</h3>
              <div className="appointment-timings">
                <div className="appointment-timing-item">
                  <div className="appointment-timing-day">{timings.weekdays.label}</div>
                  <div className="appointment-timing-hours">
                    <div>OPD: {timings.weekdays.opd}</div>
                    <div>Emergency: {timings.weekdays.emergency}</div>
                  </div>
                </div>
                <div className="appointment-timing-item">
                  <div className="appointment-timing-day">{timings.saturday.label}</div>
                  <div className="appointment-timing-hours">
                    <div>OPD: {timings.saturday.opd}</div>
                    <div>Emergency: {timings.saturday.emergency}</div>
                  </div>
                </div>
                <div className="appointment-timing-item">
                  <div className="appointment-timing-day">{timings.sunday.label}</div>
                  <div className="appointment-timing-hours">
                    <div>OPD: {timings.sunday.opd}</div>
                    <div>Emergency: {timings.sunday.emergency}</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="appointment-right">
            <Card className="appointment-procedures-card">
              <h3 className="appointment-card-title">How to Book</h3>
              <div className="appointment-procedures">
                {procedures.map((procedure) => (
                  <div key={procedure.id} className="appointment-procedure">
                    <div className="appointment-procedure-icon">{procedure.icon}</div>
                    <div className="appointment-procedure-content">
                      <h4 className="appointment-procedure-title">{procedure.title}</h4>
                      <p className="appointment-procedure-description">{procedure.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="appointment-departments-card">
              <h3 className="appointment-card-title">Available Departments</h3>
              <div className="appointment-departments">
                {departments.map((dept, index) => (
                  <div key={index} className="appointment-department">
                    {dept}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="appointment-note">
          <strong>Note:</strong> {note}
        </div>
      </Container>
    </Section>
  );
};

export default Appointment;
