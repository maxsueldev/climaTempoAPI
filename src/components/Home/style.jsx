import styled from "styled-components";

const HomeContainer = styled.div`
    background-color: #5c54ed;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    color: #fff;
    padding: 2rem;
    text-align: center;
    border-radius: 18px;

    h3 {
        margin-bottom: .8em;
    }
    
    .weather-container {
        border-top: 1px solid #fff;
        padding-top: 1rem;
    }
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: .3rem;
    margin-bottom: 2rem;
`;

const Location = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .4rem;

    p {
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

const Temperature = styled.div`
    margin: .6rem 0;
`;

const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        text-transform: capitalize;
    }
`;

const Details = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    margin-top: .6rem;
`;

export { HomeContainer, FormContainer, Location, Temperature, Description, Details };