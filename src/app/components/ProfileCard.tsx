import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { GithubIcon, LinkedInIcon, RightArrow, Xicon } from './icons'

const ProfileCard = () => {
  return (
    <Box
    sx={{
        position:'sticky',
        top:'64px',
        flex: '0 0 350px',
        borderRadius:'12px',
        backgroundColor:'#292A2B',
        height:'530px',
        marginLeft:{xs:'5px', sm:'10px', md:5},
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
        },
    }}>
      <Stack
      sx={{
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Box
        sx={{
            borderRadius:'12px',
            overflow:'hidden',
            height:'250px',
            width:'230px'
        }}>
            <Image
            src='/images/CyberpunkImage.png'
            alt='My Image'
            width={230}
            height={280}

            />
        </Box>
        <Box
        sx={{
            textAlign:'center',
            mt:3
        }}>
            <Typography variant='h3' fontWeight='600'>Vikas Kumar</Typography>
            <Typography variant='h5'>Full-Stack Developer</Typography>
            <Typography variant='subtitle1'>Bengaluru, Karnatka</Typography>
        </Box>
        <Box
        sx={{
            mt:1
        }}>
            <Button variant='contained'
             endIcon={<RightArrow/>} 
             href="https://drive.google.com/file/d/17k2RSlN6BgjXQexuE8lhuoxCz8nyRiXw/view?usp=drive_link" 
             target='_blank'
             sx={{
                fontWeight:'550',
                backgroundColor:'#8E4BEB',
                color:'#F8F8F8',
                "&:hover":{
                    backgroundColor:'#6D32B8'
                }
             }}>My Resume</Button>
        </Box>
        <Box
        sx={{
            mt:3
        }}>
            <IconButton
            component="a" 
            href="https://github.com/Vikasbhagat84527" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{
                "&:hover":{
                    backgroundColor:'#6D32B8'
                }
            }}
            ><GithubIcon/>
            </IconButton>
            <IconButton
            component="a" 
            href="https://www.linkedin.com/in/vikas958/" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{
                "&:hover":{
                    backgroundColor:'#6D32B8'
                }
            }}
            ><LinkedInIcon/>
            </IconButton>
            <IconButton
            component="a" 
            href="https://x.com/VikasBh13479163" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{
                "&:hover":{
                    backgroundColor:'#6D32B8'
                }
            }}
            >
            <Xicon/>
            </IconButton>
        </Box>
      </Stack>
    </Box>
  )
}

export default ProfileCard
