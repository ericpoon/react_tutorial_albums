import React from 'react';
import {View, Text} from 'react-native';
import Card from './Card';

// every time add a new component,
// consider it's functional component (static) or class component (dynamic)

const AlbumDetail = (props) => (
    <Card>
        <Text>{props.album.title}</Text>
    </Card>
);

export default AlbumDetail;