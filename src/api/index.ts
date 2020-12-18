import axios from 'axios';

import * as hobbies from './hobbies';
import * as posts from './posts';
import * as users from './users';

export const client = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const apiEndpoints = { hobbies, posts, users };

export default apiEndpoints;
