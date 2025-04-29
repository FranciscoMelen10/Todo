import 'package:flutter/material.dart';

// ignore: camel_case_types
class Addinput extends StatefulWidget {
  final TextEditingController controllerInput;
  final VoidCallback addTodo;
  const Addinput({
    super.key,
    required this.controllerInput,
    required this.addTodo,
  });

  @override
  State<Addinput> createState() => AddinputState();
}

class AddinputState extends State<Addinput> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.primary,
        border: Border.all(color: Theme.of(context).colorScheme.secondary),
        borderRadius: BorderRadius.circular(8),
      ),
      padding: const EdgeInsets.only(left: 15),
      child: Row(
        children: [
          Expanded(
            child: TextField(
              controller: widget.controllerInput,
              decoration: InputDecoration(
                border: InputBorder.none,
                hintText: "Agrega una nueva tarea",
              ),
            ),
          ),
          Container(
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.secondary,
              borderRadius: BorderRadius.only(
                topRight: Radius.circular(7),
                bottomRight: Radius.circular(7),
              ),
            ),
            child: IconButton(
              onPressed: widget.addTodo,
              icon: Icon(
                Icons.add,
                color: Theme.of(context).colorScheme.primary,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
