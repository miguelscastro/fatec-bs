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
      child: ListView(
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
      "/images/$nomeFoto",
      height: 400,
      width: 450,
      fit: BoxFit.fill,
      // fit: BoxFit.contain,
      // fit: BoxFit.cover,
    );
  }
}
