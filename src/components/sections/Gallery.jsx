import { useState } from 'react';
import { galleryContent } from '@/settings';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Dialog from '@/components/ui/Dialog';
import './Gallery.css';

const Gallery = () => {
  const { title, subtitle, images, categories } = galleryContent;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter((img) => img.category === selectedCategory);

  return (
    <Section id="gallery">
      <Container>
        <div className="gallery-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="gallery-filters">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`gallery-filter ${selectedCategory === category ? 'gallery-filter--active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">{image.title}</div>
                <div className="gallery-category">{image.category}</div>
              </div>
            </div>
          ))}
        </div>

        <Dialog
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        >
          {selectedImage && (
            <div className="gallery-dialog-content">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="gallery-dialog-image"
              />
              <div className="gallery-dialog-info">
                <h3 className="gallery-dialog-title">{selectedImage.title}</h3>
                <p className="gallery-dialog-category">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </Dialog>
      </Container>
    </Section>
  );
};

export default Gallery;
