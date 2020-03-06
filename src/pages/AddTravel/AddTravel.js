import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import moment from 'moment';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import { styles } from './AddTravel.style';

import { BottomButton } from '../../components/Buttons/Buttons';
import Padding from '../../components/Padding/Padding';
import CustomInput from '../../components/CustomInput/CustomInput';
import PageContainer from '../../components/PageContainer/PageContainer';

export default AddTravel = () => {
    const [travel, onChangeTravel] = React.useState({
        name: '',
        time: moment(),
        place: '',
        description: '',
    });

    const onChangeText = (name, value) => {
        onChangeTravel({
            ...travel,
            [name]: value
        })
    }

    return (
        <PageContainer>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.scrollViewContainer} >
                    <ScrollView style={styles.content} showsHorizontalScrollIndicator={false}>
                        <Padding vertical={20} />
                        <CustomInput
                            onChangeText={onChangeText}
                            value={travel.name}
                            name='name'
                            placeholder='Name'
                        />
                        <Padding vertical={20} />
                        <Text>{moment(travel.time).format("MMM Do YY")}</Text>
                        <Padding vertical={20} />
                        <CustomInput
                            onChangeText={onChangeText}
                            value={travel.place}
                            name='place'
                            placeholder='Place'
                        />
                        <Padding vertical={20} />
                        <View style={styles.imagePlaceholder}>
                            <TouchableOpacity onPress={() => console.log('on press')}>
                                <Entypo name="camera" size={70} color="white" />
                            </TouchableOpacity>
                        </View>

                        <Padding vertical={20} />
                        <CustomInput
                            onChangeText={onChangeText}
                            value={travel.description}
                            name='description'
                            placeholder='Description'
                        />
                    </ScrollView>
                </View>
                <BottomButton onPress={() => console.log('on press')}>Save</BottomButton>
            </KeyboardAvoidingView>
        </PageContainer>
    )
}