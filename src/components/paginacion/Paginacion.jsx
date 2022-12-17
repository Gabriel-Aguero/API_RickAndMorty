import { Stack, Button } from '@mui/material';

const Paginacion = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <Stack spacing={2} direction="row" 
               sx={{ marginTop: "80px", 
               justifyContent: "center", 
               alignItems: "center" }}>

            {
                prev ? (
                    <Button variant="outlined" onClick={handlePrevious}>Anterior</Button>
                ) : null
            }
            {
                next ? (

                    <Button variant="outlined" onClick={handleNext} >Siguiente</Button>
                ) : null
            }
        </Stack>
    )
}

export default Paginacion