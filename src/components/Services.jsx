import React from "react";
import SectionTitle from "./SectionTitle";
import services from "../data/services";
import serviceItem from "./ServicesItem";
import ServicesItem from "./ServicesItem";

function Services() {
  return (
    <div className="py-12">
      <SectionTitle>Courses/Certifications</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((services) => (
          <ServicesItem
            key={services.title}
            title={services.title}
            icon={services.icon}
            description={services.description}
          ></ServicesItem>
        ))}
      </div>
    </div>
  );
}

export default Services;
