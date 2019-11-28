import React from 'react';
import {Button, Checkbox, Icon, Message, Segment} from 'semantic-ui-react';

export const LoadingMessage = () => (
  <Segment basic>
    <Message icon>
      <Icon name='circle notched' loading />
      <Message.Content>Loading...</Message.Content>
    </Message>
  </Segment>
);

export const ErrorMessage = ({error}) => (
  <Message negative>
    <Message.Header>Error Occurred</Message.Header>
    <p>{error}</p>
  </Message>
);

export const LastUpdated = ({lastUpdated, loading, onClick, autoRefresh = false}) => (
  <Segment floated="right">
    Last updated: {loading ? 'Loading...' : lastUpdated}&nbsp;&nbsp;
    {!autoRefresh && 
      <Button
        primary
        floated="right"
        compact
        size="mini"
        loading={loading}
        onClick={onClick}
      >
        <Icon name='refresh' />&nbsp;{loading ? 'Loading...' : 'Refresh'}
      </Button>
    }
  </Segment>
);

export const AutoRefreshToggle = ({checked, onChange}) =>
  <Checkbox 
    label="Auto refresh"
    size="mini"
    toggle 
    checked={checked} 
    onChange={onChange} 
  />;

export const Spacer = ({width = '10px'}) => <span style={{marginRight: width, display: 'inline-block'}}></span>;
