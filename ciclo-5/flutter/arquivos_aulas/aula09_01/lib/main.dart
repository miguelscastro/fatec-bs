import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  MyApp({Key? key}) : super(key: key);
  final TextEditingController _controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primaryColor: Colors.blue),
      home: Scaffold(
        appBar: _titulo(),
        body: _body(),
      ),
    );
  }
  _titulo() {
    return AppBar(
      title: Text("Flutter – TextField"),
      centerTitle: true,
    );
  }
  _body() {
    return Container(
      width: double.infinity,
      color: Colors.white10,
      child: Column(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          _campo(),
          _botao(),
        ],
      ),
    );
  }
_campo() {
    return TextField(
      controller: _controller,
      keyboardType: TextInputType.text,
      decoration: InputDecoration(
          labelText: "Digite o seu nome",
          labelStyle: TextStyle(color: Colors.red)),
      textAlign: TextAlign.center,
      style: TextStyle(color: Colors.red, fontSize: 25.0),
    );
  }
  _botao() {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
      onPressed: metodoClicar,
      child: Text(
        "OK",
        style: TextStyle(
          color: Colors.white,
          fontSize: 20,
        ),
      ),
    );
  }

  metodoClicar() {
    // print("Clicou aqui");
    String texto = _controller.text;
    print("Texto inserido: $texto");

  }
}
