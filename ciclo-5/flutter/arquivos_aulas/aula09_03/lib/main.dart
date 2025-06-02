import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: CalculadoraPage(),
    );
  }
}

abstract class Calculo {
  double calcular(double valor1, double valor2);
}

class Adicao extends Calculo {
  @override
  double calcular(double valor1, double valor2) => valor1 + valor2;
}

class Subtracao extends Calculo {
  @override
  double calcular(double valor1, double valor2) => valor1 - valor2;
}

class Multiplicacao extends Calculo {
  @override
  double calcular(double valor1, double valor2) => valor1 * valor2;
}

class Divisao extends Calculo {
  @override
  double calcular(double valor1, double valor2) => valor2 != 0 ? valor1 / valor2 : double.nan;
}

class CalculadoraPage extends StatefulWidget {
  const CalculadoraPage({Key? key}) : super(key: key);

  @override
  _CalculadoraPageState createState() => _CalculadoraPageState();
}

class _CalculadoraPageState extends State<CalculadoraPage> {
  final TextEditingController valor1Controller = TextEditingController();
  final TextEditingController valor2Controller = TextEditingController();
  String resultado = "Resultado aparecerá aqui";

  void _calcularOperacao(Calculo operacao) {
    double? valor1 = double.tryParse(valor1Controller.text);
    double? valor2 = double.tryParse(valor2Controller.text);

    if (valor1 == null || valor2 == null) {
      setState(() {
        resultado = "Por favor, insira números válidos";
      });
      return;
    }

    double res = operacao.calcular(valor1, valor2);
    setState(() {
      resultado = "Resultado: ${res.isNaN ? "Erro (divisão por zero)" : res.toStringAsFixed(2)}";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Calculadora Simples"),
        centerTitle: true,
        backgroundColor: Colors.blue,
      ),
      body: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _campoTexto("Digite o primeiro valor", valor1Controller),
            SizedBox(height: 10),
            _campoTexto("Digite o segundo valor", valor2Controller),
            SizedBox(height: 20),
            _botoesOperacoes(),
            SizedBox(height: 20),
            Text(
              resultado,
              style: TextStyle(fontSize: 24, color: Colors.black),
            ),
          ],
        ),
      ),
    );
  }

  Widget _campoTexto(String label, TextEditingController controller) {
    return TextField(
      controller: controller,
      keyboardType: TextInputType.numberWithOptions(decimal: true),
      decoration: InputDecoration(
        labelText: label,
        border: OutlineInputBorder(),
      ),
    );
  }

  Widget _botoesOperacoes() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        _botao("+", Adicao()),
        _botao("-", Subtracao()),
        _botao("×", Multiplicacao()),
        _botao("÷", Divisao()),
      ],
    );
  }

  Widget _botao(String simbolo, Calculo operacao) {
    return ElevatedButton(
      onPressed: () => _calcularOperacao(operacao),
      child: Text(simbolo, style: TextStyle(fontSize: 24)),
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
      ),
    );
  }
}
