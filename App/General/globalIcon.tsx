import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { width } from './globalStyles';

/* Ionicons */
export const arrowRight = <Ionicons name='ios-arrow-round-forward' size={width(9)} color={'white'} />
export const iconBack = <Ionicons name='ios-arrow-back' size={width(7.5)} color={'white'} />
export const iconAdd = <Ionicons name='md-add' size={width(7)} color={'white'} />

/* EvilIcons */
export const mail = <EvilIcon name='envelope' size={width(13)} color={'#333'} />
export const unlock = <EvilIcon name='unlock' size={width(13)} color={'#333'} />
export const arrowRightCircle = <EvilIcon name='arrow-right' size={width(15)} color={'white'} />
export const iconFacebook = <EvilIcon name='sc-facebook' size={width(15)} color={'white'} />
