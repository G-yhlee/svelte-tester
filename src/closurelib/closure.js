let stateUpdate = (newState) => {
    let userState = [
      {user_id: "id1" , channelId: "ch1" , date: "날짜"},
      {user_id: "id2" , channelId: "ch2" , date: "날짜"},
      {user_id: "id3" , channelId: "ch3" , date: "날짜"},
    ]
    return {
      getState: () => userState,
      updateState: userState = newState,
    }    
    // userState = newState
  }