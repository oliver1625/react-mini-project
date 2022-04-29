import { gql } from 'graphql-request'

export const LOAD_USERS = gql`
    query {
        users{
            data{
                id
                name
                username
                email
                address{
                    street
                }
                phone
                website
            }
        }
    }
`;