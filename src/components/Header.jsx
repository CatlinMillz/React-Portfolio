import * as React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        // <Navbar expand="lg" className="bg-body-tertiary">
        //     <Container>
        //         <Navbar.Brand href="#home">Cat's Meow Coding</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav >
        //                 <Link to="/" className='nav-link'>Home</Link>
        //                 <Link to="/about" className='nav-link'>About</Link>
        //                 <Link to="/projects" className='nav-link'>Projects</Link>
        //                 <Link to="/contact" className='nav-link'>Contact</Link>

        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        <AppBar position="static">
            <Container maxWidth="xl" sx={{
                backgroundColor: '#3B5249',
            }}>
                <Toolbar disableGutters

                >
                    {/* LOGO GOES HERE REPLACE THIS WITH YOUR CUSTOM LOGO */}
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}  >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}

                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link to="/" className='nav-link'>Home</Link>
                            <Link to="/about" className='nav-link'>About</Link>
                            <Link to="/projects" className='nav-link'>Projects</Link>
                            <Link to="/contact" className='nav-link'>Contact</Link>

                            {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))} */}

                        </Menu>
                    </Box>
                    {/* MOBILE LOGO GOES HERE */}
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', }}>


                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >

                            <Link to="/" className='nav-link' >Home</Link>
                        </Button>

                        {/* <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="/about" className='nav-link'>About</Link>
                        </Button> */}

                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="/photography" className='nav-link'>Photography</Link>
                        </Button>

                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="/development" className='nav-link'>Development</Link>
                        </Button>

                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="/contact" className='nav-link'>Contact</Link>
                        </Button>




                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    )
}


