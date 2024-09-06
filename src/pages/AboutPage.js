import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JoinWaitingListSection from '../components/JoinWaitingListSection';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">About SlateMindAI</h2>
          <p className="text-lg text-[#5f6368] mb-6">
            At <strong>SlateMindAI</strong>, we believe that learning should be personal, engaging, and insightful.
            Our platform uses cutting-edge AI technology to transform the way students and professionals absorb knowledge,
            making learning more efficient and tailored to individual needs. Whether you're prepping for exams, developing new
            skills, or exploring new areas of interest, SlateMindAI helps you maximize your potential by creating a learning
            experience that is truly your own.
          </p>

          <p className="text-lg text-[#5f6368] mb-6">
            With SlateMindAI, learning is no longer about rote memorization or overwhelming study sessions. We empower you with tools
            like **flashcard generation**, **study groups**, and **AI-powered chats with your uploaded materials**. Our mission is
            to turn information overload into organized, digestible, and actionable knowledge, helping you not just retain but deeply
            understand the material.
          </p>

          <p className="text-lg text-[#5f6368] mb-6">
            From study groups that foster collaboration to **leaderboards** that add a gamified touch to your learning journey,
            SlateMindAI is designed to make learning interactive and fun. We’re not just another flashcard app—we’re your partner
            in mastering subjects, reducing learning friction, and making studying a rewarding experience.
          </p>

          <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">Our Vision</h2>
          <p className="text-lg text-[#5f6368] mb-6">
            Our vision is simple: to make learning **accessible**, **engaging**, and **impactful** for everyone. We believe that
            AI can unlock the true potential of learners by giving them the tools to interact with the knowledge they care about
            in a deeper way.
          </p>

          <p className="text-lg text-[#5f6368] mb-6">
            Whether you’re working on your academic goals or looking to advance professionally, SlateMindAI provides the framework
            you need to excel, collaborate, and grow. Join us in reshaping how knowledge is acquired and applied.
          </p>

          {/* <div className="text-center mt-8">
            <a href="#join-waitlist" className="bg-[#50E3C2] text-white text-lg font-bold px-6 py-3 rounded-lg hover:bg-[#4A90E2] transition-colors duration-300">
              Join Our Community
            </a>
          </div> */}
          <JoinWaitingListSection />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
