import { Box, Typography, useTheme } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();
  return (
    <Box
      m="2rem 1.5rem"
      padding="3rem 0 0 5rem"
      height="80vh"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Box width="70%" minWidth="600px">
        <Typography variant="h3" fontSize="2.3rem" gutterBottom>
          Welcome to PBAX ➡️
        </Typography>
        <Typography variant="h3" fontSize="2.5em" gutterBottom>
          The Protein Binding Affinity Explorer 🚀
        </Typography>
        <Typography
          variant="body1"
          fontSize="1rem"
          lineHeight="2"
          textAlign="justify"
          color={theme.palette.primary[100]}
          fontWeight="700"
          paragraph
        >
          PBAX is your comprehensive resource for exploring protein-protein
          interaction data, specializing in binding affinity and mutation
          analysis. Our database offers a wealth of information to researchers,
          biologists, and bioinformaticians. With a diverse dataset encompassing
          various critical parameters, including PDB ID (unique identifiers for
          protein structures), mutations (providing insights into genetic
          variations), details about proteins (identifying interacting
          partners), comprehensive descriptions of experimental setups,
          environmental factors like temperature and pH that impact
          interactions, thermodynamic insights into binding represented by ΔG &
          ΔΔG values, attribution to original research through authors & journal
          information, and links to relevant scientific literature via PubMed
          ID.
        </Typography>
        <Typography
          variant="body1"
          fontSize="1.2rem"
          color={theme.palette.secondary[100]}
          fontWeight="700"
          paragraph
        >
          Thank you for choosing <strong>PBAX</strong> for your protein
          research. Begin your exploration today !
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
