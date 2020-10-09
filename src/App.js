import React from 'react';
import { Container, Card, CardActions, CardContent } from '@material-ui/core';
import Header from './components/todoHeader'
import Footer from './components/todoFooter'
import AddTodo from './containers/addTodo'
import VisibleTodoList from './containers/visibleTodoList'

import './App.scss';

function App() {
	return (
		<Container maxWidth="sm" id="main" className="App">
			<Card className="todo-app">
				<CardContent>
					<Header />
					<AddTodo />
					<VisibleTodoList />
				</CardContent>
				<CardActions>
					<Footer />
				</CardActions>
			</Card>
		</Container>
	);
}

export default App;
