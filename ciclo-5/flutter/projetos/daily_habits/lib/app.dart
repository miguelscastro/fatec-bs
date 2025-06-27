import 'package:daily_habits/pages/habits_list.dart';
import 'package:flutter/material.dart';

// Cauã de Carvalho, Cristhofer Chow, Miguel Castro

class HabitsApp extends StatelessWidget {
  const HabitsApp({super.key});

  @override
  Widget build(BuildContext context) {
    final colorScheme = ColorScheme.light(
      primary: Colors.indigo,
      onPrimary: Colors.white,
    );

    return MaterialApp(
      title: 'Hábitos Diários',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: colorScheme.primary,
        appBarTheme: AppBarTheme(
          color: colorScheme.primary,
          foregroundColor: colorScheme.onPrimary,
        ),
        checkboxTheme: CheckboxThemeData(
          fillColor: WidgetStateProperty.all(colorScheme.primary),
        ),
        sliderTheme: SliderThemeData(
          activeTrackColor: colorScheme.primary,
          thumbColor: colorScheme.primary,
          inactiveTrackColor: colorScheme.primary,
        ),
        switchTheme: SwitchThemeData(
          thumbColor: WidgetStateProperty.all(colorScheme.onPrimary),
          trackColor: WidgetStateProperty.all(colorScheme.primary),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            foregroundColor: colorScheme.onPrimary,
            backgroundColor: colorScheme.primary,
          ),
        ),
      ),
      home: const HabitsList(),
    );
  }
}
