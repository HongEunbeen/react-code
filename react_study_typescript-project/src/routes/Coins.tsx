import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";


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
    color: ${(props) => props.theme.textColor};
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
    //reqct-query는 데이터를 유지하고 있음(캐시에 저장해 놓음)
    const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins);
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
    return (
        <Container>
            <Header>
                <Title>코딩</Title>
                <button onClick={toggleDarkAtom}>Toggle Mode</button>
            </Header>
            {isLoading ? 
            <Loader>로딩로딩</Loader>
            : 
            <CoinList>
                {data?.slice(0, 100).map((coin) => 
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