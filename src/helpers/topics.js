import { topic } from '../data';

export const getTopicIds = () => topic.allIds;

export const getTopic = (id) => topic.byId[id];


