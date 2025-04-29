import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo/presentation/screens/index.dart';
import 'package:todo/provider/todoProvider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => Todoprovider(),
      child: const MainApp(),
    ),
  );
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.light(primary: Colors.black),
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const Login(),
        '/home': (context) => const Home(),
      },
    );
  }
}
