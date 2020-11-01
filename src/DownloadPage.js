import React, {useEffect, useState} from 'react';
import getMovieLink from './getMovieLink';
import { Card, Button } from 'antd';
import { DownloadOutlined, LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
 
  

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

function DownloadPage(props) {
    const movieType = props.match.params.movieType;
    const movieName = props.match.params.movieName;
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function handleDownload() {
            const res = await getMovieLink.get("/movie", {
              params: { name: movieName, type: movieType }
            });
            setResults(res.data.torrents);
             setLoading(false);
          };
        handleDownload();
    },[movieName, movieType])

    function openLink(link) {
      window.location.href = "/download" + link
    }

    return(
        <div style={{ marginTop: "70px", padding: "5px"}}>   
          {loading ? <div className="spinnerdiv"> 
                            <div className="spinner" >
                                <Spin indicator={antIcon} /> 
                            </div>
                        </div> : 
          results?.map(result => {
            return( 
            <>
                <Card style={{ width: "100%", marginBottom: '5px' }}>
                <p>FILE NAME: {result.title} </p>
                <p>SIZE: {result.size} </p>
                <p>UPLOADER: {result.uploader}  </p>
                <p>LEECH: {result.leech} </p>
                <p>SEEDERS: {result.seed} </p>
                <Button onClick={() => openLink(result.href)} type="primary" danger icon={<DownloadOutlined />} size={"large"}>
                  Download this file
                </Button>

                </Card>
             </>
            )
          })}
        </div>
    )
}

export default DownloadPage;