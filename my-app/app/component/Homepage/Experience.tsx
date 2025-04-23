"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Image from 'next/image';
import { sectionPadding } from '../styles/styles';
import { images } from '@/public/images';

const experiences = [
  {
    role: 'Lead DevOps Engineer',
    company: 'Sportrr',
    date: 'Jun 2024 – Present',
    points: [
      'Automated infrastructure deployment with Terraform, reducing manual workload.',
      'Managed Kubernetes and Docker for efficient microservice orchestration.',
      'Enhanced security using private endpoints and VPNs.',
      'Migrated apps to the cloud, resulting in 90% performance improvement.',
      'Configured Azure Load Balancers to boost reliability and traffic handling.',
    ],
  },
  {
    role: 'DevOps Engineer (Contractor)',
    company: 'Arbosys',
    date: 'Aug 2023 – Jul 2024',
    points: [
      'Deployed and managed Kubernetes clusters with high availability.',
      'Configured Postgres Flexible Server for critical databases.',
      'Developed ARM Templates and Terraform scripts for Azure provisioning.',
      'Implemented Azure Key Vault and secure private endpoints.',
      'Integrated CI/CD pipelines via GitHub Actions, Bitbucket & Azure DevOps.',
      'Monitored uptime (99%) using Prometheus & Grafana.',
    ],
  },
  {
    role: 'Azure DevOps Engineer / Cloud Engineer',
    company: 'ALAT by Wema',
    date: 'Oct 2021 – Present',
    icon: images.wema,
    points: [
      'Built CI/CD pipelines using Azure DevOps, GitHub Actions & Bitbucket.',
      'Automated Azure processes with Runbooks (PowerShell/Bash).',
      'Optimized performance with Dynatrace, Prometheus, and Grafana.',
      'Managed AKS, deployed microservices with Docker.',
      'Used Terraform, Bicep, and PowerShell for IaC.',
    ],
  },
  {
    role: 'IT Service Delivery / Support Specialist',
    company: 'First Bank of Nigeria Ltd.',
    date: 'Jun 2019 – Feb 2022',
    icon: images.firstBank,
    points: [
      'Set up networks, servers, and resolved system issues.',
      'Managed VPN software, backups, and compliance reporting.',
      'Provided analysis of system downtimes and resolutions.',
    ],
  },
  {
    role: 'IT Support Specialist',
    company: 'Modulit Enterprise',
    date: 'Mar 2019 – Jun 2019',
    points: [
      'Maintained computer systems and resolved hardware/software issues.',
      'Created documentation and ensured functional infrastructure.',
    ],
  },
];

const Experience = () => {
  return (
    <section id='experience' className={`${sectionPadding} relative bg-black py-14`}>
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Work Experience</h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-purple-600 transform -translate-x-1/2 z-0" />

        <div className="space-y-20">
          {experiences.map((exp, i) => {
            const initials = exp.company
              .split(' ')
              .map(word => word[0])
              .join('')
              .substring(0, 2)
              .toUpperCase();

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative z-10"
              >
                {/* Icon in the center */}
                <div className="absolute left-1/2 -top-7 transform -translate-x-1/2 z-20">
                  <div className="w-14 h-14 bg-[#fff] rounded-full flex items-center justify-center shadow-lg border border-purple-500">
                    {exp.icon ? (
                      <Image src={exp.icon} alt={exp.company} width={50} height={50} />
                    ) : (
                      <span className="text-lg font-bold text-purple-600">{initials}</span>
                    )}
                  </div>
                </div>

                {/* Experience Card */}
                <div className="bg-[#1c1e3a] rounded-2xl pt-14 shadow-lg p-6 border border-purple-500 mx-4 text-left backdrop-blur-sm">
                  <div className="px-4">
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">{exp.role}</h3>
                    <h4 className="md:text-lg mb-1 text-white">{exp.company}</h4>
                    <span className="text-sm text-gray-400">{exp.date}</span>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-gray-300">
                      {exp.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;