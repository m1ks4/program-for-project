import {useState} from 'react';
import {useEffect} from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Timeline } from 'primereact/timeline';


function App() {

    useEffect(() => {
        getData();
    }, []);

    function getData(){
        fetch('http://localhost:3080/')
            .then( res => res.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
    }
    function showContent(item, ){
        return <div>{item.time} &nbsp; {item.class}</div>
    
    }


    const [data,setData] = useState();

    return(
        <div className="card flex flex-column gap-3">
            <div class="overflow-hidden">
                <div class="flex flex-wrap align-items-center justify-content-center">
                    <h3>431 кабинет &nbsp; &nbsp;</h3>
                    {data &&
                        <Timeline value={data.slice(0, 8)} layout="horizontal" align="top" content={showContent} opposite={(item) => item.lesson}/>
                    }
                </div>
            </div>
            <div class="overflow-hidden">
                <div class="flex flex-wrap align-items-center justify-content-center">
                <h3>452 кабинет &nbsp; &nbsp;</h3>
                    {data &&
                        <Timeline value={data.slice(8, 16)} layout="horizontal" align="top" content={showContent} opposite={(item) => item.lesson}/>
                    }
                </div>
            </div>
            <div class="overflow-hidden">
                <div class="flex flex-wrap align-items-center justify-content-center">
                <h3>444 кабинет &nbsp; &nbsp;</h3>
                    {data &&
                        <Timeline value={data.slice(16, 24)} layout="horizontal" align="top" content={showContent} opposite={(item) => item.lesson}/>
                    }
                </div>
            </div>
            <div class="overflow-hidden">
                <div class="flex flex-wrap align-items-center justify-content-center">
                <h3>456 кабинет &nbsp; &nbsp;</h3>
                    {data &&
                        <Timeline value={data.slice(24, 32)} layout="horizontal" align="top" content={showContent} opposite={(item) => item.lesson}/>
                    }
                </div>
            </div>
            <div class="overflow-hidden">
                <div class="flex flex-wrap align-items-center justify-content-center">
                <h3>421 кабинет &nbsp; &nbsp;</h3>
                    {data &&
                        <Timeline value={data.slice(32, 40)} layout="horizontal" align="top" content={showContent} opposite={(item) => item.lesson}/>
                    }
                </div>
            </div>
            <div class="overflow-hidden">
                <div class="flex flex-wrap align-items-center justify-content-center">
                <h3>487 кабинет &nbsp; &nbsp;</h3>
                    {data &&
                        <Timeline value={data.slice(40, 48)} layout="horizontal" align="top" content={showContent} opposite={(item) => item.lesson}/>
                    }
                </div>
            </div>
            <div class="overflow-hidden">
                <div class="flex flex-wrap align-items-center justify-content-center">
                <h3>499 кабинет &nbsp; &nbsp;</h3>
                    {data &&
                        <Timeline value={data.slice(48, 56)} layout="horizontal" align="top" content={showContent} opposite={(item) => item.lesson}/>
                    }
                </div>
            </div>
            <div class="overflow-hidden">
                <div class="flex flex-wrap align-items-center justify-content-center">
                    <h3>455 кабинет &nbsp; &nbsp;</h3>
                    {data &&
                        <Timeline value={data.slice(56, 64)} layout="horizontal" align="top" content={showContent} opposite={(item) => item.lesson}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default App;

/*
const user = {
    name: 'John Wick',
    imageUrl: 'https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg',
    imageSize: 900,
};

function MyButton() {
    return (
    <button>
        Click me
    </button>
    );
}

export default function MyApp() {
    const [count,setCount] = useState(0);
    return (
        <div>
            <>
            <h1>{user.name}</h1>
            <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
            />
            </>
            <>
            <MyButton onClick={e => setCount(count+1)}>
                <div className="text-2xl text-900 mt-3">Clicked {count} times</div>
            </MyButton>
            </>

        </div>
        
    );
}
*/