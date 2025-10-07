import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function CertificateCard({ title = "gsy", desc, imgIco, caption, link, downloadLink }) {

    return (
        <>
            <Box sx={{
                color: "white",
                border: "1px solid gray",
                borderRadius: "6px",
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                flex: "1 1 300px",
                backgroundColor: "#181B1B",
                minHeight: "10rem",
                maxWidth: "28rem",
                m: 2,
                p: 3
            }}>
                <Box component="img" src={imgIco} sx={{ height: "50px", minWidth: "50px", mb: 2 }}></Box>
                <Typography variant="h5" sx={{ mb: 0.7 }}>{title}</Typography>
                <Typography variant="body2" color="gray">{desc}</Typography>
                <Typography variant="caption" color="gray">{caption}</Typography>
                <Button component="a" href={link} target="_blank" color="success">View Certificates</Button>
                <Button component="a"
                    href={downloadLink}
                    
                    target="_blank"
                    size="small"
                    
                    color="primary">Download Certificate</Button>
            </Box>

        </>
    )
}