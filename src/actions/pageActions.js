export function changePage(page){
	return function(dispatch){
		dispatch({type: 'FETCH_PAGE', payload: page.page})
	}
}