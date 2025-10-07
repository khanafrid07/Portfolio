 import Box from "@mui/material/Box"
import CertificateCard from "../components/CertificateCard"
import hackerRankLogo from "../assets/hackerrank.svg"
import codeCampLogo from "../assets/codeCamp.svg"
import soloLearn from "../assets/soloLearn.svg"
 export  default function Certificate(){
    return(
        <>
        <div style={{textAlign:  "center", color: "white", marginTop: "7rem"}}>
            <h2>Certifications</h2>
            <p style={{opacity: "0.7"}}>Earned achievement in the field of technology.</p>
        </div>
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            p: 2,
            justifyContent: "center",
            backgroundColor:"#F4F5F505",
       
           
        }}>
            

        <CertificateCard title="HackerRank - JavaScript" desc={"Issued By: HackerRank"} imgIco={hackerRankLogo} caption={"Issued Date :  September 2025"} downloadLink={"/Portfolio/hackerRankCertificate.pdf"} link="https://www.hackerrank.com/certificates/a6e4155d2d77"/>
        <CertificateCard title="Responsive Web Design" desc={"Issued By: freeCodeCamp"} imgIco={codeCampLogo} caption={"Issued Date :  October 2025"} downloadLink={"/Portfolio/codeCamp.pdf"} link="https://www.freecodecamp.org/certification/khanafrid03/responsive-web-design"/>
        <CertificateCard title="Web Development" desc={"Issued By: Sololearn"} imgIco={soloLearn} caption={"Issued Date :  October 2025"}/>

        </Box>
        
        
        </>
    )
 }