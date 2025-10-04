import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EmailIcon from '@mui/icons-material/Email';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
export default function Contact() {


    return (
        <>
        <div id="contacts" style={{backgroundColor:"#F4F5F505", marginBottom: "3rem"}}>
            <Box sx={{p: 3,}}>
            <Typography variant="h4" sx={{textAlign: "center", color: "white", mt: 6}}>Contact Me</Typography>

            </Box>
        
            <Box sx={{
                color: "white",
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                
                flexWrap: "wrap",
                gap: 4,
                
                
                
            }}>



                {/* <Box>
                <Typography variant="h4">Contact Me</Typography>
                <Typography variant="caption">Send me a message, and i'll get back to you soon.</Typography>
            </Box> */}
            <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap :2,
                   
                    
                   
                   mt: 2,
                   p: 4,
                  
                   
                 
                    
                }}> 
                    <Typography variant="h6">Connect With Me</Typography>
                    <Typography variant="body2" sx={{}}>All Social Links</Typography>
                    <Box component="a" sx={{color: "white", textDecoration: "none"}}><EmailIcon sx={{mr:2}}/>kafrid488@gmail.com</Box>
                    <Box component="a" sx={{color: "white", textDecoration: "none"}}><GitHubIcon sx={{mr:2}}/>github.com/khanafrid07</Box>
                    <Box component="a" sx={{color: "white", textDecoration: "none"}}><XIcon sx={{mr:2}}/>Twitter</Box>
                    <Box component="a" sx={{color: "white", textDecoration: "none"}}><ChatBubbleOutlineIcon sx={{mr:2}}/>kafrid488@gmail.com</Box>
                </Box>

                <Box sx={{
                    backgroundColor: "#181B1B",
                    border: "1px solid gray",
                    borderRadius: "6px",
                    color: "white",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                   
                    m: 2,
                    p: 2,
                    gap: 2,
                     width: { xs: "100%", sm: "48%", md: "50%" },
                     order: { xs: 2, md: 1 }
                    
                    
                }}>
                    <Typography variant="h5">Get in Touch</Typography>
                    <Typography>Feel free to contact me for any work or suggestion</Typography>
                    <TextField slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start"><PersonIcon sx={{ color: "white" }} /></InputAdornment>
                            )
                        }

                    }} variant="outlined" placeholder="Your Name" sx={{
                        width: '100%', "& .MuiInputBase-input": { color: "white" }, "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "white",
                            },
                            "&:hover fieldset": {
                                borderColor: "lightgray",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "white",
                            }
                        }
                    }} />
                    <TextField slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start"><MailOutlineIcon sx={{ color: "white" }} /></InputAdornment>
                            )
                        }

                    }} variant="outlined" placeholder="Email" sx={{
                        width: '100%', "& .MuiInputBase-input": { color: "white" }, "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "white",
                            },
                            "&:hover fieldset": {
                                borderColor: "lightgray",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "white",
                            }
                        }
                    }} />
                    <TextField variant="outlined" multiline rows={6} placeholder="Your message" sx={{
                        width: "100%", "& .MuiInputBase-input": { color: "white" }, "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "white",
                            },
                            "&:hover fieldset": {
                                borderColor: "lightgray",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "white",
                            }
                        }
                    }} slotProps={{ input: { startAdornment: (<InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 0.5 }}><ChatBubbleOutlineIcon sx={{ mb: 2, color: "white" }} /></InputAdornment>) } }} />
                    <Button variant="contained" endIcon={<SendIcon/>}>Send Message</Button>
                </Box>
                
            </Box>
            </div>
        </>
    )
}