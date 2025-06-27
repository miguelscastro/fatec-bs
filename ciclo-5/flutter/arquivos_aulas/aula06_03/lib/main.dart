import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(primaryColor: Colors.blue),
        home: Scaffold(
          appBar: AppBar(
            title: Text("Meu Perfil"),
            backgroundColor: Colors.greenAccent,
            foregroundColor: Colors.blueGrey,
            centerTitle: true,
          ),
          body: Container(
            padding: EdgeInsets.all(16),
            color: Colors.white,
            child: ListView(
              children: [
                Text(
                  "Nome: Rubens Lara\n",
                  style: TextStyle(
                    fontSize: 18,
                    fontFamily: 'Roboto',
                    fontWeight: FontWeight.w400,
                    color: Colors.black,
                  ),
                ),
                Text(
                  "Formação:",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w400,
                  ),
                ),
                Text("- Graduação em Sistemas para Internet"),
                Text(" - Programador freelancer por 2 anos"),
                Text("\nAtividades e Projetos:",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w400,
                  ),
                ),
                Text(" - Desenvolvimento para Dispositivos Móveis I"),
                Text(" - Desenvolvimento para Dispositivos Móveis II"),
              ],
            ),
          ),
        ));
  }
}
