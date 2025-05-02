"use client";

import { images } from "@/public/images";
import { Download } from "lucide-react";
import Image from "next/image";
import { sectionPadding } from "../styles/styles";
import { FaDatabase, FaCloud, FaServer, FaTerminal, FaCodeBranch } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {};

function AboutSection({}: Props) {
  return (
    <div id="about" className="bg-black text-white min-h-screen flex flex-col py-20">
      <div className={`${sectionPadding} py-22`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-8 items-start bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/3"
          >
            <Image
              src={images.home}
              alt="Ewuji Oluwaseyi John"
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-3xl font-bold mb-1">About Me</h2>
            <p className="text-purple-600 text-sm mb-6">
              Lead DevOps And User Experience Architect Vibes Editing
            </p>

            <div className="space-y-4">
              <p className="text-gray-300">
                DevOps Engineer with over 5 years of experience in Information Technology, specializing in automating,
                supporting, and deploying critical applications across large-scale infrastructure. Highly proficient in
                Azure Cloud services, Azure DevOps, GitHub Actions, and Bitbucket Pipelines.
              </p>
              <p className="text-gray-300">
                Experienced in building and managing cloud infrastructures using ARM template, Terraform, PowerShell,
                Bicep, and scripting languages such as Bash and Python for Infrastructure as Code (IaC). Collaborated
                with software engineering teams to migrate on-premises services to the cloud, leading to a complete
                revamp of application architecture and a 70% reduction in deployment time.
              </p>

              <button 
              onClick={() => window.open('https://drive.google.com/file/d/1wMzbPCTu2m_NbYJBYi_LOal4WOfchi-s/view?usp=sharing', '_blank')}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md flex items-center gap-2 transition-colors">
                <Download size={18} />
                Download CV
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Icons Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            <SkillIcon icon={<FaDatabase />} label="SQL" />
            <SkillIcon icon={<FaCloud />} label="Azure Cloud" />
            <SkillIcon icon={<FaServer />} label="AKS" />
            <SkillIcon icon={<FaTerminal />} label="PowerShell" />
            <SkillIcon icon={<FaCodeBranch />} label="Terraform" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

type SkillIconProps = {
  icon: React.ReactNode;
  label: string;
};

function SkillIcon({ icon, label }: SkillIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 5 }}
      className="flex flex-col items-center transition-transform duration-300 animate-rotateY3D"
    >
      <div className="text-purple-600 text-4xl">{icon}</div>
      <span className="text-purple-600 mt-2 text-sm">{label}</span>
    </motion.div>
  );
}

export default AboutSection;
