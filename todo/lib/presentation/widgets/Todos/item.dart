import 'package:flutter/material.dart';
import 'package:todo/model/todo.dart';
import 'package:todo/presentation/widgets/index.dart';
import 'package:todo/provider/todoProvider.dart';

class ItemTodo extends StatelessWidget {
  final Todo todo;
  final Todoprovider todosProvider;

  void completedTodoList(String id, BuildContext context) {
    todosProvider.changeCompletedTodo(id);
  }

  const ItemTodo({super.key, required this.todo, required this.todosProvider});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 10),
      padding: const EdgeInsets.all(6),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.black),
        borderRadius: BorderRadius.circular(10),
      ),
      child: Row(
        children: [
          Checkbox(
            value: todo.completed,
            onChanged: (_) => completedTodoList(todo.id, context),
          ),
          Expanded(
            child: Text(
              todo.tarea,
              style: TextStyle(
                color: Colors.black,
                fontSize: 18,
                decoration:
                    todo.completed
                        ? TextDecoration.lineThrough
                        : TextDecoration.none,
              ),
            ),
          ),
          Row(
            children: [
              IconButton(
                onPressed: () => toastEditTodo(context, todo, todosProvider),
                icon: Icon(Icons.edit),
              ),
              IconButton(
                onPressed: () {
                  todosProvider.eliminateTodo(todo.id);
                },
                icon: Icon(Icons.delete),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
