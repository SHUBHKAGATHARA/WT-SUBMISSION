import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Faculty1 = () => {
    const [fac, setfac] = useState([]);

    useEffect(() => {
        fetch("https://66ed09d2380821644cdb11d3.mockapi.io/faculty")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setfac(res);
            })
    }, []);

    let formatedfac = fac.map((e) => {
        return (
            <>
                <div className="card mb-3 me-3" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={e.pho} alt="Card image cap" />
                    <div className="card-body">
                       
                        <h5 className="card-title">name: <Link to={"/Facdetails/"+e.id}>{e.name}</Link></h5>
                        <p className="card-text">salary:{e.salary}</p>
                        <p className="card-text">exp:{e.exp}</p>
                        <p className="card-text">id:{e.id}</p>

                    </div>
                </div>
            </>
        );
    });

    return (
         <>
         <div className="container">
                    <div className="row">
        
            {formatedfac}
          
            </div>
            </div>
        
        </>
    );
};

export { Faculty1 };