import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1a1a1a",
        py: { xs: 5, sm: 8, lg: 10 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "70%", md: "60%" },
          p: { xs: 2, sm: 3, md: 5 },
          borderRadius: "10px",
          backgroundColor: "#181b1b",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          transition: "all 0.5s ease",
          ":hover":{transform: "scale(1.05)"}
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          About Me
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.3rem" },
            color: "#9FADAC",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Hi, I’m Afrid Khan, a passionate MERN Stack Developer. I specialize in building modern, scalable, and user-friendly web applications using MongoDB, Express, React, and Node.js. I enjoy turning ideas into reality through clean and efficient code. Along with full-stack development, I’m also exploring UI/UX improvements, authentication, and performance optimization to create complete solutions. I believe in continuous learning and love solving real-world problems with technology.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: "linear-gradient(135deg, #1a1a1a, #2c2c3a, #1f1f28)",
              color: "white",
              fontWeight: "bold",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              boxShadow: "0 0 10px rgba(0,255,255,0.2), inset 0 0 8px rgba(255,255,255,0.05)",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "scale(1.05)",
                background: "linear-gradient(135deg, #2c2c3a, #1a1a1a, #242433)",
                boxShadow: "0 0 18px rgba(0,255,255,0.4), inset 0 0 10px rgba(255,255,255,0.1)"
              },
            }}
            href="/resume.docx"
            download
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
