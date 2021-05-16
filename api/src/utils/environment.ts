import config from '../config';

export const isDev = () => config.NODE_ENV === 'development';
export const isProduction = () => config.NODE_ENV === 'production';
export const isTest = () => config.NODE_ENV === 'test';

export const isNotDev = () => config.NODE_ENV !== 'development';
export const isNotProduction = () => config.NODE_ENV !== 'production';
export const isNotTest = () => config.NODE_ENV !== 'test';
