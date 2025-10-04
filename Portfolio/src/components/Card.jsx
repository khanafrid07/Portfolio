import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import ProjectDialouge from './ProjectDialouge';
import { useState } from 'react';
import "../styles/Card.css"
export default function Card({ title = "Beauty Bliss", date = "2002", tools = ["react", "vite", "Java"], DialougeTitle="gay", DialougeDesc }) {
 const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


    return (
        <>
            <div className="card card responsive-card" style={{width: "100%", maxWidth: '29rem', margin: "1rem", height: "16rem", backgroundColor: "#181b1b", color: "#9FADAC", border: "1px solid gray", borderRadius: "6px" }}>
                <div className="card-body">


                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <h5 className="card-title mb-0" style={{
                                background: "linear-gradient(to right, #f8f9fa, #b83fca)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>{title}</h5>
                            <h6 className="card-subtitle text-muted">{date}</h6>
                        </div>
                        <Button onClick={handleClickOpen}
                            size="small"
                            sx={{
                                textTransform: "none", color: "white", background: "radial-gradient(circle at top left, #0b132b, #212529)", transition: "0.3s all ease",
                                ":hover": {
                                    background: "radial-gradient(circle at top left, #1c2541, #212529)",
                                    transform: "scale(1.03)"
                                }
                            }}
                        >
                            Details
                        </Button>
                        <ProjectDialouge open={open} onClose={handleClose} title={DialougeTitle} desc={DialougeDesc}></ProjectDialouge>
                        
                    </div>

                    <p className="card-text mt-2">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>


                    <div className="d-flex gap-2 flex-wrap">
                        {tools.map((tool, idx) => (
                            <Box
                                sx={{
                                    background: "linear-gradient(to right, #353839, #414A4C)",
                                    cursor: "pointer",
                                    px: 2,
                                    color: "white",
                                    py: 0.5,
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    transition: "0.3s all ease",
                                    ":hover": { transform: "scale(1.03)" }
                                }}
                                key={idx}

                            >
                                {tool}
                            </Box>
                        ))}
                    </div>


                    <Button
                        className="mt-4"
                        startIcon={<GitHubIcon />}
                        variant="contained"
                        size="small"
                        sx={{
                            textTransform: "none",
                            height: "2.3rem",
                            background: "radial-gradient(circle at top left, #0b132b, #212529)",
                            transition: "0.3s all ease",
                            ":hover": {
                                background: "radial-gradient(circle at top left, #1c2541, #212529)",
                                transform: "scale(1.03)"
                            },

                        }}
                    >
                        View Code
                    </Button>

                </div>
            </div>
        </>
    )
}
