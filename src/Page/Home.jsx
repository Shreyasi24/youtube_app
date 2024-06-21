import React from 'react'
import styled from 'styled-components'
import Card from '../Component/Card'

const Home = () => {
    const Container = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    gap:5px
    `
    return (
        <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    )
}

export default Home