import { Helmet } from 'react-helmet';
import bgImage from '../assets/it.jpg';
const About = () => {
    return (
        <>
           <Helmet>
        <title>GadgetHeaven || About</title>
      </Helmet>
          
      <div
  className="hero min-h-80 rounded-xl my-12 bg-purple-500 mt-20 md:mt-28"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to the Gadget Heaven Brand</h1>
      <p className="mb-5">
      To apply for a job at an Apple showroom, there are several key requirements typically expected. Applicants should have a strong passion for technology and an in-depth understanding of Apple products, including iPhones, iPads, Macs, and accessories. Excellent customer service skills are essential, as the role involves interacting with customers, answering their queries, and providing product demonstrations.
      </p>
    </div>
  </div>
</div>
<div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-purple-700">Apply now!</h1>
      <p className="py-6">
      To apply for a job in the IT sector, several requirements and qualifications typically vary depending on the specific role. However, common requirements include:


  1. Educational Qualifications:

A degree in Computer Science, Information Technology, Software Engineering, or a related field is often preferred. Some roles may require certifications or specialized courses.

2. Technical Skills:

Proficiency in programming languages (e.g., Java, Python, C++, etc.), database management, networking, and web development.
Familiarity with operating systems (e.g., Windows, Linux, macOS), and cloud platforms (AWS, Azure, Google Cloud).

3. Certifications:

Certifications in areas like cybersecurity (CompTIA Security+), cloud computing (AWS Certified Solutions Architect), or networking (Cisco Certified Network Associate - CCNA) can be an advantage.

4. Problem-Solving Skills:

Strong analytical and troubleshooting abilities are essential for roles like software development, IT support, or network administration.

5. Experience:

Previous work experience or internships in IT roles can be valuable. Even entry-level positions may require hands-on experience with relevant tools and technologies.

6. Soft Skills:

Communication, teamwork, and adaptability are key in collaborating with cross-functional teams and staying current with rapidly changing technologies.
Portfolio or Projects:

Many IT roles(especially in software development and web design) may require a portfolio of projects or code samples to demonstrate practical skills.
Different positions, such as software developer, network engineer, data analyst, or IT support specialist, will have specific additional requirements tailored to their role.
      </p>
    </div>
    <div className="card max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
        <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="your name" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Your Subject</span>
          </label>
          <input type="text" placeholder="your subject" className="input input-bordered" required />
        
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        
          <label className="label">
            <span className="label-text">Passing Year</span>
          </label>
          <input type="number" placeholder="passing year" className="input input-bordered" required />
          
        
        <div className="form-control mt-6">
          <button className="btn bg-purple-700 text-white">Apply</button>
        </div>
      </form>
    </div>
    
  </div>
</div>
        </>
    );
};

export default About;