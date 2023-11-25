export interface ISessionState {
  sessionId: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: ISessionState = {
  sessionId: sessionStorage.getItem("Session-ID") || null,
  loading: false,
  error: null,
};

export default initialState;
