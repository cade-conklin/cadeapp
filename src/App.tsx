import { useState } from 'react'
import { Home } from './Home/Home'
import { InputAdornment, TextField } from '@mui/material'
import { About } from './About/About'
import Projects from './Projects/Projects';
import AssistantIcon from '@mui/icons-material/Assistant';
import './index.css'
import { BannerLayer, ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { Skills } from './Skills/Skills';

function App() {
  const [_isHome, setIsHome] = useState(true);


  const background: BannerLayer = {
    translateY: [0, 0],
    opacity: [1, 0],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className='bg-container-back' style={{
        height: '100vh'
      }}></div>
    )
  };
  const background2: BannerLayer = {
    translateY: [0, 0],
    opacity: [0.8, 0],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className='bg-container-back-two' style={{
        height: '100vh'
      }}></div>
    )
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    opacity: [1.0, 0],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <Home onSetIsHome={setIsHome} />
    ),
  };

  const headline2: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <About />
    ),
  };

  const headline3: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <Skills />
    ),
  };
  const headline4: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <Projects />
    ),
  };

  const foreground: BannerLayer = {
    scale: [1, 1.1, 'easeOutCubic'],
    opacity: [1.0, 0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <TextField
        fullWidth
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '75vh', zIndex: '100', width: '70%', marginLeft: '15%', textAlign: 'center' }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AssistantIcon />
              </InputAdornment>
            ),
          },
        }}
        variant="standard"
      />),
  };  

  const gradientOverlay: BannerLayer = {
    opacity: [0.2, 0.8],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="gradient inset" />
    ),
  };
  const gradientOverlay2: BannerLayer = {
    opacity: [0.2, 0.8],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="gradient-two inset" />
    ),
  };


  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[background, headline, gradientOverlay, foreground]}
        className="full"
      />       
      <ParallaxBanner
        layers={[background2, gradientOverlay2, headline2]}
        className="full"
      />
      <ParallaxBanner
        layers={[background, gradientOverlay, headline3]}
        className="full"
      />
      <ParallaxBanner
        layers={[background2, gradientOverlay2, headline4]}
        className="full"
      />
    </ParallaxProvider>



  )
}

export default App
