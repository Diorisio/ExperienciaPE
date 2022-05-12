import style from "../styles/Home.module.css"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Home({salas,salas1}) {
  
  
  return (
    <>
    <main className={style.home}>
    <div>
    <h1>Tambien puede visitar </h1>
    <div className={style.contenedordeurls}>
    {salas1.map(item=>(
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.yoast_head_json.og_image[0].url}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title.rendered}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.yoast_head_json.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Link href={item.yoast_head_json.og_url}><Button size="small">Aprenda mas</Button></Link>
      </CardActions>
    </Card>
    ))}
    </div>
    </div>

      
      <div className={style.salas}>
      <h1>Salas</h1>
      <div className={style.titulo}>
       {salas.map(item=>(
         
      <article className={style.articulo}>
        <Link href={`/sala/${item.id}`}>
        <h1>{item.Titulo}</h1>
        </Link>
      </article>
          ))} 
          </div>
          </div>
      
    
    </main>
    
    </>
    
  )
}




export async function getStaticProps() {

  const res = await axios('http://localhost:3030/api/')
  const res1 = await axios('https://encasa.parqueexplora.org/wp-json/wp/v2/posts')
  const salas = res.data
  const salas1 = res1.data
  
  

  return {
    props: {
      salas,
      salas1,
    },
  }
}