import React, {useState, useEffect} from 'react';
import {Segment, Table} from 'semantic-ui-react';
import useInterval from '../effects/useInterval';
import Change from './change';
import Icon from './icon';
import {AutoRefreshToggle, ErrorMessage, LoadingMessage, LastUpdated} from './messages';
import {formatDate, toGram} from '../util/format';

export default () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const getData = async () => {
    const URL = 'https://netliftest.netlify.com/.netlify/functions/spot?format=json';

    try {
      setLoading(true);
      let response = await fetch(URL);
      let json = await response.json();
      setError(null);
      setData(json);
    }
    catch(err) {
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useInterval(() => {autoRefresh && getData();}, 5, 'minutes');

  return (
    <div className="App">
      {loading && <LoadingMessage />}
      {error && <ErrorMessage error={error} />}
      {data !== null &&
        <Segment basic>
          <LastUpdated
            lastUpdated={formatDate(data.date)}
            loading={loading}
            onClick={getData}
            autoRefresh={autoRefresh}
          />
          <AutoRefreshToggle 
            checked={autoRefresh} 
            onChange={() => setAutoRefresh(!autoRefresh)} 
          />
          <Table celled stackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Metal</Table.HeaderCell>
                <Table.HeaderCell>Price (oz)</Table.HeaderCell>
                <Table.HeaderCell>Price (gram)</Table.HeaderCell>
                <Table.HeaderCell>Change</Table.HeaderCell>
                <Table.HeaderCell>Change %</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {
              Object.keys(data).filter(metal => metal !== 'date').map(metal => 
                <Table.Row key={metal}>
                  <Table.Cell><Icon metal={metal} />{data[metal].symbol}</Table.Cell>
                  <Table.Cell>${data[metal].spot}</Table.Cell>
                  <Table.Cell>${toGram(data[metal].spot)}</Table.Cell>
                  <Table.Cell><Change change={data[metal].change} prefix="$" /></Table.Cell>
                  <Table.Cell><Change change={data[metal].changePct} suffix="%" /></Table.Cell>
                </Table.Row>
              )
            }
            </Table.Body>
          </Table>  
        </Segment>
      }
    </div>
  );
}
