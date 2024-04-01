
export const routeHandler = (role) => {
	if (role === 'user'){
		return 'account'
	} else if(role === 'viewer') {
		return 'homepage'
	}
}
export const routeDetection = () => {
	const role = localStorage.getItem('role');
	if(role) {
		return `/${role}/${routeHandler(role)}`;
	} else {
		return '/viewer/homepage';
	}
}