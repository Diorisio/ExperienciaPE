import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <footer>
          <div className={styles.contactenos}>
       <div>
      <h2>Contáctanos Ubicación</h2>
      <p>Carrera 52 # 73 - 75 Medellín - Colombia +57(4) 516 83 00</p>
      </div>
      <div>
      <h2>Corporación Parque Explora</h2>
      <p>+57(4) 516 83 00 comunicaciones@parqueexplora.org</p>
      </div>
      </div>
      
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
        <Link href="https://www.facebook.com/ParqueExplora">
      <BottomNavigationAction
        label="Facebook"
        value="recents"
        icon={<FacebookIcon />}
      /></Link>
      <Link href="https://www.instagram.com/parqueexplora/?hl=en">
      <BottomNavigationAction
        label="Instagram"
        value="favorites"
        icon={<InstagramIcon />}
      />
      </Link>
      <Link href="https://twitter.com/parqueexplora?lang=en">
      <BottomNavigationAction
        label="Twitter"
        value="nearby"
        icon={<TwitterIcon />}
      />
      </Link>
     
    </BottomNavigation>
    </footer>
  );
}
