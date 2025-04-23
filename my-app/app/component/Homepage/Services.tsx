"use client";
import React from 'react';
import { Server, Cloud, Database, Lock, Code, LineChart } from 'lucide-react';
import { sectionPadding } from '../styles/styles';
import { motion } from 'framer-motion';

type ServiceProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServiceCard = ({ icon, title, description }: ServiceProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
    >
      <div className="text-purple-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">
        {description}
      </p>
    </motion.div>
  );
};


const Services = () => {
  const services = [
    {
      icon: <Cloud size={32} />,
      title: "Cloud Infrastructure",
      description: "Design, deploy and manage scalable cloud infrastructure on Azure using IaC tools like Terraform, ARM templates, and Bicep."
    },
    {
      icon: <Code size={32} />,
      title: "CI/CD Pipeline Automation",
      description: "Implement and optimize automated CI/CD pipelines using Azure DevOps, GitHub Actions, and Bitbucket Pipelines for faster delivery."
    },
    {
      icon: <Server size={32} />,
      title: "Kubernetes & Containerization",
      description: "Deploy and manage containerized applications using Docker and Kubernetes for improved scalability and resource utilization."
    },
    {
      icon: <Lock size={32} />,
      title: "Security Implementation",
      description: "Integrate security tools, manage secure secrets with Azure Key Vault, and implement network security measures including private endpoints."
    },
    {
      icon: <Database size={32} />,
      title: "Database Management",
      description: "Configure and optimize cloud databases such as Azure SQL and PostgreSQL Flexible Server for performance and reliability."
    },
    {
      icon: <LineChart size={32} />,
      title: "Monitoring & Optimization",
      description: "Set up comprehensive monitoring using Prometheus, Grafana, and Dynatrace with proper alerting to ensure system reliability."
    }
  ];

  return (
    <motion.div
      id="services"
      className={`${sectionPadding} bg-gradient-to-br from-black via-gray-900 to-black text-white py-28`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Specialized DevOps solutions to accelerate your development lifecycle and optimize cloud infrastructure
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
