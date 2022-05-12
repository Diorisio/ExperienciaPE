import imagenn from "../public/images/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Header.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';


function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

export default function Header(){
    return (
        <>
        <header>
        <div className={style.contenedor}>
            <div>
            <Link href="/">
        <Image src={imagenn} height={100} width={100}></Image>
        </Link>
        <Link href="/">
        <HomeIcon sx={{ color: pink[500] }} />
        </Link>
        <Link href="/Quienes-somos"><a>Quienes somos</a></Link>
        </div>
        </div>
        
        </header>

       
        </>
    )
}