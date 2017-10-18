import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {albums: []};

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums() {
        // we add key for iterated items for performance purpose
        // so react knows which item is updating
        // only requirement is each key should be unique
        // don't use item's index as in each iteration the id may vary
        return this.state.albums.map(album =>
            <Text key={album.title}>{album.title}</Text>
        );
    }

    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;