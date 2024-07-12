import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Where have I worked</h5>
      <h2>Experiences</h2>

      <div className='container experience__container'>
        <div className="experience__1">
          <h3><a href="https://www.goodcore.co.uk/">GoodCore Software Limited</a></h3>
          <div className="experience__content">
            <h4>Software Engineer Intern</h4>
            <ul>
              <li>Developed web applications using React, Node.js, and MongoDB.</li>
              <li>Worked on the front-end and back-end of the applications. Used Git for version control and JIRA for project management.</li>
            </ul>
          </div>
        </div>
        <div className="experience__1">
          <h3><a href="https://www.linkedin.com/company/capelin-solutions">Capelin Solutions</a></h3>
          <div className="experience__content">
            <h4>Junior Python Developer</h4>
            <ul>
              <li>Developed and implemented Python scripts for trimming audio and video files based on transcripts, generating summaries
                using OpenAI's GPT-4 and the Transformers library, and automating the creation of podcast cover images. This work
                included handling multimedia files, integrating APIs, and optimizing workflows for efficient content production.
              </li>
              <li>
                Created Python scripts to generate podcast feeds to host audio files and feed data using Azure Storage.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
