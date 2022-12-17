import React from 'react'
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const ListCard = ({character = []} ) => {
  return (
    <Grid container spacing={2} sx={{marginTop:"10px"}}>
        {character.map((item, index) =>(
            <Grid item xs={12} sm={6} md={3} key={index}>
               <Card sx={{ width:250, height: 300 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography sx={{display:"flex", justifyContent:"space-between"}} variant="body2" color="text.secondary">
                            {item.status} - {item.species} 
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="300"
                        image={item.image}
                        alt="green iguana"
                     />
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.location.name}
                        </Typography>
                        
                    </CardContent>
                </Card>
            </Grid>
            ))
        }
    </Grid>

    











  )
}

export default ListCard