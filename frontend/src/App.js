import {useState} from 'react';
import {Button} from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {BreadCrumb} from 'primereact/breadcrumb';
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';



function App() {
    const [count,setCount] = useState(0);
    
    const [data,setData] = useState({});

    const items = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }];

    const home = { icon: 'pi pi-home', url: 'https://primereact.org' }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));  
    }, []);
                            
    function getData(){
        fetch('http://localhost:3080/')
            .then( res => res.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
    }

    return (
        <div>
            <div className="text-center">
                <Button label="Click" icon="pi pi-plus" onClick={e => setCount(count + 1)}></Button>
                <Button label="Get data" icon="pi pi-plus" onClick={getData}></Button>
                <div className="text-2xl text-900 mt-3">{count}</div> {/* className == имена css классов */}
                <div className="text-2xl text-900 mt-3">{JSON.stringify(data)}</div>
                <BreadCrumb model={items} home={home}/>
            </div>
            <div className="card">
                <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="floor" header="Floor"/>
                    <Column field="classroom" header="Classroom"/>
                    <Column field="time" header="Time"/>
                    <Column field="lesson" header="Lesson"/>
                </DataTable>
            </div>
            <div className="card">
                <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="floor" header="Floor"/>
                    <Column field="classroom" header="Classroom"/>
                    <Column field="time.one" header="Time"/>
                    <Column field="lesson.first" header="Lesson"/>
                </DataTable>
            </div>
        </div>
    );
}

export default App;

        
        
