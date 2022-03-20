import React, {useState} from 'react';
import styled from "styled-components";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {sliderItems} from "../data";
import {mobile} from "../responsive";
// import {Slide} from "@material-ui/core";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display: "none"})}
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
  opacity: .5;
`

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`

const ImgContainer = styled.div`
  width: 60%;
  flex: 1;
`

const Image = styled.img`
  margin-top: 40%;
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  font-size: 70px`

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 10px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1)
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>shop now</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIcon/>
            </Arrow>
        </Container>
    );
};

export default Slider;
