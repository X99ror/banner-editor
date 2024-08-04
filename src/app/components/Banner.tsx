'use client'
import React from 'react'
import { Card, Box, Typography, IconButton, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { BannerProp } from '../interfaces/BannerProp'

const Banner: React.FC<BannerProp> = ({ id, title, description, cta, image, background, imageOrientation = 'bottom-right', textColor = 'black', buttonColor = 'primary', onEdit }) => {
  const getPositionStyles = (orientation: string) => {
    const margin = '20px';

    switch (orientation) {
      case 'top-left':
        return { top: margin, left: margin, bottom: 'auto', right: 'auto' };
      case 'top-right':
        return { top: margin, right: margin, bottom: 'auto', left: 'auto' };
      case 'bottom-left':
        return { bottom: margin, left: margin };
      case 'bottom-right':
        return { bottom: margin, right: margin, top: 'auto', left: 'auto' };
      case 'center':
        return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
      default:
        return { bottom: margin, right: margin, top: 'auto', left: 'auto' };
    }
  }

  return (
    <Card style={{ position: 'relative', background }}>
      <Box
        style={{
          position: 'relative',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          zIndex: 1,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0, 
          width: '50%', 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start', 
          color: textColor,
          padding: '20px',
        }}
      >
        <Typography variant="h4" component="div" style={{ fontWeight: 'bold', zIndex: 3 }}>
          {title}
        </Typography>
        <Typography variant="body1" component="div" style={{ marginTop: '10px', zIndex: 3 }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: buttonColor, marginTop: '10px', zIndex: 3 }}
          href="#"
        >
          {cta}
        </Button>
        <IconButton
          onClick={onEdit}
          style={{ position: 'absolute', top: '10px', left: '10px', color: 'black', zIndex: 3 }} 
        >
          <EditIcon />
        </IconButton>
      </Box>
      <img
        src={image}
        alt={title}
        style={{
          width: '55%',
          height: '80%',
          borderRadius:'50%',
          objectFit: 'cover',
          position: 'absolute',
          ...getPositionStyles(imageOrientation),
          zIndex: 2,
        }}
      />
    </Card>
  )
}

export default Banner
