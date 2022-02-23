import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";

interface ITodo {
    id: string;
    user_id: string;
    title: string;
    done: boolean;
    deadline: Date;
}

export const handler: APIGatewayProxyHandler = async (event) => {
    
    const  { user_id } = event.pathParameters;

    const response = await document.query({
        TableName: "todos",
        KeyConditionExpression: "user_id = :id",
        ExpressionAttributeValues: {
            ":id": user_id,
        }
    }).promise();

    let todos = response.Items;

    return {
        statusCode: 200,
        body: JSON.stringify({
            todos
        })
    }
}