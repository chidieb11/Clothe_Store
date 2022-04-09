import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import PinterestIcon from "@material-ui/icons/Pinterest";
import RoomIcon from "@material-ui/icons/Room";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailIcon from "@material-ui/icons/Mail";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  text-transform: capitalize;
  letter-spacing: 5px;
  font-weight: 500;
`;

const Desc = styled.div`
  margin: 20px 0;
  letter-spacing: 0;
  ${mobile({ letterSpacing: 0, fontWeight: 200 })}
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: #${(props) => props.color};
  background-color: #d8e2dc;
  cursor: pointer;
  margin: 0 3px;

  &:hover {
    background-color: #f8edeb;
    transition: 0.5s ease;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  text-transform: capitalize;
  letter-spacing: 5px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  letter-spacing: 0;
  text-transform: capitalize;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ letterSpacing: 0, fontWeight: 200 })}
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>mini mart</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <WhatsAppIcon />
          </SocialIcon>
          <SocialIcon>
            <GitHubIcon />
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>useful links</Title>
        <List>
          <ListItem>home</ListItem>
          <ListItem>cart</ListItem>
          <ListItem>men fashion</ListItem>
          <ListItem>women fashion</ListItem>
          <ListItem>accessories</ListItem>
          <ListItem>my account</ListItem>
          <ListItem>order tracker</ListItem>
          <ListItem>wishlist</ListItem>
          <ListItem>terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>contact</Title>
        <ContactItem>
          <RoomIcon /> Enugu, Nigeria
        </ContactItem>
        <ContactItem>
          <PhoneInTalkIcon /> +2348078653421
        </ContactItem>
        <ContactItem>
          <MailIcon /> cruise@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
