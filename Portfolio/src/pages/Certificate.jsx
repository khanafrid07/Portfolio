 import Box from "@mui/material/Box"
import CertificateCard from "../components/CertificateCard"
import hackerRankLogo from "../assets/hackerrank.svg"
import codeCampLogo from "../assets/codeCamp.svg"
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
            

        <CertificateCard title="HackerRank - JavaScript" desc={"Issued by HackerRank"} imgIco={hackerRankLogo} caption={"Issued Date :  October 2025"}/>
        <CertificateCard title="HackerRank - JavaScript" desc={"Issued by HackerRank"} imgIco={codeCampLogo} caption={"Issued Date :  October 2025"}/>
        <CertificateCard title="HackerRank - JavaScript" desc={"Issued by HackerRank"} imgIco={hackerRankLogo} caption={"Issued Date :  October 2025"}/>

        </Box>
        
        
        </>
    )
 }