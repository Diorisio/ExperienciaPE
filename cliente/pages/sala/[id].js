import axios from "axios";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from '../../styles/id.module.css'


export default function salas({salas}) {
    
    
    return(
      <main className={styles.sala}>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={salas.Imagen}
                alt={salas.Titulo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {salas.Titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {salas.Descripcion}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </main>
        
      
      

    )
    
}

export async function getStaticPaths() {
    try {
        const res = await axios('http://localhost:3030/api/')
        const salas = res.data
        const paths=salas.map(({id})=>({params:{id:`${id}`}}))


        return {
        
            paths,
            fallback: false
          }
        

        
    } catch (error) {
        
    }
    
  }

export async function getStaticProps({params}) {

    const res = await axios('http://localhost:3030/api/'+params.id)
    const salas = res.data
  
    return {
      props: {
        salas,
      },
    }
  }



