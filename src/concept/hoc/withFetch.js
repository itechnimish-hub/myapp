import React, { useEffect, useState } from "react";


function withFetch(UserList, url) {



    return function EnhancedComponent() {
        const [data, setData] = useState([]);


        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(result => {
                    setData(result);

                })

        }, []);

        return <UserList data={data} />;
    };
}

export default withFetch;
