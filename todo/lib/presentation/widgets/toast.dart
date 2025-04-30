import 'package:flutter/material.dart';
import 'package:todo/model/todo.dart';
import 'package:todo/provider/todo_provider.dart';

Future<void> toastEditTodo(
  BuildContext context,
  Todo oldTodo,
  Todoprovider todosProvider,
) {
  final TextEditingController newTodo = TextEditingController();

  return showDialog<void>(
    context: context,
    builder: (BuildContext context) {
      return AlertDialog(
        title: const Text('Editar Tarea'),
        content: TextField(
          controller: newTodo,
          decoration: InputDecoration(hintText: "Ingresa el nuevo Todo"),
        ),
        actions: <Widget>[
          TextButton(
            style: TextButton.styleFrom(
              textStyle: Theme.of(context).textTheme.labelLarge,
            ),
            child: Text(
              'Cancelar',
              style: TextStyle(color: Theme.of(context).colorScheme.secondary),
            ),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          TextButton(
            style: TextButton.styleFrom(
              textStyle: Theme.of(context).textTheme.labelLarge,
            ),
            child: Text(
              'Guardar',
              style: TextStyle(color: Theme.of(context).colorScheme.secondary),
            ),
            onPressed: () {
              if (newTodo.text.isEmpty) {
                customAlert(
                  context,
                  'Error al editar el Todo',
                  'Este campo no puede quedar vacio, intente nuevamente.',
                );
                return;
              }
              todosProvider.editTodo(oldTodo, newTodo.text);
              Navigator.of(context).pop();
            },
          ),
        ],
      );
    },
  );
}

Future<void> customAlert(BuildContext context, String title, String message) {
  return showDialog<void>(
    context: context,
    builder: (BuildContext context) {
      return AlertDialog(
        title: Text(title),
        content: Text(message),
        actions: <Widget>[
          TextButton(
            style: TextButton.styleFrom(
              textStyle: Theme.of(context).textTheme.labelLarge,
            ),
            child: Text(
              'Aceptar',
              style: TextStyle(color: Theme.of(context).colorScheme.secondary),
            ),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
        ],
      );
    },
  );
}
