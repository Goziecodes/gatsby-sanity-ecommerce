import { useEffect, useLayoutEffect, useState } from 'react';

export default function useLatestData() {
  // latest clothes
  const [latest, setLatest] = useState();

  // fashion line
  const [fashionLine, setFashionLine] = useState();

  //   use sideeffect to fetch data from sanity grapghql endpoint
  useLayoutEffect(() => {
    // when component loads fetch data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
                StoreSettings(id:"downtown"){
                name  
                customers{
                  name
                  _id
                  image{
                      asset{
                          url
                          metadata{
                              lqip
                          }
                      }
                  }
                  description
                }
                  discount{
                  name
                  _id
                  image{
                      asset{
                          url
                          metadata{
                              lqip
                          }
                      }
                  }
                  }
                }
              }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // check 4 errors
        // set data to state
        setLatest(res.data.StoreSettings.customers);
        setFashionLine(res.data.StoreSettings.discount);
        console.log(res, 'lekwam');
      })
      .catch((err) => {
        console.log(err, 'ouch!!! something went wrong!');
      });
    // return () => {
    //   cleanup;
    // };
  }, []);

  return {
    latest,
    fashionLine,
  };
}
