import React from 'react';
import { Fade } from 'react-reveal';

const ExtraSection = () => {
    return (
        <section id="about-us" className="bg-gray-100 py-12 my-10">
        <div className="container mx-auto px-6">
          <Fade>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800">About Dance Flow Academy</h2>
          </Fade>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <Fade left>
              <p className="text-lg leading-relaxed mb-6 sm:w-1/2 text-gray-600">Welcome to Dance Flow Academy! We are a team of passionate individuals dedicated to providing high-quality dance education and fostering a love for movement.</p>
            </Fade>
            <Fade right>
              <p className="text-lg leading-relaxed mb-6 sm:w-1/2 text-gray-600">With years of experience in the industry, we have gained a deep understanding of our students' needs and strive to create a supportive and inclusive environment where they can thrive.</p>
            </Fade>
          </div>
          <Fade bottom>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-lg leading-relaxed mb-6 sm:w-1/2 text-gray-600">At Dance Flow Academy, we offer a wide range of dance styles, including ballet, hip-hop, contemporary, and more. Our experienced instructors are committed to helping students develop their skills, build confidence, and express themselves through dance.</p>
              <p className="text-lg leading-relaxed mb-6 sm:w-1/2 text-gray-600">Explore our website to learn more about our classes, events, and performances. Whether you're a beginner or an experienced dancer, we welcome you to join our dance community and discover the joy of movement at Dance Flow Academy!</p>
            </div>
          </Fade>
        </div>
      </section>
    );
};

export default ExtraSection;