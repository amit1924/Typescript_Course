import axios, { AxiosResponse, isAxiosError } from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const res: AxiosResponse<Todo[]> = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res.data);
    } catch (e: any) {
        console.log(`Error ${e.message}`);

        if (isAxiosError(e)) { 
            console.error(`Axios Error: ${e.message}`);

            if (e.response) {
                console.log(`Status: ${e.response.status}`);
                console.log(`Data: ${e.response.data}`);
            }
        }else{
            console.error(`Error: ${e.message}`);
        }
    }
}

fetchData() 
