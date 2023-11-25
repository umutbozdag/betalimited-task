import { gql } from "@/__generated__";
import client from "api/apolloClient";

const CREATE_SESSION_QUERY = gql(`
  query CreateSession {
    session {
      sessionId
    }
  }
`);
const createSessionService = async () => {
  const queryResponse = await client.query({
    query: CREATE_SESSION_QUERY,
  });

  return queryResponse.data.session?.sessionId;
};
export default createSessionService;
