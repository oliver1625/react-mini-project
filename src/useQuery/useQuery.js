import { request, gql } from 'graphql-request'
import {
    useQuery,
} from "react-query";

import { LOAD_USERS } from '../GraphQL/Queries';

const endpoint = "https://graphqlzero.almansi.me/api";


function useUsers() {
    return useQuery("posts", async () => {
        const {users: { data },} = await request(
            endpoint,
            LOAD_USERS
        );
        return data;
    });
}

export default useUsers