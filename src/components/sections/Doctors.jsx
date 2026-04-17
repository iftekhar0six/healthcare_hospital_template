import { useState } from 'react';
import { doctorsContent } from '@/settings';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import './Doctors.css';

const Doctors = () => {
  const { title, subtitle, categories } = doctorsContent;
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <Section id="doctors" className="doctors-section">
      <Container>
        <div className="doctors-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="doctors-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`doctors-tab ${activeCategory === category.id ? 'doctors-tab--active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="doctors-category-info">
          <h3 className="doctors-category-name">{currentCategory.name}</h3>
          <p className="doctors-category-description">{currentCategory.description}</p>
        </div>

        {currentCategory.doctors && (
          <div className="doctors-grid">
            {currentCategory.doctors.map((doctor) => (
              <Card key={doctor.id} hover className="doctor-card">
                <div className="doctor-image-wrapper">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-image"
                  />
                </div>
                <div className="doctor-info">
                  <h4 className="doctor-name">{doctor.name}</h4>
                  <p className="doctor-specialty">{doctor.specialty}</p>
                  <p className="doctor-qualification">{doctor.qualification}</p>
                  <p className="doctor-experience">Experience: {doctor.experience}</p>
                  <div className="doctor-availability">
                    <strong>Available:</strong> {doctor.availability}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {currentCategory.departments && (
          <div className="departments-grid">
            {currentCategory.departments.map((dept) => (
              <Card key={dept.id} hover className="department-card">
                <h4 className="department-name">{dept.name}</h4>
                <div className="department-doctors">
                  {dept.doctors.map((doctor, index) => (
                    <span key={index} className="department-doctor">
                      {doctor}
                    </span>
                  ))}
                </div>
                <p className="department-availability">
                  <strong>Available:</strong> {dept.availability}
                </p>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Doctors;
