import Box from "@mui/material/Box"
import { logos } from "../logo.js"
import { keyframes } from "@emotion/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function SkillCard({ title = "lang", skills = ["javascript", "react"] }) {
 const glow = keyframes`
  from {
    box-shadow: 0 0 30px rgba(0, 200, 255, 0.2);
  }
  to {
    box-shadow: 0 0 45px rgba(0, 200, 255, 0.8);
  }
`;
useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

    return (
        <>
            <Box
                sx={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                
                    height: { xs: "auto", md: "18rem" },
                    maxWidth: "40rem",
                    width: "100%",
                    backgroundColor: "#1B1B1B80",
                    p: 3,
                    m: 2
                }}>
                <Box data-aos="fade-right" sx={{
                    borderBottom: "2px solid red",
                    borderImage: "linear-gradient(to right, red, white) 1",
                    borderImageSlice: 1
                }}>

                    {title}
                </Box>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
                    gap: {xs: 3,sm:4, md: 6, lg: 6},
                
                    mt: 2
                }}>
                    {skills.map((skill, idx) => (
                        <Box key={idx}  data-aos="fade-up" sx={{
                            display: "flex",
                            opacity: "0.8",
                            flexDirection: "column",
                            width: "4rem",
                            alignItems: "center",
                            alignContent: "center",
                            justifyContent: "center",
                            height: "3.7rem",
                            borderRadius: "8px",
                            background: "#222222",
                            
                            color: "#fff",
                            
                            mb: 1,
                            boxShadow: "0 0 40px rgba(0, 200, 255, 0.2)",
                            animation: `${glow} 2s ease-in-out infinite alternate`,
                            "&:hover": {transform: "scale(1.05)", opacity: "1"}
                           
                        }}>
                            <Box component="img" sx={{ height: "30px", minWidth: "30px", mt: 4, }} src={logos[skill]}>


                            </Box>
                            

                        <Box sx={{mt: 2, ml :1}}>
                            <span style={{fontSize: "small", opacity: "0.6"}}>{skill}</span>
                        </Box>
                        </Box>
                    ))}


                </Box>


            </Box>
        </>


    )
}