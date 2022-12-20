import styled  from "styled-components";
import React from 'react'
const Login = (props) => {
  return(<Container>
    <Nav>
        <a href="/">
            <img src="/images/login-logo.png" alt="" />
        </a>
        <div>
            <Join>Lets Connect!</Join>
            <SignIn>Sign In</SignIn>
        </div>
    </Nav>
    <Section><Hero>
          <h1>Welcome to VES-CONN!</h1>
          <img src="/images/pcom-resized-crop.jpg" alt="" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt=" " />
                 Sign in with Google
          </Google>
        </Form>
        </Section>
    
  </Container>)
};


const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1480px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 50px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: inset 0 0 0 1px ;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 14px;
  color: rgba(0, 0, 0, 0.9);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    font-size: 18px;
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }`;

const SignIn = styled.a`
  /* box-shadow: inset 0 0 0 1px ;  //gives outline to the box 
  color: black;
  border-radius: 14px;
  transition-duration: 150ms;
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: black;
    font-size: 18px;
    text-decoration: none;
  } */
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: inset 0 0 0 1px ;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 14px;
  color: rgba(0, 0, 0, 0.9);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    font-size: 18px;
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap; //if screen becomes small these things will form new rows
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }`;
  const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: black;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /* z-index: -1; */
    width: 600px;
    height: 800px;
    position: absolute;
    bottom: -2px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  border-radius: 28px;
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
export default Login;