import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

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
      title: const Text("Imagens com PageView e Margin"),
      centerTitle: true,
      backgroundColor: Colors.green,
    );
  }

  _corpo() {
    return Container(
      color: Colors.white,
      padding: const EdgeInsets.all(8.0),
      child: Container(
        color: Colors.yellow, // essa linha é apenas para tornar visível onde está o padding
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            _texto(),
            _carrosel(),
            _texto(),
          ],
        ),
      ),
    );
  }

  _carrosel() {
    return Container(
      //margin: EdgeInsets.all(5),
      //margin: EdgeInsets.all(20),
      margin: const EdgeInsets.only(top: 20, right: 20),
      height: 300,
      child: PageView(
        children: <Widget>[
          _foto('gato_branco_0.jpg'),
          _foto('gato_branco_1.jpg'),
          _foto('gato_branco_2.jpg'),
          _foto('gato_branco_3.jpg'),
        ],
      ),
    );
  }

  _foto(String nomeFoto) {
    return Image.asset(
      "assets/images/$nomeFoto",
      height: 300,
      width: 300,
      //fit: BoxFit.fill,
      //fit: BoxFit.contain,
      fit: BoxFit.cover,
    );
  }

  _texto() {
    return Text(
      "Texto Aqui",
      style: const TextStyle(
          color: Colors.blue,
          fontSize: 30,
          fontWeight: FontWeight.bold,
          decorationStyle: TextDecorationStyle.wavy),
    );
  }
}
