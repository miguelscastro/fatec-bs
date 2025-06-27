import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primaryColor: Colors.red,
        ),
        home: Scaffold(
          appBar: AppBar(
            title: Text("App Hello"),
          ),
          body: Container(
            color: Colors.orange,
          ),
          drawer: Container(
            color: Colors.amber,
          ),
          floatingActionButton: FloatingActionButton(
            onPressed: () {},
          ),
        ));
  }
}
