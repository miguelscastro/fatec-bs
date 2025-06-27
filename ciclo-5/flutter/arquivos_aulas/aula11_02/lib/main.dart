import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: _titulo(),
        backgroundColor: Colors.white,
        body: _corpo(),
      ),
    );
  }

  _titulo() {
    return AppBar(
      title: const Text("Imagens"),
      centerTitle: true,
      backgroundColor: Colors.green,
    );
  }

  _corpo() {
    return Container(
      // child: _fotoURL(),
      child: _fotoArquivo(),
    );
  }

  _fotoURL() {
    return Image.network(
      'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
      // 'https://picsum.photos/250?image=9',
      height: 500,
      width: 300,
    );
  }

  _fotoArquivo() {
    return Image.asset(
      "assets/images/gato_branco_1.jpg",
      height: 400,
      width: 450,
      fit: BoxFit.fill,
      // fit: BoxFit.contain,
      // fit: BoxFit.cover,
    );
  }
}
