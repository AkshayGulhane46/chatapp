import {
    createContext,
    useContext,
    useReducer,
  } from "react";
  import { AuthContext } from "./AuthContext";
  
  export const ChatContext = createContext();
  
  // chat context provider to send the data in CHAT DB
  export const ChatContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext); // to use in line 23
    const INITIAL_STATE = { // to use reducer use initial state
      chatId: "null",
      user: {},
    };
  
    const chatReducer = (state, action) => { // use reducer hook 
      switch (action.type) {
        case "CHANGE_USER":
          return {
            user: action.payload,
            chatId:
              currentUser.uid > action.payload.uid
                ? currentUser.uid + action.payload.uid
                : action.payload.uid + currentUser.uid,
          };
  
        default: // there should be a default in switch 
          return state;
      }
    };
  
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
    // use reducer is used when we need to 
  
    return (
      <ChatContext.Provider value={{ data:state, dispatch }}>
        {children}
      </ChatContext.Provider>
    );
  };