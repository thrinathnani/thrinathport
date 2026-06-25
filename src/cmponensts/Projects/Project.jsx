import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='project'>

      <h1>PROJECTS</h1>

      <div className="project-container">

        <div className="project-card">
          <h2 className="projectTitle">
            🚌 Smart Bus Tracking & Fleet Management Platform
          </h2>

          <p className="projectDesc">
            Real-time bus tracking system using GPS and OpenCV for vehicle detection.
            Backend built with Python and Flask manages drivers, routes, and tracking.
            React.js frontend visualizes bus locations dynamically, Firebase handles
            real-time updates, and a dynamic scheduling algorithm optimizes routes
            for efficiency.
          </p>
        </div>

        <div className="project-card">
          <h2 className="projectTitle">
            🌱 Smart Gardening Assistance System
          </h2>

          <p className="projectDesc">
            Built an automated irrigation system using sensors and a relay-controlled
            water pump. Developed a web dashboard to monitor real-time soil and
            environmental data while optimizing water usage through automation.
          </p>
        </div>

        <div className="project-card">
          <h2 className="projectTitle">
            🤖 Personal Chatbot
          </h2>

          <p className="projectDesc">
            Developed a conversational chatbot with a user-friendly browser-based
            interface. Integrated Weather API to provide real-time weather updates
            with responsive design and efficient API handling.
          </p>
        </div>

        <div className="project-card">
          <h2 className="projectTitle">
            🍔 Food Delivery Application
          </h2>

          <p className="projectDesc">
            Developed a full-stack food delivery application using FastAPI and
            frontend technologies. Built RESTful APIs for handling users, orders,
            and menu operations with smooth client-server communication.
          </p>
        </div>

        <div className="project-card">
          <h2 className="projectTitle">
            🧠 RAG-Based Customer Support Assistant
          </h2>

          <p className="projectDesc">
            Developed a Retrieval-Augmented Generation (RAG) based customer support
            assistant using LangChain and LangGraph with HITL workflows,
            document retrieval, and context-aware response generation.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Project