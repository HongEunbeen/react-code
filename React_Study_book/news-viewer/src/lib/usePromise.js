import {useState, useEffect} from 'react';

//usePromise의 의존배열 deps를 파라미터로 받아 온다.
export default function usePromise(promiseCreator, deps){
    //대기 중, 대기 완료, 대기 실패에 대한 상태 관리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try{
                const resolved = await promiseCreator();
                setResolved(resolved);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        process();
    }, deps);
    //useEffect의 의존배열 deps
    return [loading, resolved, error];

}