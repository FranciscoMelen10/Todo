import 'package:flutter/material.dart';
import 'package:todo/config/theme.dart';

class ThemeProvider extends ChangeNotifier {
  ThemeData _themeData = lightMode;
  ThemeData get themeData => _themeData;

  set themeData(ThemeData themeData) {
    _themeData = themeData;
    notifyListeners();
  }

  void changeMode() {
    if (_themeData == lightMode) {
      themeData = darkMode;
    } else {
      themeData = lightMode;
    }
    notifyListeners();
  }
}
