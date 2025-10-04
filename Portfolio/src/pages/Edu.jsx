import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Edu() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        
        m: 2,
        p: 2,
        pt: 10,
        mt: 7,
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center", color: "#fff", mb: 6 }}>
        Education
      </Typography>

      <Box
        sx={{
          color: "#fff",
          border: "1px solid gray",
          borderRadius: "6px",
          backgroundColor: "#181b1b",
          m: 1,
          p: 2,
        }}
      >
        <Typography variant="h5">Bachelors Of Computer Applications</Typography>
        <Typography variant="body2" sx={{color: "gray"}}>Shri Ramswaroop Memorial University, Lucknow</Typography>
        <Typography variant="caption" sx={{color: "gray"}}>August 2022 - May 2025</Typography>
      </Box>

      <Box
        sx={{
          color: "white",
          border: "1px solid gray",
          borderRadius: "6px",
          backgroundColor: "#181b1b",
          m: 1,
          p: 2,
        }}
      >
        <Typography variant="h5">Intermediate</Typography>
        <Typography variant="body2" sx={{color: "gray"}}>Premier Higher Secondary, Kathmandu, Nepal</Typography>
        <Typography variant="caption" sx={{color: "gray"}}>April 2019 - September 2021</Typography>
      </Box>
    </Box>
  );
}
