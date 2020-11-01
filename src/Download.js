import React, {useEffect, useState} from 'react';
import getMovieLink from './getMovieLink';
import { Alert } from 'antd';
import { Card, Button } from 'antd';
import { DownloadOutlined, LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import Row from './Row';
import requests from './requests';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

function  Download(props) {
    const torrent = props.match.params.torrent;
    const movieId = props.match.params.movieID;
    const movieName = props.match.params.movieName;
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function handleDownload() {
            const res = await getMovieLink.get("/download", {
              params: { torrent: torrent, movieId: movieId, movieName: movieName  }
            });
            setResult(res.data);
             setLoading(false);
          };
        handleDownload();
    },[movieId, torrent, movieName])

    return(
        <div style={{ marginTop: "70px", marginBottom: '5px', padding: "5px"}}>
            <Alert 
              message="Instructions" 
              description="make sure you have UTorrent installed in your device before clicking
              on the download button. this movie will start downloading through utorrrent once
              u click on the download button below... Enjoy"
              type="info" showIcon closable/>
              <br/>
              {loading ? <div className="spinnerdiv"> 
                            <div className="spinner" >
                                <Spin indicator={antIcon} /> 
                            </div>
                        </div> :
                  <Card style={{ width: "100%", marginBottom: '5px' }}>
                  <p>FILE NAME: {result.title} </p>
                  <p>SIZE: {result.size} </p>
                  <p>UPLOADER: {result.uploaded}  </p>
                  <p>LEECH: {result.leechers} </p>
                  <p>SEEDERS: {result.seeders} </p>
                  <p>LANGUAGE: {result.language} </p>
                  <p>DOWNLOADS: {result.downloads} </p>
                  <a href={result.download.magnet}><Button type="primary" danger icon={<DownloadOutlined />} size={"large"}>
                    click here to start Downloading
                  </Button></a>
                  </Card>}
                  <br/>
                  <Row dark isLargeRow title="you may also like" fetchUrl={requests.fetchComedyMovies} />
        </div>
    )
}

export default Download