import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Cafe () {

        const [cafes, setCafes] = useState([])

        useEffect(() => {
            axios.get('/api/cafes', {
                withCredentials: true
            })
            .then((res) => {
                setCafes(res.data.cafes[0])

            })
            .catch((error) => console.log(error));
    }, [])

return <> 
    <div className="container">      
         Cafe List: {cafes.cafename},{cafes.address}
    </div>
</>
}
