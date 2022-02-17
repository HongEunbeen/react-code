import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from 'react-apexcharts';
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";

interface ICoin {
    coinId?: string
}

interface IHistory{
    time_open:string;
    time_close: string;
    open: number;
    high: number;
    low:number;
    close:number;
    volume: number;
    market_cap:number;
}

function Chart() {
    const isDark = useRecoilValue(isDarkAtom);
    
    const {coinId}  = useParams() as ICoin;
    const {isLoading, data} = useQuery<IHistory[]>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(coinId),
        {
            refetchInterval : 10000
        });
    console.log(data);
    return (
        <>
            {isLoading ? "Loading chart"
            :
            <ApexChart 
                type="line"
                series={[
                    {
                        name:"price",
                        data : data?.map(price => price.close)
                    }
                ]}
                options={{
                    theme:{
                        mode: isDark ? "dark" : "light"
                    },
                    chart:{
                        height: 500,
                        width: 500,
                        toolbar:{
                            show:false
                        },
                        background: "transparent"
                    },
                    grid:{
                        show:false
                    },
                    stroke: {
                        curve:"smooth",
                        width: 4
                    },
                    xaxis:{
                        labels:{show:false}
                    },
                    yaxis:{
                        show:false
                    }

                }}
            />}
        </>
    );
}

export default Chart;