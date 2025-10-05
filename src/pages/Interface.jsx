import '../styles/Interface.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DriveFileMoveOutlineIcon from '@mui/icons-material/DriveFileMoveOutline';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useEffect, useState } from 'react';
import devImg from '../assets/pf.jpg'; // Replace with your Ghibli-style image
import { Link } from 'react-scroll';

export default function Interface() {
  const skills = ["JavaScript", "React", "MERN", "MySQL"];

  // Typing effect for subheading
  const texts = ["Full Stack Developer", "Problem Solver", "Innovator"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentText(prev => prev + texts[index][charIndex]);
      if (charIndex < texts[index].length - 1) {
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0); 
          setIndex((index + 1) % texts.length);
        }, 1500);
      }
    }, 120);
    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <div className="interface">
      <div className="heroContent">

        {/* Left Side: Text */}
        <div className="textContent">
          <h1 className="heading">Hi, I'm Afrid Khan</h1>
          <h2 className="subHeading">{currentText}<span className="cursor">|</span></h2>
          <p className="introText">
            I build responsive websites and web apps with clean, efficient code. My goal is to make every user interaction smooth, engaging, and visually appealing.
          </p>

          {/* Skills */}
          <div className="allSkills">
            {skills.map(skill => (
              <div key={skill} className="skill">{skill}</div>
            ))}
          </div>

          {/* Buttons */}
          <Stack direction="row" spacing={2} className="buttonStack">
            <Link to='projects' smooth={true} offset={-70} duration={500}>
            <Button className="btn" href='' endIcon={<DriveFileMoveOutlineIcon />}>Projects</Button>
            </Link>
            <Link to='contacts' smooth={true} duration={500} offset={-70}> 
            <Button className="btn" endIcon={<ContactMailIcon />}>Contact</Button>
            </Link>
            <Link to='certificates' smooth={true} offset={-70}>
            <Button className="btn" endIcon={<WorkspacePremiumIcon />}>Certificates</Button>
            </Link>
          </Stack>

          {/* Ready to Innovate */}
          <div className="innovateBtn">Ready to Innovate?</div>
        </div>

        {/* Right Side: Ghibli-style Image */}
        <div className="imageContent">
          <img src={devImg} alt="Ghibli Style Afrid" />
        </div>

      </div>
    </div>
  );
}
