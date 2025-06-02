// ignore_for_file: prefer_const_constructors
import 'package:flutter/material.dart';

void main() => runApp(MyProfile());

class MyProfile extends StatelessWidget {
  const MyProfile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primaryColor: Colors.green),
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
          child: Center(
            child: Text(
              "Olá! Sou Fatec Rubens Lara.\n\n"
              "Formação:\n"
              " - Graduação em Sistemas para Internet pela Fatec.\n"
              " - Trabalhei como programador freelancer por 2 anos.\n\n"
              "Atividades e Projetos:\n"
              " - Desenvolvimento para Dispositivos Móveis I.\n"
              " - Desenvolvimento para Dispositivos Móveis II.\n\n"
              "Estou sempre em busca de aprender mais e contribuir para o desenvolvimento de soluções inovadoras.\n",
              style: TextStyle(
                fontSize: 18,
                fontFamily: 'Roboto',
                fontWeight: FontWeight.w400,
                color: Colors.black,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
