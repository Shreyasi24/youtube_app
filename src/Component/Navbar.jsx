import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const Container = styled.div`
    position:sticky;
    top:0;
    background-color:${({ theme }) => theme.bgLighter};
    height:56px
    `
    const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    height:100%;
    padding:0 20px;
    position:relative
    `
    const Search = styled.div`
    width:40%;
position:absolute;
left:0;
right:0;
margin:auto;
padding:0 10px;
border:1px solid #ccc;
border-radius:3px;
display:flex;
align-items:center;
justify-content:space-between
    `
    const Input = styled.input`
    border:none;
    background-color: transparent
    `
    const Button = styled.div`
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
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search..." />
                    <SearchOutlinedIcon />
                </Search>
                <Link to="/signin">
                    <Button><AccountCircleIcon />Sign In</Button>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default Navbar