class Todo {
  final String id;
  final String tarea;
  final bool completed;

  Todo({required this.id, required this.tarea, required this.completed});

  @override
  String toString() {
    return 'tarea: $tarea, completed: $completed';
  }
}
