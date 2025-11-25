import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppTheme } from "../../hooks/useAppTheme";
import { styles } from "./styles";

interface HeaderProps {
  title: string;
  onBack?: () => void;
  showBack?: boolean; 
}

export function Header({ title, onBack, showBack = true }: HeaderProps) {
  const navigation = useNavigation();
  const { colors } = useAppTheme();
  const componentStyles = styles(colors);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const shouldShowBack = showBack && (onBack || navigation.canGoBack());

  return (
    <View style={componentStyles.headerContainer}>
      {shouldShowBack && (
        <TouchableOpacity
          onPress={handleBack}
          style={componentStyles.backButton}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          activeOpacity={0.7}
        >
          <Text style={componentStyles.backButtonText}>←</Text>
        </TouchableOpacity>
      )}

      <Text style={componentStyles.headerTitle} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}
