import 'package:flutter/material.dart';
import 'package:todo/presentation/widgets/index.dart';
import 'package:todo/provider/todoProvider.dart';

class WidgetTodos extends StatelessWidget {
  const WidgetTodos({super.key, required this.todosProvider});

  final Todoprovider todosProvider;

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: ListView.builder(
        itemCount: todosProvider.todos.length,
        itemBuilder: (context, index) {
          return ItemTodo(todo: todosProvider.todos[index], todosProvider: todosProvider,);
        },
      ),
    );
  }
}
