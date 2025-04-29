import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo/presentation/screens/index.dart';
import 'package:todo/provider/themeProvider.dart';
import 'package:todo/provider/todoProvider.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => Todoprovider()),
        ChangeNotifierProvider(create: (context) => ThemeProvider()),
      ],
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
      theme: Provider.of<ThemeProvider>(context).themeData,
      initialRoute: '/',
      routes: {
        '/': (context) => const Login(),
        '/home': (context) => const Home(),
      },
    );
  }
}
