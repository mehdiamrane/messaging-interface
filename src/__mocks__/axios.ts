import axios from 'axios';

const mockedAxios = jest.genMockFromModule<typeof axios>('axios');
mockedAxios.create = jest.fn(() => mockedAxios);

export default mockedAxios;
