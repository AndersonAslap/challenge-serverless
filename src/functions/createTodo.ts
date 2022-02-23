import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";
import { v4 as uuidv4 } from "uuid";

interface IRequest {
    title: string;
    deadline: Date;
}

interface ITodo {
    id: string;
    user_id: string;
    title: string;
    done: boolean;
    deadline: Date;
}

export const handler: APIGatewayProxyHandler = async (event) => {
    
    const  { user_id } = event.pathParameters;
    const { title, deadline } = JSON.parse(event.body) as IRequest;

    const todo : ITodo = {
        id: uuidv4(),
        user_id,
        title,
        done: false,
        deadline
    }
    
    return {
        statusCode: 201,
        body: JSON.stringify({
            todo
        })
    }
}