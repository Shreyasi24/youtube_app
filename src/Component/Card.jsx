import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = ({ type }) => {
    const Container = styled.div`
     width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
    `
    const Image = styled.img`
    width:100%;
    height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
    background-color: #999;
    flex: 1;
`
    const Details = styled.div`
display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
        `
    const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
        `
    const Texts = styled.div``

    const Title = styled.h2`
font-size:16px;
font-weight:600;
color:{({theme})=>theme.text};
margin: 0;
        `
    const ChannelName = styled.h4`
font-size:14px;
font-weight:500;
color:{({theme})=>theme.textsoft};
margin:2px 0
        `
    const Info = styled.div`
    font-size:14px;
font-weight:400;
color:{({theme})=>theme.textsoft};
    `
    return (
        <Link to="/video/test">
            <Container type={type}>
                <Image type={type}
                    src="https://img.youtube.com/vi/RGzKJCOE5rw/0.jpg"

                />
                <Details type={type}>
                    <ChannelImage type={type} src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />

                    <Texts>
                        <Title>Test Video</Title>
                        <ChannelName> Dev Channel</ChannelName>
                        <Info>660,998 plays : 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>

    )
}

export default Card