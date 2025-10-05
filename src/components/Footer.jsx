import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          border: "1px solid gray",
          borderLeft: "transparent",
          borderRight: "transparent",
          backgroundColor: "#F4F5F505",
          p: 2,
          pt: 3,
          gap: 2,
          
        }}
      >
    
        <Box sx={{ flex: { xs: "1 1 100%", sm: "0 1 40%" } }}>
          <Typography variant="h5">Afrid Khan</Typography>
          <Typography variant="body2">
            Software Engineer with a passion for creating innovative, scalable,
            and high-performance solutions.
          </Typography>
        </Box>

    
        <Box sx={{ flex: { xs: "1 1 100%", sm: "0 1 25%",}, mt: { xs: 2, sm: 0 }, }}>
          <Typography variant="h5">Links</Typography>
          <Typography variant="body2">About</Typography>
          <Typography variant="body2">Projects</Typography>
          <Typography variant="body2">Skills</Typography>
          <Typography variant="body2">Contacts</Typography>
        </Box>

        <Box sx={{ flex: { xs: "1 1 100%", sm: "0 1 25%" }, mt: { xs: 2, sm: 0 }, textAlign: {sm: "center"}}}>
          <Typography variant="h5">Connect</Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", color: "white", mt: 2, p:2}}>
        <Typography variant="caption">© 2025 Afrid Khan. All rights reserved.</Typography>
      </Box>
      
    </>
  );
}
