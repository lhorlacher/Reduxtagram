// a reducer takes in two things:

// 1. the action (an object with information about what happened)
// 2. Copy of current state

function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
		console.log('incrementing likes!')
		const i = action.index;
		return [
			...state.slice(0, i),
			{...state[i], likes: state[i].likes + 1},
			...state.slice(i + 1)
		]
			// return updated state
		default:
			return state;
	}
}

export default posts;