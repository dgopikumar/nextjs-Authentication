import { MongoClient  } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://dbuser:coKe5vIiJDJ0B5Oj@cluster0.whqft.mongodb.net/?retryWrites=true&w=majority');
    return client;
}