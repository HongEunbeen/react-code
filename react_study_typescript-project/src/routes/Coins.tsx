import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


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

const CoinList = styled.ul`
    
`;

const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    margin-bottom:10px;
    padding:20px;
    border-radius : 15px;
    a{
        align-items:center;
        display:flex;
        transition : color 0.2s ease-in;
        display:block;
    }
    &:hover{
        a{
            color: ${(props) => props.theme.accentColor}
        }
    }
`;

const Loader = styled.span`
    text-align : center;
    display : block;
`

const Img = styled.img`
    width : 25px;
    height:25px;
    margin-right:10px;
`

export interface ICoin {
    id:string
    name:string,
    symbol:string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type:string,
}

function Coins() {
    const [coins, setCoins] = useState<ICoin[]>([]);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        (async() => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoding(false);
        })();
    }, []);

    return (
        <Container>
            <Header>
                <Title>코딩</Title>
            </Header>
            {loading ? 
            <Loader>로딩로딩</Loader>
            : 
            <CoinList>
                {coins.map((coin) => 
                    <Coin key={coin.id}>
                    <Link to={{pathname : `/${coin.id}`}} state={{name:coin.name}}>
                        <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                            {coin.name} &rarr;
                        </Link>
                    </Coin>)
                }
            </CoinList>
            }
        </Container>
    )
}
export default Coins;