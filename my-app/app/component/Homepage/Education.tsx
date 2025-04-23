"use client"
import React, { useEffect, useRef } from 'react';
import { Book, ShieldCheck, Award, ExternalLink, Database, Cloud, Code } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Education = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const educationData = [
    {
      type: 'education',
      icon: <Book className="text-purple-400" size={24} />,
      title: 'Adekunle Ajasin University',
      subtitle: 'Bachelor of Science - BSc in Geology, Earth Sciences',
      period: '2013 - 2018',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: null
    },
    {
      type: 'certification',
      icon: <ShieldCheck className="text-purple-400" size={24} />,
      title: 'ICSI CNSS Certified Network Security Specialist',
      subtitle: 'ICSI (International CyberSecurity Institute), UK',
      period: '19812087',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://www.credential.net/31e8b4f1-c44c-4ad0-853e-26b855c9ee85#acc.VeFnZ4uy"
    },
    {
      type: 'certification',
      icon: <Award className="text-purple-400" size={24} />,
      title: 'Identify and Investigate Cybersecurity Threats',
      subtitle: 'IBM',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://www.credly.com/badges/96c7a3e0-aafe-4f50-89a4-1618517fc8a3/linked_in_profile"
    },
    {
      type: 'certification',
      icon: <Award className="text-purple-400" size={24} />,
      title: 'Cybersecurity Intro',
      subtitle: 'IBM',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://www.credly.com/badges/0b218ead-60d0-4817-8732-03bd41691f4b/linked_in_profile"
    },
    {
      type: 'certification',
      icon: <Award className="text-purple-400" size={24} />,
      title: 'Data security',
      subtitle: 'IBM',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://www.credly.com/badges/e152b54a-1b87-418d-82e1-b7505a7b328d?source=linked_in_profile"
    },
    {
      type: 'certification',
      icon: <ShieldCheck className="text-purple-400" size={24} />,
      title: 'CyberArk Privileged Access Security',
      subtitle: 'CyberArk',
      period: '1194288',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://training.cyberark.com/award/certification/f492ee70-443e-3369-92ce-864c38a894f4"
    },
    {
      type: 'certification',
      icon: <ShieldCheck className="text-purple-400" size={24} />,
      title: 'Palo Alto Networks Academy Cybersecurity Foundation',
      subtitle: 'Coursera',
      period: 'LTLEHHS4VHS6',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://www.coursera.org/account/accomplishments/certificate/LTLENHS4VHS6"
    },
    {
      type: 'certification',
      icon: <Award className="text-purple-400" size={24} />,
      title: 'Jobberman Soft Skills Course',
      subtitle: 'Coursera',
      period: 'T2LSPHGT6OED',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://www.coursera.org/account/accomplishments/certificate/T2LSPHGT6QED"
    },
    {
      type: 'certification',
      icon: <Award className="text-purple-400" size={24} />,
      title: 'Teamwork Skills: Communicating Effectively in Groups',
      subtitle: 'Coursera',
      period: 'VAFWMN2FGTAF',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://www.coursera.org/account/accomplishments/certificate/VAFWMN2FGTAF"
    },
    {
      type: 'certification',
      icon: <Award className="text-purple-400" size={24} />,
      title: 'AI For Everyone',
      subtitle: 'Coursera',
      period: 'X2M342TWQPH7',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://www.coursera.org/account/accomplishments/certificate/X2M342TWQPH7"
    },
    {
      type: 'certification',
      icon: <ShieldCheck className="text-purple-400" size={24} />,
      title: 'Introduction to Cyber Attacks',
      subtitle: 'Coursera',
      period: 'ZVA38LDGSN96',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://www.coursera.org/account/accomplishments/certificate/ZVA38LDGSN96"
    },
    {
      type: 'certification',
      icon: <Database className="text-purple-400" size={24} />,
      title: 'Data Analytics Essentials',
      subtitle: 'Coursera',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://www.coursera.org/account/accomplishments/certificate/"
    },
    {
      type: 'certification',
      icon: <Cloud className="text-purple-400" size={24} />,
      title: 'Microsoft Azure Administrator',
      subtitle: 'Alison',
      period: '4814-28654192',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://alison.com/certification/check/$2y$10$jMk8p4WNBvf6C8lposxcS.HFqORBnrVbQHZTUR0diVn5nyFyNKgZ6"
    },
    {
      type: 'certification',
      icon: <Code className="text-purple-400" size={24} />,
      title: 'SQL',
      subtitle: 'Sololearn',
      period: 'CT-HPFVFTOL',
      bgColor: 'bg-gray-800/50',
      borderColor: 'border-purple-600/30',
      certLink: "https://www.sololearn.com/en/certificates/CT-HPEVFTOL"
    }
  ];

  const CardContent = ({ item }: { item: any }) => (
    <div className="flex items-start">
      <div className="mr-4 mt-1">
        {item.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-gray-300 mt-1">{item.subtitle}</p>
        {item.period && <p className="text-sm text-gray-400 mt-2">{item.period}</p>}
        <div className="mt-3 flex justify-between items-center">
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${item.type === 'education' ? 'bg-purple-600/20 text-purple-300' : 'bg-purple-600/20 text-purple-300'
            }`}>
            {item.type === 'education' ? 'Degree' : 'Certificate'}
          </span>

          {item.certLink && (
            <div
              className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center transition-colors"
            >
              View Certificate <ExternalLink size={16} className="ml-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="bg-black py-16 px-4" ref={ref} id="education">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Education & Certifications</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              {item.certLink ? (
                <a
                  href={item.certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-6 rounded-xl backdrop-blur-sm border ${item.borderColor} ${item.bgColor} hover:border-purple-600/60 hover:shadow-lg hover:shadow-purple-600/10 transition-all duration-300`}
                >
                  <CardContent item={item} />
                </a>
              ) : (
                <div
                  className={`p-6 rounded-xl backdrop-blur-sm border ${item.borderColor} ${item.bgColor} hover:border-purple-600/60 hover:shadow-lg hover:shadow-purple-600/10 transition-all duration-300`}
                >
                  <CardContent item={item} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;