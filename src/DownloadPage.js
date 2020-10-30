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
            setResults(res.data);
            setLoading(false);
          };
        handleDownload();
    },[movieName, movieType])

     
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
                <p>FILE NAME: {result.fileName} </p>
                <p>SIZE: {result.size} </p>
                <p>UPLOADED: {result.uploaded}  </p>
                <p>YEAR: {result.year} </p>
                <p>SEEDERS: {result.seeders} </p>
                <a href={result.link}><Button type="primary" danger icon={<DownloadOutlined />} size={"large"}>
                  Download this file
                </Button></a> 
                </Card>
             </>
            )
          })}
        </div>
    )
}

export default DownloadPage;