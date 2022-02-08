import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from 'styled-components';
import { ICoin } from "./Coins";

const Container = styled.div`
    padding:0px 20px;
    max-width:480px;
    margin:0 auto;
`;

const Header = styled.header`
    height:10vh;
    display: flex;
    justify-content:center;
    align-items:center;
`;

const Title = styled.h1`
    font-size: 48px;
    color :${(props) => props.theme.accentColor};
`
const Loader = styled.span`
    text-align : center;
    display : block;
`

interface IRouteParams {
    coinId:string;
}

interface IRouteStat extends Pick<ICoin, "name"> { }

function Coin() {
    const {coinId} = useParams() as unknown as IRouteParams;
    const {name} = useLocation().state as IRouteStat;
    const [loading, setLoding] = useState(true);

    return(
        <Container>
            <Header>
                <Title>{name?? "Loading..."}</Title>
            </Header>
            {loading ? 
            <Loader>로딩로딩</Loader>
            : null
            }
        </Container>
    )
}
export default Coin;