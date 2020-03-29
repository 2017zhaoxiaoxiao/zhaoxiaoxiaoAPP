let rootUrl='https://www.fastmock.site/mock/a9496a9039ac2015a09b26a3a665a926/api'
let myFetch={
    get(url,queryParams){
        url=rootUrl+url
        if(queryParams)
                url+='?'+queryString.stringify(queryParams);
        return fetch(url)
        .then(res=>res.json)

    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept":'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
            .then(res=>res.json())
            
    }
}
export {myFetch};