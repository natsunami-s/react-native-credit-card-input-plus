import { Dimensions } from 'react-native';

export const removeNonNumber = (string = "") => string.replace(/[^\d]/g, "");
export const removeLeadingSpaces = (string = "") => string.replace(/^\s+/g, "");

export const { height, width } = Dimensions.get('screen');

export const scale = (designWidth = 0) => designWidth * (width / 375);
