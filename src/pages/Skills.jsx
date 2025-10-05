import Box from "@mui/material/Box"
import SkillCard from "../components/SkillCard.jsx"
export default function Skills() {

    return (

        <>
            <div className="mt-5 p-4" style={{ color: "white" }}>
                <div className="d-flex justify-content-center">
                    <h1>Techincal Skills</h1>
                </div>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",

                    
                   
                   
                    borderRadius: "8px",
                    
                }}>
                    <SkillCard title="Frontend Technologies" skills={["HTML5", "CSS3", "JavaScript", "React", "Redux", "BootStrap", "TailWind"]}/>
                     <SkillCard title="Backend Technologies" skills={["Node.js","Express", "MongoDB", "MySQL", "REST API"]}/>
                      <SkillCard title="Developer Tools" skills={["npm", "Git", "GitHub", "POSTMAN", "VS Code", "Vercel"]}/>
                    
                    
                </Box>
            </div>
        </>
    )
}