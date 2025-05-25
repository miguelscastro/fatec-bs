import 'package:daily_habits/habit.dart';
import 'package:daily_habits/pages/habit_details.dart';
import 'package:flutter/material.dart';

// Cauã de Carvalho, Cristhofer Chow, Miguel Castro

class HabitsList extends StatefulWidget {
  const HabitsList({super.key});

  @override
  _HabitsListState createState() => _HabitsListState();
}

class _HabitsListState extends State<HabitsList> {
  final List<Habit> habits = [
    Habit(
      name: 'Água',
      description: 'Beba ao menos 8 copos de água.',
      icon: Icons.water_drop_outlined,
    ),
    Habit(
      name: 'Ler',
      description:
          'Leia algo de seu interesse por pelo menos 15 minutos ao dia.',
      icon: Icons.bookmark_outlined,
    ),
    Habit(
      name: 'Exercício',
      description: 'Faça uma caminhada de 30 minutos.',
      icon: Icons.directions_walk_outlined,
    ),
    Habit(
      name: 'Estudar',
      description: 'Aprenda algo novo.',
      icon: Icons.school_outlined,
    ),
    Habit(
      name: 'Meditar',
      description: 'Medite por 10 minutos (ou tire esse tempo para descansar).',
      icon: Icons.self_improvement_outlined,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    final primaryColor = Theme.of(context).primaryColor;

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Hábitos Diários (Cauã de Carvalho, Cristhofer Chow, Miguel Castro)',
        ),
      ),
      body: ListView.builder(
        itemCount: habits.length,
        itemBuilder: (context, index) {
          final habit = habits[index];
          return Card(
            margin: const EdgeInsets.all(8),
            child: ListTile(
              leading: Icon(habit.icon, size: 32, color: primaryColor),
              title: Text(habit.name),
              trailing: Checkbox(
                value: habit.isCompleted,
                onChanged: (value) {
                  setState(() {
                    habit.isCompleted = value!;
                  });
                },
              ),
              onTap: () async {
                await Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => HabitDetails(habit: habit)),
                );
                setState(() {});
              },
            ),
          );
        },
      ),
    );
  }
}
