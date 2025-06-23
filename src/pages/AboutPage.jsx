import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./AboutPage.css";

const AboutPage = () => {  
    return(
  <div id="abc">
    <Header/> 
  <div style={{ padding: '1rem' }} className="home-scroll-container">
   
    <h1 className='h1'>About Vivekanand College</h1>
    <p>Vivekanand College stands as a beacon of knowledge and integrity,committed to delivering transformative education since its inception in 1980. Located in the bustling heart of Kolhapur, our college has consistently strived to uphold the highest standards of academic rigor and ethical values.</p>
    <p>
      Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. 
      We aim to nurture individuals who are not only successful in their careers but also contributing members of society.
    </p>
    <h2 id="or">Our Mission</h2>
    <ul>
      <li id="or">To provide high-quality, accessible education across various disciplines.</li>
      <li id="or">To foster research, innovation, and creativity among students and faculty.</li>
      <li id="or">To cultivate a diverse and inclusive learning environment.</li>
      <li id="or">To instill strong ethical values and leadership qualities.</li>
    </ul>

    <h2 class="abc">Our Values</h2>
    <p class="small-text">
      Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built.We encourage <span>open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</span>
      
    </p>

    <h2 class="abc">Our History</h2>
    <p>October 19,1954 saw the beginning of a new phase in Bapuji’s career when he laid the foundation of a new education institute in the presence of his colleagues in Murlidhar temple at Karad. In November,1954, the proposed educational institute was named after Shri Swami Vivekanand at the instance of Swami Ramanand Bharti, the first president of the sanstha. Shri Swami Vivekanand Sanstha was duly registered on 31st of December 1954;and started functioning on the 5th of june 1955. Bapuji and his colleagues set up highschool at Kolhapur,Tasgaon ,Chaphal,Tarale and Undale; a training college for women at Karad,Boys’.Hostels at Kolhapur and Chaphal. This was only the modest beginning of Shri Swami Vivekanand Shikshan Sanstha that was soon to be developed in to 88652 students into the states of Maharastra and Karnataka. The sanstha has the most impressive number of 3160 teaching staff,1221 non-teaching and office staff. The sanstha owns 176 buildings and 70 new buildings are being constructed along with the construction of the new head office. The sanstha has also opened a credit society for its employees.</p>
  </div>
      <Footer/>
  </div>
)

}
export default AboutPage;