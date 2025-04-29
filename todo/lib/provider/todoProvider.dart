import 'package:flutter/material.dart';
import 'package:todo/model/todo.dart';

class Todoprovider extends ChangeNotifier {
  final List<Todo> _todos = [
    Todo(id: '1', tarea: "Aprender Flutter", completed: true),
    Todo(id: '2', tarea: "Arreglar mi cuarto", completed: false),
    Todo(id: '3', tarea: "Completar al 100% Zelda", completed: false),
  ];

  List<Todo> get todos => _todos;

  void addTodo(String newTodo) {
    _todos.add(
      Todo(id: '${_todos.length}$newTodo', tarea: newTodo, completed: false),
    );
    notifyListeners();
  }

  void changeCompletedTodo(String id) {
    final indexTodo = _todos.indexWhere((todo) => todo.id == id);

    if (indexTodo != -1) {
      _todos[indexTodo] = Todo(
        id: _todos[indexTodo].id,
        tarea: _todos[indexTodo].tarea,
        completed: !_todos[indexTodo].completed,
      );
    }
    notifyListeners();
  }

  void eliminateTodo(String id) {
    _todos.removeWhere((todo) => todo.id == id);
    notifyListeners();
  }

  void editTodo(Todo oldTodo, String newTodo) {
    final indexTodo = _todos.indexWhere((todo) => todo.id == oldTodo.id);

    if (indexTodo != -1) {
      _todos[indexTodo] = Todo(
        id: oldTodo.id,
        tarea: newTodo,
        completed: oldTodo.completed,
      );
    }
    notifyListeners();
  }
}
