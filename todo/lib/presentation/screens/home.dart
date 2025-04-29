import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:provider/provider.dart';
import 'package:todo/presentation/widgets/index.dart';
import 'package:todo/provider/themeProvider.dart';
import 'package:todo/provider/todoProvider.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    final todosProvider = Provider.of<Todoprovider>(context);

    final TextEditingController controllerTask = TextEditingController();

    void addTodoList() {
      if (controllerTask.text.isEmpty) {
        customAlert(
          context,
          'Error al crear un nuevo Todo',
          'Este campo no puede quedar vacio, intente nuevamente.',
        );
        return;
      }
      todosProvider.addTodo(controllerTask.text);
      controllerTask.clear();
    }

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        leadingWidth: 100,
        toolbarHeight: 100,
        centerTitle: true,
        automaticallyImplyLeading: false,
        title: SvgPicture.asset(
          'assets/images/logo.svg',
          width: 80,
          height: 80,
          alignment: Alignment.center,
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            Addinput(controllerInput: controllerTask, addTodo: addTodoList),
            todosProvider.todos.isEmpty
                ? Column(
                  children: [
                    SizedBox(height: 20),
                    Text("No hay todos en este momento"),
                  ],
                )
                : WidgetTodos(todosProvider: todosProvider),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Provider.of<ThemeProvider>(context, listen: false).changeMode();
        },
        backgroundColor: Theme.of(context).colorScheme.secondary,
        child:
            Theme.of(context).colorScheme.primary == Colors.white
                ? Icon(Icons.dark_mode)
                : Icon(Icons.sunny),
      ),
    );
  }
}
