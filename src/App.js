import React from 'react';
import { Container } from '@material-ui/core';
import Header from './components/todoHeader'
import Footer from './components/todoFooter'
import AddTodo from './containers/addTodo'
import VisibleTodoList from './containers/visibleTodoList'

import './App.scss';

function App() {
	return (
		<Container maxWidth="sm" id="main" className="App">
			<Header />
			<AddTodo />
			<VisibleTodoList />
			<Footer />
		</Container>
	);
}

export default App;
