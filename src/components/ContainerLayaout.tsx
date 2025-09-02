import { Box } from "@mui/material";

export default function ContainerLayaout({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                maxWidth: '1440px',   // Ancho máximo del contenido
                margin: '0 auto',     // Centrado horizontal
                width: '100%',         // Ocupar todo el ancho disponible hasta el máximo
                mx: 'auto'
            }}
        >
            {children}
        </Box>
    );
}