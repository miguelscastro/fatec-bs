import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(home: Home());
  }
}

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String dropdownValor = '<<Selecione>>';

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
      title: const Text('Componente DropDownButton'),
      centerTitle: true,
      backgroundColor: Colors.green,
    );
  }

  _corpo() {
    return SingleChildScrollView(
      child: Container(
        color: Colors.white,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            _dropdown(),
            _texto(dropdownValor),
          ],
        ),
      ),
    );
  }

  _texto(String valor) {
    return Text(
      (valor == '<<Selecione>>') ? ' ' : valor,
      style: TextStyle(
        color: Colors.blue,
        fontSize: 30,
        fontWeight: FontWeight.bold,
      ),
    );
  }

  _dropdown() {
    return DropdownButton<String>(
      value: dropdownValor,
      items: <String>['<<Selecione>>','Calabresa','Muçarela','Portuguesa','Frango']
      .map((String valor) {
        return DropdownMenuItem<String>(
          value: valor,
          child: Text(valor),
        );
      }).toList(),
      onChanged: (String? valorSelecionado) {
        setState(() {
          dropdownValor = valorSelecionado!;
        });
      },
    );
  }

  _dropdownEstilizado() {
    return DropdownButton<String>(
      value: dropdownValor,
      icon: const Icon(Icons.arrow_drop_down_circle),
      iconSize: 24,
      elevation: 16,
      style: const TextStyle(color: Colors.blueGrey),
      underline: Container(
        height: 2,
        color: Colors.blueGrey,
      ),
      onChanged: (String? newValue) {
        setState(() {
          dropdownValor = newValue!;
        });
      },
      items: <String>['<<Selecione>>', 'Calabresa', 'Muçarela', 'Portuguesa','Frango']
      .map<DropdownMenuItem<String>>((String valor) {
        return DropdownMenuItem<String>(
          value: valor,
          child: Text(valor),
        );
      }).toList(),
    );
  }
}
