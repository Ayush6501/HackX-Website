import styled from "styled-components";

const Underdev = () => {
    return (
        <Background>
            <Container>
                <TextBox>
                    <Text>
                        <h2>Hi! Nice to meet you,</h2>
                        <h1>We are preparing something exciting & amazing for you</h1>
                    </Text>
                </TextBox>
            </Container>
        </Background>
    );
}

export default Underdev;

const Background = styled.div`
  background-image: url("/assets/images/backg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  height: 80%;
  width: 80%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-family: 'Merriweather', serif;
  color: white;
  
  h2 {
    margin: 0;
    padding: 0;
    font-size: 2em;
  }
  
  h1 {
    margin: 0;
    padding: 0;
    font-size: 5em;
    text-transform: capitalize;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;