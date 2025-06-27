import 'package:daily_habits/habit.dart';
import 'package:flutter/material.dart';

// Cauã de Carvalho, Cristhofer Chow, Miguel Castro

class HabitDetails extends StatefulWidget {
  final Habit habit;

  const HabitDetails({super.key, required this.habit});

  @override
  _HabitDetailsState createState() => _HabitDetailsState();
}

class _HabitDetailsState extends State<HabitDetails> {
  late double frequency;
  late bool reminder;

  @override
  void initState() {
    super.initState();
    frequency = widget.habit.frequency;
    reminder = widget.habit.reminder;
  }

  void saveSettings() {
    setState(() {
      widget.habit.frequency = frequency;
      widget.habit.reminder = reminder;
    });

    ScaffoldMessenger.of(
      context,
    ).showSnackBar(const SnackBar(content: Text('Alterações salvas!')));
  }

  @override
  Widget build(BuildContext context) {
    final primaryColor = Theme.of(context).primaryColor;

    return Scaffold(
      appBar: AppBar(title: Text(widget.habit.name)),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              widget.habit.description,
              style: const TextStyle(fontSize: 16),
            ),
            const SizedBox(height: 20),
            Text('Frequência semanal: ${frequency.toInt()}x por semana'),
            Slider(
              value: frequency,
              min: 1,
              max: 7,
              divisions: 6,
              label: frequency.toInt().toString(),
              activeColor: primaryColor,
              onChanged: (value) {
                setState(() {
                  frequency = value;
                });
              },
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text('Ativar lembrete diário'),
                Switch(
                  value: reminder,
                  onChanged: (value) {
                    setState(() {
                      reminder = value;
                    });
                  },
                ),
              ],
            ),
            const SizedBox(height: 20),
            Center(
              child: ElevatedButton(
                onPressed: saveSettings,
                style: ElevatedButton.styleFrom(backgroundColor: primaryColor),
                child: const Text('Salvar Configurações'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
