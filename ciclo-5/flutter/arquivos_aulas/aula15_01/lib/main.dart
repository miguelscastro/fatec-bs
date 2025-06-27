import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Home(),
    );
  }
}

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String? countryInfo;
  TextEditingController countryController = TextEditingController();

  Future<void> fetchCountryInfo() async {
    String countryName = countryController.text.trim();
    if (countryName.isEmpty) return;

    final url = Uri.parse('https://restcountries.com/v3.1/name/$countryName');
    final response = await http.get(url);
    
    if (response.statusCode == 200) {
      final data = json.decode(response.body)[0];
      setState(() {
        countryInfo = 'País: ${data['name']['common']}\n'
            'Capital: ${data['capital'][0]}\n'
            'Região: ${data['region']}\n'
            'População: ${data['population']}';
      });
    } else {
      setState(() {
        countryInfo = 'Erro ao buscar dados';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Informações sobre o País'),
        centerTitle: true,
        backgroundColor: Colors.green,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            _countryInputField(),
            SizedBox(height: 20),
            _searchButton(),
            SizedBox(height: 20),
            _resultText(),
          ],
        ),
      ),
    );
  }

  Widget _countryInputField() {
    return TextField(
      controller: countryController,
      decoration: InputDecoration(
        labelText: 'Digite o nome do país',
        border: OutlineInputBorder(),
      ),
    );
  }

  Widget _searchButton() {
    return ElevatedButton(
      onPressed: fetchCountryInfo,
      child: Text('Buscar'),
    );
  }

  Widget _resultText() {
    return Text(
      countryInfo ?? '',
      style: TextStyle(
        color: Colors.blue,
        fontSize: 18,
      ),
      textAlign: TextAlign.center,
    );
  }
}
