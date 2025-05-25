import 'package:flutter/material.dart';

// Cauã de Carvalho, Cristhofer Chow, Miguel Castro

class Habit {
  final String name;
  final String description;
  final IconData icon;
  bool isCompleted;
  double frequency;
  bool reminder;

  Habit({
    required this.name,
    required this.description,
    required this.icon,
    this.isCompleted = false,
    this.frequency = 3,
    this.reminder = false,
  });
}
