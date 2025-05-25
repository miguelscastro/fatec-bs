import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
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
  final TextEditingController _nomeController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();

  String? _generoSelecionado;
  String? _escolaridadeSelecionada;

  final List<String> listaGenero = ['Masculino', 'Feminino', 'Outro'];
  final List<String> listaEscolaridade = ['Ensino Fundamental', 'Ensino Médio', 'Ensino Superior'];

  String _result = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _titulo(),
      body: _corpo(),
    );
  }

  _titulo() {
    return AppBar(
      title: const Text('Formulário Simples com TextField e Dropdown'),
      centerTitle: true,
      backgroundColor: Colors.green,
    );
  }

  _corpo() {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          _campoNome(),
          _campoEmail(),
          _dropDownGenero(),
          _dropDownEscolaridade(),
          const SizedBox(height: 20),
          _botaoSubmit(),
          const SizedBox(height: 20),
          _textoResultado(),
        ],
      ),
    );
  }

  _campoNome() {
    return TextField(
      controller: _nomeController,
      decoration: const InputDecoration(labelText: 'Nome'),
    );
  }

  _campoEmail() {
    return TextField(
      controller: _emailController,
      decoration: const InputDecoration(labelText: 'E-mail'),
      keyboardType: TextInputType.emailAddress,
    );
  }

  _dropDownGenero() {
    return DropdownButton<String>(
      hint: const Text('Gênero'),
      value: _generoSelecionado,
      onChanged: (value) => setState(() => _generoSelecionado = value),
      items: listaGenero
          .map((genero) => DropdownMenuItem(value: genero, child: Text(genero)))
          .toList(),
    );
  }

  _dropDownEscolaridade() {
    return DropdownButton<String>(
      hint: const Text('Escolaridade'),
      value: _escolaridadeSelecionada,
      onChanged: (value) => setState(() => _escolaridadeSelecionada = value),
      items: listaEscolaridade
          .map((escolaridade) =>
              DropdownMenuItem(value: escolaridade, child: Text(escolaridade)))
          .toList(),
    );
  }

  _botaoSubmit() {
    return ElevatedButton(
      onPressed: _exibirValores,
      child: const Text('Enviar'),
    );
  }

  _textoResultado() {
    return Text(
      _result,
      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold)
    );
  }

  _exibirValores() {
    setState(() {
      _result =
          'Nome: ${_nomeController.text}\nE-mail: ${_emailController.text}\nGênero: $_generoSelecionado\nEscolaridade: $_escolaridadeSelecionada';
    });
  }
}
