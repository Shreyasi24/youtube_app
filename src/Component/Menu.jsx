import React from 'react'
import styled from 'styled-components'
import logo from "../assets/Images/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsIcon from '@mui/icons-material/Sports';
import GamesIcon from '@mui/icons-material/Games';
import MovieIcon from '@mui/icons-material/Movie';
import FeedIcon from '@mui/icons-material/Feed';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Container = styled.div`
flex:1;
background-color:${({ theme }) => theme.bgLighter};
height: 100vh;
color: ${({ theme }) => theme.text};
font-size: 14px;
position: sticky;
top: 0;
`
const Wrapper = styled.div`
padding: 20px 30px
    `
const Logo = styled.div`
display: flex;
align - items: center;
gap: 5px;
font - weight: 700;
margin - bottom: 25px;
cursor: pointer;
`
const Img = styled.img`
height: 25px
    `
const Items = styled.div`
display: flex;
align - items: center;
gap: 10px;
padding: 8px 0;
cursor: pointer
    `
const Title = styled.h2`
font-size:14px;
font - weight: 500;
color:#aaaaaa;
`
const Hr = styled.hr`
margin: 15px 0;
border: 0.5px solid ${({ theme }) => theme.soft};
`
const Login = styled.div`
    `
const Button = styled.button`
padding: 5px 15px;
background - color: transparent;
border: 1px solid #3a6eff;
color:#3a6eff;
display: flex;
align - items: center;
gap: 5px;
margin: 10px 0;
cursor: pointer
    `


const Menu = ({ darkMode, setDarkMode }) => {
    return (
        <Container>

            <Wrapper>
                <Link to="/">
                    <Logo>
                        <Img src={logo} />
                        DevTube
                    </Logo>
                </Link>
                <Items>
                    <HomeIcon />
                    Home
                </Items>
                <Items>
                    <ExploreIcon />
                    Explore
                </Items>
                <Items>
                    <SubscriptionsIcon />
                    Subscription
                </Items>
                <Hr />
                <Items>
                    <LibraryAddIcon />
                    Library
                </Items>
                <Items>
                    <HistoryIcon />
                    History
                </Items>
                <Hr />
                <Login>
                    Login to wach videos,likes & comments
                    <Link to="/signin">
                        <Button><AccountCircleIcon />Sign In</Button>
                    </Link>
                </Login>
                <Title>Best Video Ever</Title>
                <Items>
                    <LibraryMusicIcon />
                    Music
                </Items>
                <Items>
                    <SportsIcon />
                    Sports
                </Items>
                <Items>
                    <GamesIcon />
                    Gaming
                </Items>
                <Items>
                    <MovieIcon />
                    Movies
                </Items>
                <Items>
                    <FeedIcon />
                    News
                </Items>
                <Items>
                    <LiveTvIcon />
                    Live
                </Items>
                <Hr />
                <Items>
                    <SettingsIcon />
                    Settings
                </Items>
                <Items>
                    <ReportIcon />
                    Report
                </Items>
                <Items>
                    <HelpIcon />
                    Help
                </Items>
                <Items onClick={() => setDarkMode(!darkMode)}>
                    <LightModeIcon />
                    {darkMode ? "DarkMode" :
                        "LightMode"}
                </Items>
            </Wrapper>


        </Container>
    )
}

export default Menu