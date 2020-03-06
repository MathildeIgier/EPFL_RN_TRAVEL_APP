import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Home.style';

import { BottomButton } from '../../components/Buttons/Buttons';
import TravelCardList from '../../components/TravelCard/TravelCardList';
import travels from '../../data/travels';
import PageContainer from '../../components/PageContainer/PageContainer';

export default Home = () => {
    return (
        <PageContainer>
            <View style={styles.content}>
                <TravelCardList travels={travels} onPress={() => console.log('on press')} />
            </View>
            <BottomButton onPress={() => console.log('on press')}>Add</BottomButton>
        </PageContainer>
    )
}