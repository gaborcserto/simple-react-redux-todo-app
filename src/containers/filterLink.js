import Link from "../components/todoButton";
import withHooks from "../withHooks";
import {useTodosStore} from "../stores/todosStore";

const MapHooksToProps = props => {
	let {getFilter, setFilter} = useTodosStore();

	return {
		active: props.filter === getFilter(),
		onClick: () => setFilter(props.filter),
		...props
	};
};

export default withHooks(MapHooksToProps)(Link);
